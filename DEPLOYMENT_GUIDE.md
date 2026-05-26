# Deployment Guide - Vercel via GitHub

Follow these simple steps to deploy your portfolio to Vercel:

## Step 1: Prepare Your Images

Before deploying, make sure you have placed all required images in the `public/` folder:

### Required Images:
```
public/
  ├── infosys-logo.png      (Infosys Springboard logo)
  ├── marcello-logo.png     (Marcello Tech logo)
  ├── izeon-logo.jpeg       (IZEON logo)
  ├── cer1.jpg             (Full Stack certificate)
  ├── cer2.jpg             (JavaScript certificate)
  ├── cer3.jpg             (Best Paper Award)
  └── cer4.jpg             (Mobile App internship)
```

## Step 2: Push to GitHub

### 2.1 Initialize Git (if not already done)
```bash
git init
```

### 2.2 Add all files
```bash
git add .
```

### 2.3 Commit your changes
```bash
git commit -m "Initial commit - Portfolio website"
```

### 2.4 Create a new repository on GitHub
- Go to https://github.com/new
- Create a repository named `portfolio` (or any name you prefer)
- **Do NOT** initialize with README, .gitignore, or license

### 2.5 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### 3.1 Sign up/Login to Vercel
- Go to https://vercel.com
- Click "Sign Up" or "Login"
- Choose "Continue with GitHub"

### 3.2 Import Your Project
1. Click "Add New..." → "Project"
2. Select "Import Git Repository"
3. Find your portfolio repository
4. Click "Import"

### 3.3 Configure Project
Vercel will auto-detect the settings, but verify:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### 3.4 Deploy
- Click "Deploy"
- Wait 1-2 minutes for the build to complete
- Your site is now live! 🎉

## Step 4: Get Your URL

After deployment, you'll get a URL like:
```
https://your-portfolio-xxxxx.vercel.app
```

### (Optional) Add Custom Domain
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Step 5: Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically rebuild and deploy your changes!

## Troubleshooting

### Images Not Showing
- Make sure images are in the `public/` folder
- Check file names match exactly (case-sensitive)
- Verify image paths in components start with `/public/`

### Build Fails
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Contact Form Not Working
- Verify EmailJS credentials in `src/components/Contact.tsx`
- Check EmailJS dashboard for API limits
- Make sure your EmailJS service is active

## Production Checklist

Before going live, ensure:

- ✅ All images are added to `public/` folder
- ✅ Personal information is updated in all components
- ✅ Social media links are correct
- ✅ EmailJS is configured and tested
- ✅ GitHub links point to your repositories
- ✅ Project builds successfully locally
- ✅ No console errors in browser

## Support

If you encounter any issues:

1. Check Vercel deployment logs
2. Test locally with `npm run dev`
3. Verify all files are committed to Git
4. Check browser console for errors

## Success! 🚀

Your professional portfolio is now live and accessible to the world!

**Next Steps:**
- Share your portfolio URL on LinkedIn
- Add it to your resume
- Share it on social media
- Apply for jobs with your live portfolio!

---

**Deployed with ❤️ using React + Vite + Tailwind CSS + Vercel**
