import React from 'react'
import App, { Container } from 'next/app'
import configureStore from '../config/store';
import { Provider } from "react-redux";
import Header from "../components/molecules/common/header";
import Footer from "../components/molecules/common/footer";

const store = configureStore();

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Container>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </Provider>
    )
  }
}