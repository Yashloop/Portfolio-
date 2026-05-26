# Yasvanth Bala G - Portfolio Website

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

✅ **Clean & Professional Design** - Modern UI without distracting animations
✅ **Fully Responsive** - Works perfectly on all devices
✅ **Performance Optimized** - Fast loading, no lag
✅ **Skills Section** - Showcasing Java, React.js, Node.js, Spring Boot, Firebase, AWS, and more
✅ **Experience** - Including Infosys Springboard internship
✅ **Projects Showcase** - Highlighting AI VoiceVersion, Alumni Connect, Threat Detection, and more
✅ **Achievements** - Awards and recognition
✅ **Certificates** - Professional certifications with modal viewer
✅ **Contact Form** - Integrated with EmailJS

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + React Icons
- **Animations**: React Type Animation
- **Email**: EmailJS
- **Build Tool**: Vite
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add Your Images

Place the following images in the `public/` directory:

**Company Logos:**
- `infosys-logo.png` - Infosys Springboard logo
- `marcello-logo.png` - Marcello Tech logo
- `izeon-logo.jpeg` - IZEON logo

**Certificates:**
- `cer1.jpg` - Full Stack Web Development certificate
- `cer2.jpg` - JavaScript course certificate
- `cer3.jpg` - Best Paper Award certificate
- `cer4.jpg` - Mobile App Development certificate

### 4. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and deploy

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## EmailJS Configuration

The contact form uses EmailJS. Make sure you have:

1. Created an account at [emailjs.com](https://www.emailjs.com/)
2. The service ID: `service_0qw4tbw`
3. The template ID: `template_6shf101`
4. The public key: `oGX5fIMmkwyC7ABkx`

If you want to use your own EmailJS account, update these values in `src/components/Contact.tsx`.

## Customization

### Update Personal Information

Edit the following files:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/Skills.tsx` - Add/remove skills
- `src/components/Experience.tsx` - Update work experience
- `src/components/Projects.tsx` - Update projects
- `src/components/Achievements.tsx` - Update achievements
- `src/components/Certificates.tsx` - Update certificates

### Update Social Links

Edit `src/components/Hero.tsx` and `src/components/Footer.tsx` to update:
- GitHub URL
- LinkedIn URL
- Instagram URL
- Email address

## Key Changes from Original

✅ **Removed all laggy animations** - Smooth, lightweight animations only
✅ **Removed custom cursor** - Standard cursor for better performance
✅ **Removed photo frame** - Clean hero section with text focus
✅ **Added new skills** - React.js, Node.js, Spring Boot, Firebase, AWS
✅ **Added Infosys Springboard** - New internship experience
✅ **Images in public/** - Ready for Vercel deployment
✅ **Modern theme** - Professional gradient-based design
✅ **Performance optimized** - Fast loading, no lag

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Yasvanth Bala G. All Rights Reserved.

## Contact

For any questions or suggestions, feel free to reach out through the contact form on the website!
