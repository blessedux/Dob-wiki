# Hybrid Static and Dynamic CMS Implementation

## Tasks

1. **Static Export Setup**

   - [x] Configure `next.config.js` for static export (`output: 'export'`).
   - [ ] Ensure all public pages are statically generated.
   - [ ] Test static build and verify `/out` directory is generated correctly.

2. **Admin Interface**

   - [ ] Move or create admin pages (e.g., `/admin/edit/[category]/[slug]`) in a separate Next.js project or section.
   - [ ] Implement authentication for admin users.
   - [ ] Create forms for editing and creating new pages.

3. **Content Storage**

   - [ ] Decide on content storage (file system or database).
   - [ ] Implement logic to read and write content (e.g., markdown files).

4. **Rebuild and Deploy**

   - [ ] Set up a CI/CD pipeline (e.g., GitHub Actions) to trigger rebuilds on content changes.
   - [ ] Configure deployment of static site (e.g., Vercel, Netlify).

5. **Testing and Validation**

   - [ ] Test the admin interface for creating and editing pages.
   - [ ] Verify that changes trigger a rebuild and update the static site.

6. **Documentation and Maintenance**
   - [ ] Document the setup and workflow for future reference.
   - [ ] Plan for ongoing maintenance and updates.

## Notes

- Ensure the admin interface is secure and only accessible to authorized users.
- Consider using environment variables for sensitive information (e.g., API keys, database credentials).
