import React from "react";
import wmpImg from "../public/assets/projects/wmp.png";
import preImg from "../public/assets/projects/pre.png";
import hdbImg from "../public/assets/projects/hdb.png";
import mbuyuImg from "../public/assets/projects/mbuyu.png";
import theriverImg from "../public/assets/projects/theriver.png";
import merchImg from "../public/assets/projects/merch.png";
import dapp from "../public/assets/projects/dapp.png";
import mint from "../public/assets/projects/mint.png";
import tokeoImg from "../public/assets/projects/tokeo.png";
import dropspotImg from "../public/assets/projects/dropspot.png";

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
            title="Tokeo Wallet"
            backgroundImg={tokeoImg}
            projectUrl="/projects/tokeo"
            tech="Kotlin / Swift / TypeScript"
          />
          <ProjectItem
            title="Dropspot NFT Marketplace"
            backgroundImg={dropspotImg}
            projectUrl="/projects/dropspot"
            tech="NextJS"
          />
          <ProjectItem
            title="PRE.world"
            backgroundImg={preImg}
            projectUrl="/projects/pre"
            tech="NextJS"
          />
          <ProjectItem
            title="GoatTribe Merch Store"
            backgroundImg={merchImg}
            projectUrl="/projects/merch"
            tech="NextJS"
          />
          <ProjectItem
            title="The Morphium Mint"
            backgroundImg={mint}
            projectUrl="/projects/mint"
            tech="NextJS"
          />
          <ProjectItem
            title="The River Dapp"
            backgroundImg={dapp}
            projectUrl="/projects/theriverdapp"
            tech="NextJS"
          />
          <ProjectItem
            title="The River"
            backgroundImg={theriverImg}
            projectUrl="/projects/theriver"
            tech="NextJS"
          />
          <ProjectItem
            title="MBUYU Digital Archive"
            backgroundImg={mbuyuImg}
            projectUrl="/projects/mbuyu"
            tech="React JS"
          />
          <ProjectItem
            title="Water my Plants"
            backgroundImg={wmpImg}
            projectUrl="/projects/wmp"
            tech="React JS"
          />

          <ProjectItem
            title="Doc Preparation / Order Management App"
            backgroundImg={hdbImg}
            projectUrl="/projects/hdb"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
