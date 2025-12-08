# KeNaAI - Investor Website

A professional, investor-focused website for KeNaAI - an AI-powered platform designed to transform small and mid-sized grocery and convenience stores.

## 🚀 Features

- **Modern Dark Theme**: Sleek black background (#0A0A0A) with vibrant accent color (#ED6042)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Charts**: Data visualizations using Chart.js and React-Chartjs-2
- **Modular Architecture**: Clean, maintainable React component structure
- **Future-Focused Content**: All features described with "will" language as planned capabilities

## 📋 Sections

1. **Hero Section**: Compelling headline with tagline and primary CTA
2. **MVP Features**: Detailed core platform capabilities with placeholders for visuals
3. **How It Works**: 4-step process demonstrating the platform workflow
4. **Future Add-Ons**: Planned modular ecosystem features
5. **Investment Value**: ROI statistics and charts showcasing market opportunity
6. **Market Opportunity**: Growth projections and vision timeline
7. **Demo Video**: Placeholder for concept demonstration
8. **Contact Form**: Investment inquiry form with company details

## 🛠️ Tech Stack

- **React 18.2.0**: Modern UI library
- **Vite 5.0.8**: Fast build tool and dev server
- **Framer Motion 10.16.16**: Animation library
- **Chart.js 4.4.1**: Data visualization
- **React-Chartjs-2 5.2.0**: React wrapper for Chart.js

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Design System

### Colors
- **Primary Accent**: #ED6042 (Coral/Red-Orange)
- **Background Dark**: #0A0A0A (Near Black)
- **Card Background**: #1a1a1a
- **Text Primary**: #ffffff (White)
- **Text Secondary**: #b0b0b0 (Light Gray)
- **Text Muted**: #707070 (Gray)

### Typography
- Font Family: Inter, system fonts fallback
- Responsive font sizing using clamp()
- Font weights: 500 (medium), 600 (semi-bold), 700 (bold), 800 (extra-bold)

## 📁 Project Structure

```
KenaAIWebsite/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── MVPFeatures/
│   │   │   ├── MVPFeatures.jsx
│   │   │   └── MVPFeatures.css
│   │   ├── HowItWorks/
│   │   │   ├── HowItWorks.jsx
│   │   │   └── HowItWorks.css
│   │   ├── FutureAddOns/
│   │   │   ├── FutureAddOns.jsx
│   │   │   └── FutureAddOns.css
│   │   ├── InvestmentValue/
│   │   │   ├── InvestmentValue.jsx
│   │   │   └── InvestmentValue.css
│   │   ├── MarketOpportunity/
│   │   │   ├── MarketOpportunity.jsx
│   │   │   └── MarketOpportunity.css
│   │   ├── DemoVideo/
│   │   │   ├── DemoVideo.jsx
│   │   │   └── DemoVideo.css
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Highlights

- **Investment-Focused**: Designed specifically for fundraising meetings
- **No Demo CTA**: Replaced with "Investment Discussion" as product is in planning stage
- **MVP Emphasis**: Core features highlighted prominently
- **Future Roadmap**: Clear vision for add-on modules and growth
- **Visual Placeholders**: Strategic placement for future images and videos
- **Data-Driven**: Charts and statistics to demonstrate market opportunity

## 🚀 Deployment

This project can be deployed to:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect to Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

## 📝 Content Guidelines

All MVP features and add-ons use future-tense language:
- ✅ "Will monitor stock levels"
- ✅ "Will track customer movements"
- ✅ "Will integrate with POS systems"
- ❌ "Monitors stock levels" (too definitive)

## 🎨 Customization

To modify the accent color, update the CSS variable in `src/index.css`:
```css
:root {
  --primary-accent: #ED6042; /* Change this */
}
```

## 📧 Contact

For inquiries: invest@kenai.ai

## 📄 License

© 2025 KeNaAI. All rights reserved.
