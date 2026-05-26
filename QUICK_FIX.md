# Quick Fix - Tailwind CSS Not Connected

If you're seeing **unstyled content** (white background, no layout), here's the instant fix:

## Option 1: Clear Vite Cache (Fastest)

```bash
# Stop the dev server (Ctrl+C if running)

# Remove Vite cache
rm -rf node_modules/.vite

# Start again
npm run dev
```

## Option 2: Fresh Install

```bash
# Stop the dev server

# Remove and reinstall
rm -rf node_modules package-lock.json
npm install

# Start dev server
npm run dev
```

## Option 3: Hard Refresh Browser

1. Open http://localhost:5173/
2. Press **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac)
3. Or open in **Incognito/Private mode**

## How to Know It's Working

### ✅ Correct (Styles Loaded):
- Dark purple/blue gradient background
- White text with gradient headings
- Cards with semi-transparent backgrounds
- Smooth hover effects
- Professional layout

### ❌ Wrong (Styles NOT Loaded):
- Plain white background
- Black text
- No layout/grid
- Everything stacked vertically
- No styling at all

## Still Not Working?

### Check 1: Tailwind is Imported

File: `src/index.css` should have:
```css
@import "tailwindcss";
```

### Check 2: CSS is Imported in main.tsx

File: `src/main.tsx` should have:
```tsx
import "./index.css";
```

### Check 3: Vite Config

File: `vite.config.ts` should have:
```ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  // ...
});
```

## Nuclear Option (Complete Reset)

If nothing else works:

```bash
# 1. Stop dev server

# 2. Remove everything
rm -rf node_modules package-lock.json dist node_modules/.vite

# 3. Fresh install
npm install

# 4. Build
npm run build

# 5. Start dev server
npm run dev

# 6. Hard refresh browser
```

## Test in Browser Console

Open DevTools (F12) and run:

```javascript
// Check if Tailwind classes exist
document.querySelector('.bg-gradient-to-br')
```

If this returns `null`, Tailwind isn't loaded.

## Quick Verification

Your homepage should look like this:

```
┌─────────────────────────────────────┐
│  Navbar (dark, semi-transparent)    │
├─────────────────────────────────────┤
│                                     │
│         Hi there! 👋                │
│      I'm Yasvanth Bala G           │
│   (gradient blue/purple text)       │
│                                     │
│   [Get In Touch] [View Projects]   │
│   (gradient buttons)                │
│                                     │
│   🔗 🔗 🔗 (social icons)         │
│                                     │
├─────────────────────────────────────┤
│         My Skills                   │
│  (grid of cards with icons)        │
└─────────────────────────────────────┘
```

## Most Common Fix

**90% of the time, this works:**

```bash
rm -rf node_modules/.vite && npm run dev
```

Then hard refresh your browser!

---

**Need more help?** Check TROUBLESHOOTING.md or TEST_SETUP.md
