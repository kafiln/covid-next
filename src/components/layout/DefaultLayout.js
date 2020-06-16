import Head from 'next/head';
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { AppContext } from '../../context';
import { KEYS } from '../../i18n';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

const Wrapper = styled.div``;

function DefaultLayout({ children }) {
  const { lang } = useContext(AppContext);
  return (
    <Wrapper
      lang={lang}
      className="container mx-auto py-1 px-6 flex flex-col min-h-screen"
    >
      <FormattedMessage id={KEYS.WEBSITE_TITLE}>
        {(title) => (
          <Head>
            <title>{title}</title>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
          </Head>
        )}
      </FormattedMessage>
      <Header></Header>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}

export default DefaultLayout;
