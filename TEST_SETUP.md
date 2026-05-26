# Test Your Setup

Follow these steps to verify everything is working:

## Step 1: Install Dependencies

```bash
npm install
```

**Expected output:** Should install all packages without errors

## Step 2: Start Dev Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v7.3.2  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 3: Open Browser

Visit: http://localhost:5173/

### ✅ What You Should See:

1. **Loading Screen** - Brief purple/blue gradient loading screen
2. **Navbar** - "Yasvanth Bala G" with navigation links
3. **Hero Section** 
   - "Hi there! 👋"
   - Your name in gradient text
   - Typing animation with "Full Stack Developer" etc.
   - Two buttons: "Get In Touch" and "View Projects"
   - Social media icons (GitHub, LinkedIn, Mail)
4. **Skills Section** - Grid of 13 skill cards with:
   - Icons
   - Skill names
   - Descriptions
   - Progress bars
5. **Experience Section** - 3 internship cards
6. **Projects Section** - 4 project cards
7. **Achievements Section** - 5 achievement cards
8. **Certificates Section** - 4 certificate cards
9. **Contact Section** - Contact form
10. **Footer** - Social links and copyright

### 🎨 Style Check:

- **Background:** Dark gradient (purple/blue)
- **Text:** White/gray colors
- **Cards:** Semi-transparent with borders
- **Buttons:** Gradient (blue to purple)
- **Hover Effects:** Smooth scale and glow effects

## ❌ If Styles Are Missing:

You'll see plain unstyled HTML (white background, black text, no layout).

### Fix:

```bash
# Stop the dev server (Ctrl+C)

# Clear Vite cache
rm -rf node_modules/.vite

# Restart
npm run dev
```

### Or Try:

```bash
# Complete reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Step 4: Test Interactions

### Navigation
- Click navbar links → Should scroll smoothly to sections
- On mobile: Click hamburger menu → Should show menu

### Buttons
- Hover over buttons → Should scale up and glow
- Click "Get In Touch" → Should scroll to contact form
- Click "View Projects" → Should scroll to projects

### Cards
- Hover over skill cards → Should scale up slightly
- Hover over project cards → Should scale and glow

### Contact Form
- Fill out form
- Click "Send Message"
- Should show success or error message

### Certificate Modal
- Click any certificate card
- Should open modal with full image
- Click X or outside → Should close

### Scroll
- Scroll down → Scroll to top button appears (bottom right)
- Click scroll button → Should scroll to top smoothly

## Step 5: Mobile Test

Resize browser to mobile width (375px):

### Should See:
- Hamburger menu icon (☰)
- Stacked sections (not side-by-side)
- Mobile-optimized spacing
- Everything readable and accessible

## Step 6: Console Check

Open Browser DevTools (F12) → Console tab

### ✅ Good:
- No red error messages
- Maybe some warnings (acceptable)

### ❌ Bad:
- Red error messages
- "Failed to load" messages
- "Cannot find module" errors

**If you see errors:** Read TROUBLESHOOTING.md

## Step 7: Build Test

```bash
npm run build
```

**Expected output:**
```
✓ 1788 modules transformed.
✓ built in ~3s
dist/index.html  XXX kB │ gzip: ~89 kB
```

### ✅ Success!
If build completes without errors, you're ready to deploy!

## Common Issues

### 1. Styles Not Loading

**Symptoms:**
- White background
- Black text
- No layout/grid
- Buttons look like plain links

**Fix:**
```bash
rm -rf node_modules/.vite
npm run dev
```

### 2. TypeScript Errors in Editor

**Symptoms:**
- Red squiggly lines in VS Code
- "Cannot find module" errors

**Fix:**
- Restart VS Code
- Run: `npm install`
- Reload window: Ctrl+Shift+P → "Reload Window"

### 3. Images Show Placeholder

**Symptoms:**
- Company logos show letters instead of images
- Certificates show gray boxes

**Fix:**
- Add actual images to `public/` folder
- Restart dev server

### 4. Port Already in Use

**Symptoms:**
- "Port 5173 is already in use"

**Fix:**
```bash
killall node
npm run dev
```

## ✅ Everything Working?

If you see:
- ✅ Styled layout with gradients
- ✅ All sections displaying correctly
- ✅ Hover effects working
- ✅ Smooth scrolling
- ✅ Mobile menu working
- ✅ No console errors
- ✅ Build succeeds

**You're ready to deploy! 🚀**

Proceed to DEPLOYMENT_GUIDE.md

## Still Having Issues?

1. Read TROUBLESHOOTING.md
2. Check browser console for specific errors
3. Make sure Node.js version is 18+:
   ```bash
   node --version
   ```
4. Try a different browser
5. Try Incognito/Private mode

---

**Happy Testing! 🧪**
