# Madhav Shah Sisodiya - Portfolio Website

A modern, responsive portfolio website built with Tailwind CSS and vanilla JavaScript for maximum performance and maintainability.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Mobile-First**: Optimized for mobile devices with hamburger navigation
- **Performance Optimized**: Lightweight and fast loading

## 🛠️ Tech Stack

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Vanilla JavaScript**: No frameworks or libraries
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Inter font family for typography

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file with Tailwind classes
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
└── README.md           # This file
```

## 🎯 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal description and education
3. **Experience**: Professional timeline with achievements
4. **Skills**: Categorized technical skills
5. **Projects**: Showcase of notable projects
6. **Contact**: Professional contact information

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser to view the portfolio.

### Option 2: Local Server (Recommended)
For the best experience, run a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have it installed)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## ✨ Tailwind CSS Benefits

- **Utility-First**: Rapid development with pre-built classes
- **Responsive**: Built-in responsive design utilities
- **Customizable**: Easy to modify colors, spacing, and typography
- **Performance**: Only includes the CSS you actually use
- **Maintainable**: Consistent design system and spacing scale

## 🎨 Design System

### Color Palette
- **Primary Blue**: #2563eb (Royal Blue)
- **Secondary Blue**: #3b82f6 (Light Blue)
- **Dark Text**: #1e293b (Slate)
- **Light Text**: #64748b (Gray)
- **Background**: #f8fafc (Light Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)
- **Responsive Sizing**: Scales from mobile to desktop

### Spacing & Layout
- **Container**: max-w-6xl (1200px)
- **Section Padding**: py-20 (80px top/bottom)
- **Grid System**: Responsive grid with gap-8, gap-12
- **Border Radius**: rounded-xl for cards, rounded-lg for buttons

## 📱 Responsive Breakpoints

- **Mobile**: Default (320px+)
- **Small**: sm: (640px+)
- **Medium**: md: (768px+)
- **Large**: lg: (1024px+)
- **Extra Large**: xl: (1280px+)

## 🌟 Key Features Explained

### Navigation
- Fixed navigation bar with backdrop blur effect
- Smooth scrolling to sections
- Active section highlighting
- Mobile hamburger menu with smooth animations

### Animations
- Typing effect for hero title
- Scroll-triggered animations using Intersection Observer
- Staggered animations for skill categories
- Hover effects with smooth transitions

### Performance
- Tailwind CSS via CDN for fast loading
- Minimal JavaScript footprint
- Optimized animations using CSS transforms
- Lazy loading of scroll animations

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## ✏️ Customization

### Colors
Modify the Tailwind config in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#your-color',
                    600: '#your-darker-color',
                }
            }
        }
    }
}
```

### Layout
- Change container width: `max-w-6xl` → `max-w-7xl`
- Adjust spacing: `py-20` → `py-24`
- Modify grid columns: `lg:grid-cols-2` → `lg:grid-cols-3`

### Typography
- Update font sizes: `text-4xl` → `text-5xl`
- Change font weights: `font-semibold` → `font-bold`
- Modify line heights: `leading-tight` → `leading-relaxed`

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch and deploy

### Netlify
1. Drag and drop your project folder
2. Or connect your GitHub repository
3. Automatic deployment on push

### Vercel
1. Import your GitHub repository
2. Automatic deployment and previews
3. Custom domain support

## 📝 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using Tailwind CSS for maximum performance and maintainability.**
