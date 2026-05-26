# Quick Commands Reference

## 🚀 Development

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```
Visit: http://localhost:5173

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Check code quality
```bash
npm run lint
```

## 📦 Git Commands

### Initialize repository
```bash
git init
```

### Add all files
```bash
git add .
```

### Commit changes
```bash
git commit -m "Your message here"
```

### Add remote repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### Push to GitHub
```bash
git branch -M main
git push -u origin main
```

### Update after changes
```bash
git add .
git commit -m "Update portfolio"
git push
```

## ☁️ Vercel Deployment

### Install Vercel CLI (one time)
```bash
npm install -g vercel
```

### Deploy to Vercel
```bash
vercel
```

### Deploy to production
```bash
vercel --prod
```

## 🎨 Common Tasks

### Add a new skill
1. Open `src/components/Skills.tsx`
2. Add to the `skills` array
3. Include: name, icon, description, level, color

### Update experience
1. Open `src/components/Experience.tsx`
2. Edit the `experiences` array
3. Update company, position, duration, description, skills

### Add a project
1. Open `src/components/Projects.tsx`
2. Add to the `projects` array
3. Include: title, type, description, tech, github, gradient

### Update social links
1. **Hero section**: `src/components/Hero.tsx`
2. **Footer**: `src/components/Footer.tsx`
3. Update GitHub, LinkedIn, Instagram URLs

### Change EmailJS settings
1. Open `src/components/Contact.tsx`
2. Update service ID, template ID, public key
3. Test the form

## 🔧 Troubleshooting

### Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Force rebuild
```bash
npm run build -- --force
```

### Check for errors
```bash
npm run dev
# Then check browser console
```

## 📸 Managing Images

### Add image to public folder
```bash
# Copy image to public/
cp /path/to/image.jpg public/
```

### Reference image in code
```tsx
<img src="/public/image.jpg" alt="Description" />
```

## 🌐 Vercel via GitHub

1. Push to GitHub (see Git commands above)
2. Go to vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! ✨

## 💡 Quick Tips

### Before committing
```bash
npm run build  # Make sure it builds
git status     # Check what changed
```

### After deployment
- Check Vercel dashboard for build logs
- Visit your live URL
- Test contact form
- Check all links

### Making updates
1. Edit files locally
2. Test with `npm run dev`
3. Commit and push
4. Vercel auto-deploys!

## 🎯 One-Line Deployment

After first setup:
```bash
git add . && git commit -m "Update" && git push
```
Vercel deploys automatically!

## 📝 Notes

- **Port in use?** Kill process: `killall node`
- **Build failing?** Check build logs in terminal
- **Images not showing?** Verify path starts with `/public/`
- **Form not working?** Check EmailJS credentials

---

**Keep this file handy for quick reference! 📌**
