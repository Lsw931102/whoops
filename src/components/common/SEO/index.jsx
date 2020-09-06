import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import { Context } from '../Context'
import config from '../../../../data/config'
import configEn from '../../../../data/configEn'

const SEO = ({ location = '', title, intl: { formatMessage } }) => (
	<Context.Consumer>
		{({ lang }) => {
			const structuredDataOrganization = `{
				"@type": "Organization",
				"legalName": "${lang === 'en' ? configEn.legalName : config.legalName}",
				"url": "${config.url}",
				"logo": "${config.logo}",
				"foundingDate": "${config.foundingDate}",
				"founders": [{
					"@type": "Person",
					"name": "${lang === 'en' ? configEn.legalName : config.legalName}"
				}]
			}`
			return (
				<Helmet>
					<html lang={lang} />
					<meta name="google-site-verification" content={config.googleVerification} />
					<link rel="shortcut icon" href={config.favicon} />

					<meta name="robots" content="index, follow" />
					<meta name="description" content={lang === 'en' ? configEn.description : config.description} />
					<meta name="image" content={config.cover} />

					<meta property="og:url" content={`${config.url}${location}`} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={lang === 'en' ? configEn.title : config.title} />
					<meta property="og:description" content={lang === 'en' ? configEn.description : config.description} />
					<meta property="og:image" content={config.cover} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={lang === 'en' ? configEn.title : config.title} />
					<meta name="twitter:description" content={lang === 'en' ? configEn.description : config.description} />
					<meta name="twitter:image:src" content={config.cover} />
					<script type="application/ld+json">{structuredDataOrganization}</script>
					<title>
						{formatMessage({ id: title })}
					</title>
				</Helmet>
			)
		}}
	</Context.Consumer>
)

export default injectIntl(SEO)
