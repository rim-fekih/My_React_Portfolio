import { Row, Col, Flex } from "./atoms/flexHandler/FlexHandler";
import { Container } from "./atoms/Container";
import { Title } from "./atoms/Title";
import { Image, StyledImg } from "./atoms/Image";
import { WrapColor, WrapWidth, WrapStyle } from "./atoms/Wrap";
import { SubTitle } from "./atoms/SubTitle";
import { Text } from "./atoms/Text";
import { Card } from "./atoms/Card";
import { Button } from "./atoms/Button";
import { Footer } from "./atoms/Footer";

import cvImage from "./assets/img/cvImage.jpg";

import sr from "./assets/img/sr.gif";
import { mainBlue, mainGris } from "./assets/js/color";
import cvPdf from "./assets/img/cvPdf.pdf";

//import Reveal from "react-reveal/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <>
      {/* box one */}

      <Row
        height="90vh"
        backgroundColor={mainGris}
        alignItems="center"
        id="firstBox"
      >
        <Container flex={true}>
          <Col size="50%">
            <div>
              <SubTitle size="20px">
                Hello 🙋‍♀️{" "}
                <WrapColor color={mainBlue}>
                  {" "}
                  I am a junior software engineering.
                </WrapColor>
              </SubTitle>
              <SubTitle size="3rem">RIM FEKIH</SubTitle>
              <Text width="90%" lineHeight="1.5">
                I am in my last year as a computer engineering student at{" "}
                <WrapStyle fontWeight="bolder" fontStyle="italic">
                  the "Private School of Engineering and Technology" TEK-UP.
                </WrapStyle>
                I am a beginner software developer who is always looking not
                only to find creative projects in various fields but also to
                gain additional experience outside of her studies. I believe it
                is an art to develop good software and that you have to be smart
                and creative to be a good one, a combination of these two
                qualities made it possible to create my profile.
              </Text>
              <div className="button__cv">
                <button className="button__cv">
                  <a href={cvPdf}>My CV</a>
                </button>
              </div>
            </div>
          </Col>

          <Col size="50%" alignItems="center">
            <StyledImg src={cvImage} hiddenMobile />
          </Col>
        </Container>
      </Row>

      {/* box two */}

      <Row
        minHeight="60vh"
        responsivePaddingBottom="2vh"
        backgroundColor={mainBlue}
        alignItems="center"
        id="about"
      >
        <Container flex={true}>
          <Col size="50%">
            <WrapWidth width="80%" hiddenMobile>
              <Title
                color="white"
                size="18px"
                fontWeight="400"
                textTransform="uppercase"
              >
                About me
              </Title>
              <SubTitle color="white" size="25px">
                Qualities ?
              </SubTitle>
              <Text color="white" lineHeight="1.5">
                I am working-in progress,flexibal multi tasker and kind person{" "}
              </Text>
            </WrapWidth>
          </Col>

          <Col size="50%" alignItems="center">
            <WrapWidth width="80%" hiddenMobile>
              <SubTitle color="white" size="25px">
                Why choose me ?
              </SubTitle>
              <Text color="white" lineHeight="1.5">
                I am available to carry out any project whether it is a mobile
                application or a classic website
              </Text>
            </WrapWidth>
          </Col>
        </Container>
      </Row>

      {/* box three */}

      <Row
        minHeight="90vh"
        backgroundColor={mainGris}
        alignItems="center"
        flexDirection="column"
        id="skills"
      >
        <Container
          flex={true}
          flexDirection="column"
          style={{ paddingBottom: "3%", textAlign: "center" }}
        >
          <Title size="18px" fontWeight="400" textTransform="uppercase">
            Skills
          </Title>
          <SubTitle size="25px">What am I able to do?</SubTitle>
        </Container>

        <Container flex={true}>
          <Col
            size="33%"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "3%" }}
          >
            <Card
              alignMobile
              paddingLeft="5%"
              minHeight={20}
              marginRight="10px"
              hiddenMobileMargin
              style={{ backgroundColor: mainBlue }}
            >
              <SubTitle size="25px" color="white">
                React.js
              </SubTitle>
              <Text size="15px" lineHeight="1.4" color="white">
                React (also called React.js or ReactJS) is a library Free
                JavaScript developed by Facebook since 2013. The goal Main of
                this library is to facilitate the creation single-page web
                application.
              </Text>
            </Card>
          </Col>
          <Col
            size="33%"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "3%" }}
          >
            <Card
              alignMobile
              minHeight={20}
              paddingLeft="5%"
              marginRight="10px"
              hiddenMobileMargin
              style={{
                boxShadow:
                  "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)",
              }}
            >
              <SubTitle size="25px">Spring Boot</SubTitle>
              <Text width="90%" size="15px" lineHeight="1.4">
                Spring Boot is an open source Java-based framework used to
                create a micro Service. It is developed by Pivotal Team and is
                used to build stand-alone and production ready spring
                applications
              </Text>
            </Card>
          </Col>
          <Col
            size="33%"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "3%" }}
          >
            <Card
              alignMobile
              minHeight={20}
              paddingLeft="5%"
              marginRight="10px"
              hiddenMobileMargin
              style={{
                boxShadow:
                  "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)",
              }}
            >
              <SubTitle size="25px">NodeJs</SubTitle>
              <Text width="90%" size="15px" lineHeight="1.4">
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on the V8 engine and executes
                JavaScript code outside a web browser.
              </Text>
            </Card>
          </Col>

          <Col
            size="33%"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "3%" }}
          >
            <Card
              alignMobile
              minHeight={20}
              paddingLeft="5%"
              marginRight="10px"
              hiddenMobileMargin
              style={{
                boxShadow:
                  "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)",
              }}
            >
              <SubTitle size="25px"> JavaScript </SubTitle>
              <Text width="90%" size="15px" lineHeight="1.4">
                JavaScript, often abbreviated as JS, is a programming language
                that conforms to the ECMAScript specification. JavaScript is
                high-level, often just-in-time compiled and multi-paradigm. It
                has dynamic typing, prototype-based object-orientation and
                first-class functions
              </Text>
            </Card>
          </Col>
          <Col
            size="33%"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "3%" }}
          >
            <Card
              alignMobile
              minHeight={20}
              paddingLeft="5%"
              marginRight="10px"
              hiddenMobileMargin
              style={{
                boxShadow:
                  "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)",
              }}
            >
              <SubTitle size="25px">Angular</SubTitle>
              <Text width="90%" size="15px" lineHeight="1.4">
                Angular (commonly referred to as "Angular 2+" or "Angular CLI")
                is a TypeScript-based free and open-source web application
                framework led by the Angular Team at Google and by a community
                of individuals and corporations
              </Text>
            </Card>
          </Col>
          <Col
            size="33%"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "3%" }}
          >
            <Card
              alignMobile
              minHeight={20}
              paddingLeft="5%"
              marginRight="10px"
              hiddenMobileMargin
              style={{
                boxShadow:
                  "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)",
              }}
            >
              {" "}
              <SubTitle size="25px">Ionic </SubTitle>
              <Text width="90%" size="15px" lineHeight="1.4">
                Ionic is a complete open-source SDK for hybrid mobile app
                development created by Max Lynch, Ben Sperry, and Adam Bradley
                of Drifty Co. in 2013. The original version was released in 2013
                and built on top of AngularJS and Apache Cordova.
              </Text>
            </Card>
          </Col>
        </Container>
      </Row>

      {/* box three */}

      <Row
        minHeight="60vh"
        responsivePaddingBottom="8%"
        backgroundColor={mainGris}
        alignItems="center"
        id="projects"
      >
        <Container flex={true}>
          <Col size="33.33%">
            <Title size="18px" fontWeight="400" textTransform="uppercase">
              My projects
            </Title>
            <SubTitle size="25px"> Some previous project : </SubTitle>
            <Text lineHeight="1.8">
              Here you can take a look about my internship project "JUNE 2 0 2 1
              - SEPT 2 0 2 1 " : <br />
              Mission: Design, development and deployment of a web application
              for pastries . <br />
              Technologies: Mern (mongoDb, express ,react js and node).
            </Text>
            <SubTitle size="15px"> Ps : </SubTitle>
            <p>
              I am able to realize any web application that it is an e-shop, a
              showcase site or an application more complex .
            </p>
          </Col>

          <Col size="66.66%">
            <WrapWidth width="90%" height="100%" hiddenMobile center>
              <Flex alignItems="center" height="100%">
                <Col size="50%" style={{ textAlign: "center" }}>
                  <Image
                    link="https://shaready.fr/home"
                    styled={{ src: sr, width: "90%" }}
                  ></Image>
                  <SubTitle size="20px" fontWeight="100">
                    Internship JUNE 2 0 2 1 - SEPT 2 0 2 1
                  </SubTitle>
                </Col>
              </Flex>
            </WrapWidth>
          </Col>
        </Container>
      </Row>

      {/* box four */}

      <Row
        minHeight="40vh"
        backgroundColor={mainBlue}
        alignItems="center"
        id="contact"
      >
        <Container flex={true} flexDirection="column">
          <Title
            size="18px"
            fontWeight="400"
            textTransform="uppercase"
            color="white"
            textAlign="center"
            style={{}}
          >
            Contact
          </Title>
          <div
            style={{
              borderTop: "1px solid white",
              width: "8%",
              textAlign: "center",
              paddingBottom: "5%",
              margin: "0 auto",
            }}
          ></div>

          <Flex justifyContent="space-around" columnMobile>
            <Flex flexDirection="column">
              <Button
                as="a"
                color="white"
                backgroundColor="#FF3939"
                height="80px"
                width="80px"
                alignItems="center"
                borderRadius="40px"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </Button>

              <SubTitle
                textAlign="center"
                color="white"
                size="15px"
                fontWeight="400"
                style={{ paddingTop: "10px" }}
              >
                rimfekih0@gmail.com
              </SubTitle>
            </Flex>

            <Flex flexDirection="column">
              <Button
                as="a"
                href="https://www.linkedin.com/in/fekih-rim-b12340170/"
                color="white"
                backgroundColor="#2867B2"
                height="80px"
                width="80px"
                alignItems="center"
                borderRadius="40px"
              >
                {" "}
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Button>
              <SubTitle
                textAlign="center"
                color="white"
                size="15px"
                fontWeight="400"
                style={{ paddingTop: "10px" }}
              >
                Linkedin
              </SubTitle>
            </Flex>
          </Flex>
        </Container>
      </Row>

      {/* button to top */}

      <Button
        as="a"
        href=""
        color="black"
        width="50px"
        height="50px"
        alignItems="center"
        position="fixed"
        right="3%"
        bottom="3%"
        style={{
          boxShadow: "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)",
          borderRadius: "25px",
          backgroundColor: mainGris,
        }}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>

      {/* footer */}

      <Footer
        backgroundColor={mainBlue}
        padding="15px"
        textAlign="center"
        style={{ borderTop: "0.1px solid white" }}
      >
        Created by Rim fekih © 2021
      </Footer>
    </>
  );
};

export default App;
