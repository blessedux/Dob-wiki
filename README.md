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

## Troubleshooting

### 404 Error on Homepage

If you see a 404 error when accessing the root URL:

1. Make sure you have a proper index page at `/app/page.tsx`
2. Check if navigation routes are correctly defined
3. Verify that content directories and files exist

### Authentication Issues

If you cannot access the admin area:

1. Verify credentials in `.env.local` file
2. Check browser cache and try in incognito mode
3. Make sure middleware.ts is properly configured
