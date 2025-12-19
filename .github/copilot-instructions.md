# GitHub Copilot Instructions

## Project Overview
This is a React-based personal portfolio website designed to showcase professional qualifications and experience for prospective employers. The site should be deployable to GitHub Pages.

## Project Goals
- Create a sleek, professional single-page or multi-page React application
- Highlight skillset: industrial engineering, data science, industrial projects (DOE, ORNL)
- Optimize for GitHub Pages deployment
- Mobile-responsive design
- Clean, modern UI that impresses employers

## Technology Stack
- **Framework**: React (use Vite for faster development)
- **Styling**: Use CSS Modules, Tailwind CSS, or styled-components for modern styling
- **Development Environment**: Docker and Docker Compose (required)
- **Deployment**: GitHub Pages (ensure proper configuration in package.json)
- **Node/npm**: Use Node 20 LTS in Docker container

## Development Workflow

### Docker Setup (Required)
```bash
# Build and start the development environment
docker-compose up --build

# Stop the development environment
docker-compose down

# Rebuild after dependency changes
docker-compose up --build --force-recreate
```

### Initial Project Setup
Create these files for Docker-based development:

**Dockerfile**:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
```

**docker-compose.yml**:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

**package.json** (add to scripts):
```json
{
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Key Commands
```bash
# Inside Docker container (exec into running container)
docker-compose exec web npm run build       # Build for production
docker-compose exec web npm install <pkg>   # Add new package

# Access the site at http://localhost:5173
```

### Deployment to GitHub Pages
1. Install gh-pages in Docker:
   ```bash
   docker-compose exec web npm install --save-dev gh-pages
   ```
2. Add to package.json:
   ```json
   "homepage": "https://xli.github.io/Demo_Personal_Webiste",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy from Docker container:
   ```bash
   docker-compose exec web npm run deploy
   ```

## Site Structure & Components

### Recommended Pages/Sections
- **Hero/Landing**: Name, title, professional photo, tagline
- **About**: Background in industrial engineering, career narrative
- **Skills**: Technical skills (data science tools, methodologies, programming languages)
- **Experience**: Industrial projects at DOE, ORNL - use cards or timeline
- **Projects**: Portfolio showcase with descriptions, technologies, links
- **Contact**: Email, LinkedIn, GitHub links, downloadable resume

### Component Architecture
```
src/
├── components/
│   ├── Header.jsx          # Navigation bar
│   ├── Hero.jsx            # Landing section
│   ├── About.jsx           # About section
│   ├── Skills.jsx          # Skills showcase
│   ├── Experience.jsx      # Work experience
│   ├── Projects.jsx        # Project portfolio
│   ├── Contact.jsx         # Contact information
│   └── Footer.jsx          # Footer with social links
├── assets/                 # Images, icons, resume PDF
├── styles/                 # Global styles or CSS modules
├── App.jsx                 # Main app component
└── main.jsx               # Entry point
```

## Coding Conventions
- Use functional components with hooks (useState, useEffect)
- Keep components small and focused (single responsibility)
- Use semantic HTML5 elements (header, nav, section, article, footer)
- Implement smooth scrolling for single-page navigation
- Add loading states for any async operations
- Ensure accessibility: proper heading hierarchy, alt text, ARIA labels

## Design Guidelines
- **Color Scheme**: Professional palette (blues, grays, or user-provided brand colors)
- **Typography**: Use Google Fonts for clean, readable fonts (e.g., Inter, Roboto, Poppins)
- **Layout**: Grid or flexbox for responsive layouts
- **Animations**: Subtle scroll animations or transitions (use framer-motion or CSS)
- **Mobile-first**: Design for mobile, enhance for desktop

## Content Guidelines
When generating content for qualifications:
- **Industrial Engineering**: Process optimization, Six Sigma, Lean Manufacturing, systems design
- **Data Science**: Python, R, machine learning, statistical analysis, data visualization (Tableau, Power BI)
- **Industrial Projects**: Focus on DOE (Department of Energy) and ORNL (Oak Ridge National Laboratory) work - manufacturing optimization, energy systems, research collaboration

## Testing & Quality
- Test responsive design on multiple breakpoints (mobile, tablet, desktop)
- Validate all external links work correctly
- Check performance with Lighthouse (aim for 90+ scores)
- Ensure fast load times (<3 seconds on 3G)

## Git Workflow
- Commit frequently with descriptive messages
- Use feature branches for major changes
- Keep main/master branch deployable at all times

## Common Tasks
5. Changes auto-reload via Docker volume mount

### Updating content
- Edit component props or create a `data.js` file for centralized content management
- Use environment variables for sensitive data (contact forms, APIs)
- Place environment variables in `.env` file (excluded from git)

### Installing new packages
```bash
docker-compose exec web npm install <package-name>
# Container will automatically reload with new dependencies
```

### Troubleshooting Docker
- If changes don't reflect: `docker-compose restart`
- If dependencies are broken: `docker-compose down && docker-compose up --build --force-recreate`
- Clear node_modules: `docker-compose down -v` (removes volume
3. Add navigation link if applicable
4. Style consistently with existing sections

### Updating content
- Edit component props or create a `data.js` file for centralized content management
- Use environment variables for sensitive data (contact forms, APIs)

## Resources
- React Docs: https://react.dev
- GitHub Pages Deployment: https://vitejs.dev/guide/static-deploy.html#github-pages
- Tailwind CSS: https://tailwindcss.com/docs
- React Icons: https://react-icons.github.io/react-icons/
