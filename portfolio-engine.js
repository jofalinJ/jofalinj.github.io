/* ============================================================
   PORTFOLIO ENGINE

   DO NOT EDIT PERSONAL DATA HERE.

   Edit portfolio-data.js instead.
   ============================================================ */


/* ============================================================
   HELPER
   ============================================================ */

function element(id) {
    return document.getElementById(id);
}


function setText(id, value) {

    const el = element(id);

    if (el && value !== undefined) {
        el.textContent = value;
    }

}


/* ============================================================
   PERSONAL INFORMATION
   ============================================================ */

function loadPersonalData() {

    const p = PORTFOLIO.personal;

    setText("brandName", `${p.name} // ${p.role}`);

    setText("heroName", p.name);

    setText("cardName", p.name);

    setText("cardRole", p.role);

    setText("heroIntro", p.tagline);

    setText("fullName", p.fullName);

    setText("college", p.college);

    setText("course", p.degree);

    setText("location", p.location);

    setText("goal", p.careerGoal);

    setText("aboutText", p.about);

    setText("school", p.school);

    setText("footerName", p.name);

    // PROFILE IMAGE
    const profileImage = element("profileImage");

    if (profileImage && p.profileImage) {
        profileImage.src = p.profileImage;
        profileImage.alt = p.profileImageAlt || `${p.name} profile photo`;

        profileImage.onerror = () => {
            profileImage.removeAttribute("src");
            profileImage.classList.add("hero-profile-placeholder");
            profileImage.textContent = "ADD PROFILE PHOTO";
        };
    }

}


/* ============================================================
   SKILLS
   ============================================================ */

function loadSkills() {

    const container = element("skillWall");

    if (!container) return;

    container.innerHTML = "";

    PORTFOLIO.skills.forEach((skill, index) => {

        const card = document.createElement("article");

        card.className = "skill reveal";

        card.style.setProperty(
            "--level",
            `${skill.level}%`
        );

        card.innerHTML = `

            <small>
                ${String(index + 1).padStart(2, "0")}
                / ${skill.category}
            </small>

            <strong>
                ${skill.name}
            </strong>

            <div class="meter">
                <i></i>
            </div>

        `;

        container.appendChild(card);

    });

}


/* ============================================================
   PROJECTS
   ============================================================ */

function loadProjects() {

    const container = element("projectList");

    if (!container) return;

    container.innerHTML = "";

    /*
       AUTOMATIC PROJECT COLOR ROTATION

       Add a new project to portfolio-data.js.
       The next color is assigned automatically.
       No color field is required in the project object.
    */
    const projectColors = [
        {
            bg: "#050505",
            fg: "#ffffff",
            accent: "#ff1744",
            tagBg: "#ffffff",
            tagFg: "#000000",
            shadow: "rgba(255, 23, 68, .30)"
        },
        {
            bg: "#ff1744",
            fg: "#000000",
            accent: "#164dff",
            tagBg: "#ffffff",
            tagFg: "#000000",
            shadow: "rgba(22, 77, 255, .30)"
        },
        {
            bg: "#164dff",
            fg: "#ffffff",
            accent: "#ff1744",
            tagBg: "#ffffff",
            tagFg: "#000000",
            shadow: "rgba(255, 23, 68, .30)"
        },
        {
            bg: "#ffffff",
            fg: "#000000",
            accent: "#ff1744",
            tagBg: "#050505",
            tagFg: "#ffffff",
            shadow: "rgba(0, 0, 0, .22)"
        },
        {
            bg: "#111111",
            fg: "#ffffff",
            accent: "#ffffff",
            tagBg: "#ff1744",
            tagFg: "#ffffff",
            shadow: "rgba(255, 23, 68, .30)"
        }
    ];

    PORTFOLIO.projects.forEach((project, index) => {

        const card = document.createElement("a");

        card.className = "project reveal";

        card.href = project.link || "#";

        // Cycle through the palette automatically.
        const palette = projectColors[index % projectColors.length];

        card.style.setProperty("--project-bg", palette.bg);
        card.style.setProperty("--project-fg", palette.fg);
        card.style.setProperty("--project-accent", palette.accent);
        card.style.setProperty("--project-tag-bg", palette.tagBg);
        card.style.setProperty("--project-tag-fg", palette.tagFg);
        card.style.setProperty("--project-shadow", palette.shadow);

        const projectNumber =
            project.number || String(index + 1).padStart(2, "0");

        card.innerHTML = `

            <div class="project-number">
                ${projectNumber}
            </div>

            <div>

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>

                <p style="
                    margin-top:12px;
                    font-family:monospace;
                    font-size:10px;
                    letter-spacing:1px;
                ">
                    ${project.technologies}
                    /
                    ${project.year}
                </p>

            </div>

            <span class="project-tag">
                ${project.category}
            </span>

        `;

        container.appendChild(card);

    });

}



/* ============================================================
   EDUCATION
   ============================================================ */

function loadEducation() {

    const container = element("educationTimeline");

    if (!container) return;

    container.innerHTML = "";

    PORTFOLIO.education.forEach((item, index) => {

        const article = document.createElement("article");

        article.className = "timeline-item reveal";

        article.innerHTML = `

            <div class="timeline-dot">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="timeline-card">

                <div class="time">
                    ${item.year}
                </div>

                <h3>
                    ${item.institution}
                </h3>

                <p>
                    <strong>${item.course}</strong>
                </p>

                <p>
                    ${item.description}
                </p>

            </div>

        `;

        container.appendChild(article);

    });

}


/* ============================================================
   EXPERIENCE
   ============================================================ */

function loadExperience() {

    const container = element("experienceTimeline");

    if (!container) return;

    container.innerHTML = "";

    PORTFOLIO.experience.forEach((item, index) => {

        const article = document.createElement("article");

        article.className = "timeline-item reveal";

        article.innerHTML = `

            <div class="timeline-dot">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="timeline-card">

                <div class="time">
                    ${item.year}
                </div>

                <h3>
                    ${item.role}
                </h3>

                <p>
                    <strong>${item.organization}</strong>
                </p>

                <p>
                    ${item.description}
                </p>

            </div>

        `;

        container.appendChild(article);

    });

}


/* ============================================================
   CERTIFICATIONS
   (HTML has a #certificationTimeline mount point, but this
   was missing from the original engine — added so the
   CERTIFICATIONS section in portfolio-data.js actually shows.)
   ============================================================ */

function loadCertifications() {

    const container = element("certificationTimeline");

    if (!container) return;

    container.innerHTML = "";

    if (!PORTFOLIO.certifications) return;

    PORTFOLIO.certifications.forEach((item, index) => {

        const article = document.createElement("article");

        article.className = "timeline-item reveal";

        const link = item.link && item.link !== "#"
            ? `<p><a href="${item.link}" target="_blank" rel="noreferrer" style="color:var(--blue);">VIEW CREDENTIAL</a></p>`
            : "";

        article.innerHTML = `

            <div class="timeline-dot">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="timeline-card">

                <div class="time">
                    ${item.year}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    <strong>${item.organization}</strong>
                </p>

                ${link}

            </div>

        `;

        container.appendChild(article);

    });

}


/* ============================================================
   CONTACT
   ============================================================ */

function loadContact() {

    const c = PORTFOLIO.contact;

    const github = element("githubLink");
    const email = element("emailLink");
    const linkedin = element("linkedinLink");
    const instagram = element("instagramLink");
    const resume = element("resumeLink");

    if (github) {

        github.href = c.github;

        github.innerHTML = `
            <small>GITHUB</small>
            ${c.github.replace("https://", "")}
        `;

    }


    if (email) {

        email.href = `mailto:${c.email}`;

        email.innerHTML = `
            <small>EMAIL</small>
            ${c.email}
        `;

    }


    if (linkedin) {

        linkedin.href = c.linkedin;

        linkedin.innerHTML = `
            <small>LINKEDIN</small>
            CONNECT WITH ME
        `;

    }


    if (instagram) {

        instagram.href = c.instagram;

        instagram.innerHTML = `
            <small>SOCIAL</small>
            INSTAGRAM
        `;

    }


    if (resume) {

        resume.href = c.resume;

        resume.innerHTML = `
            <small>RESUME</small>
            OPEN RESUME
        `;

    }

}


/* ============================================================
   LOADER
   (This was missing entirely in the original engine, which is
   why the page got stuck on the loading screen forever — no
   code ever added the ".done" class the CSS was waiting for.)
   ============================================================ */

function hideLoader() {

    const loader = element("loader");

    if (!loader) return;

    // Let the progress-bar CSS animation (1.7s) play out,
    // then a short beat, then reveal the page.
    window.setTimeout(() => {

        loader.classList.add("done");

        // Fully remove it from the layout once the fade-out
        // transition (650ms, set in CSS) has finished.
        window.setTimeout(() => {
            loader.style.display = "none";
        }, 700);

    }, 1900);

}


/* ============================================================
   FOOTER YEAR
   ============================================================ */

function loadYear() {
    setText("year", new Date().getFullYear());
}


/* ============================================================
   LIVE CLOCK (HUD)
   ============================================================ */

function startClock() {

    const clock = element("hudClock");

    if (!clock) return;

    function tick() {

        const now = new Date();

        const h = String(now.getHours()).padStart(2, "0");
        const m = String(now.getMinutes()).padStart(2, "0");
        const s = String(now.getSeconds()).padStart(2, "0");

        clock.textContent = `${h}:${m}:${s}`;

    }

    tick();

    window.setInterval(tick, 1000);

}


/* ============================================================
   MOBILE / SIDE MENU
   ============================================================ */

function setupMenu() {

    const toggle = element("menuToggle");
    const menu = element("sideMenu");
    const closeZone = element("menuCloseZone");

    if (!toggle || !menu) return;

    function openMenu() {
        menu.classList.add("open");
        menu.setAttribute("aria-hidden", "false");
        toggle.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        menu.classList.remove("open");
        menu.setAttribute("aria-hidden", "true");
        toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {

        if (menu.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    if (closeZone) {
        closeZone.addEventListener("click", closeMenu);
    }

    menu.querySelectorAll(".menu-link").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

}


/* ============================================================
   SMOOTH SCROLL BUTTONS ( data-scroll="#section" )
   ============================================================ */

function setupScrollButtons() {

    document.querySelectorAll("[data-scroll]").forEach((btn) => {

        btn.addEventListener("click", (e) => {

            const targetSelector = btn.getAttribute("data-scroll");
            const target = document.querySelector(targetSelector);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }

        });

    });

}


/* ============================================================
   ACTIVE MENU LINK ON SCROLL
   ============================================================ */

function setupActiveMenuTracking() {

    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".menu-link[href^='#']");

    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const id = entry.target.getAttribute("id");

            links.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${id}`
                );
            });

        });

    }, { rootMargin: "-45% 0px -45% 0px" });

    sections.forEach((section) => observer.observe(section));

}


/* ============================================================
   SCROLL REVEAL ANIMATIONS ( .reveal -> .reveal.visible )
   ============================================================ */

function setupScrollReveal() {

    const items = document.querySelectorAll(".reveal");

    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, { threshold: 0.15 });

    items.forEach((item) => observer.observe(item));

}


/* ============================================================
   CUSTOM CURSOR
   ============================================================ */

function setupCursor() {

    const cursor = element("cursor");

    if (!cursor) return;

    // Skip entirely on touch devices, where there's no real cursor.
    if (window.matchMedia("(pointer: coarse)").matches) {
        cursor.style.display = "none";
        return;
    }

    window.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll("a, button, .skill, .project").forEach((el) => {

        el.addEventListener("mouseenter", () => cursor.classList.add("big"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("big"));

    });

}


/* ============================================================
   INITIALIZE
   ============================================================ */

function initializePortfolio() {

    loadPersonalData();

    loadSkills();

    loadProjects();

    loadEducation();

    loadExperience();

    loadCertifications();

    loadContact();

    loadYear();

    startClock();

    setupMenu();

    setupScrollButtons();

    setupActiveMenuTracking();

    setupScrollReveal();

    setupCursor();

    hideLoader();

    console.log(
        "JOFALIN PORTFOLIO // DATA LOADED"
    );

}


document.addEventListener(
    "DOMContentLoaded",
    initializePortfolio
);