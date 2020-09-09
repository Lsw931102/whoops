import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const UserAgreement = () => (
  <AgreementBox>
    <TitleBox>
      <p>
        <FormattedMessage id={'uaTitle'} />
      </p>
      <img src={require('../../../images/close.png')} />
    </TitleBox>
    <ContentBox>{retrunTexts()}</ContentBox>
  </AgreementBox>
);

const retrunTexts = () => {
  let lists = [];
  for (let i = 1; i < 137; i++) {
    lists.push(<FormattedMessage id={`ua${i}`} />);
  }
  return <Contents>{lists}</Contents>;
};

const AgreementBox = styled.div`
  width: 700px;
  height: 700px;
  background: #fff;
  margin: auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 28px;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  p {
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
  }
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: calc(700px - 112px);
  overflow-y: auto;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #292929;
  span {
    margin-bottom: 28px;
  }
`;

const TitleType = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default UserAgreement;
