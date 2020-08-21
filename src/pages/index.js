import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Layout, Container } from '../components/common';
import SEO from '../components/common/SEO';
import Header from '../components/theme/Header';

const IndexPage = () => (
  <Layout>
    <Bodys>
      <SEO title="welcome" />
      <Header />
      <Welcome as={Container}>
        <FormattedMessage id="welcome" />
      </Welcome>
      <SubTitles as={Container}>
        <FormattedMessage id="sub_title" />
      </SubTitles>
      <DownLoads as={Container}>
        <img src={require('../images/appStore.png')} />
        <img src={require('../images/googlePay.png')} />
      </DownLoads>
      <Characteristics as={Container}>
        <CharacteristicItem>
          <Imgs as={Pink}>
            <img src={require('../images/security.png')} />
          </Imgs>
          <FormattedMessage id="security" />
        </CharacteristicItem>
        <CharacteristicItem>
          <Imgs as={Green}>
            <img src={require('../images/ids.png')} />
          </Imgs>
          <FormattedMessage id="ids" />
        </CharacteristicItem>
        <CharacteristicItem>
          <Imgs as={Orange}>
            <img src={require('../images/password.png')} />
          </Imgs>
          <FormattedMessage id="password" />
        </CharacteristicItem>
      </Characteristics>
    </Bodys>
  </Layout>
);

// 整体背景
const Bodys = styled.div`
  min-height: 100vh;
  background-color: #0a1314;
`;
// 欢迎文字
const Welcome = styled.div`
  text-align: center;
  margin-top: calc(220px - 68px);
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 60px;
  color: #ffffff;
  margin-bottom: 40px;
`;
// 小标题文字
const SubTitles = styled.div`
  text-align: center;
  color: #ffffff;
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 60px;
`;
// 下载按钮
const DownLoads = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 160px;
  img {
    width: 200px;
    height: 58px;
    margin-right: 10px;
  }
`;
// 特色
const Characteristics = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;
`;
const CharacteristicItem = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
`;
const Imgs = styled.div`
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-bottom: 40px;
`;
const Pink = styled(CharacteristicItem)`
  border: 1px solid #b661f2;
  img {
    display: block;
    width: 51px;
    height: 60px;
    margin: 0 auto;
  }
`;
const Green = styled(CharacteristicItem)`
  border: 1px solid #61f2be;
  img {
    display: block;
    width: 48px;
    height: 64px;
    margin: 0 auto;
  }
`;
const Orange = styled(CharacteristicItem)`
  border: 1px solid #f27961;
  img {
    display: block;
    width: 64px;
    height: 43px;
    margin: 0 auto;
  }
`;

export default IndexPage;
