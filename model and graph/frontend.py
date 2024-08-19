frontendGraph = {
    'Internet': {
        'How does the internet work?': {'What is HTTP?': 1},    
        'What is HTTP?': {'What is Domain Name?': 1},
        'What is Domain Name?': {'What is hosting?': 1},
        'What is hosting?': {'DNS and how it works?': 1},
        'DNS and how it works?': {'Browsers and how they work?': 1},
        'Browsers and how they work?': {},
    },
    
    'HTML': {
        'Learn the basics': {'Writing Semantic HTML': 1},
        'Writing Semantic HTML': {'Forms and Validations': 1},
        'Forms and Validations': {'Accessibility': 1},
        'Accessibility': {'SEO Basics': 1},
        'SEO Basics': {},
    },
    
    'CSS': {
        'Learn the basics': {'Making Layouts': 1},
        'Making Layouts': {'Responsive Design': 1},
        'Responsive Design': {},
    },
    
    'JavaScript': {
        'Learn the Basics': {'Learn DOM Manipulation': 1},
        'Learn DOM Manipulation': {'Fetch API / Ajax (XHR)': 1},
        'Fetch API / Ajax (XHR)': {},
    },
    
    'Version Control Systems': {
        'Git': {},
    },
    
    'VCS Hosting': {
        'GitHub': {'GitLab': 1},
        'GitLab': {'Bitbucket': 1},
        'Bitbucket': {},
    },
    
    'Package Managers': {
        'npm': {'pnpm': 1},
        'pnpm': {'yarn': 1},
        'yarn': {},
    },
    
    'Pick a Framework': {
        'React': {'Vue.js': 1},
        'Vue.js': {'Angular': 1},
        'Angular': {'Svelte': 1},
        'Svelte': {'Solid JS': 1},
        'Solid JS': {'Qwik': 1},
        'Qwik': {},
    },
    
    'Writing CSS': {
        'Tailwind': {'Radix UI': 1},
        'Radix UI': {'Shadcn UI': 1},
        'Shadcn UI': {},
    },
    
    'CSS Architecture': {
        'BEM': {},
    },
    
    'CSS Preprocessors': {
        'Sass': {'PostCSS': 1},
        'PostCSS': {},
    },
    
    'Web Security Basics': {
        'CORS': {'HTTPS': 1},
        'HTTPS': {'Content Security Policy': 1},
        'Content Security Policy': {'OWASP Security Risks': 1},
        'OWASP Security Risks': {},
    },
    
    'Module Bundlers': {
        'Vite': {'SWC': 1},
        'SWC': {'esbuild': 1},
        'esbuild': {'Webpack': 1},
        'Webpack': {'Rollup': 1},
        'Rollup': {'Parcel': 1},
        'Parcel': {},
    },
    
    'Linters and Formatters': {
        'Prettier': {},
        'ESLint': {},
    },
    
    'Build Tools': {
        'Task Runners': {'npm scripts': 1},
        'Module Bundlers': 1,
        'Linters and Formatters': 1,
    },
    
    'Testing': {
        'Vitest': {'Jest': 1},
        'Jest': {'Playwright': 1},
        'Playwright': {'Cypress': 1},
        'Cypress': {},
    },
    
    'Authentication Strategies': {
        'JWT': {'OAuth': 1},
        'OAuth': {'SSO': 1},
        'SSO': {'Basic Auth': 1},
        'Basic Auth': {'Session Auth': 1},
        'Session Auth': {},
    },
    
    'Web Components': {
        'HTML Templates': {'Custom Elements': 1},
        'Custom Elements': {'Shadow DOM': 1},
        'Shadow DOM': {'PRPL Pattern': 1},
        'PRPL Pattern': {'RAIL Model': 1},
        'RAIL Model': {},
    },
    
    'Type Checkers': {
        'TypeScript': {},
    },
    
    'GraphQL': {
        'Apollo': {'Relay Modern': 1},
        'Relay Modern': {},
    },
    
    'SSR': {
        'React': {'Angular': 1},
        'Angular': {'Vue.js': 1},
        'Vue.js': {'Svelte': 1},
        'Svelte': {},
    },

    'GraphQL': {
        'Apollo': {'Relay Modern': 1},
        'Relay Modern': {},
    },

    'Progressive Web Apps': {
        'Service Workers': {'Storage': 1},
        'Storage': {'Location': 1},
        'Location': {'Notifications': 1},
        'Notifications': {'Device Orientation': 1},
        'Device Orientation': {'Payments': 1},
        'Payments': {'Credentials': 1},
        'Credentials': {'Web Sockets': 1},
        'Web Sockets': {'Server Sent Events': 1},
        'Server Sent Events': {'PRPL Pattern': 1},
        'PRPL Pattern': {'RAIL Model': 1},
        'RAIL Model': {'Performance Metrics': 1},
        'Performance Metrics': {'Using Lighthouse': 1},
        'Using Lighthouse': {'Using DevTools': 1},
        'Using DevTools': {'Calculating, Measuring and improving performance': 1},
        'Calculating, Measuring and improving performance': {'Performance Best Practices': 1},
        'Performance Best Practices': {},
    },

    'Static Site Generators': {
        'Next.js': {'Nuxt.js': 1},
        'Nuxt.js': {'Vuepress': 1},
        'Vuepress': {'Jekyll': 1},
        'Jekyll': {'Hugo': 1},
        'Hugo': {'Eleventy': 1},
        'Eleventy': {'Remix': 1},
        'Remix': {'Astro': 1},
        'Astro': {},
    },

    'Mobile Applications': {
        'React Native': {'NativeScript': 1},
        'NativeScript': {'Flutter': 1},
        'Flutter': {'Ionic': 1},
        'Ionic': {},
    },

    'Desktop Applications': {
        'Electron': {'Tauri': 1},
        'Tauri': {'Flutter': 1},
        'Flutter': {},
    },

    'Bonus Content': {
        'Continue Learning with following relevant tracks': {'Node.js Roadmap': 1, 'TypeScript Roadmap': 1},
    }
}