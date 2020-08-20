import React from 'react';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { addLocaleData, IntlProvider } from 'react-intl';
import localEng from '../../../../data/en.json';
import localZh from '../../../../data/zh.json';
import { Context } from '../Context';
import Provider from './Provider';
import { Global } from './styles';
import './layout.css';

addLocaleData([...en, ...zh]);

const messages = {
  en: localEng,
  zh: localZh,
};

const Layout = ({ children }) => (
  <Provider>
    <Context.Consumer>
      {({ lang }) => (
        <IntlProvider locale={lang} messages={messages[lang]}>
          <Global lang={lang}>{children}</Global>
        </IntlProvider>
      )}
    </Context.Consumer>
  </Provider>
);

export { Layout };
