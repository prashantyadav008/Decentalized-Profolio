export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Sushila Devi Bansal College of Technology",
    location: "Near Rau, Indore, India",
    startDate: "August 2016",
    endDate: "September 2020",
    gpa: "7.6/10.00"

  },
  {
    id: "12th",
    degree: "Higher Secondary Certificate (HSC- MP Board) – Science Stream",
    institution: "Adarsh Boudhik H. S. School",
    location: "Indore, India",
    startDate: "July 2015",
    endDate: "May 2016",
    gpa: "7.02/10.00"
  },
  {
    id: "10th",
    degree: "Secondary School Certificate (SSC - MP Board)",
    institution: "Adarsh Boudhik H. S. School",
    location: "Indore, India",
    startDate: "August 2013",
    endDate: "March 2014",
    gpa: "6.7/10.00"
  }
];