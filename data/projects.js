import {
    bluecatDefault,
    bluecatLogoNonBg,
    bluecatLogoBg
}  from '../assets/js/constants.js'

const projects = [
    {
        id: "bluecat_health_monitoring",
        title: "Bluecat Health Monitoring",
        logo: bluecatLogoNonBg,
        image: [
            bluecatDefault,
        ],
        description: "The web application assists companies in overseeing server infrastructure on virtual machines (VMs), focusing on monitoring and optimizing the performance of BlueCat DNS/DHCP Server (BDDS) servers. It offers system information using graphs and alerts users about server issues. Developer responsibilities encompass API creation, enhancing back-end functionality, resolve front-end UI errors, and automating setup and code based on tester test cases.",
        start_date: "08/2023",
        end_date: "10/2023",
        role: "Maintenance, develop UI/UX; Write API in Back-End; Test and bug fixing, review code UI; Setup and code automation by test case.",
        technologies: "Python, Flask Framework, RESTful API, ReactJS, Material-UI, Robot Framework, Cassandra, Docker.",
        link: "",
        notes: "",
    },

    {
        id: "pecan_deluxe",
        title: "Pecan Deluxe",
        logo: "",
        image: [
            "image1.png",
            "image2.png",
        ],
        description: "The web application serves Pecan Deluxe, a confectionery company, enabling users to browse and order products while providing essential product details. Website managers have control over product display, order tracking, and customer feedback. The developer focuses on coding UI modules and addressing both front-end and back-end issues.",
        start_date: "14/01/2022",
        end_date: "25/01/2022",
        role: "Develop UI/UX; Unit test, fix bugs in Front-end and Back-end; Design website modules following architecture.",
        technologies: "JQuery, PHP, Laravel framework, Tailwind CSS, SEO, MySQL.",
        link: "pecandeluxe.com",
        notes: "",
    },

    {
        id: "menlo_security",
        title: "Menlo Security",
        logo: "",
        image: [
            "image1.png",
            "image2.png",
        ],
        description: "Menlo Security provides a cloud-based isolation platform to protect organizations from cyber threats by isolating harmful web elements. The platform acts like a gate, scanning and redirecting internet traffic to secure websites. I have the Automation Tester role involves testing new features and using automation tests for existing functions.",
        start_date: "11/2023",
        end_date: "",
        role: "Test future; code automation to test old function.",
        technologies: "Python, Robot Framework, Selenium.",
        link: "",
        notes: "",
    },

    {
        id: "exam_schedule",
        title: "Website assigning examination schedule of Nha Trang University",
        logo: "",
        image: [
            "image1.png",
            "image2.png",
        ],
        description: "Building a website to support automatic exam scheduling for Nha Trang University. Allows students to view exam schedules, register for exam schedules, view news, etc. Faculty teachers can view and set automatic/manual exam schedules and export exam schedules to Excel. Manage exam schedules by each department, and support students to communicate directly with each other on the website to grasp and arrange time together more effectively.",
        start_date: "15/04/2021",
        end_date: "18/07/2021",
        role: "Maintenance, develop UI/UX Homepage, Admin, and all function; Code the functions in BE; Fix bug and Report",
        technologies: "PHP, Laravel Framework, Tailwind CSS, MySQL.",
        link: "",
        notes: "",
    },

    {
        id: "shop_milk_tea",
        title: "Homita milk tea shop",
        logo: "",
        image: [
            "image1.png",
            "image2.png",
        ],
        description: "Building a website to manage the Homita milk tea shop according to the MVC model. Allows ordering milk tea online via the shopping cart, displaying new items, and sending feedback. CRUD bills, drinks, staff... ",
        start_date: "05/10/2020",
        end_date: "29/10/2020",
        role: "Code the functions of invoice management, feedback management, and sending feedback in BE; Setup folder and project files according to the MVC model",
        technologies: "PHP, Javascript, MVC, Bootstrap, MySQL.",
        link: "",
        notes: "",
    },
];

export default projects;