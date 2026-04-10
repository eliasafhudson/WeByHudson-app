# WeByHudson App - AI Coding Guidelines

## Architecture Overview
- **Framework**: React 19 with Vite build tool
- **Styling**: Tailwind CSS v4 (latest version) with custom Roboto Flex font
- **Icons**: Bootstrap Icons via CSS import
- **Component Structure**: Components live in `src/componets/` (note: intentionally spelled without 'n') with individual subfolders (e.g., `src/componets/Hero/Hero.jsx`)

## Key Patterns
- **Component Organization**: Each component has its own folder containing the JSX file (e.g., `Hero/Hero.jsx`)
- **Imports**: Use relative paths; note incomplete imports like `import Hero from "./"` in `App.jsx` may exist - complete them as `import Hero from "./componets/Hero/Hero.jsx"`
- **Styling**: Apply Tailwind classes directly in JSX; global styles in `src/index.css` include font and icon imports

## Development Workflow
- **Start Dev Server**: `npm run dev` (Vite HMR enabled)
- **Build**: `npm run build` (outputs to `dist/`)
- **Linting**: `npm run lint` (ESLint with React hooks and refresh plugins; ignores `dist/` folder)
- **Preview**: `npm run preview` after build

## ESLint Rules
- Custom unused vars rule: ignores uppercase and underscore-prefixed variables (`^[A-Z_]`)

## Dependencies
- Tailwind CSS v4: Use latest syntax and features
- Bootstrap Icons: Available via CSS classes (e.g., `bi bi-icon-name`)

## File Structure Examples
```
src/
  App.jsx          # Main app component rendering Navbar and Hero
  main.jsx         # React 18+ createRoot entry point
  index.css        # Global styles with Tailwind, fonts, icons
  componets/       # Components folder (misspelled)
    Navbar/
      Navbar.jsx   # Simple nav component
    Hero/
      Hero.jsx     # Hero section component
```