*Status: design*

next:
- create a exported server
- turn into a package

```
const { html } = ssrRender(<App />)
res.send(html)
```

- ssrRender
- ssrConfigApolloClient(client)
- useSsrFetch


# Shiprender - React SSR server

Shiprender is a initial express webserver configuration and modules that help React applications take advantage of server side render without extra effort as you define your data dependencies on server side.

Shiprender map all requests made by the app and wait this data be resolved before render and hidrate your app.

Application dependencies, pretty much what create-react-app start for your:

- React
- React-Dom
- React-Router-Dom

Server dependencies:

- express
- React
- React-Dom
- React-Router-Dom

The way that Shiprender know what is the requests that you want resolve before of render the app is using the Hooks `useSsrFetch`.


## useSsrFetch

When the Shiprender finds useSsrFetch method mark this fetch request to be resolved before of send your markup. Is the way that you define your data dependency. You also could define your useSsrFetch in a deep components and Shiprender will wait and resolve this requests.

After all data dependencies have been resolved the Shiprender will render all component with the appropriated data and hidrate your app.


```
const Comp = () => {
    const {data, loading, error} = useSsrFetch({url: 'http://...'});

    if (loading) return ...;

    ...
}

```
