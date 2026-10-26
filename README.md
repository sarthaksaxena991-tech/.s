# Sarthak Kumar Saxena — Developer Portfolio

A modern, high-contrast developer portfolio website crafted with **React**, **Vite**, and **Tailwind CSS**. Designed with an editorial aesthetic, deep obsidian backgrounds, and verified academic and technical achievements.

![Portfolio Preview](./public/favicon.svg)

---

## ⚡ Key Highlights & Architecture

- **Visual Aesthetic**: Deep charcoal & obsidian background (`#08090E`), subtle grid coordinate patterns, and restrained neon mint (`#10E79D`) & cyan (`#38BDF8`) accents.
- **Typography**: Paired display fonts (**Bricolage Grotesque**) with high-legibility body type (**Plus Jakarta Sans**) and code font (**JetBrains Mono**).
- **Zero Fabricated Claims**: Strictly accurate credentials, realistic academic focus (MCA at VIT Bhopal University, BCA from MJPRU), verified certifications (Oracle Agentic AI Foundations Associate & Deloitte Data Analytics simulation), and clear placeholders for personal handles.
- **Centralized Data File**: All personal information, projects, technical skills, certifications, and educational milestones are managed in a single file: `src/data/portfolio.js`.
- **Project Previews & Architecture Modals**: High-fidelity UI mockup previews for each project with deep-dive technical modals.
- **Responsive & Accessible**: Seamless fluid layouts verified across desktop (1440px), tablet (768px), and mobile (390px) viewports with mobile drawer navigation and touch-friendly controls.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand vector icons
- **Animations**: CSS micro-interactions & fluid scroll-driven transitions

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended, tested with v24.19)
- npm (v9.0.0 or higher)

### 1. Installation
Clone or navigate to the repository folder:
```bash
cd portfolio
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and visit: `http://localhost:5173/`

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory ready for deployment.

### 4. Local Production Preview
```bash
npm run preview
```

---

## 📂 Project Structure

```
portfolio/
├── index.html                   # HTML entry point, SEO meta tags, Google Fonts, SVG favicon
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration with Tailwind CSS plugin
├── public/
│   └── favicon.svg              # Custom neon monogram favicon (SKS)
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Main app layout assembling all sections
│   ├── index.css                # Tailwind directives, custom scrollbars, and design tokens
│   ├── data/
│   │   └── portfolio.js         # ⭐ CENTRALIZED EDITABLE CONFIGURATION
│   └── components/
│       ├── Navbar.jsx           # Glassmorphic header with scrollspy & mobile drawer
│       ├── Hero.jsx             # Hero headline, dynamic status badge & abstract terminal card
│       ├── About.jsx            # BCA-to-MCA journey narrative & methodology cards
│       ├── Skills.jsx           # Categorized competency matrix with interactive domain filter
│       ├── Projects.jsx         # Featured projects showcase with preview cards
│       ├── ProjectPreviewIllustrations.jsx # Custom SVG/CSS UI dashboard mockups
│       ├── ProjectModal.jsx     # Deep-dive architecture & features modal
│       ├── Certifications.jsx   # Oracle Agentic AI & Deloitte badges + ongoing learning track
│       ├── Education.jsx        # VIT Bhopal (MCA) & MJPRU (BCA) timeline cards
│       ├── Contact.jsx          # Email copy button, inquiry form (mailto), & social links
│       ├── Footer.jsx           # Monogram, dynamic copyright year, & back-to-top control
│       ├── Icons.jsx            # Pixel-perfect GitHub & LinkedIn SVG brand icons
│       └── Toast.jsx            # Lightweight notification feedback pop-up
```

---

## 📝 Placeholders to Update with Real Details

Open [`src/data/portfolio.js`](./src/data/portfolio.js) to replace the following placeholders:

| Item | Current Placeholder | Recommended Real Value |
|---|---|---|
| **Email Address** | `sarthaksaxena.dev@example.com` | Your primary active email |
| **GitHub Profile** | `https://github.com/your-username` | Your real GitHub profile URL |
| **LinkedIn Profile** | `https://linkedin.com/in/your-profile` | Your real LinkedIn profile URL |
| **Resume URL** | `#` | Link to hosted PDF or Google Drive resume |
| **Health Tracker Repo** | `https://github.com/your-username/health-tracker` | Your actual repository URL |
| **Railway Notice Tracker Repo** | `https://github.com/your-username/railway-notice-tracker` | Your actual repository URL |
| **NovomindAI Repo** | `https://github.com/your-username/novomind-ai` | Your actual repository URL |
| **Factory Telemetry Repo** | `https://github.com/your-username/daikibo-factory-telemetry` | Your actual repository URL |
| **Oracle AI Cert Link** | `#` | Link to your Oracle verification badge |
| **Deloitte Experience Link** | `#` | Link to your Forage verification certificate |
| **Academic Years** | `Ongoing` / `Completed` | Specific years (e.g., `2024 - 2026`, `2021 - 2024`) |

---

## 🚢 Deployment Guide

This portfolio is a static Single Page Application (SPA) and can be hosted for free with high performance on Vercel, Netlify, or GitHub Pages.

### Option A: Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) with GitHub.
3. Click **Add New Project** and select this repository.
4. Framework Preset will auto-detect as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Option B: Deploy to Netlify
1. Sign in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** > **Import an existing project**.
3. Choose your GitHub repository.
4. Set Build command: `npm run build`
5. Set Publish directory: `dist`
6. Click **Deploy site**.

### Option C: Deploy with Netlify CLI
```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

---

## 🧪 Build & Validation Results

- **Compiler**: Vite v8.3.5
- **Bundle Output**:
  - `dist/index.html`: `2.56 kB`
  - `dist/assets/index-5Zpwbx04.css`: `54.95 kB` (Gzip: `9.32 kB`)
  - `dist/assets/index-BhIFzbK3.js`: `305.38 kB` (Gzip: `88.65 kB`)
- **Status**: Production build verified with zero errors and zero warnings.
- **Cross-device testing**: Tested and confirmed at 1440px desktop, 1024px laptop, 768px tablet, and 390px mobile viewports.

---

## 📄 License
MIT License. Created for **Sarthak Kumar Saxena**.
