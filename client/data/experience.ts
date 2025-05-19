// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: 'work' | 'certifications';
}

export const experiences: Experience[] = [
  // Regular job positions
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    company: "CDN Solutions Group",
    location: "Indore, India",
    startDate: "August 2022",
    endDate: "February 2025",
    description: "Implemented 95+ smart contracts in DeFi, NFT, and gaming ecosystems, with focus on gas-efficient logic, wallet integration, and secure fund flows.",
    achievements: [
      "Developed and deployed 95+ smart contracts across DeFi, staking, ICOs, NFT marketplaces, and gaming projects with 95-98% test coverage and gas-optimized logic.",
      "Implemented complex financial flows like amortization schedules, balloon payments, and profit-sharing models using custom smart contracts for loan repayments and fund distribution.",
      "Contributed to Web3 wallet integration using Wagmi and MetaMask, ensuring smooth wallet connectivity and reliable blockchain interactions within the React-based front-end.",
      "Enhanced escrow, staking, and token release mechanisms, improving transactional security and platform performance by 30% across multiple dApps.",
    ],
    type: 'work'
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    company: "Samosys Technologies",
    location: "Indore, India",
    startDate: "September 2020",
    endDate: "May 2022",
    description: "Built REST APIs, full-stack features, and integrated NFT smart contracts as a Software Developer using Node.js and PHP.",
    achievements: [
      "Developed and maintained REST APIs and full-stack features in Node.js and PHP for a product-based platform with over 350K+ active users, optimizing app performance and reliability.",
      "Collaborated on mobile application backend api integration, resolving critical bugs and improving data handling for seamless user experience.",
      "Initiated blockchain development journey by writing and integrating NFT smart contracts with Node.js services, laying the foundation for Web3 functionality.",
    ],
    type: 'work'
  },
  {
    id: "industrial-training",
    title: "Industrial Training",
    company: "Unitel Works Wireless",
    location: "Indore, India",
    startDate: "June 2019",
    endDate: "September 2019",
    description: "Completed 75-day industrial training in PHP and frameworks like CodeIgniter & Laravel, gaining hands-on experience in real-world project workflows within a professional team environment.",
    achievements: [
      "Contributed to the development of a live e-commerce project, gaining exposure to production-level codebases.",
      "Assisted team members in resolving bugs and urgent issues, helping meet tight client deadlines efficiently.",
      "Supported logic building and code implementation, enhancing the team’s productivity and feature delivery."],
    type: 'certifications'
  },
  {
    id: "programming-certification",
    title: "Programming Certification",
    company: "Progressive Institute",
    location: "Indore, India",
    startDate: "May 2017",
    endDate: "August 2018",
    description: "Completed 90-day technical training in C, C++, and PHP at Progressive Institute, building strong programming fundamentals through team-based learning and hands-on exercises.",
    achievements: [
      "Provided peer support by helping batchmates debug and understand programming concepts during collaborative sessions.",
      "Took initiative in guiding the team through both major and minor tasks, demonstrating early leadership and problem-solving skills.",
    ],
    type: 'certifications'
  },
];