// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

struct Project{
    string name;
    string description;
    string url;
    string image;
    string contribution;
    string mainTechnology;    
    string languages;    
    bool status;
}

struct Skill{
    string skill;
    bool status;
}

struct CollectProject{
    string name;
    string description;
    string technolgy;
    string contribution;
    bool status;
}