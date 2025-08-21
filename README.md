# NEVORIX

A modern Next.js-based web application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: v18.x or v20.x (recommended). [Download Node.js](https://nodejs.org/)
- **npm**: v9.x or higher (comes with Node.js)  
  _Alternatively, you can use [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)_
- **Git**: For cloning the repository. [Download Git](https://git-scm.com/)

## Getting Started

1. **Clone the repository**

   ```sh
   git clone https://github.com/amanlalpuria/vedvix.git
   cd vedvix
   ```

2. **Install dependencies**

   Using npm:
   ```sh
   npm install --legacy-peer-deps
   ```

   _If you use `pnpm` or `yarn`, install dependencies with:_
   ```sh
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```sh
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the app for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint for code quality

## Project Structure

```
.
├── app/                # Next.js app directory (pages, layouts, etc.)
├── components/         # Reusable React components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── public/             # Static assets
├── styles/             # Global and component styles
├── .github/            # GitHub workflows and configs
├── package.json        # Project metadata and scripts
├── next.config.mjs     # Next.js configuration
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Environment Variables

If your project requires environment variables, create a `.env.local` file in the root directory and add your variables there.  
_Example:_
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Troubleshooting

- **Dependency conflicts**:  
  If you see errors about peer dependencies (e.g., with React or vaul), use `npm install --legacy-peer-deps`.

- **Port already in use**:  
  If port 3000 is busy, set a different port:  
  ```sh
  PORT=4000 npm run dev
  ```

- **Build errors**:  
  Make sure your Node.js version matches the prerequisites.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.