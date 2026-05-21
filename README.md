# Pawly 🐾

> A modern pet adoption platform built for shelters, adopters, and pet owners.


## Project Overview

Pawly is a full-stack pet adoption portal that connects adopters with pets available for adoption. The platform enables authenticated users to browse pets, view detailed profiles, submit adoption requests, and manage their own requests. Pet owners can add, update, delete listings, and manage approvals from a unified dashboard.


## Live Demo

- **Live Site:** https://pawly-client.vercel.app 
- **Client Repository:** https://github.com/toufiqweb/pawly-client
- **Server Repository:** https://github.com/toufiqweb/pawly-server


## Website Mockup

![Mockup](https://i.ibb.co.com/rhnP9vm/pawly-Mockup.png)

## Key Features

- Browse pets by category, species, and keyword search with dynamic query filtering.
- Secure authentication with email/password, Google social login, and JWT session management.
- Pet owner dashboard with listing creation, edit, delete, and request management.
- Adoption request workflow with approval and rejection controls.
- Responsive design optimized for mobile, tablet, and desktop screens.
- Real-time status badges and in-app toast notifications for success/error feedback.
- Custom 404 page and loading state for polished UX.
- Featured pets and curated home sections for a recruiter-friendly landing experience.


## Technologies Used

- **Frontend:** Next.js 16, React 19
- **Backend:** Node.js, Express (backend repository)
- **Database:** MongoDB Atlas
- **Authentication:** Better Auth, JWT, Google OAuth
- **Deployment:** Vercel (client), Vercel / Render (server)
- **Styling/UI:** Tailwind CSS v4, HeroUI, Lucide icons, Framer Motion


## NPM Packages Used

- `next` → React framework for server-side rendering and routing.
- `react` / `react-dom` → Core UI library and rendering engine.
- `better-auth` → Authentication provider and session management.
- `@better-auth/mongo-adapter` → MongoDB adapter for Better Auth.
- `react-hot-toast` → Inline toast notification support.
- `framer-motion` → Smooth UI animations.
- `lucide-react` → Modern icon library.
- `react-icons` → Supplementary icon sets.
- `mongodb` → MongoDB database driver.
- `@heroui/react` → UI components and modal support.
- `tailwindcss` → Utility-first styling framework.


## Folder Structure

```text
src/
  app/
    (main)/
      page.js
      all-pets/
        page.jsx
        [petId]/page.jsx
    dashboard/
      layout.js
      page.js
      add-pet/page.jsx
      my-listings/page.jsx
  components/
    authPages/
      LoginForm.jsx
      RegisterForm.jsx
    dashboard/
      AddPetForm.jsx
      ListingCard.jsx
      MyAdoptionRequests.jsx
      RequestsModal.jsx
      UpdatePetForm.jsx
    ui/
      PetCard.jsx
      PetDetailAdoptForm.jsx
      PetSearchSection.jsx
      OwnerWarningCard.jsx
  lib/
    auth.js
    auth-client.js
    data/
      pets.js
      requests.js
public/
  assets/
  images/
```


## Environment Variables

Create a `.env.local` or `.env` file with the following values:

```env
NEXT_PUBLIC_API_URL=https://pawly-server.vercel.app
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=<your-better-auth-secret>
MONGODB_URI=<your-mongodb-connection-string>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```


## Installation & Setup

1. Clone the repository
   ```bash
git clone https://github.com/toufiqweb/pawly-client.git
cd pawly-client
```
2. Install dependencies
   ```bash
npm install
```
3. Add environment variables
   - Copy the example values into `.env.local`
   - Provide your MongoDB and Better Auth credentials
4. Run the development server
   ```bash
npm run dev
```
5. Open the app
   - Visit `http://localhost:3000`


## Available Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
```


## API Endpoints

| Method | Route | Description |
| --- | --- | --- |
| GET | `/pets` | Fetch all pet listings |
| GET | `/pets/:id` | Fetch a pet by ID |
| POST | `/pets` | Create a new listing |
| PATCH | `/pets/:id` | Update pet details |
| DELETE | `/pets/:id` | Delete a pet listing |
| GET | `/listings` | Fetch owner-specific listings |
| GET | `/requests` | Fetch adoption requests |
| POST | `/adoption-requests` | Submit a new request |
| PATCH | `/requests/:id` | Approve or reject adoption requests |


## Authentication

Pawly uses JWT-based authentication through Better Auth. The application supports:

- Email/password login and registration
- Google social login
- Persistent protected routes for dashboard and adoption workflows
- Secure token storage for API calls and route protection

Protected pages include:

- `Add Pet`
- `My Listings`
- `My Requests`
- `Pet Details` adoption form (when authenticated)


## Responsive Design

The UI is designed to respond cleanly across devices:

- ✅ Mobile
- ✅ Tablet
- ✅ Desktop


## Future Improvements

- Add wishlist/favorites for adopters
- Add real-time chat between adopters and owners
- Improve filter options with breed, age, and location ranges
- Add email notifications for approved requests
- Add admin dashboard for shelter management


## Challenges Faced

- Integrating Better Auth with custom JWT-backed API routes.
- Keeping private routes stable during refresh and session updates.
- Managing MongoDB query filters for search and species filtering.
- Designing a clean dashboard experience for both pet owners and adopters.


## Lessons Learned

- How to integrate modern Next.js app routing with auth middleware.
- Best practices for client-side fetch and protected API calls.
- Improving UX using toast notifications and responsive layout patterns.
- Building a feature-rich CRUD workflow for full-stack applications.


## Performance & Optimization

- Cached server data requests with `fetch()` and `no-store` where required.
- Minimized bundle weight using optimized Next.js imports.
- Used lightweight UI components and Tailwind CSS utility classes.
- Added loading states to improve perceived performance.


## Deployment

- Frontend deployed on Vercel.
- Backend expected to run on Vercel / Render with secure environment variables.
- Ensure all routes are configured to avoid 404/504 on refresh.


## Author

- **Name:** Toufiq Alahe
- **Portfolio:** https://toufiq-portfolio.vercel.app
- **LinkedIn:** https://linkedin.com/in/toufiq-alahe-dev
- **GitHub:** https://github.com/toufiqweb


## License

Distributed under the **MIT License**. See `LICENSE` for more information.
