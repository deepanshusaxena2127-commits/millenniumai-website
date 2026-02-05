# MillenniumAi Website - Copilot Instructions

## Project Overview
MillenniumAi is a content-rich React + Vite website for a B2B AI services company. It features **dynamic route generation** using content data objects, lazy-loaded pages with route parameters, and a Radix UI + Tailwind CSS design system.

## Architecture

### Core Stack
- **Frontend**: React 18 + React Router v6 (lazy-loaded pages)
- **Build**: Vite 4 with `./` base path
- **Styling**: Tailwind CSS 3 + Radix UI headless components
- **Motion**: Framer Motion 10 for animations
- **Icons**: Lucide React (all icon imports use `lucide-react`)
- **Meta Tags**: React Helmet

### Route Structure
Routes are defined in `src/App.jsx` as lazy-loaded components:
- **Core Pages**: `/`, `/services`, `/solutions`, `/about`, `/contact`
- **Dynamic Routes**: `/solutions/:slug`, `/industries/:slug`, `/company/:slug`, `/insights/:slug`
- All pages exist in `src/pages/` directory

### Data-Driven Approach
Content is **NOT hardcoded in components**. Instead, use data objects in `src/data/`:
- `companyContent.js` - Company pages (e.g., "inside-millenniumai", "leadership-advisors")
- `solutionsContent.js` - Solution pages (e.g., "generative-ai", "nlp")
- `industriesContent.js` - Industry pages (e.g., "healthcare-life-sciences")
- `insightsContent.js` - Blog/insights content

Each object has a `pageSlug` key that matches the URL slug. Data structure includes: `pageTitle`, `metaDescription`, `heroSection`, `sections[]` with structured content blocks.

## Key Patterns

### Dynamic Pages
Use `src/components/DynamicPageTemplate.jsx` as the wrapper:
```jsx
const SolutionPage = () => {
  const { slug } = useParams();
  const content = solutionsContent[slug];
  return <DynamicPageTemplate content={content} path={`/solutions/${slug}`} />;
};
```

The template handles: breadcrumbs, SEO (Helmet), layout, animations, and CTAs. Don't add layout logic to individual pages.

### Navigation Structure
`src/components/Navigation.jsx` uses `navData` object with `solutions`, `industries`, and `company` dropdown menus. Each menu item has `name`, `path`, `desc`. Updating navigation requires editing the `navData` object - don't hardcode routes elsewhere.

### Component Composition
- **Layout Components**: `Navigation`, `Footer` (global wrappers)
- **Section Components**: `Hero`, `Features`, `Services`, `Solutions`, `Pricing`, `TrustSection` (reusable page sections)
- **UI Components**: `src/components/ui/` (button, toast, toaster - from Radix UI + shadcn/ui patterns)
- **Cards**: `ServiceCard`, `SolutionCard`, `TestimonialCard` (specialized containers)

### Styling Convention
- Use **utility classes first** (Tailwind); avoid custom CSS
- Custom colors via CSS variables (e.g., `text-primary`, `bg-primary-dark`)
- Responsive: `sm:`, `md:`, `lg:` breakpoints
- Dark mode support via `darkMode: ['class']` in tailwind.config.js

### Path Aliasing
`@/` resolves to `src/` (configured in `vite.config.js`). Always use `@/` for imports:
```jsx
import { Button } from '@/components/ui/button';
import data from '@/data/companyContent';
```

## Build & Deployment

### Scripts
- `npm run dev` - Start dev server on `http://localhost:3000`
- `npm run build` - Builds to `dist/` (runs `tools/generate-llms.js` first, but it's optional)
- `npm run preview` - Preview production build locally

### Special Notes
- The `public_html/default.php` is a PHP fallback (likely for server routing); not used in dev
- `generate-llms.js` is a placeholder tool for build-time generation (currently non-blocking)

## Developer Workflow

### Adding a New Company Page
1. Add entry to `src/data/companyContent.js` with key matching the slug (e.g., `'careers'`)
2. Ensure entry has `pageSlug`, `pageTitle`, `metaDescription`, `heroSection`, `sections`
3. Route is auto-generated; no route definition needed
4. Update `src/components/Navigation.jsx` `navData.company.items` to add menu link

### Adding a New Solution
1. Add entry to `src/data/solutionsContent.js` with slug as key
2. Update `src/components/Navigation.jsx` to add menu item in `navData.solutions.items`
3. Route auto-generates at `/solutions/:slug`

### Creating a New Layout Section
1. Build as a functional component in `src/components/` (e.g., `MySection.jsx`)
2. Use Tailwind classes + Framer Motion for animations
3. Import reusable UI components from `src/components/ui/`
4. Import icons from `lucide-react`
5. Add to page content object in `src/data/*.js` or directly in page component

## Important Constraints

- **No hardcoded navigation links**: All routes in dropdowns must be defined in `navData` in Navigation.jsx
- **Lazy loading**: All pages must be lazy-loaded with `React.lazy()` in App.jsx
- **Suspense fallback**: Loading state shows "Loading…" centered text
- **Meta tags**: Use Helmet in page components or DynamicPageTemplate for SEO
- **Mobile-first**: Tailwind breakpoints prioritize mobile (default = mobile, then `sm:`, `md:`, `lg:`)
- **No inline styles**: Use Tailwind classes only

## Common Tasks

### Modify a company page
Edit the corresponding entry in `src/data/companyContent.js`, update sections array.

### Change a route
Update the route definition in `src/App.jsx` AND the navigation item in `src/components/Navigation.jsx`.

### Add a new Radix UI component
Example: Install via npm, import from `@radix-ui/react-*`, wrap in `src/components/ui/` following shadcn/ui patterns (cv, clsx for class merging).

### Debug routing issues
Check: (1) page component exists in `src/pages/`, (2) lazy-loaded in App.jsx, (3) slug matches data key in `src/data/`

## Files You'll Edit Most
- `src/pages/` - Page component logic
- `src/data/` - Content data (most frequent edits)
- `src/components/` - Component implementations
- `src/App.jsx` - Route definitions only when adding new page types
- `src/components/Navigation.jsx` - Navigation menu updates
