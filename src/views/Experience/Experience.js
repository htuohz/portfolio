import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import './Experience.css';

const Experience = () => {
  const [tabStatus, setTabStatus] = useState([true, false, false]);
  return (
    <>
      <h1 className="title text-center">Experience</h1>
      <Card className="text-center">
        <CardHeader>
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    href="#"
                    active={tabStatus[0]}
                    onClick={() => setTabStatus([true, false, false])}
                  >
                    <Link to="/convose">Convose</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    active={tabStatus[1]}
                    onClick={() => setTabStatus([false, true, false])}
                  >
                    <Link to="/echotech">Tas EchoTech</Link>
                  </NavLink>
                </NavItem>
                <NavItem />
                <NavItem>
                  <NavLink
                    active={tabStatus[2]}
                    href="#"
                    onClick={() => setTabStatus([false, false, true])}
                  >
                    <Link to="/zj">ZJ Technology</Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        <Switch>
          <Route path="/convose">
            <CardBody className="cardBody">
              <CardTitle>Responsibilitis</CardTitle>
              <CardText>
                <ul>
                  <li>
                    Facebook Login function for React Native App is implemented
                    by ES6, redux, React Native Framework and Facebook auth API.
                  </li>
                  <li>
                    Video/Audio Call function is implemented in React.js with
                    Agora SDK.
                  </li>
                  <li>
                    Reset Password function for Web App is implemented by
                    React.js, redux and rest API from backend.
                  </li>
                </ul>
              </CardText>
              <CardTitle>Achievements</CardTitle>
              <CardText>
                <ul>
                  <li>
                    Increased the usability of the app by allowing users to
                    authenticate using their Facebook accounts.
                  </li>
                  <li>
                    The retention is increased because the video/audio call
                    function is added
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Route>
          <Route path="/echotech">
            <CardBody className="cardBody">
              <CardTitle>Responsibilitis</CardTitle>
              <CardText>
                <ul>
                  <li>
                    The front-end design of the web application is implemented
                    by Angular Framework and Bootstrap.
                  </li>
                  <li>
                    Ordering function on backend is implemented using asp .NET
                    and Entity Framework.
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Route>
          <Route path="/zj">
            <CardBody className="cardBody">
              <CardTitle>Responsibilitis</CardTitle>
              <CardText>
                <ul>
                  <li>
                    The web drive module allows users to upload, download and
                    delete their files. I used HTTP protocol, FTP protocol and
                    multithread programming to implement the web drive module.
                  </li>
                  <li>
                    The video conference is developed with Redis data structure
                    store, which allows users to communicate with each other in
                    real-time.
                  </li>
                  <li>
                    Socket programming and multithread programming are also used
                    in communication to increase the performance and robust.
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Route>
          <Route path="" exact>
            <CardBody className="cardBody">
              <CardTitle>Responsibilitis</CardTitle>
              <CardText>
                <ul>
                  <li>
                    Facebook Login function for React Native App is implemented
                    by ES6, redux, React Native Framework and Facebook auth API.
                  </li>
                  <li>
                    Video/Audio Call function is implemented in React.js with
                    Agora SDK.
                  </li>
                  <li>
                    Reset Password function for Web App is implemented by
                    React.js, redux and rest API from backend.
                  </li>
                </ul>
              </CardText>
              <CardTitle>Achievements</CardTitle>
              <CardText>
                <ul>
                  <li>
                    Increased the usability of the app by allowing users to
                    authenticate using their Facebook accounts.
                  </li>
                  <li>
                    The retention is increased because the video/audio call
                    function is added
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Route>
        </Switch>
      </Card>
    </>
  );
};

export default Experience;
