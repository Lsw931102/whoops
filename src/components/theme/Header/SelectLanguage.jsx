import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { Select } from './styles';

const SelectLanguage = ({ selectLanguage, lang }) => (
  <Select value={lang} onChange={(e) => selectLanguage(e.target.value)}>
    <option value="en">English</option>
    <option value="zh">
      {/* <img src={require('../../../images/languageIcon.png')} /> */}
      中文
    </option>
  </Select>
);

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
