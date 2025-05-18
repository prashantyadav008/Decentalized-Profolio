// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "./Structure.sol";

contract Projects {
    string githubLink;
    string linkdinLink;

    address public admin;

    uint public totalProjects;
    uint public totalSkills;
    uint public totalGithub;
    uint public totalClgProjects;

    uint[] public projectOrder;
    uint[] public skillOrder;
    uint[] public githubOrder;
    uint[] public clgProjectOrder;


    mapping(uint => Project) public projects;
    mapping(uint => Skill) public skills;
    mapping(uint => GithubProject) public githubs;
    mapping(uint => CollectProject) public clgProjects;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only Admin can do this action!");
        _;
    }

    ///////////////////////////////////
    /////////// Project //////////////
    //////////////////////////////////
    function addProject(
        string memory name,
        string memory description,
        string memory url,
        string memory image,
        string memory contribution,
        string memory mainTechnology,
        string memory languages 
    ) external onlyAdmin  {
        totalProjects++; 

        projects[totalProjects] = Project(
            name,
            description,
            url,
            image,
            contribution,
            mainTechnology,
            languages,
            true
        );

        projectOrder.push(totalProjects);


    }

     function updateProject(
        uint projectId,
        string memory name,
        string memory description,
        string memory url,
        string memory image,
        string memory contribution,
        string memory mainTechnology,
        string memory languages,
        bool status
    ) external onlyAdmin  {

        require(projectId <= totalProjects, "Skill Id is Invalid!");

        projects[projectId] = Project(
            name,
            description,
            url,
            image,
            contribution,
            mainTechnology,
            languages,
            status
        );
    }

    function updateProjectOrder( uint[] memory orders)external {
        uint length = projectOrder.length;
        delete projectOrder;
        for(uint i=0; i<length;){
            
            require(orders[i] <= totalProjects, "Skill Id is Invalid!");

            projectOrder.push(orders[i]);        
            unchecked {
                i++;
            }
        }
    }


    ///////////////////////////////////
    //////////// Skills //////////////
    //////////////////////////////////

    function addSkills(string memory skill) external onlyAdmin  {
        totalSkills++;
        skills[totalSkills] = Skill(skill, true);
        skillOrder.push(totalSkills);
    }

    function updateSkills(uint skillId,string memory skill, bool status) external onlyAdmin  {
        require(skillId <= totalSkills, "Skill Id is Invalid!");

        skills[skillId] = Skill(skill, status);
    }

    function updateSkillOrder( uint[] memory orders)external {
        uint length = skillOrder.length;
        delete skillOrder;
        for(uint i=0; i<length;){

            require(orders[i] <= totalSkills, "Skill Id is Invalid!");
            skillOrder.push(orders[i]);        
            unchecked {
                i++;
            }
        }
    }

    ///////////////////////////////////
    /////// College Project ///////////
    //////////////////////////////////

     function addClgProject(
        string memory name,
        string memory technolgy,
        string memory contribution,
        string memory description
    ) external onlyAdmin  {

        totalClgProjects++;

        clgProjects[totalClgProjects] = CollectProject(
            name,
            description,
            technolgy,
            contribution,
            true
        );

        clgProjectOrder.push(totalClgProjects);
    }

    function updateClgProject(
        uint clgProjectId,
        string memory name,
        string memory technolgy,
        string memory contribution,
        string memory description,
        bool status
    ) external onlyAdmin  {

        require(clgProjectId <= totalClgProjects, "Skill Id is Invalid!");


        clgProjects[clgProjectId] = CollectProject(
            name,
            description,
            technolgy,
            contribution,
            status
        );
    }

    function updateClgProjectOrder( uint[] memory orders)external {

        uint length = clgProjectOrder.length;
        delete clgProjectOrder;

        for(uint i=0; i<length;){

            require(orders[i] <= totalClgProjects, "Skill Id is Invalid!");

            clgProjectOrder.push(orders[i]);        
            unchecked {
                i++;
            }
        }
    } 


    ///////////////////////////////////
    //////////// Github ///////////////
    ///////////////////////////////////

    function addGithubDetails(string memory name, string memory link ) external onlyAdmin  {
        totalGithub++;
        githubs[totalGithub] = GithubProject(name ,link, true);
        githubOrder.push(totalGithub);
    }

    function updateGithubDetails(uint githubId, string memory name,string memory url, bool status) external onlyAdmin  {
         require(githubId <= totalGithub, "Skill Id is Invalid!");

        githubs[githubId] = GithubProject(name, url, status);
    }

    function updateGithubOrder( uint[] memory orders)external {
        uint length = githubOrder.length;
        delete githubOrder;
        for(uint i=0; i<length;){
            
            require(orders[i] <= totalGithub, "Skill Id is Invalid!");

            githubOrder.push(orders[i]);        
            unchecked {
                i++;
            }
        }
    }
 
}


