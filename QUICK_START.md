# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Add Your Images to `public/` folder
Copy these files into the `public/` directory:
- Company logos (infosys-logo.png, marcello-logo.png, izeon-logo.jpeg)
- Certificates (cer1.jpg, cer2.jpg, cer3.jpg, cer4.jpg)

### 3️⃣ Run Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### 4️⃣ Customize Your Content

**Update Personal Info:**
- `src/components/Hero.tsx` - Your name & description
- `src/components/Footer.tsx` - Social links

**Update Skills:**
- `src/components/Skills.tsx` - Add/remove/edit skills

**Update Experience:**
- `src/components/Experience.tsx` - Your internships

**Update Projects:**
- `src/components/Projects.tsx` - Your projects & GitHub links

**Update Achievements:**
- `src/components/Achievements.tsx` - Your awards

**Update Certificates:**
- `src/components/Certificates.tsx` - Your certifications

### 5️⃣ Test Contact Form

Make sure EmailJS is working:
1. Fill out the contact form
2. Check if you receive the email
3. If not, update credentials in `src/components/Contact.tsx`

### 6️⃣ Build for Production
```bash
npm run build
```

### 7️⃣ Deploy to Vercel

**Easy Way:**
```bash
npm install -g vercel
vercel
```

**Or via GitHub:**
- Push code to GitHub
- Connect repository to Vercel
- Auto-deploy! ✨

---

## 🎨 What's New in This Version?

✅ **No More Lag** - Removed heavy animations  
✅ **Clean Design** - Professional gradient theme  
✅ **No Custom Cursor** - Better performance  
✅ **New Skills** - React.js, Node.js, Spring Boot, Firebase, AWS  
✅ **Infosys Springboard** - Added to experience  
✅ **Vercel Ready** - All images in public/ folder  

---

## 📁 Project Structure

```
portfolio/
├── public/              # Place all images here
│   ├── infosys-logo.png
│   ├── marcello-logo.png
│   ├── izeon-logo.jpeg
│   ├── cer1.jpg
│   ├── cer2.jpg
│   ├── cer3.jpg
│   └── cer4.jpg
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollToTop.tsx
│   ├── App.tsx          # Main app
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vercel.json          # Deployment config
```

---

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality

---

## 🎯 Key Features

- **Responsive Design** - Works on all devices
- **Type Animations** - Smooth typing effects
- **Smooth Scrolling** - Navigate sections seamlessly
- **Modal Certificates** - Click to view full size
- **Working Contact Form** - Integrated with EmailJS
- **Fast Loading** - Optimized performance
- **Modern UI** - Gradient backgrounds & clean layout

---

## 🚨 Important Notes

1. **Images**: All images MUST be in `public/` folder
2. **Paths**: Use `/public/image.jpg` in code for Vercel
3. **EmailJS**: Update credentials if needed
4. **GitHub Links**: Update to your own repositories
5. **Social Links**: Update all social media URLs

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All images are in `public/` folder
- [ ] Personal info is updated
- [ ] Social links are correct
- [ ] GitHub links point to your repos
- [ ] EmailJS is configured
- [ ] Contact form works
- [ ] Build completes: `npm run build`
- [ ] No errors in console

---

## 🎉 You're All Set!

Your modern, professional portfolio is ready to impress recruiters and showcase your skills!

**Need help?** Check:
- README.md - Full documentation
- DEPLOYMENT_GUIDE.md - Detailed deployment steps

**Happy Coding! 🚀**
