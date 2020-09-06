import React, {useState} from 'react';
import { compose, withStateHandlers } from 'recompose';
import {LangBox, Select, SelectPanel, SelectItem, TriImg, TriUp } from './styles';

const SelectLanguage = ({ selectLanguage, lang }) => {
  const [show, setShow] = useState(false)

  const changgLang = (val) => {
    selectLanguage(val)
    setShow(false)
  }

  return (
    <LangBox onClick={() => setShow(!show)}>
      <img src={require('../../../images/languageIcon.png')} alt=""/>
      <Select>{lang === 'en' ? 'English' : '简体中文'}</Select>
      {show ? <SelectPanel>
        <SelectItem onClick={() => changgLang('en')}>English</SelectItem>
        <SelectItem onClick={() => changgLang('zh')}>简体中文</SelectItem>
      </SelectPanel> : null}
      {show ? <TriUp src={require('../../../images/tri.png')} alt="" /> : <TriImg src={require('../../../images/tri.png')} alt=""/>}
    </LangBox>
  )
};

const enhance = compose(
  withStateHandlers((props) => ({ language: props.lang }), {
    selectLanguage: (values, { toggleLanguage }) => (value) => {
      toggleLanguage(value);
      return {
        language: value,
      };
    },
  })
);

export default enhance(SelectLanguage);
