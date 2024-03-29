import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home.js";
import Header from "./components/Header";
// import About from "./pages/About.js";
// import Footer from "./components/Footer";
// import Study from "./pages/study";
// import Cards from "./pages/cards";
// import Decks from "./pages/decks";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  // console.log("======= line 27 app.js ===headers has===", headers)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />/
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
