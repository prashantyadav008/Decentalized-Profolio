import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";

import { basicMethod } from "./index";
import { BigNumber } from "ethers";

// conver value into Big Number 1^18 or 1e18
function big(value: any) {
  return BigNumber.from(value) ;
}


describe("Basic Contract", () => {
  
  describe("Project Detail", () => {

    var  name= "Enriched Academy";
    var  description= " Based on Deserves Financial Education it is basically for Canadians.";
    var  url= "https://enrichedacademy.com";
    var  image= "https://enrichedacademy.com";
    var  contribution= "Bug Fixes, Creating Api's, Creating New Functionalities in Frontend & Backend Functionalities, Creating Project Flow Diagrams, Creating Excels Sheet to need Content in the Project, and Basic Testing on a project. ";
    var  mainTechnology= "php";
    var  languages   = "Laravel, Cake Php, MySql, Javascript, Jquery"; 

    it("Should check Total Project", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      expect(await projects.totalProjects()).to.equal(big(3));
    });

    it("Should check Add Project or not ", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      expect(await projects.projects(1)).to.have.deep.members([name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages,
        true
      ]);
    });
  
    it("Should check Update Project or not ", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      name= "OMGee";
      description= " E-commerce Website";
      url= "https://omgee.com.au";
      image= "https://omgee.com.au";
      contribution= "Creating Api's, Creating Functionalities in Front-end & Backend ";

      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      await projects.updateProject(
        1,
        name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages,
        false
      );
  
      expect(await projects.projects(1)).to.have.deep.members([name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages,
        false
      ]);
    });

    it("Should check Order", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      expect(await projects.projectOrder(0)).to.equal(big(1));
      expect(await projects.projectOrder(1)).to.equal(big(2));
      expect(await projects.projectOrder(2)).to.equal(big(3));
    });
  
    it("Should check Update Order", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );
  
      await projects.updateProjectOrder([3,1,2]);

      expect(await projects.projectOrder(0)).to.equal(big(3));
      expect(await projects.projectOrder(1)).to.equal(big(1));
      expect(await projects.projectOrder(2)).to.equal(big(2));
    });

    it("Should check Revert Message", async () => {
      const { deployer, projects,users } = await loadFixture(basicMethod);
  
      await expect(projects.connect(users[1]).addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      )).to.revertedWith("Only Admin can do this action!");

      await projects.addProject(name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages
      );

      await expect(projects.connect(deployer).updateProject(
        5,
        name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages,
        false
      )).to.revertedWith("Skill Id is Invalid!");

      await expect(projects.connect(users[1]).updateProject(
        1,
        name,
        description,
        url,
        image,
        contribution,
        mainTechnology,
        languages,
        false
      )).to.revertedWith("Only Admin can do this action!");


      await expect(projects.updateProjectOrder([5,1,2])).to.revertedWith("Skill Id is Invalid!");
    });
  });

  describe("Skills Detail", () => {

    var skills = "Laravel, Cake Php, MySql, Javascript, Jquery"; 

    it("Should check Total Skills", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addSkills(skills);
      await projects.addSkills(skills);
      await projects.addSkills(skills);
  
      expect(await projects.totalSkills()).to.equal(big(3));
    });

    it("Should check Add Skill or not ", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addSkills(skills); 
  
      expect(await projects.skills(1)).to.have.deep.members([
        skills,
        true
      ]);
    });
  
    it("Should check Update Project or not ", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);

      skills = "Blockchain, Solidity";
  
      await projects.addSkills(skills); 

      await projects.updateSkills(1,skills,false); 
  
      expect(await projects.skills(1)).to.have.deep.members([
        skills,
        false
      ]);
  
       
    });
  
    it("Should check Order", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addSkills(skills); 
      await projects.addSkills(skills); 
      await projects.addSkills(skills); 
      
      expect(await projects.skillOrder(0)).to.equal(big(1));
      expect(await projects.skillOrder(1)).to.equal(big(2));
      expect(await projects.skillOrder(2)).to.equal(big(3));
    });
  
    it("Should check Update Order", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addSkills(skills); 
      await projects.addSkills(skills); 
      await projects.addSkills(skills); 

      await projects.updateSkillOrder([3,1,2]);

      expect(await projects.skillOrder(0)).to.equal(big(3));
      expect(await projects.skillOrder(1)).to.equal(big(1));
      expect(await projects.skillOrder(2)).to.equal(big(2));
    });

    it("Should check Revert Message", async () => {
      const { deployer, projects,users } = await loadFixture(basicMethod);
  
      await expect(projects.connect(users[1]).addSkills(skills)).to.revertedWith("Only Admin can do this action!");

      await projects.connect(deployer).addSkills(skills)

      await expect(projects.connect(deployer).updateSkills(5,skills,false)).to.revertedWith("Skill Id is Invalid!"); 

      await expect(projects.connect(users[1]).updateSkills(1,skills,false)).to.revertedWith("Only Admin can do this action!"); 

      await expect(projects.connect(deployer).updateSkillOrder([5,1,2])).to.revertedWith("Skill Id is Invalid!"); 

    });
  });

  describe("College Project Detail", () => {

    var  name= "Handicraft shopping website.";
    var  technolgy= "Core Php, MySQL, HTML, CSS";
    var  contribution= "Frontend, Backend, Database handling, and designing";
    var  description= "People here can buy products from this site and also can sell their products";

    it("Should check Total College Project", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );
  
      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );

      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );
  
      expect(await projects.totalClgProjects()).to.equal(big(3));
    });

    it("Should check Add College Project or not ", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );
  
      expect(await projects.clgProjects(1)).to.have.deep.members([ name,
        technolgy,
        contribution,
        description,
        true
      ]);
    });
  
    it("Should check Update College Project or not ", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      name= "Online Test Portal website ";
      technolgy= "Java, Core Java, MySQL, HTML, CSS, Javascript, Jquery.";
      contribution= "Database handling, Selecting designing, Adding Form Validations. ";
      description= "Students Easily give our College and Companies Aptitude test to ﬁnd out our knowledge level.";

      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );
  
      await projects.updateClgProject( 
        1,
        name,
        technolgy,
        contribution,
        description, 
        false
      );
  
      expect(await projects.clgProjects(1)).to.have.deep.members([ name,
        technolgy,
        contribution,
        description,
        false
      ]);
    });
  
    it("Should check College projects Order", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );

      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );

      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );
  
      expect(await projects.clgProjectOrder(0)).to.equal(big(1));
      expect(await projects.clgProjectOrder(1)).to.equal(big(2));
      expect(await projects.clgProjectOrder(2)).to.equal(big(3));
    });
  
    it("Should check Update Order", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );

      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );

      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );
  
      await projects.updateClgProjectOrder([3,1,2]);

      expect(await projects.clgProjectOrder(0)).to.equal(big(3));
      expect(await projects.clgProjectOrder(1)).to.equal(big(1));
      expect(await projects.clgProjectOrder(2)).to.equal(big(2));
    });

    it("Should check Revert Message", async () => {
      const { deployer, projects,users } = await loadFixture(basicMethod);
  
      await expect(projects.connect(users[1]).addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      )).to.revertedWith("Only Admin can do this action!");

      await projects.addClgProject( 
        name,
        technolgy,
        contribution,
        description 
      );

      await expect( projects.connect(deployer).updateClgProject( 
        5,
        name,
        technolgy,
        contribution,
        description, 
        false
      )).to.revertedWith("Skill Id is Invalid!");

      await expect( projects.connect(users[1]).updateClgProject( 
        1,
        name,
        technolgy,
        contribution,
        description, 
        false
      )).to.revertedWith("Only Admin can do this action!");

      await expect(projects.connect(deployer).updateClgProjectOrder([5,1,2])).to.revertedWith("Skill Id is Invalid!");
      
    });
  });

  describe("Github Project Detail", () => {

    var name = "Decentralized Protfolio"; 
    var link = "https://github.com"; 

    it("Should check Total Github Project", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addGithubDetails(name, link);
      await projects.addGithubDetails(name, link);
      await projects.addGithubDetails(name, link);
  
      expect(await projects.totalGithub()).to.equal(big(3));
    });

    it("Should check Add Skill or not ", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addGithubDetails(name, link); 
  
      expect(await projects.githubs(1)).to.have.deep.members([
        name, link,
        true
      ]);
    });
  
    it("Should check Update Project or not ", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);

      name = "Lottery Project";
      link = "https://github.com"; 

      await projects.addGithubDetails(name, link); 
  
      await projects.updateGithubDetails(1,name, link, false); 
  
      expect(await projects.githubs(1)).to.have.deep.members([
        name, link,
        false
      ]);
  
       
    });
  
    it("Should check Order", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addGithubDetails(name, link); 
      await projects.addGithubDetails(name, link); 
      await projects.addGithubDetails(name, link); 
      
      expect(await projects.githubOrder(0)).to.equal(big(1));
      expect(await projects.githubOrder(1)).to.equal(big(2));
      expect(await projects.githubOrder(2)).to.equal(big(3));
    });
  
    it("Should check Update Order", async () => {
      const { deployer, projects } = await loadFixture(basicMethod);
  
      await projects.addGithubDetails(name, link); 
      await projects.addGithubDetails(name, link); 
      await projects.addGithubDetails(name, link); 

      await projects.updateGithubOrder([3,1,2]);

      expect(await projects.githubOrder(0)).to.equal(big(3));
      expect(await projects.githubOrder(1)).to.equal(big(1));
      expect(await projects.githubOrder(2)).to.equal(big(2));
    });

    it("Should check Revert Message", async () => {
      const { deployer, projects,users } = await loadFixture(basicMethod);
  
      await expect(projects.connect(users[1]).addGithubDetails( name, link,)).to.revertedWith("Only Admin can do this action!");

      await projects.addGithubDetails(name, link); 

      await expect(projects.connect(deployer).updateGithubDetails(5, name, link,false)).to.revertedWith("Skill Id is Invalid!"); 

      await expect(projects.connect(users[1]).updateGithubDetails(1, name, link,false)).to.revertedWith("Only Admin can do this action!"); 

      await expect(projects.connect(deployer).updateGithubOrder([5,1,2])).to.revertedWith("Skill Id is Invalid!"); 

      
    });
  }); 
   
});
