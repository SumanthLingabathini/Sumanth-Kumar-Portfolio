# Sumanth Kumar Lingabathini - Portfolio `README.md`

Handoff for future development. Read this before changing the portfolio.

## What This Is

A responsive single-page personal portfolio for data analytics, business intelligence, cloud data and applied AI opportunities. The design uses a dark, modern recruiter-facing layout with an impact-focused hero, animated metrics, professional experience cards, projects, technical skills, education, certifications, recommendations and a contact call-to-action.

Local site entry point: `index.html`

Current local preview path:

```text
C:\Users\linga\OneDrive\Desktop\Resumee\April\index.html
```

Current status: local static site. No production hosting or GitHub Pages deployment has been configured in this workspace yet.

## Owner Profile

Name: Sumanth Kumar Lingabathini  
Role targeting: Data Analyst / Business Intelligence Analyst / Data & Cloud Systems roles  
Location: Kansas City, Kansas, USA  
Email: `sumanthkumar0527@gmail.com`  
Phone: `+1 (785) 813-4132`  
LinkedIn: <https://www.linkedin.com/in/sumanth98kumar/>  
GitHub: <https://github.com/SumanthLingabathini>  
Education: MS Computer Science, University of Kansas

## File Structure

```text
index.html                                      <- Main portfolio page
styles.css                                     <- All design, layout and responsive styling
script.js                                      <- Menu, reveals, counters and nav highlighting
README.md                                      <- This handoff file
assets/
  sumanth.jpeg                                 <- Local profile image
  Sumanth_Kumar_Lingabathini_Resume.pdf       <- Downloadable resume
  preview-desktop.png                         <- Desktop QA preview
  preview-mobile.png                          <- Narrow screenshot captured during QA
  preview-responsive.png                      <- Verified responsive QA preview
```

Always edit `index.html`, `styles.css` and `script.js` directly. This project has no build step.

## How To View

Open the site directly:

```text
file:///C:/Users/linga/OneDrive/Desktop/Resumee/April/index.html
```

For local browser rendering with a static server, any simple static-file server can serve the `April` directory. The site does not require package installation or compilation.

## How To Deploy

The project is currently not connected to a deployment repository. Recommended deployment options:

1. Create or connect a GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md` and the `assets` directory.
3. Enable GitHub Pages from the repository root, or deploy the same folder through Netlify or Vercel as a static site.

Keep the relative asset paths unchanged when deploying:

```text
assets/sumanth.jpeg
assets/Sumanth_Kumar_Lingabathini_Resume.pdf
```

## Tech Stack Used In Portfolio

Fonts: Manrope for general typography and JetBrains Mono for labels, metadata and technical tags  
CSS: Custom CSS variables, gradients, grid/flex layouts and responsive breakpoints  
JavaScript: Vanilla JavaScript only  
Assets: Local JPEG profile image and local downloadable PDF resume  
Frameworks: None  
Build tooling: None

JavaScript functionality:

- Mobile hamburger navigation toggle
- IntersectionObserver reveal animations
- Animated hero metric counters
- Current-section navigation highlighting on scroll
- Reduced-motion support for accessible static rendering

## CSS Variables (Design Tokens)

```css
--bg: #07091b;              /* Main page background */
--surface: #0c1028;         /* Primary card background */
--surface-2: #101632;       /* Secondary surface token */
--line: #1d2647;           /* Borders and separators */
--text: #f0f2ff;           /* Main text */
--muted: #98a5c7;          /* Muted supporting text */
--primary: #7c4dff;        /* Violet primary accent */
--primary-light: #aa7cff;  /* Light violet highlights */
--cyan: #16c4e7;           /* Cyan links/accent */
--success: #20cf83;        /* Availability status */
--shadow: 0 18px 56px rgba(0, 0, 0, .28);
```

## Sections (In Order)

`header / nav` - Fixed blurred navigation with `SKL.` brand, section anchors, Contact Me CTA and mobile hamburger menu.

`#home` - Hero section with availability badge, Data Analyst positioning, introductory value statement, resume/contact buttons, four animated stats, technology pills and profile card.

`#about` - Professional summary plus four capability cards: Data Operations, Applied AI/ML, Cloud Delivery and Business Analysis.

`#experience` - Two experience cards focused on data analytics and reporting:

- Data Analyst - The University of Kansas, Physics Department
- Data Analyst / BI Reporting Analyst - Tata Consultancy Services, Client: CIBC Bank

`#projects` - Four portfolio project cards with pipeline pills, technical tags and GitHub links.

`#skills` - Three technology categories: Programming & Web, Data & AI, and Cloud & Delivery.

`#education` - University of Kansas MS Computer Science and Guru Nanak University BE Electrical & Electronics entries.

`#certifications` - AWS Certified Developer - Associate, Salesforce Certified AI Associate, Xcelerate Warrior Certificate and three Best Team Awards.

`#recommendations` - Two collaborator recommendation excerpts linking to LinkedIn recommendations.

`resume-band` - Secondary resume-download CTA.

`#contact` - Contact CTA with email, LinkedIn, GitHub and contact information.

`footer` - Portfolio identity line.

## Visual / UI Features Added

### Hero Layout

Desktop hero uses a two-column layout:

- Left column: positioning, name, summary, CTAs, metrics and stack tags
- Right column: profile card with image, status badge, skill tags and contact information

The hero includes two atmospheric gradient orbs in the background and floating `AWS Cloud` / `Python` labels around the profile card.

### Animation And Interaction

- `.reveal` elements animate into view after entering the viewport.
- `.visible` is applied by the `IntersectionObserver` in `script.js`.
- `[data-counter]` hero values animate from zero when visible.
- Navigation links receive `.active` based on scroll position.
- Mobile navigation uses `.open` on both the menu and hamburger button.
- Motion is minimized automatically for `prefers-reduced-motion: reduce`.

### Responsive Design

Breakpoints:

```css
@media (max-width: 1080px) { ... }
@media (max-width: 900px)  { ... }
@media (max-width: 650px)  { ... }
```

Responsive behavior includes:

- Mobile navigation drawer at widths below `900px`
- Stacked hero/profile layout
- Stacked About and Skills layout
- Single-column projects, education, credentials and recommendations below `650px`
- Two-column metric cards on mobile
- Hidden floating hero labels on small screens

## Profile Card (Hero Right Column)

Image: `assets/sumanth.jpeg`  
Role line: Data Analyst & Business Intelligence Professional  
Availability label: Available for opportunities  
Profile tags: Data Analytics, SQL, Tableau, AWS

Contact details shown:

- Email: `sumanthkumar0527@gmail.com`
- Location: Kansas City, Kansas, USA
- Education: MS Computer Science, University of Kansas
- LinkedIn: `linkedin.com/in/sumanth98kumar`
- GitHub: `github.com/SumanthLingabathini`

## Experience Entries

### Data Analyst - The University of Kansas | Physics Department

Dates: May 2025 - Present

Focus:

- SQL-based reporting and department/research operations data
- AWS RDS and FileMaker data validation
- Reporting process and data-entry automation
- Collaboration on reporting needs and data accessibility

Tags: SQL, AWS RDS, Reporting, Data Validation, FileMaker Pro

### Data Analyst / BI Reporting Analyst - Tata Consultancy Services | Client: CIBC Bank

Dates: Apr 2021 - Dec 2023

Focus:

- SQL reports, reporting datasets and Tableau dashboards
- Reporting effort reduction of 40-45%
- Source mapping, validation and reconciliation
- Trend and exception analysis for stakeholder decisions
- Requirements, dashboard QA and mentoring 6 team members

Tags: SQL, Tableau, Data Validation, Reporting Automation, Stakeholder Analysis

## Projects

### SMS Spam Classifier

Focus: NLP classification using FNN, LSTM, Naive Bayes, Logistic Regression, TF-IDF and word embeddings.  
GitHub: <https://github.com/SumanthLingabathini/SMS-Spam-Classifier-using-Deep-Neural-Networks>

### CI/CD Deployment with AWS & Docker

Focus: Dockerized Flask deployment using GitHub Actions, AWS EC2, DockerHub, monitoring and logging.  
GitHub: <https://github.com/SumanthLingabathini/CI-CD-Deployment-with-AWS-Docker>

### Diabetes Prediction System

Focus: Classification on the PIMA dataset using preprocessing, SMOTE and Gradient Boosting.  
Displayed result: 84.50% accuracy.  
GitHub: <https://github.com/SumanthLingabathini/Data-Science>

### Counterfeit IC Detection

Focus: MobileNetV2 transfer learning and optical imaging for authentic/counterfeit classification.  
Displayed result: 82.35% accuracy and 100% recall for counterfeit samples.  
GitHub: <https://github.com/SumanthLingabathini/Counterfeit-IC-Detection-System>

## Certifications And Recognition

- AWS Certified Developer - Associate
- Salesforce Certified AI Associate
- Xcelerate Warrior Certificate
- Three Best Team Awards at TCS

## Education

### Master of Science in Computer Science

University of Kansas  
Dates shown: Jan 2024 - Jan 2026  
Focus: Data Science, Machine Learning, AI, Mobile Security, Computer Vision, HPC Algorithms, IoT Security and Bioinformatics.

### Bachelor of Engineering in Electrical & Electronics

Guru Nanak University  
Dates shown: Aug 2016 - Dec 2020  
Focus: Embedded systems, circuit design, microcontrollers, automation and hardware-software integration.

## Key Metrics (Hiring Manager Highlights)

- `4+` years in engineering and research
- `84.5%` best diabetes prediction accuracy
- `6` team members mentored at TCS
- `3` Best Team Awards received
- `40-45%` reduction in manual reporting effort described in TCS analytics experience
- `82.35%` counterfeit IC classification accuracy
- `100%` recall for counterfeit IC samples

## Resume Download

The resume buttons are connected to the local PDF:

```text
assets/Sumanth_Kumar_Lingabathini_Resume.pdf
```

There are two download locations:

- Hero `Download Resume` button
- Resume-band `Download PDF` button

## Known Issues / TODO

### Open

- Production URL is not set up yet; the portfolio currently runs locally.
- Add Open Graph metadata (`og:title`, `og:description`, `og:image`) before sharing publicly.
- Verify all certification titles against the latest resume/certificate files before publishing.
- The recommendations section still references NCCS because it is a LinkedIn endorsement, even though NCCS was removed from professional experience.
- Confirm whether the hero statistic `4+ Years in engineering and research` should instead read `4+ Years in data and technology` for full data-analyst alignment.

### Nice To Have

- Add a GitHub activity or featured analytics dashboard section.
- Add Tableau / Power BI dashboard screenshots or case-study cards.
- Create a public hosted URL using GitHub Pages or Netlify.
- Add a light/dark theme toggle.
- Replace general skill lists with analytics-focused tools such as Tableau, Power BI, Excel and data modeling when final resume positioning is settled.

### Resolved

- Modern dark responsive redesign completed.
- Resume PDF connected to both download buttons.
- Profile photo bundled locally.
- KU experience repositioned as Data Analyst.
- TCS experience repositioned as Data Analyst / BI Reporting Analyst.
- NCCS removed from the experience timeline.
- Mobile navigation implemented.
- Scroll reveal and counter animations implemented.
- Reduced-motion accessibility support implemented.
- Desktop and responsive renders reviewed.

## Notes For Future Editors

- `index.html` contains all portfolio content and section markup.
- `styles.css` contains the complete design system, responsive rules and animation styling.
- `script.js` contains all interactive behavior.
- `.reveal` is hidden by default and receives `.visible` when the element enters the viewport.
- `.delay-one` and `.delay-two` stagger reveal timing.
- `data-counter="N"` and `data-suffix="X"` control hero statistic animation.
- `.experience-card.current` automatically displays the `CURRENT` badge using CSS.
- `.button-secondary` is used for outline buttons such as Download Resume and external profile CTAs.
- Keep asset links relative so local viewing and future static hosting both work.
- After changing visible content, refresh `assets/preview-desktop.png` and `assets/preview-responsive.png` for QA only if updated preview files are worth retaining in the project.

