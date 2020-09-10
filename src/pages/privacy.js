import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Layout, Container } from '../components/common';
import SEO from '../components/common/SEO';
import Header from '../components/theme/Header';
import UserAgreement from '../components/agreement/userAgreement';

const Privacy = () => {
  return (
    <Layout>
      <Bodys>
        <SEO title="privacy" />
        <Header />
				<UserAgreement agreementType='privacy' />
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
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export default Privacy;
