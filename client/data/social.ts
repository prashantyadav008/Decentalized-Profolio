export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/prashantyadav008",
    icon: "github"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prashantyadav008/",
    icon: "linkedin"
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:prashantyadv008@gmail.com",
    icon: "mail"
  },

];