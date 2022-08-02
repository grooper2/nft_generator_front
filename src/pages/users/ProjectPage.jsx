import React, { useState } from "react";

import Layout from "../../Layout/layout";
import "./ProjectPage.scss";

import NoProjects from "../../Assets/Images/no_projects.png";
import unauthorized from "../../Assets/Images/unauthorized.png";

import Button from "../../components/Buttons";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Modal from "../../components/Modal";

export default function ProjectPage() {
  const [isOpen, setToggle] = useState(false);
  const isLoggedIn = true;

  const projects = [
    {
      id: 1,
      projectTitle: "Gay NFT's",
      dateCreated: "01/08/2022",
      assets: 23,
      nfts: 100,
    },
    {
      id: 2,
      projectTitle: "Pareas",
      dateCreated: "01/08/2022",
      assets: 23,
      nfts: 900,
    },
    {
      id: 3,
      projectTitle: "Mits",
      dateCreated: "01/08/2022",
      assets: 23,
      nfts: 10000,
    },
    {
      id: 4,
      projectTitle: "GIGIOS",
      dateCreated: "01/08/2022",
      assets: 23,
      nfts: 3200,
    },
    {
      id: 5,
      projectTitle: "GIGIOS",
      dateCreated: "01/08/2022",
      assets: 23,
      nfts: 3200,
    },
    {
      id: 6,
      projectTitle: "GIGIOS",
      dateCreated: "01/08/2022",
      assets: 23,
      nfts: 3200,
    },
    {
      id: 7,
      projectTitle: "GIGIOS",
      dateCreated: "01/08/2022",
      assets: 23,
      nfts: 3200,
    },
    {
      id: 8,
      projectTitle: "GIGIOS",
      dateCreated: "01/08/2022",
      assets: 23,
      nfts: 3200,
    },
    {
      id: 9,
      projectTitle: "GIGIOS",
      dateCreated: "01/08/2022",
      assets: 23,
      nfts: 3200,
    },
  ];

  return (
    <Layout activeItem={"activeItem1"}>
      <Modal onClose={()=> setToggle(false)} show={isOpen} />
      {!isLoggedIn ? (
        <>
          <img
            src={unauthorized}
            alt="unauthorized"
            maxW="1000px"
            maxH="1000px"
          />
          <Heading size="h1">403 unauthorized</Heading>
        </>
      ) : !projects ? (
        <>
          <img src={NoProjects} alt="no_projects" maxW="1000px" maxH="1000px" />
          <Heading size="h1">You have no projects at the momment</Heading>
          <Button type="button">Create Project</Button>
          <Card />
        </>
      ) : (
        <>
          <div className="pageHeader">
            <div className="pageTitle">
              <h2>Projects</h2>
            </div>
            <div className="pageButtons">
              <Button type="button" onClick={() => setToggle(true) }>Create Project</Button>
            </div>
          </div>
          <hr />
          <div className="projects">
            {projects.map((project) => (
              <Card project={project} />
            ))}
          </div>
        </>
      )}
      
    </Layout>
  );
}
