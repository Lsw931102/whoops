import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const UserAgreement = ({ agreementType }) => {
  const retrunTexts = () => {
    let num = agreementType == 'ua' ? 137 : 163;
    let lists = [];
    for (let i = 1; i < num; i++) {
      lists.push(<FormattedMessage id={`${agreementType}${i}`} key={i} />);
    }
    return <Contents>{lists}</Contents>;
  };

  return (
    <AgreementBox>
      <TitleBox>
        <p>
          <FormattedMessage id={agreementType == 'ua' ? 'uaTitle' : 'privacyTitle'} />
        </p>
      </TitleBox>
      <ContentBox>{retrunTexts()}</ContentBox>
    </AgreementBox>
  );
};

const AgreementBox = styled.div`
  width: 700px;
  height: inherit;
  background: #fff;
  margin: auto;
  padding: 28px;
  box-sizing: border-box;

  @media (max-width: 960px) {
    width: 100%;
    padding: 20px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;

  @media (max-width: 960px) {
    margin-bottom: 30px;
  }

  p {
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;

    @media (max-width: 960px) {
      font-size: 30px;
      line-height: 30px;
    }
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
  @media (max-width: 960px) {
    height: auto;
    overflow-y: initial;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #e0e0e0;
  }
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
