# Spookiz DressUp - Monster Fashion Show Landing Page

A static, responsive one-page website for the Spookiz DressUp Android game with smooth animations and interactive elements.

## 🎮 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - CSS animations and JavaScript-powered interactions
- **Interactive Elements** - Hover effects, parallax scrolling, and slide animations
- **Modern Design** - Clean, colorful UI with gradient backgrounds
- **Performance Optimized** - Lazy loading images and debounced scroll events
- **Accessible** - Semantic HTML and ARIA labels

## 📁 File Structure

```
/
├── index.html          # Main HTML file
├── styles/
│   ├── main.css        # Compiled CSS (ready to use)
│   └── main.scss       # Source SCSS file (for development)
├── scripts/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Direct Usage (Recommended)
Simply open `index.html` in your web browser. All styles are in the compiled `main.css` file.

### Option 2: Development with SCSS
If you want to modify styles using SCSS:

1. Install a SASS compiler:
   ```bash
   npm install -g sass
   ```

2. Compile SCSS to CSS:
   ```bash
   sass styles/main.scss styles/main.css
   ```

3. Watch for changes (auto-compile):
   ```bash
   sass --watch styles/main.scss:styles/main.css
   ```

## 🎨 Customization

### Colors
Main colors are defined at the top of `main.css` or `main.scss`:
- Primary: `#FF6B35` (Orange)
- Secondary: `#8B5CF6` (Purple)
- Dark: `#1a1a2e`
- Light: `#f5f5f5`

### Content
All content can be edited directly in `index.html`:
- Hero section text
- Story cards
- Features list
- Screenshots
- Download section

### Images
Replace the Unsplash placeholder images with your own game screenshots:
1. Add your images to an `/images/` folder
2. Update the `src` attributes in `index.html`

## ✨ JavaScript Features

The website includes several interactive features:

1. **Smooth Scrolling** - Anchor links smoothly scroll to sections
2. **Scroll Animations** - Elements fade in as you scroll
3. **Screenshots Slider** - Auto-scrolling with manual controls
4. **Parallax Effect** - Hero background shapes follow mouse movement
5. **3D Card Tilt** - Feature cards tilt on mouse hover
6. **Progress Bar** - Shows scroll progress at top of page
7. **Ripple Effect** - Buttons show ripple on click
8. **Easter Egg** - Konami code activates a rainbow effect

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Sections

1. **Hero** - Welcome message with CTA buttons
2. **Story** - Game background and concept
3. **Features** - Key game features with icons
4. **Screenshots** - Auto-scrolling game screenshots
5. **Download** - Download CTA with Google Play badge
6. **Footer** - Links and social media

## 🎯 SEO Optimized

- Semantic HTML5 elements
- Meta description included
- Proper heading hierarchy
- Alt tags for images

## 🔧 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch and root folder
5. Save and get your URL

### Netlify
1. Drag and drop the entire folder to Netlify
2. Get instant deployment

### Any Web Host
Upload all files to your web hosting via FTP or cPanel.

## 📄 License

Free to use for the Spookiz DressUp game project.

## 🎮 Credits

- Design inspired by Figma mockup
- Inter font from Google Fonts
- Icons: Custom SVG
- Images: Unsplash (replace with actual game screenshots)

---

**Built with ❤️ for Spookiz fans worldwide!**
