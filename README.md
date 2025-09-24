# Modern Portfolio Website

A modern, responsive personal portfolio website built with React.js and Bootstrap featuring smooth animations, dark/light theme toggle, and an animated avatar.

## 🚀 Features

- **Modern Design**: Clean, professional UI with a creative touch
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Animated Avatar**: Custom SVG boy avatar with waving and blinking animations
- **Smooth Animations**: Page transitions, hover effects, and scroll-based animations
- **Interactive Sections**:
  - Home with animated avatar and typing effect
  - About Me with skills showcase and personal info
  - Projects gallery with detailed modals
  - Resume section with download functionality
  - Contact form with validation

## 🛠️ Technologies Used

- **Frontend**: React.js 19+
- **Styling**: Bootstrap 5 + Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Bootstrap Icons)
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Components**: Replace placeholder content in all section components
   - `src/components/HomeSection.jsx` - Name, roles, and introduction
   - `src/components/AboutSection.jsx` - Bio, skills, and personal details
   - `src/components/ProjectsSection.jsx` - Your actual projects
   - `src/components/ResumeSection.jsx` - Work experience and education
   - `src/components/ContactSection.jsx` - Contact information

### Colors and Theme
Modify the CSS variables in `src/index.css`:

```css
:root {
  --primary: #6366f1;      /* Primary color */
  --secondary: #f59e0b;    /* Secondary color */
  --accent: #10b981;       /* Accent color */
  /* ... other color variables */
}
```

### Resume PDF
Replace `public/resume.pdf` with your actual resume file.

### Avatar Customization
Modify the `src/components/AnimatedAvatar.jsx` to customize:
- Colors and gradients
- Animation timings
- Avatar features and style
- Size and proportions

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance Features

- **Optimized Images**: Responsive images with proper sizing
- **Lazy Loading**: Components load efficiently
- **Smooth Animations**: Hardware-accelerated animations
- **SEO Optimized**: Meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation

## 🎯 Key Components

### Navigation
- Smooth scrolling navigation
- Active section highlighting
- Mobile-friendly hamburger menu
- Theme toggle integration

### Animated Avatar
- Custom SVG boy character
- Waving hand animation
- Blinking eyes effect
- Floating particles
- Speech bubble with greeting

### Project Showcase
- Grid layout with hover effects
- Detailed project modals
- Technology badges
- Live demo and GitHub links
- Responsive project cards

### Contact Form
- Form validation
- Loading states
- Success/error messages
- Social media integration

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy
3. Configure environment variables if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://your-username.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:
- Open an issue on GitHub
- Contact me via the portfolio contact form
- Send an email to your-meetv8540@gmail.com

## 🎉 Acknowledgments

- React.js team for the amazing framework
- Bootstrap team for the UI components
- Framer Motion for smooth animations
- All the open-source contributors

---

**Made with ❤️ using React.js and Bootstrap**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
