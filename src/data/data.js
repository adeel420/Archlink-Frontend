import { Code, Smartphone, Palette, TrendingUp, Users } from "lucide-react";
import { LuTarget } from "react-icons/lu";
import {
  MdOutlineRemoveRedEye,
  MdContactMail,
  MdMeetingRoom,
} from "react-icons/md";
import { PiMedalFill } from "react-icons/pi";
import { FaRegClock, FaLocationDot } from "react-icons/fa6";
import {
  FaHeadphonesAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import { portfolioAssets } from "../assets/assets";
import { ImBullhorn } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";

export const servicesData = [
  {
    logo: Code,
    title: "Web Development",
    desc: "Responsive, fast, and scalable websites",
  },
  {
    logo: Smartphone,
    title: "App Development",
    desc: "Android & iOS mobile apps tailored to your business",
  },
  {
    logo: Palette,
    title: "UI/UX Design",
    desc: "Intuitive and engaging user experiences",
  },
  {
    logo: TrendingUp,
    title: "Digital Marketing",
    desc: "SEO, branding, and social media campaigns",
  },
];

export const testimonalsData = [
  {
    title: "They delivered exactly what we needed. Highly professional!",
    name: "Sarah Khan",
    designation: "CEO at Healthly",
  },
  {
    title: "Great UI/UX and smooth development process!",
    name: "Ali Raza",
    designation: "Founder of TechEdge",
  },
  {
    title:
      "Their communication and support were top-notch. The final product exceeded our expectations!",
    name: "Amina Sheikh",
    designation: "Marketing Head at BrandCore",
  },
];

export const missionData = [
  {
    logo: LuTarget,
    title: "Our Mission",
    desc: "To deliver high-performance digital solutions that solve real business problems and empower organizations to achieve their goals through innovative technology.",
  },
  {
    logo: MdOutlineRemoveRedEye,
    title: "Our Vision",
    desc: "To become a global leader in web, app, and branding services, setting new standards for digital excellence and innovation in the technology industry.",
  },
];

export const portfolioData = [
  {
    title: "Ecommerce",
    service: "Web Development",
    img: portfolioAssets.portfolio1,
    projectLink: "https://mern-stack-ecommerce-frontend-nine.vercel.app/",
  },
  {
    title: "Doctor Appointment",
    service: "Web Development",
    img: portfolioAssets.portfolio6,
    projectLink: "https://doctor-appointment-frontend-tau.vercel.app/",
  },
  {
    title: "Twitter Clone",
    service: "Web Development",
    img: portfolioAssets.portfolio3,
    projectLink: "https://twitter-clone-frontend-nu.vercel.app/",
  },
  {
    title: "Blog App",
    service: "Web Development",
    img: portfolioAssets.portfolio4,
    projectLink: "https://blog-app-frontend-sigma.vercel.app/",
  },
  {
    title: "News App",
    service: "Web Development",
    img: portfolioAssets.portfolio5,
    projectLink: "",
  },
  {
    title: "Health Care App",
    service: "Mobile App",
    img: portfolioAssets.portfolio7,
    projectLink: "",
  },
  {
    title: "SaaS Dashboard",
    service: "UI/UX Design",
    img: portfolioAssets.portfolio8,
    projectLink: "",
  },
  {
    title: "Branding Project",
    service: "Digital Marketing",
    img: portfolioAssets.portfolio9,
    projectLink: "",
  },
];

export const teamMembersData = [
  {
    name: "Sarah",
    role: "CEO & Founder",
    desc: "Visionary leader with 5+ years in tech industry.",
  },
  {
    name: "Abdullah",
    role: "Frontend Developer",
    desc: "Crafting beautiful UI experiences.",
  },
  {
    name: "Ali",
    role: "Backend Developer",
    desc: "Building secure and scalable APIs.",
  },
];

export const whyChooseData = [
  { logo: Users, title: "Expert Team" },
  { logo: PiMedalFill, title: "Proven Portfolio" },
  { logo: FaRegClock, title: "Timely Delivery" },
  { logo: FaHeadphonesAlt, title: "Ongoing Support" },
];

export const servicePageData = [
  {
    id: 0,
    logo: Code,
    mainImg: portfolioAssets.webDevelopment,
    title: "Web Development",
    desc: "We build responsive websites using the latest technologies like React, Next.js, and Node.js. <br/><br/> At our core, we specialize in crafting fully responsive, high-performance websites tailored to meet modern business needs. Leveraging cutting-edge technologies like React, Next.js, and Node.js, we create seamless digital experiences that are not only visually appealing but also incredibly fast, scalable, and secure. <br/><br/> Our frontend development is powered by React and Next.js, enabling us to build interactive user interfaces with blazing-fast performance and smooth navigation. We prioritize accessibility, responsiveness, and pixel-perfect designs that look great on every device — from mobile phones to desktop monitors. <br/><br/> On the backend, we utilize Node.js to develop scalable APIs and real-time applications that integrate effortlessly with your business logic. Whether you're looking to build a simple marketing website or a complex, data-driven web application, our team has the skills and experience to bring your vision to life. <br/><br/> We follow industry best practices such as component-based architecture, code splitting, server-side rendering (SSR), and API-first development, ensuring your website performs exceptionally well in both user experience and search engine optimization (SEO). <br/><br/> With a strong focus on performance, security, and maintainability, we don't just deliver websites — we deliver powerful digital solutions that help you stand out in a competitive online landscape.",
    keyFeatures: [
      "Responsive Design",
      "Modern Frameworks",
      "Performance Optimized",
      "SEO Friendly",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    link: "/service/web-dev",
  },
  {
    id: 1,
    logo: Smartphone,
    mainImg: portfolioAssets.mobileApp,
    title: "App Development",
    desc: "From planning to deployment, we create mobile apps for Android and iOS that users love. <br/><br/> From initial concept to final deployment, we specialize in building high-quality mobile applications for both Android and iOS platforms that deliver real value and seamless experiences to end-users. Our team handles every stage of the development lifecycle — including planning, UI/UX design, development, testing, and deployment — with precision, creativity, and a user-first mindset. <br/><br/> We begin with thorough consultation and planning, where we collaborate closely with our clients to understand their goals, target audience, and market demands. From there, our designers craft intuitive and visually stunning user interfaces that not only align with your brand but also enhance user engagement and retention. <br/><br/> On the technical side, we leverage modern frameworks like React Native and Flutter to build cross-platform apps, or we go fully native using Kotlin for Android and Swift for iOS when performance and device-level integration are key priorities. Our codebase is clean, scalable, and optimized for performance to ensure smooth functionality across all devices and screen sizes. <br/><br/> Beyond development, we integrate powerful features such as push notifications, real-time data syncing, geolocation, in-app payments, and offline support to make your app robust and user-friendly. Our QA engineers conduct rigorous testing across multiple devices and scenarios to eliminate bugs and deliver a seamless user experience. <br/><br/> Once your app is polished and ready, we handle app store submissions, compliance checks, and final deployment to Google Play Store and Apple App Store. But our journey doesn’t end there — we offer ongoing maintenance, updates, and feature enhancements to keep your app competitive and in top shape. <br/><br/> Whether you're launching a startup MVP or scaling an enterprise-grade solution, we’re committed to building mobile applications that not only look great and perform flawlessly, but also make a lasting impact on your users and your business.",
    keyFeatures: [
      "Cross-Platform Development",
      "Native Performance",
      "User-Friendly Interface",
      "App Store Optimization",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    link: "/service/app-dev",
  },
  {
    id: 2,
    logo: Palette,
    mainImg: portfolioAssets.uiUx,
    title: "UI/UX Design",
    desc: "Our designs are user-centered, clean, and focused on conversion. <br/><br/> Our design philosophy revolves around one core principle — putting the user first. We craft clean, intuitive, and engaging digital experiences that are not only visually appealing but also strategically designed to drive user satisfaction, engagement, and conversions. Whether it’s a website, mobile app, SaaS dashboard, or eCommerce platform, every pixel we design has a purpose. <br/><br/> We begin every project with in-depth research and discovery, working closely with stakeholders to understand business goals, user behavior, and industry standards. This is followed by competitive analysis, user personas, and user journey mapping to ensure that every design decision is backed by insight and data. We don’t guess — we design with intention. <br/><br/> Our team of experienced UI/UX designers specializes in creating modern, responsive, and accessible interfaces that deliver seamless user experiences across all devices and screen sizes. From wireframes and low-fidelity prototypes to fully polished visual mockups, we ensure a smooth and transparent design process that allows for feedback and collaboration at every stage. <br/><br/> With a strong emphasis on usability, clarity, and aesthetics, our interfaces minimize friction and maximize user satisfaction. But we don’t stop there — we also focus heavily on conversion optimization, designing call-to-actions, layouts, and flows that guide users effortlessly toward taking action, whether it's signing up, making a purchase, or submitting a form. <br/><br/> Every design is developed with a deep understanding of modern interaction patterns, visual hierarchy, color psychology, and accessibility standards (WCAG). We ensure that your digital product is not only stunning but also inclusive, scalable, and aligned with your brand identity. <br/><br/> Whether you're launching a new product, refreshing an outdated interface, or optimizing for better engagement and sales, our UI/UX design services will help you create meaningful digital experiences that convert users into loyal customers.",
    keyFeatures: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    link: "/service/ui-ux-design",
  },
  {
    id: 3,
    logo: TrendingUp,
    mainImg: portfolioAssets.digitalMarketing,
    title: "Digital Marketing",
    desc: "We help brands grow online through targeted SEO, paid ads, and social content. <br/><br/> In today’s fast-moving digital landscape, simply having an online presence isn’t enough — you need a strategic approach that drives real growth. We help brands thrive and scale online through a powerful mix of targeted SEO, high-converting paid advertising, and engaging social media content that connects with the right audience at the right time. <br/><br/> Our digital marketing strategies are data-driven, result-oriented, and tailored specifically to your business goals. We begin by conducting a thorough brand and market audit to understand your strengths, opportunities, audience behavior, and competitor landscape. Based on this, we build a custom roadmap that blends organic and paid tactics for maximum ROI. <br/><br/> With Search Engine Optimization (SEO), we focus on improving your visibility in search engines through smart keyword targeting, on-page optimization, technical improvements, and authoritative backlink strategies. Whether it’s a local business trying to rank on Google Maps or an international eCommerce site aiming to capture global traffic, our SEO techniques are built to scale. <br/><br/> For businesses that want immediate results, we run high-performing paid ad campaigns across platforms like Google Ads, Meta (Facebook/Instagram) Ads, YouTube, and LinkedIn. From compelling ad copy and creative visuals to A/B testing and conversion tracking, we manage every aspect of your campaigns to ensure your ad budget delivers real, measurable outcomes. <br/><br/> Beyond search and ads, we build your brand presence on social media with scroll-stopping content, strategic posting schedules, influencer collaborations, and engagement-driven community management. We help you establish a voice that resonates and builds trust with your audience — turning followers into fans and fans into customers. <br/><br/> And most importantly, we believe in transparency. You’ll receive detailed analytics, performance dashboards, and regular insights so you can track progress, measure results, and refine your strategy continuously. <br/><br/> Whether you’re a startup looking to build your first audience or an established business ready to scale, our integrated digital marketing solutions help you stand out, get found, and grow faster online.",
    keyFeatures: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Marketing",
      "Content Strategy",
    ],
    technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush"],
    link: "/service/digital-marketing",
  },
];

export const contactData = [
  { logo: FaLocationDot, title: "Address", val: "Lahore, Pakistan" },
  { logo: FaPhoneAlt, title: "Phone", val: "+92 328 783 1517" },
  { logo: FaEnvelope, title: "Email", val: "Archlinktechnology@gmail.com" },
];

export const portfolioPageData = [
  {
    id: 0,
    img: portfolioAssets.portfolio1,
    title: "Ecommerce Website",
    category: "Web Development",
    description: "This is an ECommerce website built using the MERN stack.",
    projectLink: "https://mern-stack-ecommerce-frontend-nine.vercel.app/",
    githubLink: "https://github.com/adeel420/Mern-stack-Ecommerce-Frontend.git",
  },
  {
    id: 1,
    img: portfolioAssets.portfolio2,
    title: "Chat Application",
    category: "Web Development",
    description:
      "This is an chat application website built using the MERN stack.",
    projectLink: "https://chat-app-frontend-phi-lovat.vercel.app",
    githubLink: "https://github.com/adeel420/Chat-App-frontend.git",
  },
  {
    id: 2,
    img: portfolioAssets.portfolio3,
    title: "Twitter Clone",
    category: "Web Development",
    description: "This is an twitter clone built using the MERN stack.",
    projectLink: "https://twitter-clone-frontend-nu.vercel.app/",
    githubLink: "https://github.com/adeel420/Twitter-Clone-Frontend.git",
  },
  {
    id: 3,
    img: portfolioAssets.portfolio4,
    title: "Blog Website",
    category: "Web Development",
    description: "This is an blog website built using the MERN stack.",
    projectLink: "https://blog-app-frontend-sigma.vercel.app/",
    githubLink: "https://github.com/adeel420/Blog-App-Frontend",
  },
  {
    id: 4,
    img: portfolioAssets.portfolio5,
    title: "News App",
    category: "Web Development",
    description: "This is an news app built using the MERN stack.",
    projectLink: "",
    githubLink: "",
  },
  {
    id: 5,
    img: portfolioAssets.portfolio6,
    title: "Doctor Appointment",
    category: "Web Development",
    description:
      "This is an doctor appointment website built using the MERN stack.",
    projectLink: "https://doctor-appointment-frontend-tau.vercel.app/",
    githubLink: "https://github.com/adeel420/Doctor-Appointment-Frontend",
  },
  {
    id: 6,
    img: portfolioAssets.portfolio7,
    title: "Health Care",
    category: "Mobile App",
    description: "This is an health care app built using the java.",
    projectLink: "",
    githubLink: "",
  },
  {
    id: 7,
    img: portfolioAssets.portfolio8,
    title: "Saas Dashboard",
    category: "UI/UX Design",
    description: "This is an Saas dashboard designed as a UI/UX Designer.",
    projectLink: "",
    githubLink: "",
  },
  {
    id: 8,
    img: portfolioAssets.portfolio9,
    title: "Branding Project",
    category: "Digital Marketing",
    description: "This is a branding project built in digital marketing.",
    projectLink: "",
    githubLink: "",
  },
];

export const careerJobsData = [
  {
    title: "Frontend Developer",
    time: "Full Time",
    location: "Onsite",
    desc: "Join our team to build modern, responsive web applications using React, Next.js, and TypeScript.",
  },
  {
    title: "UI/UX Designer",
    time: "Part-time",
    location: "Hybrid",
    desc: "Create beautiful and intuitive user experiences for web and mobile applications.",
  },
  {
    title: "Mobile App Developer",
    time: "Part-time",
    location: "Hybrid",
    desc: "Join our team to build modern, responsive mobile applications using Java, Flutter, and React Native.",
  },
  {
    title: "Digital Marketing Intern",
    time: "Internship",
    location: "On-site",
    desc: "Learn and contribute to digital marketing campaigns, social media management, and content creation.",
  },
];

export const dashboardBtnData = [
  { id: 0, logo: FaUser, text: "All Users" },
  { id: 1, logo: ImBullhorn, text: "Job Applicant Users" },
  { id: 2, logo: ImBullhorn, text: "Quote Users" },
  { id: 3, logo: MdContactMail, text: "Contact Users" },
  { id: 4, logo: MdMeetingRoom, text: "Meetings" },
  { id: 5, logo: IoIosLogOut, text: "Logout" },
];
