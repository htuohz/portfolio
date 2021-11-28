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

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js';
import ProfilePageHeader from 'components/Headers/ProfilePageHeader.js';
import DemoFooter from 'components/Footers/DemoFooter.js';
import Projects from 'views/Projects/Projects';
import { Link } from 'react-router-dom';
import Experience from 'views/Experience/Experience';

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('landing-page');
    return function cleanup() {
      document.body.classList.remove('landing-page');
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require('assets/img/faces/psb.jpg').default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Tianhao Zhou <br />
              </h4>
              <h6 className="description">Web Developer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                An experienced web developer, Tianhao Zhou — dedicated in
                solving Real World problems. Got stuck with your website? Let me
                know!
              </p>
              <br />
              {/* <Button className="btn-round" color="default" outline>
                <i className="fa fa-inbox" /> Get In Touch
              </Button> */}
            </Col>
          </Row>

          <br />
          <div id="projects">
            <Projects />
          </div>
          <br />
          <div id="experience">
            <Experience />
          </div>
        </Container>
        \
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
