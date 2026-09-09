/* ============================================================
   JOFALIN PORTFOLIO
   PERSONAL DATA CENTER

   EDIT THIS FILE ONLY.

   Add or update:
   - Personal information
   - Profile image
   - Skills
   - Projects
   - Education
   - Experience
   - Certifications
   - Social links

   PROJECT COLORS ARE AUTOMATIC.
   You only add the project details.
   ============================================================ */

const PORTFOLIO = {

    /* =========================================================
       PERSONAL INFORMATION
       ========================================================= */

    personal: {

        name: "JOFALIN",

        fullName: "JOFALIN J",

        role: "CREATIVE DEVELOPER",

        tagline:
            "I build interactive digital experiences using technology, design and creativity.",

        about:
            "I am a information technology  student interested in web development, UI/UX, artificial intelligence, 3D design and creative technology.",

        location:
            "Tamil Nadu, India",

        college:
            "St. Xavier's Catholic College of Engineering",

        degree:
            "B.Tech Information Technology",

        year:
            "2023 — PRESENT",

        school:
            "Amala Matric Higer Secondary School",

        careerGoal:
            "3D MODEL DESIGNER / CREATIVE DEVELOPER",

        /* =====================================================
           PROFILE IMAGE

           Put your image inside:
           assets/profile.jpg

           Or change this path to another image.
           ===================================================== */

        profileImage:
            "assets/profile.jpeg",

        profileImageAlt:
            "JOFALIN profile photo"
    },


    /* =========================================================
       SKILLS
       ========================================================= */

    skills: [

        {
            name: "HTML",
            category: "FRONTEND",
            level: 90
        },

        {
            name: "CSS",
            category: "FRONTEND",
            level: 85
        },

        {
            name: "JavaScript",
            category: "PROGRAMMING",
            level: 80
        },

        {
            name: "Java",
            category: "PROGRAMMING",
            level: 75
        },

        {
            name: "Python",
            category: "PROGRAMMING",
            level: 80
        },

        {
            name: "UI / UX",
            category: "DESIGN",
            level: 85
        },

        {
            name: "Figma",
            category: "DESIGN",
            level: 85
        },

        {
            name: "GitHub",
            category: "TOOLS",
            level: 75
        },

        {
            name: "Machine Learning",
            category: "AI / DATA",
            level: 65
        },

        {
            name: "Blender",
            category: "3D",
            level: 60
        }

    ],


    /* =========================================================
       PROJECTS

       Add a new project by copying one object.

       IMPORTANT:
       Do NOT add a color.
       Colors rotate automatically:
       01 BLACK
       02 RED
       03 BLUE
       04 WHITE
       05 DARK
       06 BLACK again
       ...and so on.
       ========================================================= */

    projects: [

        {
            number: "01",
            title: "OpportunityPulse",
            category: "AI / WEB",
            description:
                "AI-powered unified student discovery portal that helps students discover internships, hackathons, projects and opportunities.",
            technologies:
                "AI • WEB • PYTHON • JAVASCRIPT",
            year: "2026",
            status: "ACTIVE",
            link: "#"
        },

        {
            number: "02",
            title: "Jofculture",
            category: "UI / UX",
            description:
                "Agricultural support application providing crop scanning, market prices, soil health, government schemes and farmer-focused tools.",
            technologies:
                "FIGMA • UI/UX • MOBILE",
            year: "2026",
            status: "DESIGN",
            link: "#"
        },
        {
            number: "03",
            title: "Movie Ticket Booking Management System",
            category: "PRODUCT",
            description:
                "eveloped a Java GUI application for movie listings, seat selection, and ticket booking with Admin & Customer modules, secure login, and real-time booking management.",
            technologies:
                "UI/UX • FIGMA • PRODUCT DESIGN • WEBSITE ",
            year: "2025",
            status: "COMPLETED",
            link: "#"
        },

        {
            number: "04",
            title: "Smart Soil Analyzer and Crop Advisor (IOT)",
            category: "PRODUCT",
            description:
                "Built an ESP32-based soil monitoring system using DHT11, moisture, and pH sensors to analyze soil health and provide crop recommendations for improved agricultural decision-making",
            technologies:
                "UI/UX • IOT • PRODUCT DESIGN",
            year: "2026",
            status: "COMPLETED",
            link: "#"
        },

        {
            number: "05",
            title: "AI-Powered Crowd Intelligence and Decision Support System",
            category: "PRODUCT",
            description:
                "AI-powered crowd intelligence and decision support concept focused on analyzing crowd conditions and supporting better decisions.",
            technologies:
                "UI/UX • FIGMA • PRODUCT DESIGN",
            year: "2026",
            status: "COMPLETED",
            link: "#"
        }

    ],


    /* =========================================================
       EDUCATION
       ========================================================= */

    education: [

        {
            year: "2023 — PRESENT",
            institution: "St. Xavier's Catholic College of Engineering ",
            course: "B.Tech INFORMATION TECHNOLOGY",
            description:
                "NCC CADET and  ECO CLUB MEMBER"
        },

        {
            year: "2021 — 2023",
            institution: "AMALA MATRIC  HIGHER SECONDARY SCHOOL",
            course: "COMPUTER SCIENCE",
            description:
                "#"
        }

    ],


    /* =========================================================
       EXPERIENCE
       ========================================================= */

    experience: [

        {
            year: "2025",
            organization: "KELTRON, Trivandrum",
            role: "INTERN",
            description:
                "Gained hands-on experience in IoT technologies, sensor integration, and embedded programming using ESP32 and Arduino platforms. Independently worked on a mini-project “Smart Soil Analyzer & Crop Advisor”, applying IoT for smart agriculture solutions."
        }

    ],


    /* =========================================================
       CERTIFICATIONS
       ========================================================= */

    certifications: [

        {
            name: "YOUR CERTIFICATION",
            organization: "ISSUING ORGANIZATION",
            year: "2026",
            link: "#"
        }

    ],


    /* =========================================================
       SOCIAL MEDIA / CONTACT
       ========================================================= */

    contact: {

        email:
            "jofalin.502330@sxcce.edu.in",

        github:
            "https://github.com/jofalin",

        linkedin:
            "https://www.linkedin.com/in/jofalin-j-680b132a3?utm_source=share_via&utm_content=profile&utm_medium=member_ios",

        instagram:
            "https://www.instagram.com/_jo_fa_lin_?stkn=MTQ2YzF1cGs3ZHl0Nw%3D%3D&utm_source=qr",

        portfolio:
            "https://yourwebsite.com",

        resume:
            "assets/resume.pdf"
    }

};
