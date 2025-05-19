// data/skills.ts
export type SkillCategory =
  | 'Languages'
  | 'Frameworks/Libraries'
  | 'Blockchain/Web3'
  | 'Cloud/DevOps & Tools & Databases'
  | 'ERC Standards'
  | 'API & Intergrations';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string;
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'Solidity', category: 'Languages', logoKey: 'solidity' },
    { name: 'Hyperledger Fabric', category: 'Languages', logoKey: 'linux' },
    { name: 'GoLang,', category: 'Languages', logoKey: 'go' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'JQuery', category: 'Languages', logoKey: 'jquery' },
    { name: 'C', category: 'Languages', logoKey: 'c' },
    { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
    { name: 'PHP', category: 'Languages', logoKey: 'php' },
    { name: 'Laravel', category: 'Languages', logoKey: 'laravel' },
    { name: 'CodeIgniter', category: 'Languages', logoKey: 'codeigniter' },
    { name: 'CakePhp', category: 'Languages', logoKey: 'cakephp' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
    { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Express.js', category: 'Frameworks/Libraries', logoKey: 'express' },
    { name: 'Kafka', category: 'Frameworks/Libraries', logoKey: 'apachekafka' },
    { name: 'Bash Scripting', category: 'Frameworks/Libraries', logoKey: 'bash' },
    { name: 'Bootstrap CSS', category: 'Frameworks/Libraries', logoKey: 'bootstrap' },
    { name: 'Material-UI CSS', category: 'Frameworks/Libraries', logoKey: 'materialui' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },

  ],
  'Blockchain/Web3': [
    { name: 'Hardhat', category: 'Blockchain/Web3', logoKey: 'hardhat' },
    { name: 'Remix', category: 'Blockchain/Web3', logoKey: 'github' },
    { name: 'Wagmi', category: 'Blockchain/Web3', logoKey: 'wagmi' },
    { name: 'WalletConnect', category: 'Blockchain/Web3', logoKey: 'wallet' },
    { name: 'Web3.js', category: 'Blockchain/Web3', logoKey: 'javascript' },
    { name: 'Ethers.js', category: 'Blockchain/Web3', logoKey: 'javascript' },
    { name: 'IPFS', category: 'Blockchain/Web3', logoKey: 'ipfs' },
    { name: 'Layer-2', category: 'Blockchain/Web3', logoKey: 'layer2' },
    { name: 'Ethereum', category: 'Blockchain/Web3', logoKey: 'ethereum' },
    { name: 'Polygon', category: 'Blockchain/Web3', logoKey: 'polygon' },
    { name: 'Binance', category: 'Blockchain/Web3', logoKey: 'binance' },
    { name: 'Mocha(Chai)', category: 'Blockchain/Web3', logoKey: 'mocha' },
    { name: 'Tenderly', category: 'Blockchain/Web3', logoKey: 'github' },
    { name: 'Smart Contracts', category: 'Blockchain/Web3', logoKey: 'solidity' },
  ],
  'Cloud/DevOps & Tools & Databases': [
    { name: 'AWS', category: 'Cloud/DevOps & Tools & Databases', logoKey: 'amazonwebservices' },
    { name: 'Docker', category: 'Cloud/DevOps & Tools & Databases', logoKey: 'docker' },
    { name: 'Jira', category: 'Cloud/DevOps & Tools & Databases', logoKey: 'jira' },
    { name: 'Github', category: 'Cloud/DevOps & Tools & Databases', logoKey: 'git' },
    { name: 'Gitlab', category: 'Cloud/DevOps & Tools & Databases', logoKey: 'gitlab' },
    { name: 'Bitbucket', category: 'Cloud/DevOps & Tools & Databases', logoKey: 'bitbucket' },
    { name: 'Postman', category: 'Cloud/DevOps & Tools & Databases', logoKey: 'postman' },
    { name: 'MySQL', category: 'Cloud/DevOps & Tools & Databases', logoKey: 'mysql' },
    { name: 'MongoDB', category: 'Cloud/DevOps & Tools & Databases', logoKey: 'mongodb' },
  ],
  'ERC Standards': [
    { name: 'ERC-20: Fungible Token', category: 'ERC Standards', logoKey: 'openzeppelin' },
    { name: 'ERC-721: Non Fungible Token', category: 'ERC Standards', logoKey: 'openzeppelin' },
    { name: 'ERC-721A', category: 'ERC Standards', logoKey: 'openzeppelin' },
    { name: 'ERC-1155: Both Fungible Token & Non Fungible Token', category: 'ERC Standards', logoKey: 'openzeppelin' },
    { name: 'ERC-4907: Rental NFTs', category: 'ERC Standards', logoKey: 'openzeppelin' },
    { name: 'ERC-6059: Nested NFTs', category: 'ERC Standards', logoKey: 'openzeppelin' },
    { name: 'ERC-4337: Account Abstraction', category: 'ERC Standards', logoKey: 'openzeppelin' },
    { name: 'ERC-6551: Token-Bound accounts', category: 'ERC Standards', logoKey: 'openzeppelin' },
    { name: 'ERC-3643 (T-Rex) and ERC-1400 (Security Token)', category: 'ERC Standards', logoKey: 'openzeppelin' }
  ],
  'API & Intergrations': [
    { name: 'RESTful APIs', category: 'API & Intergrations', logoKey: 'swagger' },
    { name: 'JWT Auth', category: 'API & Intergrations', logoKey: 'json' },
    { name: 'Huggingface', category: 'API & Intergrations', logoKey: 'huggingface' },
    { name: 'Web3', category: 'API & Intergrations', logoKey: 'github' },
    { name: 'Wagmi', category: 'API & Intergrations', logoKey: 'github' },
    { name: 'Pinata', category: 'API & Intergrations', logoKey: 'pinata' },
  ],

};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};