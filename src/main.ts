import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <div class="page">
      <header class="nav">
        <div class="nav__logo">Anthony Shedeur Barker<span>.</span></div>
        <nav class="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button
            id="theme-toggle"
            class="nav__theme-toggle"
            type="button"
            aria-label="Toggle dark/light mode"
          >
            <span class="nav__theme-icon nav__theme-icon--sun">☀</span>
            <span class="nav__theme-icon nav__theme-icon--moon">🌙</span>
          </button>
        </nav>
      </header>

      <main>
        <section class="hero" id="top">
          <div class="hero__content">
            <p class="hero__eyebrow">Web & Mobile App Developer</p>
            <h1 class="hero__title">
              I build modern web and mobile applciations that are scalable, reliable, and user-friendly.
            </h1>
            <p class="hero__subtitle">
              This portfolio showcases selected projects across web and mobile,
              highlighting clean architecture and user-centered design to make your customers and clients return for more.
            </p>
            <div class="hero__actions">
              <a href="#projects" class="btn btn--primary">View Projects</a>
              <a href="#contact" class="btn btn--ghost">Contact Me</a>
            </div>
            <div class="hero__meta">
              <span>Available for freelance & remote roles</span>
            </div>
          </div>
          <div class="hero__image">
            <div class="hero__avatar">
              <img src="/profile.jpg" alt="Profile photo" class="hero__avatar-img" />
            </div>
            <div class="hero__tags">
              <span>React</span>
              <span>Flutter</span>
              <span>TypeScript</span>
              <span>Python</span>
              <span>Java</span>
              <span>PHP</span>
              <span>SQL</span>
              <span>NoSQL</span>
              <span>GCP</span>
            </div>
          </div>
        </section>

        <section class="section" id="about">
          <div class="section__header">
            <h2>About</h2>
            <p>
              I love solving problems and building products that help people. 
              I am a full stack developer with a passion for building web and mobile applications.
               I am a quick learner and always looking for new challenges to improve my skills and help others succeed in their projects.
            </p>
          </div>
          <div class="about__grid">
            <div>
              <h3>What I do</h3>
              <p>
                My focus areas are building production-ready utility websites, web apps and mobile apps.
              </p>
            </div>
            <div>
              <h3>Tech stack</h3>
              <p>
                My core tools are React, Flutter, TypeScript, Python, Java, PHP, SQL, NoSQL, GCP.
              </p>
            </div>
          </div>
        </section>

        <section class="section" id="skills">
          <div class="section__header">
            <h2>Skills</h2>
          </div>
          <div class="skills__grid">
            <div class="card">
              <h3>Frontend</h3>
              <ul>
                <li>Flutter, React, TypeScript, modern JavaScript</li>
                <li>Responsive, accessible UI</li>
                <li>State management & routing</li>
              </ul>
            </div>
            <div class="card">
              <h3>Mobile</h3>
              <ul>
                <li>Flutter & cross-platform apps</li>
                <li>App store deployment workflows</li>
                <li>Native integrations & performance</li>
              </ul>
            </div>
            <div class="card">
              <h3>Backend & DevOps</h3>
              <ul>
                <li>Node.js APIs, authentication</li>
                <li>Firebase, MongoDB, MySQL</li>
                <li>REST/GraphQL integration</li>
                <li>CI/CD and cloud deployment</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="section" id="projects">
          <div class="section__header">
            <h2>Projects</h2>
            <p>
              Sample projects I have worked on.
            </p>
          </div>

          <div class="projects__grid">
          
              <article class="project-card">
              <div class="project-card__badge">Full-stack</div>
              <a
                class="project-card__image"
                href="https://moyowears.web.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Moyo Wears"
              >
                <img src="/1.png" alt="Moyo Wears" />
              </a>
              <div class="project-card__body">
                <h3>Moyo Wears</h3>
                <p>
                  Your one stop shop for anything hoddies and t-shirts. 
                  Shop now, create your own designs, and have them delivered to your doorstep.
                </p>
                <div class="project-card__tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Firebase</span>
                </div>
              </div>
            </article>

            <article class="project-card">
              <div class="project-card__badge">Full-stack</div>
              <a
                class="project-card__image"
                href="https://physagug.org/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open PHYSAG-UG"
              >
                <img src="/2.png" alt="PHYSAG-UG screenshot" />
              </a>
              <div class="project-card__body">
                <h3>PHYSAG UG Student App</h3>
                <p>
                    This app helps the association to manage student registration and an 
                    online store for purchasing products.
                </p>
                <div class="project-card__tags">
                  <span>React</span>
                  <span>API</span>
                  <span>Firebase</span>
                  <span>Paystack</span>
                </div>
              </div>
            </article>

            <article class="project-card">
              <div class="project-card__badge">Mobile</div>
              <a
                class="project-card__image"
                href="https://offrscafe.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Offrscafe"
              >
                <img src="/3.png" alt="Offrscafe screenshot" />
              </a>
              <div class="project-card__body">
                <h3>Offrscafe</h3>
                <p>
                  Offrscafe is a web app for the best coffee shop in the heart of Accra. 
                  Order online and have it delivered to your doorstep.
                </p>
                <div class="project-card__tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Tailwind CSS</span>
                  <span>Sanity</span>
                </div>
              </div>
            </article>

            
            
            <article class="project-card">
              <div class="project-card__badge">Mobile</div>
              <a
                class="project-card__image"
                href="https://ecosika-5780b.web.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Ecosika"
              >
                <img src="/4.png" alt="Ecosika screenshot" />
              </a>
              <div class="project-card__body">
                <h3>Ecosika</h3>
                <p>
                  Ecosika is a web app that helps you recycle waste plastic bottles and 
                  earn money by selling them to the company.
                </p>
                <div class="project-card__tags">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </article>

                        <article class="project-card">
              <div class="project-card__badge">Web</div>
              <a
                class="project-card__image"
                href="grader-d8760.web.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Grade-R"
              >
                <img src="/5.png" alt="Grade-R screenshot" />
              </a>
              <div class="project-card__body">
                <h3>Grade-R</h3>
                <p>
                  Grade-R is a web and mobile app for a tertiary students to manage their grades 
                  and GPAs, access past questions and leverage AI to predict their incoming grades.
                </p>
                <div class="project-card__tags">
                  <span>Flutter</span>
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Gemini AI</span>
                </div>
              </div>
            </article>

            <article class="project-card">
              <div class="project-card__badge">Web</div>
              <a
                class="project-card__image"
                href="https://bg-naturals.web.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open BGNaturals"
              >
                <img src="/6.png" alt="BGNaturals screenshot" />
              </a>
              <div class="project-card__body">
                <h3>BG Naturals</h3>
                <p>
                  BG Naturals is an online store for natural products for your hair. No matter the type of hair, we have something for you.
                  With just a tap, you can order your favorite products and have them delivered to your doorstep in no time.
                </p>
                <div class="project-card__tags">
                  <span>React</span>
                  <span>Paystack</span>
                  <span>Firebase</span>
                </div>
              </div>
            </article>

            <article class="project-card">
              <div class="project-card__badge">Full-stack</div>
              <a
                class="project-card__image"
                href="https://abatrades.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Abatrades"
              >
                <img src="/8.png" alt="Abatrades screenshot" />
              </a>
              <div class="project-card__body">
                <h3>Abatrades</h3>
                <p>
                  Free VIP signals, daily morning analysis on Gold, BTC, Silver and more, 
                  plus a structured mentorship program that takes you from beginner to advanced.
                </p>
                <div class="project-card__tags">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Python</span>
                  <span>Paystack</span>
                </div>
              </div>
            </article>

            <article class="project-card">
              <div class="project-card__badge">Web</div>
              <a
                class="project-card__image"
                href="https://physicstas.web.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Physicstas"
              >
                <img src="/9.png" alt="Physicstas screenshot" />
              </a>
              <div class="project-card__body">
                <h3>PhysicsTAs</h3>
                <p>
                  PhysicsTAs is an online platform for teaching assitance to keep accurate records of 
                  students grades throughout their first year experience in the Physics lab.
                </p>
                <div class="project-card__tags">
                  <span>Flutter</span>
                  <span>Firebase</span>
                </div>
              </div>
            </article>
            
            <article class="project-card">
              <div class="project-card__badge">Web</div>
              <a
                class="project-card__image"
                href="https://thehyve-582d4.web.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Thehyve"
              >
                <img src="/7.png" alt="Thehyve screenshot" />
              </a>
              <div class="project-card__body">
                <h3>The Hyve</h3>
                <p>
                  The Hyve is an online game where you can play with your friends and family 
                  for both web and mobile. Win, and withdraw your winnings.
                </p>
                <div class="project-card__tags">
                  <span>React</span>
                  <span>Firebase</span>
                </div>
              </div>
            </article>
          </div>
        </section>
        

        <section class="section section--muted" id="contact">
          <div class="section__header">
            <h2>Contact</h2>
            <p>
                You can contact me via Whatsapp, email, LinkedIn, or GitHub.
            </p>
          </div>
          <div class="contact__grid">
            <div>
              <h3>Let&apos;s work together</h3>
              <p>
                I am open to freelance and remote opportunities.
              </p>
            </div>
            <div class="contact__links">
              <a
                href="https://wa.me/233245349574"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                class="btn btn--primary"
              >
                WhatsApp
              </a>
              <a href="mailto:shedeurapps@gmail.com" class="btn btn--ghost">Email me</a>
              <a href="https://github.com/shedeurbarker" target="_blank" rel="noreferrer" 
              aria-label="View GitHub" class="btn btn--ghost">View GitHub</a>
              <a href="https://www.linkedin.com/in/tonyshedeur/" target="_blank" rel="noreferrer" 
              aria-label="View LinkedIn" class="btn btn--ghost">View LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <span>© ${new Date().getFullYear()} Anthony Barker. All rights reserved.</span>
      </footer>
    </div>
  `
}

// Theme toggle logic
const setTheme = (theme: 'light' | 'dark') => {
  document.body.dataset.theme = theme
  localStorage.setItem('theme', theme)
}

const storedTheme = (localStorage.getItem('theme') as 'light' | 'dark' | null) ?? null
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const initialTheme: 'light' | 'dark' = storedTheme ?? (prefersDark ? 'dark' : 'light')

setTheme(initialTheme)

const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle')

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.body.dataset.theme === 'light' ? 'light' : 'dark'
    const next = current === 'light' ? 'dark' : 'light'
    setTheme(next)
  })
}
