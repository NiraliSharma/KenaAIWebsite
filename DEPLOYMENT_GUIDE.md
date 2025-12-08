# GitHub Setup & Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `KenaAIWebsite` (or your preferred name)
4. Description: `AI-powered retail intelligence platform - Investor website`
5. Choose **Private** (recommended for investor-facing sites)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

---

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/KenaAIWebsite.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

---

## Step 3: Verify Upload

After pushing, refresh your GitHub repository page. You should see:
- ✅ All project files
- ✅ Commit message visible
- ✅ 38 files uploaded
- ✅ README.md displays on the main page

---

## Step 4: Deploy to Vercel (Recommended)

### Why Vercel?
- ✅ Free hosting for personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ GitHub integration (auto-deploy on push)
- ✅ Perfect for React/Vite apps

### Deployment Steps:

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your repositories

2. **Import Project**
   - Click "Add New..." → "Project"
   - Find `KenaAIWebsite` in your repository list
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - Leave other settings as default

4. **Add Environment Variables** (if using EmailJS with env vars)
   - Click "Environment Variables"
   - Add:
     - `VITE_EMAILJS_PUBLIC_KEY`: your_key_here
     - `VITE_EMAILJS_SERVICE_ID`: service_kenai
     - `VITE_EMAILJS_TEMPLATE_ID`: template_kenai

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - You'll get a URL like: `kenai-website.vercel.app`

---

## Step 5: Test Live Site

Once deployed, test everything:

### Critical Tests:
1. **Visit the live URL** provided by Vercel
2. **Test on mobile device** (actual phone, not just browser resize)
3. **Test contact form**:
   - Fill out all fields
   - Click Submit
   - Verify email arrives at sharmanirali1103@gmail.com
4. **Click logo** to verify it scrolls to top
5. **Test all navigation links**
6. **Check all sections load** properly

### Mobile Testing Tools:
- Use your actual smartphone
- Use Chrome DevTools (F12) → Device Toolbar
- Test on both iPhone and Android if possible

---

## Alternative: Deploy to Netlify

If you prefer Netlify over Vercel:

1. **Sign up at [netlify.com](https://netlify.com)**
2. **New site from Git** → Choose GitHub
3. **Select repository**: KenaAIWebsite
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy site**

Both platforms work great for this project!

---

## Step 6: Custom Domain (Optional)

### If you have a domain (e.g., kenai.com):

**For Vercel:**
1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain: `kenai.com` and `www.kenai.com`
4. Follow DNS configuration instructions
5. Update your domain's DNS records

**For Netlify:**
1. Site settings → Domain management
2. Add custom domain
3. Follow DNS setup wizard

### Typical DNS Records:
```
Type    Name    Value
A       @       76.76.21.21 (Vercel's IP)
CNAME   www     cname.vercel-dns.com
```

---

## Step 7: Continuous Deployment

Now that your site is connected to GitHub:

### Automatic Deployment:
- Any push to `main` branch will automatically deploy
- Vercel/Netlify will rebuild and update your site
- Takes 1-2 minutes per deployment

### Workflow:
```bash
# Make changes to your code
# Stage changes
git add .

# Commit with message
git commit -m "Update: description of changes"

# Push to GitHub (triggers auto-deploy)
git push origin main
```

---

## Important: Before First Deployment

### ✅ Complete EmailJS Setup
1. Follow `EMAILJS_SETUP.md`
2. Create EmailJS account
3. Set up service and template
4. Add your public key to the code
5. Test form locally first

### ✅ Update Code
In `src/components/ContactForm/ContactForm.jsx`:
```javascript
// Line ~30
user_id: 'YOUR_ACTUAL_EMAILJS_PUBLIC_KEY',
```

Replace `YOUR_EMAILJS_PUBLIC_KEY` with your real key!

---

## Troubleshooting

### Build Fails
- Check `npm run build` works locally
- Ensure all dependencies in package.json
- Check for console errors

### Form Not Working
- Verify EmailJS public key is correct
- Check EmailJS dashboard for errors
- Test form locally first
- Check browser console (F12) for errors

### Site Not Loading
- Wait 2-3 minutes after deployment
- Clear browser cache
- Try incognito/private window
- Check deployment logs on Vercel/Netlify

### Images Not Showing
- Add image URLs to component files
- See `IMAGE_VIDEO_GUIDE.md`
- Ensure image URLs are accessible
- Check for CORS issues

---

## Project URLs

After deployment, save these URLs:

- **Live Site**: `https://your-site.vercel.app`
- **GitHub Repo**: `https://github.com/YOUR_USERNAME/KenaAIWebsite`
- **Deployment Dashboard**: `https://vercel.com/YOUR_USERNAME/KenaAIWebsite`

---

## Security Checklist

Before sharing with investors:

- [ ] EmailJS key configured (not exposed in client code is fine)
- [ ] No sensitive data in repository
- [ ] HTTPS enabled (automatic with Vercel/Netlify)
- [ ] Form submissions tested and working
- [ ] Contact email receiving messages
- [ ] No console errors on live site
- [ ] Professional domain (optional but recommended)

---

## Next Steps After Deployment

1. **Add Real Images**
   - Follow `IMAGE_VIDEO_GUIDE.md`
   - Replace all placeholder images
   - Add demo video

2. **Add Analytics** (Optional)
   - Google Analytics
   - Vercel Analytics (built-in)
   - Track visitor behavior

3. **SEO Optimization**
   - Add meta descriptions
   - Update page title
   - Add Open Graph tags

4. **Performance**
   - Test with Lighthouse
   - Optimize images
   - Check load times

5. **Share with Investors**
   - Test everything thoroughly
   - Prepare talking points
   - Have backup contact method ready

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **EmailJS Docs**: https://www.emailjs.com/docs
- **Vite Docs**: https://vitejs.dev

---

## Quick Command Reference

```bash
# Local development
npm run dev              # Start dev server

# Testing
npm run build           # Test production build
npm run preview         # Preview production build locally

# Git commands
git status              # Check what's changed
git add .               # Stage all changes
git commit -m "msg"     # Commit with message
git push origin main    # Push to GitHub

# View logs
git log --oneline       # See commit history
```

Good luck with your investor presentations! 🚀
