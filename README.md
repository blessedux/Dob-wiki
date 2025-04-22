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

### Setup

1. In the `.env.local` file, set your desired admin credentials:

   ```
   ADMIN_USERNAME=your_username
   ADMIN_PASSWORD=your_secure_password
   ```

2. If you don't set these environment variables, the default credentials will be:
   - Username: admin
   - Password: dobprotocol

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

## Technical Requirements

### Dependencies

This project relies on the following key dependencies:

- **Next.js 15.2.4**: The React framework for production
- **React 19**: UI library
- **MDX**: For enhanced markdown processing
- **gray-matter**: For parsing frontmatter in markdown files
- **Tailwind CSS**: For styling
- **Framer Motion**: For animations
- **Lucide React**: For icons

Full list of dependencies can be found in `package.json`.

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

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
