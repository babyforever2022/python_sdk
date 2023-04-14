import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import kenjyu from "../../Assets/Projects/kenjyukai.or.jp.png";
import baron from "../../Assets/Projects/baron-nakamura.com.png";
import clubmed from "../../Assets/Projects/clubmed.co.jp.png";
import elm from "../../Assets/Projects/elm.lang.jp.png"
import daellenbach from "../../Assets/Projects/daellenbach.ch.png"
import optimum from "../../Assets/Projects/optimumresults.co.nz.png"
import harcort from "../../Assets/Projects/harcourtsholidayhomes.co.nz.png"
import randomshapes from "../../Assets/Projects/randomshapes.com.png"
import lmfx from "../../Assets/Projects/lmfx.com.png"
import dominos from "../../Assets/Projects/dominos.com.jm.png"

import { techIcons } from "./tech";

const {
  html,
  css,
  bootstrap,
  tailwindcss,
  js,
  jquery,
  ts,
  react,
  next,
  angular,
  vue,
  nuxt,
  python,
  ruby,
  php,
  node,
  nest,
  postgreSQL,
  mySQL,
  mongodb,
  laravel,
  redux,
  graphQL,
  apollo,
  amazon,
  nginx,
  netlify,
  webpack,
} = techIcons;

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kenjyu}
              isBlog={false}
              title="Anshinkai"
              description="
                This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.
              "
              link="https://anshinkai-gr.jp/"
              techs={[laravel, php, mySQL, js, css]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baron}
              isBlog={false}
              title="Baron Nakamura"
              description="
                It is for Cradle of the Universe.
                Infomed about the latest information on retreats, sessions, and more nationwide in Japan.
              "
              link="https://baron-nakamura.com/"
              techs={[react, redux, jquery, js]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clubmed}
              isBlog={false}
              title="Club MED"
              description="
                It specialises in luxury all-inclusive holidays – with absolutely no hidden costs including Thrilling skiing, sensational islands getaways and wonderful cultural.  
              "
              link="https://www.clubmed.co.jp/"
              techs={[node, react, apollo, graphQL, nginx, amazon]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elm}
              isBlog={false}
              title="Elm Shelter"
              description="
                Elm-jp is a group of Elm users based in Japan who cherish the gentle feeling of admiring animals.  
              "
              link="https://elm-lang.jp/"
              techs={[ruby, tailwindcss, js, amazon]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daellenbach}
              isBlog={false}
              title="Daellenbach Swich"
              description="
                Their traditional Thun company has been a competent partner for all plastering and painting work for our customers since 1949.
              "
              link="https://daellenbach.ch/"
              techs={[vue, ts, nuxt, nginx]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={optimum}
              isBlog={false}
              title="Optimum Results"
              description="
                They’re paid search scientists who specialise in optimising Google and Bing Ads accounts. They can manage your accounts, provide professional guidance, or help with a particular facet of paid search, like remarketing.
              "
              link="http://optimumresults.co.nz/"
              techs={[python, nginx, postgreSQL, amazon, bootstrap]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={harcort}
              isBlog={false}
              title="Harcouts Holiday"
              description="
                They’re a small, local team who have the utmost respect and care when it comes to ensuring your holiday stay is the best one it possibly could be. All their guests enjoy an outstanding level of service that is second to none, as are their beautiful private holiday homes.  
              "
              link="https://www.harcourtsholidayhomes.co.nz/"
              techs={[nest, node, nginx, postgreSQL]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomshapes}
              isBlog={false}
              title="Random Shapes"
              description="
                They're Random Shapes, They Build Minimum Viable Products and Help Teams Grow.  
              "
              link="https://randomshapes.com/"
              techs={[vue, webpack, nginx, netlify]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lmfx}
              isBlog={false}
              title="LMFX"
              description="
                When it comes to trading, LMFX is the broker you are looking for, that offers advanced institutional and retail trading conditions to a global audience.
                They have thought of everything you might need, to ensure a smooth hassle-free trading experience.  
              "
              link="https://lmfx.com/"
              techs={[next, react, jquery, node, bootstrap]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dominos}
              isBlog={false}
              title="DOMINOS"
              description="
                Domino's Pizza Jamaica, Order Pizza Online for Delivery or Serve.
                Everyone is able to be served from the reliable and trust sercice of Domino's Pizza.
              "
              link="https://www.dominos.com.jm/"
              techs={[node, nest, angular, jquery, bootstrap]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code Editor"
              description="Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage."
              link="https://github.com/goldpal/Editor.io"
              techs={[html, css, js, bootstrap]}
              isGit={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/goldpal/Bits-0f-C0de"
              techs={[html, css, js, bootstrap]}
              isGit={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
