# Troubleshooting Guide

## Issue: Tailwind CSS Not Working / No Styles

If you see unstyled content when running the dev server, try these solutions:

### Solution 1: Clear Cache and Restart
```bash
# Stop the dev server (Ctrl+C)

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Start dev server again
npm run dev
```

### Solution 2: Clear Vite Cache
```bash
# Stop the dev server (Ctrl+C)

# Remove Vite cache
rm -rf node_modules/.vite

# Start dev server again
npm run dev
```

### Solution 3: Force Rebuild
```bash
# Stop the dev server

# Build fresh
npm run build

# Start dev server
npm run dev
```

### Solution 4: Check Browser Cache
1. Open browser DevTools (F12)
2. Right-click on refresh button
3. Select "Empty Cache and Hard Reload"
4. Or use Incognito/Private mode

## Issue: TypeScript Errors

If you see TypeScript errors:

```bash
# Make sure all dependencies are installed
npm install

# Restart your editor/IDE
# VS Code: Ctrl+Shift+P → "Reload Window"
```

## Issue: EmailJS Not Working

1. Check your EmailJS credentials in `src/components/Contact.tsx`:
   - Service ID: `service_0qw4tbw`
   - Template ID: `template_6shf101`
   - Public Key: `oGX5fIMmkwyC7ABkx`

2. Make sure EmailJS service is active at emailjs.com

3. Check browser console for errors

## Issue: Images Not Showing

1. Make sure images are in the `public/` folder:
   ```
   public/
   ├── infosys-logo.png
   ├── marcello-logo.png
   ├── izeon-logo.jpeg
   ├── cer1.jpg
   ├── cer2.jpg
   ├── cer3.jpg
   └── cer4.jpg
   ```

2. Image paths in code should start with `/public/`:
   ```tsx
   <img src="/public/image.jpg" alt="Description" />
   ```

3. Restart dev server after adding images

## Issue: Port Already in Use

If port 5173 is in use:

```bash
# Kill all Node processes
killall node

# Or use a different port
npm run dev -- --port 3000
```

## Issue: Build Fails

1. Check for syntax errors in your code
2. Make sure all imports are correct
3. Try:
   ```bash
   rm -rf dist
   npm run build
   ```

## Issue: Deployment Fails on Vercel

1. Make sure `vercel.json` exists
2. Check build logs in Vercel dashboard
3. Verify these settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

## Issue: Styles Look Different in Production

This is normal! The production build is optimized and may look slightly different.

To test production build locally:
```bash
npm run build
npm run preview
```

## Still Having Issues?

1. Check browser console for errors (F12)
2. Check terminal for error messages
3. Make sure you're using Node.js 18 or higher:
   ```bash
   node --version
   ```
4. Try in a different browser
5. Try in Incognito/Private mode

## Common Error Messages

### "Cannot find module"
```bash
npm install
```

### "Port 5173 is already in use"
```bash
killall node
npm run dev
```

### "Failed to resolve import"
Check your import paths - they should be relative:
```tsx
// Good
import Navbar from './components/Navbar';

// Bad
import Navbar from 'components/Navbar';
```

## Quick Reset

If nothing else works, complete reset:

```bash
# Stop dev server
# Delete everything except source files
rm -rf node_modules package-lock.json dist

# Reinstall
npm install

# Rebuild
npm run build

# Start fresh
npm run dev
```

## Contact

If you're still stuck:
1. Check the error message carefully
2. Search for the error on Google
3. Check React/Vite/Tailwind documentation
4. Check browser console for specific errors

---

**Most issues are fixed by clearing cache and reinstalling! 🔧**
