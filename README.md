# 🌟 Himanshi Bhagnani - Personal Portfolio Website

A clean, modern, fully responsive personal portfolio website crafted for **Himanshi Bhagnani**, B.Tech Computer Science student at **JECRC University, Jaipur**.

---

## 📁 Project Structure

```text
himanshi-bhagnani-portfolio/
│
├── index.html       # Main HTML5 structure with semantic sections and clear edit comments
├── styles.css       # Modern CSS with light/dark themes, responsive grid, animations
├── script.js        # Interactive features (Dark/Light mode, mobile menu, scroll spy, form handling)
└── README.md        # Documentation and customization guide
```

---

## 🚀 How to View Your Portfolio

### Option 1: Direct File Open (Easiest)
1. Navigate to the folder:
   `C:\Users\hp\.gemini\antigravity\scratch\himanshi-bhagnani-portfolio`
2. Double-click **`index.html`** to open it directly in Google Chrome, Microsoft Edge, Brave, or Firefox.

### Option 2: Live Server in VS Code
1. Open the folder in **VS Code**.
2. Install the **Live Server** extension (if not already installed).
3. Right-click `index.html` and choose **"Open with Live Server"**.

---

## ✏️ How to Customize Your Information

All sections contain easy-to-find `<!-- EDIT HERE -->` comments in `index.html`. You can edit them using any code editor (like VS Code, Notepad++, or Notepad).

### 1. Education Details
- Open `index.html` and search for:
  ```html
  <span class="period-text">[Duration / Batch: e.g. 2024 – 2028]</span>
  ```
- Replace the batch dates with your actual batch (e.g. `2024 – 2028`).
- You can add your current semester CGPA or coursework under the `education-highlights` container.

### 2. Adding Your Technical Skills
- Search for `id="skills"` in `index.html`.
- Replace the placeholder tags:
  ```html
  <span class="skill-tag placeholder-tag">
    <span>[e.g. C / C++]</span>
    <span class="tag-status">Learning</span>
  </span>
  ```
- Change `placeholder-tag` to `active-tag` and put your programming languages, tools, or web technologies as you learn them.

### 3. Adding Your Projects
- Search for `id="projects"` in `index.html`.
- Update the project card titles, descriptions, and technology pills.
- Add your GitHub repository link in the link tag:
  ```html
  <a href="https://github.com/your-username/your-repo-name" class="project-link" target="_blank" rel="noopener noreferrer">
    ...
  </a>
  ```

### 4. Adding Certifications & Achievements
- Search for `id="certifications"` in `index.html`.
- Replace `[Upcoming Technical Certification]` with your actual certification title (e.g., "Python for Everybody - Coursera", "HackerRank Problem Solving Badge", or "Hackathon Finalist").

### 5. Contact Information & Social Profiles
- Search for `id="contact"` in `index.html`.
- Update:
  - **Email**: Replace `[your.email@example.com]` with your actual email address.
  - **Phone**: Replace `[Your Phone Number]` (optional).
  - **LinkedIn**: Replace `#contact` with your LinkedIn URL (e.g. `https://linkedin.com/in/himanshibhagnani`).
  - **GitHub**: Replace `#contact` with your GitHub profile URL (e.g. `https://github.com/himanshibhagnani`).

---

## 🌐 How to Host Your Website for Free (Online)

### Method A: GitHub Pages (Recommended for CS Students)
1. Create a GitHub account at [github.com](https://github.com).
2. Create a new public repository named `himanshi-bhagnani.github.io` (or `portfolio`).
3. Upload `index.html`, `styles.css`, and `script.js`.
4. Go to **Settings** → **Pages** → under **Branch**, select `main` (or `master`) and click **Save**.
5. Your portfolio will be live at `https://<your-username>.github.io`!

### Method B: Netlify
1. Go to [netlify.com](https://www.netlify.com).
2. Sign up and simply drag and drop the `himanshi-bhagnani-portfolio` folder onto Netlify's dashboard.
3. Your site will instantly go live with a custom URL.

---

## ✨ Included Features
- **Modern Clean Design**: Tailored specifically for a B.Tech Computer Science student.
- **Honest & Professional Placeholders**: Respects your current stage of learning without any invented or fake data.
- **Theme Toggle**: Fully functional Dark and Light modes with automatic preference detection and memory persistence.
- **Responsive Layout**: Optimized across smartphones, tablets, laptops, and ultra-wide screens.
- **Interactive Navigation**: Sticky header with frosted glass blur, mobile drawer menu, and active scroll spy highlighting.
- **Functional Contact Form**: Client-side field validation, responsive error messaging, and simulated submission states.
- **Accessibility & SEO**: Clean semantic HTML5 landmarks, meta descriptions, and accessible ARIA attributes.
