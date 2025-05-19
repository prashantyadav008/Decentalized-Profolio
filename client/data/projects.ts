export interface Project {
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

export const projects: Project[] = [
  {
    id: "race",
    title: "RACE",
    description: "A DeFi application for tokenized physical assets to digital assets.",
    longDescription: "RACE™ is a full stack, EVM-compatible layer two protocol that Allows vetted assets-such as trade finance, private equity, ESG, real estate, and fine art-to be tokenized and listed. Features interoperable non-custodial wallets and decentralized investment committees. Aims to integrate financially savvy, non-crypto-native investors. Governed by users and a decentralized investment committee. RACE™ designed as a global tokenized infrastructure and decentralized Real World Asset (RWA) marketplace.",
    technologies: ["Solidity", "Hardhat", "Race L2 Chain", "IPFS(Pinata)", "AWS S3 Bucket", "React.js", "Node.js", "JavaScript", "Bootstrap", "MaterialUI", "Wagmi", "Wallet Connect", "Web3.js", "Alchemy", "MySql", "MongoDB"],
    achievements: [
      "Developed and deployed 80+ Solidity smart contracts to tokenize physical assets, enable decentralized fundraising, and automate loan disbursements backed by real estate collateral.",
      "Engineered complex financial mechanisms including debt vs equity structuring, SPV-based distribution, and profit-sharing using waterfall models, hurdle rates, and carried interest.",
      "Built custom escrow contracts to secure funds, automate conditional repayments, and enforce investor protection with fully audit-able flows.",
      "Replaced traditional finance logic with on-chain equivalents for amortization, balloon payment schedules, and capital return modeling, validated through Excel - based prototypes.",
      "Achieved 98%+ test coverage, implemented advanced gas optimisations (25%+ gains), and enforced best security practices using OpenZeppelin standards."
    ],
    image: "/images/projects/racefoundation.jpeg",
    github: "https://github.com/RACE-Ecosystem",
    liveUrl: "https://raceecosystem.com/",
    featured: true
  },
  {
    id: "sastana-art",
    title: "Sastana Art & Casino",
    description: "This is a DApp project — an NFT marketplace where users can buy, sell, and rent NFTs.",
    longDescription: "This is a decentralized application (DApp) that serves as an NFT marketplace. Users can seamlessly buy, sell, and even rent NFTs on the platform. It leverages blockchain technology to ensure secure, transparent, and trustless transactions.",
    technologies: ["Solidity", "Hardhat", "Polygon", "AWS S3 Bucket", "IPFS(Pinata)", "React.js", "Node.js", "JavaScript", "Bootstrap", "MaterialUI", "Wagmi", "Wallet Connect", "Web3.js", "Alchemy", "MySql", "MongoDB"],
    achievements: [
      "Built and deployed 5+ Solidity smart contracts enabling NFT buying, selling, and rental flows with 95%+ unit test coverage.",
      "Implemented Wrapped NFT logic to support time-bound leasing of digital assets, boosting marketplace utility.",
      "Developed escrow-based trading logic, holding NFTs during sale transactions and automating ownership transfer upon payment.",
      "Created and integrated an ERC-20 token for seamless casino game-play transactions across the platform."
    ],
    image: "/images/projects/sastanarent.jpeg",
    liveUrl: "https://www.cdnsolutionsgroup.com/NFTDigitalSignage_st/#/",
    featured: true
  },
  {
    id: "tokenomics",
    title: "Tokenomics",
    description: "A decentralized ICO launchpad that releases tokens based on cliff and vesting schedules. It supports multiple allocation categories like private sale, public sale, liquidity, and rewards.",
    longDescription: "This project is a decentralized ICO (Initial Coin Offering) platform built on a DEX (Decentralized Exchange) infrastructure. It allows startups and blockchain projects to launch their tokens with structured token release mechanisms based on cliff and vesting periods. The platform ensures a secure and transparent distribution of tokens across various categories such as private sale, public sale, liquidity provision, team allocation, and community rewards. It empowers both project owners and investors by automating token unlocks, minimizing dump risks, and maintaining trustless participation using smart contracts.",
    technologies: ["Solidity", "Hardhat", "Polygon", "AWS S3 Bucket", "React.js", "JavaScript", "Bootstrap", "Wagmi", "Wallet Connect", "Web3.js"],
    achievements: [
      "Developed and deployed 2 critical smart contracts (ERC-20 token & vesting contract) with support for cliff periods, monthly unlocks, and multi-signature release control.",
      "Built a React-based front end with Wagmi & Web3Js, integrating real-time vesting data and secure admin operations across 6+ departments (e.g., airdrops, liquidity, partners).",
      "Implemented full smart contract interaction logic for whitelisted addresses, achieving 98%+ test coverage, optimized gas usage, and passed security audits with a 99%+ success rate."
    ],
    image: "/images/projects/sastanatokenomics.jpeg",
    github: "https://github.com/sastanaqqam-s/BLOO-token/tree/main",
    liveUrl: "https://sastanaqqam.gitbook.io/sastanaqqam",
    featured: false
  },
  {
    id: "yrace",
    title: "YRACE",
    description: "A decentralized staking platform for YRace tokens offering fixed APY rewards.",
    longDescription: "This is a decentralized staking platform built for YRace tokens, allowing users to earn fixed APY rewards based on customizable lock-in durations. The platform features real-time on-chain interactions, enhancing performance and reducing transaction latency. It offers seamless Web3 integration with popular wallets like MetaMask and WalletConnect, ensuring secure, user-friendly access to staking services. The modular contract architecture ensures scalability and efficient reward distribution.",
    technologies: ["Solidity", "Hardhat", "Binance", "React.js", "JavaScript", "Bootstrap", "Wagmi", "Wallet Connect", "Web3.js"],
    achievements: [
      "Designed and deployed staking smart contracts for YRace token, supporting fixed APY rewards ranging from x% to y% and lock-in periods from X to Y days.",
      "Developed a full-stack staking interface using React and Wagmi, enabling real-time interactions with on-chain contracts and reducing transaction time by 30%.",
      "Integrated with MetaMask, WalletConnect, and other wallet providers for seamless Web3 authentication and staking. and improving user experience and modular contract structure."
    ],
    image: "/images/projects/yrace.png",
    liveUrl: "https://cdnsolutionsgroup.com/YRace/",
    featured: false
  },
  {
    id: "dragon-bank-and-fabulook",
    title: "Dragon Bank & Fabulook",
    description: "Mobile platforms for financial literacy and fashion e-commerce, with interactive features, and optimized API infrastructure.",
    longDescription: "Designed and developed NeuNotes, a collaborative platform for sharing academic content with role-based access control. The system features course organization, notes upload/preview, search functionality, ratings, comments, and analytics dashboards.",
    technologies: ["Php", "Laravel", "AWS S3 Bucket", "MySql"],
    achievements: [
      "Developed and contributed to Dragon Bank, a financial literacy app with 20,000+ users, and Fabulook, an e-commerce fashion app with 5,000+ users.",
      "Designed and optimized 30+ APIs to facilitate seamless real-time transactions.",
      "Designed an interactive savings and spending model for Dragon Bank, helping children learn practical financial habits.",
      "Enhanced Fabulook`s vendor onboarding process, leading to a increase seller sign-ups and improved APIs efficiency."
    ],
    image: "/images/projects/dragonbank.png",
    liveUrl: "https://www.dragonbank.com/",
    featured: false
  },
  {
    id: "enriched-academy",
    title: "Enriched Academy",
    description: "Online programs that teach essential financial skills like budgeting, investing, and retirement planning.",
    longDescription: "Enriched Academy is a leading Canadian financial education platform that designs and delivers fun, engaging, and easy-to-understand online programs. It helps individuals master critical aspects of personal finance, including saving, budgeting, investing, debt reduction, and retirement planning. With a focus on real-life financial literacy, Enriched Academy empowers users to make smarter money decisions and build a secure financial future.",
    technologies: ["Php", "Laravel", "CakePhp", "AWS S3 Bucket", "Nodejs", "IPFS(Pinata)", "JavaScript", "JQuery", "Bootstrap", "MySql", "Navicat"],
    achievements: [
      "Developed and contributed to Enriched Academy, a financial education platform serving 350k+ Canadian users.",
      "Fixed critical bugs, created 30+ APIs, and implemented new front-end and back-end functionalities, improving platform speed.",
      "Developed real-time financial simulation tools to help users analyse their investments and optimize strategies for better outcomes.",
      "Improved the course enrollment process, ensuring seamless onboarding for new users"
    ],
    image: "/images/projects/enrichedacademy.jpeg",
    github: "https://developers.enrichedacademy.com/",
    liveUrl: "https://www.enrichedacademy.com/",
    featured: true
  },
  {
    id: "omgee-and-teleboutik",
    title: "OMGee & Teleboutik",
    description: "E-commerce platforms serving 50,000+ users with secure multi-currency payments, optimized checkout flows, and robust API-driven architecture.",
    longDescription: "OMGee and Teleboutik are scalable e-commerce platforms built to support over 50,000 active users with a focus on smooth, secure, and efficient product transactions. The platforms feature 50+ custom APIs and full-stack functionalities that streamline the user journey, particularly during checkout, resulting in reduced cart abandonment rates. With integrated multi-currency payment gateways, the platforms enhance global reach and user trust, making them well-suited for international commerce.",
    technologies: ["Php", "Laravel", "CodeIgniter", "JavaScript", "AWS S3 Bucket", "JQuery", "Bootstrap", "MySql"],
    achievements: [
      "Developed and contributed to e-commerce platforms with 50,000+ active users, ensuring smooth and secure product transactions.",
      "Created 50+ APIs and built end-to-end functionalities, optimizing checkout processes and reducing cart abandonment rates.",
      "Integrated secure payment gateways to support multi-currency transactions, increasing international customer engagement."
    ],
    image: "/images/projects/omgee.png",
    liveUrl: "https://omgee.com.au/au",
    featured: false
  },
  {
    id: "angel-dust-launchpad-and-dex",
    title: "AngelDust LaunchPad & DEX",
    description: "A decentralized LaunchPad and DEX platform supporting token sales, NFT marketplace features.",
    longDescription: "AngelDust is a decentralized LaunchPad and DEX platform designed to facilitate secure token launches and fundraising through private and public sales. It features custom-built smart contracts for DEX trading, liquidity pools, and a unique tipping mechanism with dynamic, automated fund splitting across multiple stakeholders. The platform also integrates NFT marketplace capabilities, supporting ERC-721, ERC-4907, and ERC-20 standards for buying, selling, and short-term asset rentals. With a focus on gas optimization (~15% improvement) and secure deployments, AngelDust ensures a scalable and reliable ecosystem for both token creators and users.",
    technologies: ["Solidity", "Hardhat", "Binance", "React.js", "Node.js", "JavaScript", "Bootstrap", "Wagmi", "Wallet Connect", "Web3.js", "MySql"],
    achievements: [
      "Designed and deployed smart contracts for token launches, DEX exchanges, and liquidity pools, enabling decentralized fundraising with private and public sale support.",
      "Built a tipping contract with dynamic fund-splitting logic, handling secure contribution across multiple stakeholders with 100% automated.",
      "Developed marketplace functionalities for NFTs using ERC-721, ERC-4907, and ERC-20 standards, ensuring smooth buy/sell and temporary asset rentals.",
      "Improved smart contract gas efficiency by ~15% and ensured secure deployment, contributing to platform stability and scalability."
    ],
    image: "/images/projects/angledust.jpeg",
    liveUrl: "https://launchpad.angeldust.org/",
    featured: false
  },


];