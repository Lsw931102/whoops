import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Layout, Container } from '../components/common';
import SEO from '../components/common/SEO';
import Header from '../components/theme/Header';

const IndexPage = () => {
  return (
    <Layout>
      <Bodys>
        <SEO title="welcome" />
        <Header />
        <Content>
        <Welcome as={Container}>
          <FormattedMessage id="welcome" />
        </Welcome>
        <SubTitles as={Container}>
          <FormattedMessage id="sub_title" />
        </SubTitles>
        <DownLoads as={Container}>
          <img src={require('../images/appStore.png')} />
          <img src={`googlePay.png`} />
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
        <Footer>
          <p>
            <FormattedMessage id="footerText" />
            <LinkTo as={Link} to="/agreement">
              <FormattedMessage id="userAgreement" />
            </LinkTo>
            <FormattedMessage id="and" />
            <LinkTo as={Link} to="/privacy">
              <FormattedMessage id="privacy" />
            </LinkTo>
            <FormattedMessage id="stop" />
          </p>
        </Footer>
        </Content>
      </Bodys>
    </Layout>
  );
};

// 整体背景
const Bodys = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a1314 url('bg.png') top center;
  background-size: cover;

  @media (max-width: 960px) {
    /* padding: 0 20px; */
  }
`;
const Content = styled.div`
  @media (max-width: 960px) {
    padding: 0 20px;
  }
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

  @media (max-width: 960px) {
    font-size: 30px;
    line-height: 30px;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 10px;
  }

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

  @media (max-width: 960px) {
    font-size: 17px;
    line-height: 17px;
    text-align: left;
    margin-bottom: 50px;
  }
`;
// 下载按钮
const DownLoads = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 160px;

  @media (max-width: 960px) {
    flex-direction: column;
    margin-bottom: 50px;
  }

  img {
    width: 200px;
    height: 58px;
    margin-right: 10px;

    @media (max-width: 960px) {
      width: 166px;
      height: 48px;
      margin-right: 0;

      &:first-child {
        margin-bottom: 10px;
      }
    }
  }
`;
// 特色
const Characteristics = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    width: auto;
  }
`;
const CharacteristicItem = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  @media (max-width: 960px) {
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 14px;
  }
`;
const Imgs = styled.div`
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 40px;
  @media (max-width: 960px) {
    width: 60px;
    height: 60px;
    margin: 0 10px 10px 0;
  }
`;
const Pink = styled(CharacteristicItem)`
  border: 1px solid #b661f2;
  img {
    display: block;
    width: 51px;
    height: 60px;
    margin: 0 auto;

    @media (max-width: 960px) {
      width: 31px;
      height: 36px;
    }
  }
`;
const Green = styled(CharacteristicItem)`
  border: 1px solid #61f2be;
  img {
    display: block;
    width: 48px;
    height: 64px;
    margin: 0 auto;

    @media (max-width: 960px) {
      width: 29px;
      height: 38px;
    }
  }
`;
const Orange = styled(CharacteristicItem)`
  border: 1px solid #f27961;
  img {
    display: block;
    width: 64px;
    height: 43px;
    margin: 0 auto;

    @media (max-width: 960px) {
      width: 38px;
      height: 26px;
    }
  }
`;

// 底部
const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  line-height: 15px;
  width: 100%;

  @media (max-width: 960px) {
    position: initial;
    width: 210px;
    padding: 165px 0 15px 0;
  }

  p {
    width: 100%;
    text-align: center;

    @media (max-width: 960px) {
      text-align: left;
    }
  }
`;

const LinkTo = styled.div`
  color: rgba(255, 255, 255, 0.8);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  text-decoration: underline;
  cursor: pointer;
`;

export default IndexPage;
