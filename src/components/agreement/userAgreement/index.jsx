import React from 'react';
import styled from 'styled-components';

const UserAgreement = () => (
  <AgreementBox>
    <TitleBox>
      <p>用户协议</p>
      <img src={require('../../../images/close.png')} />
    </TitleBox>
  </AgreementBox>
);

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
  }
`;

export default UserAgreement;
