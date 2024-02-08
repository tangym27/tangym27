import styled from "styled-components";
import { site } from "./constants";
import Header, { HeadText } from "./Header";
import Projects, { ProjectRow } from "./Timeline";
import { Section } from "./util";
import React, { useState } from "react";

// Projects
// https://i6.cims.nyu.edu/~mt4119/drawing/
// https://slides.com/d/TVaIxG4/live#/2/3

// https://suhama-fluid-demo.squarespace.com

// @media (prefers-reduced-motion: no-preference) {

function App() {
  const [selected, setSelected] = useState(1);

  const config = (num) => {
    setSelected(num);
  };

  return (
    <Background>
      <Header>
        <HeadText href="mailto:tangym27@gmail.com">Email</HeadText>

        <HeadText href="https://www.linkedin.com/in/tangym27">
          LinkedIn
        </HeadText>
      </Header>

      <Content>
        <Section mobileRowCount={12} wideRowCount={22}>
          <LargeText>
            Software engineer. Android, React, Express, and Erlang.
          </LargeText>
        </Section>
      </Content>
      <div style={{ display: "flex", fontSize: "2rem", gap: "1rem" }}>
        <div
          onClick={() => config(1)}
          className={selected === 1 ? "active" : "inactive"}
        >
          {" "}
          all{" "}
        </div>
        <span> | </span>
        <div
          onClick={() => config(2)}
          className={selected === 2 ? "active" : "inactive"}
        >
          work{" "}
        </div>
        <span> | </span>
        <div
          onClick={() => config(3)}
          className={selected === 3 ? "active" : "inactive"}
        >
          {" "}
          projects{" "}
        </div>
      </div>
      <Projects>
        <ProjectRow
          timeRange={"Feb 23 - Present"}
          name={"HalloApp Android Software Engineer"}
          href="https://www.halloapp.com/"
          select={selected === 1 || selected === 2}
        >
          Maintain and release an application with 500k+ downloads on the Google
          Play Store, averaging a crash-free user rate of 99.92%. Designed and
          implemented a friendship model for a user base of 50,000 people
          (transitioned from phonebook design). Built ML pipeline using Google’s
          ML Image Classification model to cluster user photos based on
          locations and time. Created a username/hashcash registration system
          with additional phone number verification via OTP. Implemented
          real-time updates of a user’s feed, including comments, reactions, or
          deletions. Expanded user reporting system by removing posts from
          public feed and preventing future occurrences
        </ProjectRow>

        <ProjectRow
          timeRange={"Fall 20 - Jan 23"}
          name={"NYU Women in Computing President"}
          href="https://nyuwinc.org/"
          select={selected === 1 || selected === 3}
        >
          Organizing events and generating career opportunities for NYU
          students, including recruiting events, interview preparation seminars,
          resume reviews, and company spotlights. Designing the club website and
          maintaining various social media platforms (e.g. Facebook, Instagram).
        </ProjectRow>

        <ProjectRow
          timeRange={"Summer 22"}
          name={"HalloApp Internship"}
          href="https://www.halloapp.com/"
          select={selected === 1 || selected === 2}
        >
          Optimized performance of the main backend service by integrating
          worker-parallelism into the notification subsystem.
        </ProjectRow>

        <ProjectRow
          timeRange={"Spring 22"}
          name={"Parks and Recreation Wordle"}
          href="https://pawnle.vercel.app/"
          select={selected === 1 || selected === 3}
        >
          Wordle with a subset of words from the television show, Parks and
          Recreation. Built from React and the open source version of Wordle.
        </ProjectRow>

        <ProjectRow
          timeRange={"Spring 22"}
          name={"ChocoPy Compiler"}
          href="https://github.com/nyu-compiler-construction/chocopy-choco-pie/"
          select={selected === 1 || selected === 3}
        >
          Developed a compiler for Chocopy in three main stages: (1) lexing and
          parsing in JFlex and CUP (2) semantic analysis (3) code generation in
          RISC-V
        </ProjectRow>

        <ProjectRow
          timeRange={"Fall 21"}
          name={"Budget.ly"}
          href="https://github.com/software-assignments-fall2021/project-setup-sneaky-seven"
          select={selected === 1 || selected === 3}
        >
          Created a budgeting app that connects to a user’s bank account using
          React, Express, MongoDB and the Plaid API. Developed customizable
          categories, transaction organizing, and flexible spending/balance
          statistics (using Google Charts).
        </ProjectRow>

        <ProjectRow
          timeRange={"Spring 20 - Fall 21"}
          name={"Data Structures Tutor"}
          href="https://cs.nyu.edu/home/undergrad/tutoring.html"
          select={selected === 1 || selected === 3}
        >
          Taught over 100 students on the use and design of data structures like
          stacks, linked lists, trees, hashmaps, and heaps. Guided students on
          how to analyze and modify the space and time complexity of different
          algorithms.
        </ProjectRow>

        <ProjectRow
          timeRange={"Summer 21"}
          name={"HalloApp Internship"}
          href="https://www.halloapp.com/"
          select={selected === 1 || selected === 2}
        >
          Implemented functionality of 2 SMS gateways to improve delivery
          success rate of one-time passwords by 70% in Erlang. Optimized Redis
          query patterns resulting in a 100% increase in operation throughput.
          Converted the application into a Docker image to standardize usage and
          allow for more efficient deployment and scaling.
        </ProjectRow>

        <ProjectRow
          timeRange={"Fall 19 - Spring 21"}
          name={"NYU Stern Software Engineer"}
          select={selected === 1 || selected === 2}
        >
          Developed the front-end of a contact application by using JavaScript
          to make XMLHttpRequests using Ajax and jQuery. Designed a processing
          feature to create, edit, and remove contacts in Perl, Catalyst, and
          SQL in a team of three people. Updated 10 applications to comply with
          new accessibility standards while maintaining server functionality.
        </ProjectRow>

        <ProjectRow
          timeRange={"Spring 21"}
          name={"Kalotay Analytics Data Anaylyst"}
          select={selected === 1 || selected === 2}
        >
          Processed over 1000000 trade dates to identify bond patterns using
          Python pandas. Analyzed the most effective way to generate bond curves
          using bond trade information.
        </ProjectRow>

        <ProjectRow
          timeRange={"Summer 20"}
          name={"Alberta"}
          href="https://bugs-nyu.github.io/freshman-schedge-generator/"
          select={selected === 1 || selected === 3}
        >
          Built a schedule generator that pulls from the NYU Course API and
          generates a schedule using React.
        </ProjectRow>

        <ProjectRow
          timeRange={"Spring 19"}
          name={"Exploding Kittens"}
          href="https://github.com/alexliu4/catastrophe/"
          select={selected === 1 || selected === 3}
        >
          Developed an online version of “Exploding Kittens” written using Flask
          & JavaScript in a team of 4. Implemented authentication, sessions, and
          user tokens, using SQLite and an Apache HTTP server.
        </ProjectRow>

        <ProjectRow
          timeRange={"Fall 18"}
          name={"You've Got Crabs"}
          href="https://github.com/tangym27/crabby"
          select={selected === 1 || selected === 3}
        >
          Built a version of the card game “You’ve Got Crabs” in C with 3 other
          people.
        </ProjectRow>
      </Projects>

      <Footer></Footer>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  background-color: ${site.background};
  color: ${site.color};

  @media screen and (min-width: 0px) and (max-width: calc(1943px)) and (orientation: portrait) {
    font-size: calc((1.1 - 1) * 1.2vh + 1rem);
  }

  @media screen and (min-width: 0px) and (max-width: calc(1943px)) and (orientation: landscape) {
    font-size: calc((1.1 - 1) * 1.2vw + 1rem);
  }
`;

const Content = styled.main`
  z-index: 1;

  min-height: 10vh;
  padding-top: 112.767px;
`;

const Footer = styled.footer`
  padding: 5vh 0;
  width: 100%;
`;

const LargeText = styled.h1`
  grid-area: 2/2/12/10;
  z-index: 0;

  @media (min-width: 750px) {
    grid-area: 4/7/20/26;
  }

  white-space: pre-wrap;
  margin: 0px;
  line-height: calc(1.4 * (1 + (1 - 6.5) / 25));

  @media screen and (min-width: 0px) and (max-width: calc(1943px)) and (orientation: landscape) {
    font-size: calc((6.5 - 1) * 1.2vw + 1rem);
  }

  @media screen and (min-width: 0px) and (max-width: calc(1943px)) and (orientation: portrait) {
    font-size: calc((6.5 - 1) * 1.2vh + 1rem);
  }
`;

export default App;
