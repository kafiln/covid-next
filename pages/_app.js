import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../src/assets/main.css';
import { Layout } from '../src/components/layout';
import { AppContext, AppReducer, initialState } from '../src/context';
import { initState } from '../src/context/actions';
import { DARK } from '../src/context/types';
import { I18nProvider } from '../src/i18n';
import { dark, GlobalStyles, light } from '../src/theme';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  state = { ...initialState };
  dispatch = (action) => this.setState(AppReducer(this.state, action));

  componentDidMount() {
    initState(this.dispatch);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          dispatch: this.dispatch,
        }}
      >
        <ThemeProvider theme={this.state.theme === DARK ? dark : light}>
          <GlobalStyles />
          <I18nProvider locale={this.state.lang}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </I18nProvider>
        </ThemeProvider>
      </AppContext.Provider>
    );
  }
}
