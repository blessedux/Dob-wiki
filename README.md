# DOB Protocol Wiki

The official documentation platform for DOB Protocol, designed to provide comprehensive information about DOB's ecosystem, technology, and services. This wiki serves as the central knowledge base for users, developers, and stakeholders within the DOB Protocol community.

## Purpose of This Documentation

The DOB Protocol Wiki aims to:

- Provide clear, accessible explanations of DOB Protocol and its components
- Offer technical documentation for developers integrating with DOB
- Explain DOBI, the AI agent system, and related technologies
- Document tokenomics, roadmap, and ecosystem information
- Serve as a reliable reference for all DOB Protocol-related queries

## Admin Authentication

The admin area and API routes are protected by HTTP Basic Authentication.

### Security Notes

- Always use HTTPS in production to ensure credentials are encrypted
- Change the default password immediately
- Consider implementing a more robust authentication system for production

## Content Management

The wiki content is stored as Markdown files (.md) in the `content/docs/` directory:

- Files are organized by category (folders)
- Files use frontmatter for metadata (title, description)
- The admin interface allows creating and editing documents
- All edits are saved directly to the filesystem

### File Structure

```
content/
  docs/
    dob/
      overview.md
      tokenomics.md
      ...
    dobi/
      overview.md
      ai-agent.md
      ...
    ...
```

## UI Components

This documentation site uses the Shadcn UI component library, which provides a collection of reusable components built on Radix UI and styled with Tailwind CSS.

### Key Components

- **Layout Components**: Header, footer, sidebar, and navigation
- **Interactive Elements**: Buttons, search interface, dropdowns
- **Content Display**: Cards, code blocks, tables
- **Animation**: Smooth transitions and loading states with Framer Motion

All components are located in the `/components` directory and organized as follows:

- `/components/ui/` - Core Shadcn UI components
- `/components/` - Application-specific components

## Technical Requirements

### Dependencies

This project relies on the following key dependencies:

- **React 19**: UI library
- **MDX**: For enhanced markdown processing
- **gray-matter**: For parsing frontmatter in markdown files
- **Tailwind CSS**: For styling
- **Framer Motion**: For animations
- **Lucide React**: For icons
- **Shadcn UI**: Component library

### System Requirements

- **Node.js 18.17** or later
- **npm 9.6.7** or later
- At least 1GB of free disk space for content files

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Deployment

For production deployment, we recommend:

1. Setting up environment variables for admin credentials
2. Using a secure hosting platform with HTTPS enabled
3. Setting up proper backup systems for the content directory

## 🚀 Node.js Server Deployment & CMS Usage Guide

This project supports full SSR (Server-Side Rendering) and a simple CMS for editing wiki pages. Follow these steps to deploy and use the CMS on your Node.js server:

### 1. Clone or Upload the Project

Clone this repository or upload all source files (including `app/`, `components/`, `lib/`, `content/`, etc.) to your server.

### 2. Install Dependencies

```
npm install
```

### 3. Build the App

```
npm run build
```

### 4. Start the Server

If using the custom Express server:

```
npm run serve
```

Or, if using the built-in Next.js server:

```
npm run start
```

### 5. Access the Wiki and CMS

- Visit `http://your-server-ip:3000` for the main site.
- Visit `http://your-server-ip:3000/admin` for the admin panel (CMS).
- Log in with the admin credentials (set in `.env.local` or use the defaults: `admin` / `dobprotocol`).

### 6. Using the CMS

- Create, edit, and delete wiki pages from the admin panel.
- All content is stored as markdown files in `content/docs/`.
- Changes are immediately reflected on the site.

### 7. Do NOT Commit or Deploy These Folders

- `node_modules/` (install on the server)
- `.next/` (build on the server)
- `dist/` (not needed for SSR)

### 8. Environment Variables

- Set up your `.env.local` file for admin credentials and any other secrets.

---

**This setup ensures your SSR site and CMS are fully functional on any Node.js server!**
