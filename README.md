## Portfolio (React + Vite)

This is your personal portfolio site built with **React (Vite)**.  
It is pre-structured for a **web & mobile app developer** with sections for hero, about, skills, projects, and contact.

### Run the project

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser (usually `http://localhost:5173`).

### Where to customize

- **Main layout & content**: `src/main.ts`  
  - Change **`YourName`**, hero title and subtitle.  
  - Update **About**, **Skills**, and **Projects** copy.  
  - Replace placeholder project cards with your real projects and links.  
  - Update contact details (email, GitHub, LinkedIn URLs).

- **Styling / theme**: `src/style.css`  
  - Tweak colors, spacing, fonts, and layout as desired.  
  - `.hero__avatar` and `.project-card__image` are where your images will eventually go.

### Adding your images

1. Place your images in the `public` folder (for example `public/hero.jpg`, `public/projects/app1.png`).
2. In `src/main.ts`, replace the `hero__avatar` and each `project-card__image` placeholder:

```html
<div class="hero__avatar">
  <img src="/hero.jpg" alt="Your name" />
</div>
```

```html
<div class="project-card__image">
  <img src="/projects/app1.png" alt="Project name" />
</div>
```

### Next steps

- Share your **project descriptions and image files**, and they can be wired into this template for you.
- Optionally add routing, blog posts, or a case-study page per project later.

### Deploy to Firebase Hosting

1. **Install Firebase CLI** (once globally):

```bash
npm install -g firebase-tools
```

2. **Log in and connect the project** (from the project root):

```bash
firebase login
firebase use --add
```

- Pick your Firebase project and set it as **default**.  
- If you haven&apos;t created one yet, create a project in the Firebase console first.

3. **Check hosting config**

- `firebase.json` is already set to:
  - Use `dist` as the public directory.
  - Rewrite all routes to `/index.html` (good for SPAs like this Vite app).

4. **Build and deploy**

```bash
npm run deploy
```

This runs the production build and then `firebase deploy`.  
Afterwards, Firebase will print your live hosting URL in the terminal.
