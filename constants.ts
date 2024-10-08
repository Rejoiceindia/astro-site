interface TeamMember {
  name: string;
  bio: string;
  position: string;
  image: string;
  instagram?: string;
  facebook?: string;
  github?: string;
  youtube?: string;
  portfolio?: string;
}
interface ProjectData {
  title: string;
  description: string;
  image: string;
  github: string;
  website?: string;
}
interface Contributor {
  name: string;
  image: string;
}

const Team: TeamMember[] = [
  {
    name: "Prashant Zende",
    bio: "Parashant Zende  is the visionary behind Rejoice Estate Consultants. Leveraging an extensive network of over 10,000 real estate agents, he brings unparalleled industry insight and connections to our team.",
    position: "Founder",
    image:
      "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/MrPrashant",
    instagram:
      "https://www.instagram.com/realestatewithprashant/?igsh=ZGUzMzM3NWJiOQ%3D%3D",
    facebook:
      "https://www.facebook.com/rejoiceestateconsultants?mibextid=ZbWKwL",
  },
  {
    name: "Kamal Raj",
    bio: "Kamal Raj our tech co-founder is Wikipedia of tech insights and knowledge. His indepth insights & attention to detail is visible in his YouTube channel linked below.",
    position: "Tech Co-Founder",
    image:
      "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/MrKamal",
    github: "https://kamalabot.github.io/M3nD3/",
    youtube: "https://www.youtube.com/@insightbuilder",
  },
  {
    name: "Jeremy Shows",
    bio: "Jermey shows our tech co-founders is python wizard mastered the art of integration of AI in his every day work and business operations.",
    position: "Tech Co-Founder",
    image:
      "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/MrJeremy",
    github: "https://github.com/DigitalHallucinations",
  },
  {
    name: "Fredrick Pwol",
    bio: "Fredrick is unparalleled patient guy with expertise in AI/ML. His curiosity fuels his passion as an tech solutions wiz.",
    position: "Tech Co-Founder",
    image:
      "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/fredrik",
    github: "https://github.com/Fredpwol",
  },
  {
    name: "Shivam Gupta",
    bio: "Shivam has a strong background in machine learning and a passion for data-driven insights, He is known for his analytical mindset and innovative approach.",
    position: "Intern",
    image:
      "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/MrGupta",
    github: "https://github.com/shivamgcodes",
  },
  {
    name: "Tejas Mali",
    bio: "Parashant Zende  is the visionary behind Rejoice Estate Consultants. Leveraging an extensive network of over 10,000 real estate agents, he brings unparalleled industry insight and connections to our team.",
    position: "Intern",
    image:
      "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/MrTejas",
    github: "https://github.com/tejas485",
  },
];
const cloudImages = {
  homeImageOne:
    "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/HomeWelcomeImageOne",
  homeImageTwo:
    "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/inquiryImage",
  footer:
    "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/footerImage",

  inquiry:
    "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/homeImage2",
  career:
    "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/career",
  about:
    "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/aboutUsimage",
};
const contributors: Contributor[] = [
  {
    name: "Aryan Sharma",
    image:
      "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/Aryansharma",
  },
];
const ourProjects: ProjectData[] = [
  {
    title: "FOS",
    description:
      "FOS offers a unique blend of traditional web presence reliability with dynamic digital capabilities. It is designed to help businesses thrive in the digital landscape by providing a flexible, secure, and collaborative environment. Whether you are a small business or a large enterprise, FOS provides the tools and infrastructure needed to enhance your online presence and engage effectively with your audience.",
    image:
      "https://img.freepik.com/free-vector/worldwide-connection_53876-90449.jpg?t=st=1723213484~exp=1723217084~hmac=35a3f543de207af5ba37e0aa6d0bc1f5855a411fefb6af3396830b567ce10e97&w=1380",
    github: "#",
    website: "#",
  },
];
const endorsedProjects: ProjectData[] = [
  {
    title: "SCOUT-2",
    description:
      "SCOUT is an AI-powered personal assistant that aims to empower people through intelligent, adaptive, and personalized support. Built on a foundation of open-source software and community collaboration, SCOUT offers a transparent and user-controlled approach to AI assistance. It serves as a platform for innovation and experimentation, enabling users to push the boundaries of artificial intelligence across various domains.",
    image:
      "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/scout",
    github: "https://github.com/mendableai/firecrawl",
  },
];
export { Team, cloudImages, contributors, ourProjects, endorsedProjects };
