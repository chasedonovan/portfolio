import React from "react";
import wmpImg from "../public/assets/projects/wmp.png";
import cryptoImg from "../public/assets/projects/crypto.png";
import hdbImg from "../public/assets/projects/hdb.png";
import mbuyuImg from "../public/assets/projects/mbuyu.png";
import theriverImg from "../public/assets/projects/theriver.png";
import merchImg from "../public/assets/projects/merch.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
            title="The River"
            backgroundImg={theriverImg}
            projectUrl="/projects/theriver"
            tech="Next JS"
          />          <ProjectItem
          title="GoatTribe Merch Store"
          backgroundImg={merchImg}
          projectUrl="/projects/merch"
          tech="Next JS"
        />
          <ProjectItem
            title="Water my Plants"
            backgroundImg={wmpImg}
            projectUrl="/projects/wmp"
            tech="React JS"
          />
          <ProjectItem
            title="MBUYU Digital Archive"
            backgroundImg={mbuyuImg}
            projectUrl="/projects/mbuyu"
            tech="React JS"
          />
          <ProjectItem
            title="Doc Preparation / Order Management App"
            backgroundImg={hdbImg}
            projectUrl="/projects/hdb"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto Asset Tracker"
            backgroundImg={cryptoImg}
            projectUrl="/projects/crypto"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
