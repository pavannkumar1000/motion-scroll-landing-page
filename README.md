Motion Scroll Landing Page
A premium, scroll-driven landing page built with React, GSAP ScrollTrigger, and Tailwind CSS. The central visual stays anchored at the center of the viewport while scroll progress controls ring rotation, core pulsing, glow expansion, and checkpoint metric reveals.

Built as a portfolio project to demonstrate modern frontend animation, smooth interaction design, and performant scroll behavior.

🔗 Live Demo
Live URL: https://pavannkumar1000.github.io/motion-scroll-landing-page/

Repository: https://github.com/pavannkumar1000/motion-scroll-landing-page

✨ Features
Full-screen hero — occupies the first viewport above the fold

Letter-spaced headline — M O T I O N E X P E R I E N C E with staggered letter reveal on load

Anchored central object — a CSS-only abstract visual (glow + 3 rings + gradient core + orbiting dot) that stays fixed at the exact center of the viewport

Continuous idle motion — rings rotate at different speeds, core breathes, glow pulses, all without the object ever leaving the center

Scroll-driven choreography — GSAP ScrollTrigger with scrub ties the animation to scroll position (not time-based autoplay)

Pinned hero — the hero stays pinned while the user scrolls, so the animation plays in place rather than drifting off-screen

Checkpoint metrics — four stat cards fade in one-by-one as the user reaches scroll thresholds, positioned safely away from the central object

Reverse scroll — scrolling back up reverses the entire animation naturally

Mouse parallax — on desktop, the object tilts subtly toward the cursor with rotateX / rotateY

Responsive — tailored layouts for mobile, tablet, desktop, and ultrawide

Accessible — respects prefers-reduced-motion; no horizontal overflow anywhere

🛠 Tech Stack
Layer	Technology
Framework	React 19 (Vite)
Styling	Tailwind CSS v3
Animation	GSAP 3 + ScrollTrigger
Language	JavaScript (JSX)
Build Tool	Vite
Fonts	Space Grotesk, Inter (Google Fonts)
🎬 Animation Approach
The core animation uses GSAP ScrollTrigger with a single scrubbed timeline:

js
const scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: pinnedRef.current,
    start: "top top",
    end: "+=250%",
    scrub: 1,
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
  defaults: { ease: "none" },
})
Key principles:

scrub: 1 — ties animation progress to scroll position with a small smoothing lag, making the motion feel cinematic instead of instantaneous

pin: true — keeps the hero section fixed in the viewport while the user scrolls, so the animation plays in place

end: "+=250%" — gives 2.5 viewports of scroll space for the animation to unfold

ease: "none" — critical for scrub animations; any easing feels unnatural when the user controls the timeline

Transform + opacity only — every animated property is transform (scale, rotate, x, y) or opacity, avoiding layout reflows

Continuous idle motion — infinite gsap.to loops handle ring rotation and core breathing independently of scroll

gsap.context() cleanup — all animations are scoped and properly killed on unmount

📱 Responsive Design
The layout is tuned for every breakpoint using Tailwind's responsive prefixes:

Breakpoint	Behavior
Mobile (< 768px)	Compact headline, smaller object, metrics stacked below
Tablet (768px+)	Medium object, metrics repositioned to outer corners
Desktop (1024px+)	Full-size object, mouse parallax enabled
Ultrawide (1440px+)	Object capped at 20rem for balance
No horizontal scrolling at any width. The overflow-x-hidden rule on main plus mobile-first sizing prevents overflow.

🚀 Run Locally
bash
# 1. Clone the repository
git clone https://github.com/pavannkumar1000/motion-scroll-landing-page.git

# 2. Enter the folder
cd motion-scroll-landing-page

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
Then open the printed URL (usually http://localhost:5173/motion-scroll-landing-page/).

Build for production
bash
npm run build
npm run preview
Deploy to GitHub Pages
bash
npm run deploy
📁 Project Structure
text
motion-scroll-landing-page/
├── public/
├── src/
│   ├── App.jsx          ← entire page + GSAP logic
│   ├── index.css        ← Tailwind directives + base styles
│   └── main.jsx         ← React entry
├── index.html           ← HTML shell with fonts
├── tailwind.config.js   ← design tokens
├── postcss.config.js
├── vite.config.js       ← base path for GitHub Pages
└── package.json
📄 License
This project is open source and available under the MIT License.

👤 Author
Pavan Kumar

GitHub: @pavannkumar1000