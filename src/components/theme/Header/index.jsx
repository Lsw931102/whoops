import React from 'react'
import { Link } from 'gatsby'
import { Context, Container } from '../../common'
import SelectLanguage from './SelectLanguage'
import { Navbar, Links, StyledHeader, Logo } from './styles'

const Header = () => (
	<Context.Consumer>
		{({ toggleLanguage, lang }) => (
			<StyledHeader>
				<Navbar as={Container}>
					<Logo as={Link} to="/">
						<img src={require('../../../images/logo.png')} />
					</Logo>
					<Links>
						<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
					</Links>
				</Navbar>
			</StyledHeader>
		)}
	</Context.Consumer>
)

export default Header
