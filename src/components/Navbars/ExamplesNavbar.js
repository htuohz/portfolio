/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates strings
import classnames from 'classnames';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from 'reactstrap';

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  const scrollToAnchor = (name) => {
    if (name) {
      const anchorElement = document.getElementById(name);
      if (anchorElement) {
        anchorElement.scrollIntoView({
          block: 'end',
          behavior: 'smooth',
          inline: 'nearest',
        });
      }
    }
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Portfolio of Tianhao Zhou
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                to=""
                tag={Link}
                onClick={() => scrollToAnchor('experience')}
              >
                <i className="nc-icon nc-layout-11" /> Experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} onClick={() => scrollToAnchor('projects')}>
                <i className="nc-icon nc-book-bookmark" /> Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/TianhaoZhouDev"
                target="_blank"
                title="Follow me on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Contact me on FaceBook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="mailto:htuohz@gmail.com"
                target="_blank"
                title="Email me"
              >
                <i className="fa fa-envelope-square" />
                <p className="d-lg-none">Email</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/tianhao-zhou-5853a277/"
                target="_blank"
                title="Connect on LinkedIn"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <Button
                className="btn-round"
                color="danger"
                target="_blank"
              >
                <i className="nc-icon nc-alert-circle-i"></i> Get In Touch
              </Button>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
