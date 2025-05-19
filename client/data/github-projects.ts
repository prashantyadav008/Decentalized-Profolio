export interface GithubProject {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;

}

export const githubProjects: GithubProject[] = [
  {
    id: "amortization-calculator",
    title: "Amortization Calculator",
    description: "A decentralized amortization calculator that uses a Solidity smart contract to compute EMI, interest, and monthly payments, integrated with a React.js frontend.",
    longDescription: "This project is a blockchain-powered amortization calculator that allows users to compute monthly EMIs and interest distribution based on loan amount, interest rate, and tenure. The backend is powered by a smart contract written in Solidity and deployed on the Sepolia testnet using Hardhat and Alchemy. The frontend, built with React.js and styled using Bootstrap, interacts with the smart contract via Web3.js. Users can input loan details and get a detailed monthly breakdown of principal and interest payments, making the loan repayment process transparent and decentralized.",
    technologies: ["Solidity", "Hardhat", "Sepolia", "React.js", "JavaScript", "Bootstrap", "Web3.js", "Alchemy"],
    achievements: [
      "Developed and deployed a smart contract that accurately calculates loan EMIs and monthly amortization schedules.",
      "Integrated Web3.js with React to enable real-time interaction with the Ethereum Sepolia testnet.",
      "Built a fully responsive, user-friendly UI with Bootstrap and hosted the dApp on Netlify.",
    ],
    image: "/images/projects/github/amortizationcalculator.jpeg",
    github: "https://github.com/prashantyadav008/Amortization-Calculator",
    liveUrl: "https://amortization-calculator.netlify.app/",
    featured: true
  },
  {
    id: "ai-nft-minting-dapp",
    title: "A.I. NFT Minting DApp",
    description: "An AI-powered NFT minting dApp where users can mint NFTs using uploaded or AI-generated images, and withdraw funds upon burning the NFT.",
    longDescription: "This is an innovative NFT minting dApp that integrates artificial intelligence with blockchain technology. Users can either upload their own image or generate one using AI via the Hugging Face API, and mint it as an NFT by paying a minting fee. The smart contract, written in Solidity and deployed on the Sepolia testnet, handles the minting, burning, and withdrawal logic. Once an NFT is burned, users can reclaim their minting amount from the contract. The application is built with React.js, Node.js, and Web3.js, and uses Wagmi and WalletConnect for seamless wallet integration. IPFS (via Pinata) is used to store image data in a decentralized manner.",
    technologies: ["Solidity", "Hardhat", "Sepolia", "IPFS(Pinata)", "React.js", "JavaScript", "Bootstrap", "Wagmi", "Wallet Connect", "Web3.js", "Alchemy"],
    achievements: [
      "Built a dynamic NFT smart contract supporting minting, burning, and withdrawal mechanisms on Ethereum Sepolia.",
      "Integrated Hugging Face AI API to allow users to generate NFTs from AI-generated images.",
      "Enabled decentralized image storage using IPFS (Pinata) and seamless wallet connectivity with Wagmi and WalletConnect.",
    ],
    image: "/images/projects/github/ainftminting.jpeg",
    github: "https://github.com/prashantyadav008/A.I.-NFT-Minting-DApp",
    liveUrl: "https://ai-nft-minting.netlify.app/",
    featured: true

  },
  {
    id: "staking-dapp",
    title: "Staking-Dapp",
    description: "A decentralized staking platform where users can lock tokens in customizable packages to earn profits, with admin controls for managing staking plans.",
    longDescription: "This is a feature-rich staking DApp that enables users to stake tokens for fixed durations in return for predefined profits. Users can choose from various staking packages (e.g., X tokens for Y days at Z% profit), and after the lock period, they can withdraw their initial stake along with the earned rewards. The platform also includes an admin dashboard where the administrator can add, update, or remove staking packages dynamically. The application uses Solidity for smart contracts, Hardhat for development, and React.js for the frontend. Wallet connectivity and transactions are handled using Wagmi, WalletConnect, and Web3.js, and the project is deployed on the Sepolia testnet via Alchemy.",
    technologies: ["Solidity", "Hardhat", "Sepolia", "React.js", "JavaScript", "Bootstrap", "Wagmi", "Wallet Connect", "Web3.js", "Alchemy"],
    achievements: [
      "Built and deployed a dynamic staking smart contract supporting multiple customizable staking packages.",
      "Implemented full admin control to manage staking plans including add, update, and delete functionalities.",
      "Integrated complete frontend interaction with the smart contract using Wagmi and Web3.js for seamless staking and withdrawal flows.",],
    image: "/images/projects/github/staking.jpeg",
    github: "https://github.com/prashantyadav008/Staking-Dapp",
    liveUrl: "https://staking-plateform.netlify.app/",
    featured: true

  },
  {
    id: "wagmi-integration",
    title: "Wagmi Integration",
    description: "A React-based dApp that enables wallet connection and direct ETH transfer between addresses using Wagmi and WalletConnect.",
    longDescription: "This project demonstrates seamless wallet connectivity and Ethereum transfers using the Wagmi library. Built with React.js and integrated with WalletConnect and Web3.js, the dApp allows users to connect their crypto wallets and send ETH to any recipient address. Upon successful transfer, the transaction hash is displayed with a link to the block explorer, enabling users to verify the transaction.",
    technologies: ["React.js", "Node.js", "JavaScript", "Sepolia", "Bootstrap", "Wagmi", "Wallet Connect", "Web3.js"],
    achievements: [
      "Successfully integrated Wagmi and WalletConnect to enable secure Ethereum wallet connections.",
      "Implemented ETH transfer functionality between user addresses with real-time transaction hash tracking.",
      "Built and deployed a clean, beginner-friendly dApp showcasing the fundamentals of wallet-to-wallet ETH transfers.",

    ],
    image: "/images/projects/github/wagmisetup.jpeg",
    github: "https://github.com/prashantyadav008/Wagmi-Integration",
    liveUrl: "https://wagmi-integration.netlify.app/",
    featured: true
  },
  {
    id: "hyperledger-fabric-crud-operation",
    title: "Hyperledger Fabric Crud Operation",
    description: "A React-based CRUD application built on Hyperledger Fabric using Go chaincode, demonstrating multi-organization data storage and interaction.",
    longDescription: "This project showcases a complete CRUD (Create, Read, Update, Delete) implementation using Hyperledger Fabric, built with a two-organization network setup based on Fabric’s test-network. The backend logic is handled through chaincode written in Golang, allowing users to store and manage data securely on the blockchain. The frontend is developed in React.js, enabling users to interact with the blockchain and view stored records dynamically. CouchDB is used as the state database, and the network uses Raft for consensus. A detailed demo is available on YouTube that walks through the entire setup and chaincode lifecycle using automated bash scripts for deployment and execution.",
    technologies: ["Hyperledger Fabric", "LevelDB", "Chaincode", "React.js", "Golang", "Raft"],
    achievements: [
      "Built a functional multi-org Hyperledger Fabric network with CouchDB for executing blockchain-based CRUD operations.",
      "Developed and deployed smart contracts (chaincode) using Golang with full lifecycle automation via shell scripts.",
      "Integrated blockchain data into a React.js frontend for real-time interaction and visualization.",
    ],
    image: "/images/projects/github/hyperledgercrudoperation.png",
    github: "https://github.com/prashantyadav008/Hyperledger-Fabric-Crud-Operation",
    liveUrl: "https://www.youtube.com/watch?v=UIvhN9aTBJ0",
    featured: true
  },


];