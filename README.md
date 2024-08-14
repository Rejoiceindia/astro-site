
# Rejoice Estate Consultants

Welcome to Rejoice Estate Consultants, your trusted real estate experts in Mumbai's Western Suburbs. Our dedicated team offers comprehensive services, including buying, selling, leasing, and investing in properties. With a deep understanding of the local market and a vast network of 10,000+ real estate agents, we ensure you receive the best opportunities and insights. Our innovative solutions and exceptional customer service are designed to make your real estate journey smooth and successful. Contact us today to experience the Rejoice Estate Consultants difference and achieve your real estate goals with confidence.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Site Structure](#site-structure)
- [Update Data](#update-data)


## Introduction
Rejoice Estate Consultants is built using **Astro** with support for **TypeScript**. The project is managed using **pnpm** as the package manager. It includes a variety of components and modules, such as a team section, project listings, and contributor acknowledgments.

## Getting Started
To get started with the project, clone the repository and navigate into the project directory. Then, install the dependencies using pnpm:

```bash
git clone https://github.com/Rejoiceindia/astro-site.git
cd rejoice-estate-consultants
pnpm install 
```

To Run the Development server:
``` 
pnpm run dev
```

## Site Structure
The site is structured as follows:
- **Home Page**: Contains a welcoming section with images and an overview of the services offered.
- **About Us**: Provides information about the company's mission and values
- **Projects**: Provides information about the company's Projects.
- **Meet the Team**: Showcases the team members and their roles within the company.
- **Tech**: Provides information about the Tech used by the company.
- **Inquiry**: Provides a form for users to contact the company directly for buisness inquiries.
- **Career**: Provides a form for users to contact the company directly for Career inquiries.

## Update Data
To streamline updates and maintain consistency across our project, all data related to team members, project details, and contributors is consolidated in the constants.ts file located at the root of the project directory. This centralization simplifies data management and ensures all relevant information can be accessed and modified in one place.

- **Team Members**:  Defined by the TeamMember interface, which includes properties for name, bio, position, image, and optional social media links, all the social links are optional.
```
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
```

- **Project Data**:  Defined by the ProjectData interface, encompassing the project's title, description, image, GitHub link, and optional website link.
```
interface ProjectData {
    title: string;
    description: string;
    image: string;
    github: string;
    website?: string;
}
```

- **Contributors**:  Defined by the Contributor interface, including the contributor's name, image, description, and GitHub link.
```
interface Contributor {
    name: string;
    image: string;
    description: string;
    github: string;
}
```

### Example Data Entries
Below are examples of how the data is organized within the constants.ts file:

#### Team Members
```
const Team: TeamMember[] = [
    {
        name: "Prashant Zende",
        bio: "Parashant Zende is the visionary behind Rejoice Estate Consultants. Leveraging an extensive network of over 10,000 real estate agents, he brings unparalleled industry insight and connections to our team.",
        position: "Founder",
        image: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/MrPrashant",
        instagram: "https://www.instagram.com/realestatewithprashant/?igsh=ZGUzMzM3NWJiOQ%3D%3D",
        facebook: "https://www.facebook.com/rejoiceestateconsultants?mibextid=ZbWKwL",
    },
    // ... other team members
];
```

#### Project Data
```
const ourProjects: ProjectData[] = [
    {
        title: "FOS",
        description: "FOS offers a unique blend of traditional web presence reliability with dynamic digital capabilities. It is designed to help businesses thrive in the digital landscape by providing a flexible, secure, and collaborative environment. Whether you are a small business or a large enterprise, FOS provides the tools and infrastructure needed to enhance your online presence and engage effectively with your audience.",
        image: "https://img.freepik.com/free-vector/worldwide-connection_53876-90449.jpg?t=st=1723213484~exp=1723217084~hmac=35a3f543de207af5ba37e0aa6d0bc1f5855a411fefb6af3396830b567ce10e97&w=1380",
        github: "#",
        website: "#"
    }
    // ... other projects
];

```

#### Contributors
```
const contributors: Contributor[] = [
    {
        name: "Alice Johnson",
        image: "https://img.freepik.com/free-photo/medium-shot-smiley-woman-outdoors_23-2150445084.jpg?t=st=1723190917~exp=1723194517~hmac=ef4adce9de61769b5b06d1d64ff90776360a84b6481380997d1e7dc8d137cda6&w=740",
        description: "Alice contributed critical bug fixes and optimizations to our front-end code.",
        github: "https://github.com/alicejohnson"
    },
    // ... other contributors
];


```

#### Cloud Images
Additionally, the file stores paths to cloud-hosted images:

```
const cloudImages = {
    homeImageOne: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/HomeWelcomeImageOne",
    homeImageTwo: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/homeImage2",
    footer: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/footerImage",
    inquiry: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/inquiryImage",
    career: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/career",
    about: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/aboutUsimage"
};
```

#### Accessing and Updating Data
To make any changes to the team members, project data, contributors, or cloud images, edit the relevant sections in the constants.ts file. This centralized approach helps maintain data consistency and eases the update process for the project.