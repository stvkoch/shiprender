import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../src/App";

const PORT = process.env.PORT || 3006;
const app = express();

const handlerSsrRequests = (req, res) => {
  const context = {
    status: 200,
    fetch: {},
    get(key){
      if (this.fetch[key]) return this.fetch[key];
    },
    set(k, d) {
      this.fetch[k] = d;
    },
    poolFetches: [],
    resetPoolFetches(){
      this.poolFetches = [];
    }
  };

  function recusiveRenderApp() {
    return new Promise(async (resolve, reject) => {
      console.log("Rendering react app");
      let app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );

      if (context.poolFetches.length) {
        console.log(`Found fetches that should be resolve before: ${context.poolFetches.length}`);
        return Promise.all(context.poolFetches).then(()=>{
          context.poolFetches = [];
          return recusiveRenderApp();
        }).then(resolve).catch(reject)
      }
      console.log('Was resolved all fetches')
      resolve(app);
    });
  }


  recusiveRenderApp().catch(error => {
    res.status(500).send("Error on Promises " + JSON.stringify(error));
  }).then((app) => {
    const indexFile = path.resolve("./build/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }

      if (context.status) {
        res.status(context.status);
      }

      if (context.url) {
        return res.redirect(301, context.url);
      }

      const ssrFetchData = `<script>
    window.__ssrFetch__ = ${JSON.stringify(context.fetch)}
    </script>`;

      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div data-any id="root">${app}</div>${ssrFetchData}`
        )
      );
    });
  });
};

app.get("/", handlerSsrRequests);
app.use(express.static("./build"));
app.get("/*", handlerSsrRequests);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
