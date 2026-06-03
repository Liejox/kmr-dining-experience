# 🍛 KMR Dining Experience

Welcome to the digital storefront of the **KMR Dining Experience**! This repository hosts the frontend web application for our restaurant, designed to showcase our authentic culinary offerings, vibrant dining atmosphere, and exceptional services. 

Built with modern web technologies, this site offers a blazing-fast, responsive, and visually appetizing user experience.

---

## ✨ Features

*   **Hero Section**: An inviting first look at our restaurant's interior.
*   **Signature Dishes**: A visual feast featuring our specialties—including Biryani, Chicken 65, Dosa, Kaadai, Parotta, and Falooda!
*   **Interactive Gallery**: A dynamic carousel/grid showcasing our chefs, tables, and dining ambiance.
*   **Customer Reviews**: Real testimonials from our satisfied guests.
*   **Services & About**: Detailed sections explaining who we are and why you should dine with us.
*   **Responsive Design**: Flawless browsing across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

This project leverages a cutting-edge JavaScript/TypeScript ecosystem for optimal performance and developer experience:

*   **Framework**: React (via Vite)
*   **Routing**: TanStack Router (File-based routing)
*   **Styling**: Tailwind CSS
*   **UI Components**: shadcn/ui (Accessible, customizable components)
*   **Package Manager**: Bun
*   **Deployment**: Cloudflare Workers / Pages (`wrangler`)

---

## 📂 Project Structure

```text
kmr-dining-experience/
├── public/                 # Static assets and robots.txt
├── src/
│   ├── assets/             # Restaurant imagery (dishes, gallery, hero)
│   ├── components/
│   │   ├── site/           # Core page sections (About, Hero, Gallery, etc.)
│   │   └── ui/             # Reusable shadcn/ui components (Buttons, Dialogs, etc.)
│   ├── hooks/              # Custom React hooks (e.g., use-mobile)
│   ├── lib/                # Utility functions and error handling
│   ├── routes/             # TanStack file-based route definitions
│   ├── router.tsx          # Router configuration
│   ├── server.ts           # Server-side configuration
│   └── styles.css          # Global stylesheets
├── bun.lock                # Bun dependencies lockfile
├── vite.config.ts          # Vite configuration
└── wrangler.jsonc          # Cloudflare deployment config

```
🚀 Getting Started
To run this project locally, ensure you have Bun installed on your machine.

1. Clone the repository
Bash
git clone [https://github.com/Liejox/kmr-dining-experience.git](https://github.com/Liejox/kmr-dining-experience.git)
cd kmr-dining-experience
2. Install dependencies
Bash
bun install
3. Start the development server
Bash
bun run dev
Open your browser and navigate to http://localhost:5173 (or the port provided in your terminal) to view the site.

☁️ Deployment
This project is configured for seamless deployment to Cloudflare using Wrangler. To deploy:

Bash
bun run deploy
# or using wrangler directly:
npx wrangler deploy
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.
