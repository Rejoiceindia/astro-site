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
        name: "Shivam Gupta",
        bio: "Parashant Zende  is the visionary behind Rejoice Estate Consultants. Leveraging an extensive network of over 10,000 real estate agents, he brings unparalleled industry insight and connections to our team.",
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
    {
        name: "Aryan Sharma",
        bio: "Aryan Sharma is an intern and a full-stack JavaScript developer at Rejoice Estate Consultants Dedicated to contributing his technical skills and knowledge to the team.",
        position: "Intern",
        image:
            "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/Aryansharma",
        github: "https://github.com/23Aryansharma11",
        portfolio: "https://portfolio-aryan-ten.vercel.app/"
    },
];

const cloudImages = {
    homeImageOne: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/HomeWelcomeImageOne",
    homeImageTwo: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/homeImage2",
    footer: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/footerImage",
    inquiry: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/inquiryImage",
    career: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/career",
    about: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/aboutUsimage"
}

interface Contributor {
    name: string;
    image: string;
    description: string;
    github: string;
}
const contributors: Contributor[] = [
    {
        name: "Alice Johnson",
        image: "https://img.freepik.com/free-photo/medium-shot-smiley-woman-outdoors_23-2150445084.jpg?t=st=1723190917~exp=1723194517~hmac=ef4adce9de61769b5b06d1d64ff90776360a84b6481380997d1e7dc8d137cda6&w=740",
        description: "Alice contributed critical bug fixes and optimizations to our front-end code.",
        github: "https://github.com/alicejohnson"
    },
    {
        name: "Bob Smith",
        image: "https://img.freepik.com/free-photo/man-black-jacket-standing-park-waiting-someone-high-quality-photo_144627-60188.jpg?ga=GA1.1.1742698008.1717774631&semt=ais_hybrid",
        description: "Bob enhanced our back-end infrastructure and developed essential APIs.",
        github: "https://github.com/bobsmith"
    },
    {
        name: "Charlie Davis",
        image: "https://img.freepik.com/free-photo/young-man-traveling-around-world_23-2148195186.jpg?ga=GA1.1.1742698008.1717774631&semt=ais_hybrid",
        description: "Charlie designed and implemented key UI components, improving our user interface.",
        github: "https://github.com/charliedavis"
    },
    {
        name: "Dana Lee",
        image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?ga=GA1.1.1742698008.1717774631&semt=ais_hybrid",
        description: "Dana streamlined our development workflow and managed key project integrations.",
        github: "https://github.com/danalee"
    }
];

interface ProjectData {
    title: string;
    description: string;
    image: string;
    github: string;
    website?: string;
}
const ourProjects: ProjectData[] = [
    {
        title: "FOS",
        description: "FOS offers a unique blend of traditional web presence reliability with dynamic digital capabilities. It is designed to help businesses thrive in the digital landscape by providing a flexible, secure, and collaborative environment. Whether you are a small business or a large enterprise, FOS provides the tools and infrastructure needed to enhance your online presence and engage effectively with your audience.",
        image: "https://img.freepik.com/free-vector/worldwide-connection_53876-90449.jpg?t=st=1723213484~exp=1723217084~hmac=35a3f543de207af5ba37e0aa6d0bc1f5855a411fefb6af3396830b567ce10e97&w=1380",
        github: "#",
        website: "#"
    }
]

const endorsedProjects: ProjectData[] = [
    {
        title: "Firecrawl",
        description: "Firecrawl is an emerging tool that offers powerful website crawling and data extraction capabilities, making it useful for converting website content into structured data formats suitable for large language models and other applications. The project is still under active development but provides functional capabilities for local use.",
        image: "https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/Firecrawl",
        github: "https://github.com/mendableai/firecrawl",
        website: "https://www.firecrawl.dev/"
    }
]
export {
    Team,
    cloudImages,
    contributors,
    ourProjects,
    endorsedProjects
}