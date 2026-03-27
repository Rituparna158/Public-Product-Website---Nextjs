# 🏥 LifeLine Healthcare Platform
 
A modern healthcare management web application built with **Next.js (App Router)**, **Strapi CMS**, and **NextAuth authentication**.
The platform enables clinics to manage patients, doctors, appointments, and provides marketing features like blogs and newsletters.
 
---
 
# 🚀 Tech Stack
 
* **Frontend:** Next.js 14 (App Router), TypeScript, TailwindCSS, shadcn/ui
* **Backend (CMS):** Strapi
* **Authentication:** NextAuth (Credentials + optional Google)
* **Database:** SQLite (via Strapi)
* **UI Feedback:** Sonner (toasts)
 
---
 
# 🧠 Rendering Decisions (Per Feature)
 
| Feature         | Rendering Type                   | Reason                            |
| --------------- | -------------------------------- | --------------------------------- |
| Landing Page    | Server Component                 | SEO + faster initial load         |
| Blog List       | Server Component                 | Static-like content from CMS      |
| Blog Detail     | Server Component (dynamic route) | SEO + dynamic slug                |
| Dashboard       | Server Component                 | Secure data fetching (auth-based) |
| Live Stats      | Client Component                 | Real-time updates                 |
| Newsletter Form | Client Component                 | Handles user input + API calls    |
| Login/Register  | Client Component                 | Interactive forms                 |
 
---
 
# 🧩 CMS Integration (Strapi)
 
Strapi is used as a **headless CMS** for dynamic content.
 
## 📦 Content Types
 
### 1. Landing Page (Single Type)
 
* Hero section
* Stats
* Testimonials
* Use Cases
* FAQs
 
---
 
### 2. Blog (Collection Type)
 
* title
* slug
* excerpt
* content
 
---
 
### 3. Subscriber (Collection Type)
 
* email
 
---
 
### 4. Healthcare Models
 
#### Patient
 
* name, age, gender, etc.
 
#### Doctor
 
* name, specialization, experience
 
#### Appointment
 
* patient (relation)
* doctor (relation)
* date
* status
 
---
 
# 🔄 Blog Data Flow (CMS → UI)
 
```
Strapi CMS → fetchAPI() → Next.js Server Component → UI
```
 
### Example:
 
1. Blogs stored in Strapi
2. Fetched via:
 
```ts
fetchAPI("/blogs")
```
 
3. Rendered in:
 
```
/blog/page.tsx
```
 
### Blog Detail:
 
* Uses dynamic route: `/blog/[slug]`
* Filters blog using slug
 
---
 
# 🔐 Authentication Flow
 
Authentication is handled using **NextAuth (Credentials Provider)**
 
## Flow:
 
1. User enters email & password
2. `signIn("credentials")` is triggered
3. Credentials validated in `authorize()`
4. Session created (JWT-based)
5. Protected routes (e.g., `/dashboard`) use:
 
```ts
getServerSession(authOptions)
```
 
---
 
## 🔒 Route Protection
 
* Middleware protects `/dashboard`
* Unauthorized users redirected to `/login`
 
---
 
# 📊 Dashboard Data Flow
 
```
Strapi APIs → Custom API routes → Dashboard UI
```
 
### Data fetched:
 
* Patients count
* Doctors count
* Appointments count
* Recent appointments
 
---
 
# 📧 Subscriber (Newsletter) Handling
 
## Flow:
 
```
Frontend Form → /api/subscribe → Strapi → Database
```
 
### Steps:
 
1. User enters email
2. API checks for duplicate subscriber
3. If not exists → saved in Strapi
4. Stats API calculates total subscribers
 
---
 
## Important Notes:
 
* Subscriber data is stored separately from user authentication
* Registering a user ≠ subscribing to newsletter
* Subscriber count = total entries in `subscribers` collection
 
---
 
# 🔄 Real-Time Behavior
 
* Subscriber count updates after data is saved
* UI refresh or re-fetch required to reflect latest data
* Can be enhanced using:
 
  * polling
  * SWR / React Query
 
---
 
# 🎨 UI Architecture
 
* Uses **shadcn/ui components**
* Custom styles handled via `globals.css`
* No inline styling (clean separation of concerns)
 
---
 
# 📁 Project Structure
 
```
app/
 ├── page.tsx
 ├── blog/
 ├── dashboard/
 ├── login/
 ├── register/
 ├── api/
 
components/
 ├── Navbar
 ├── Hero
 ├── Stats
 ├── Sidebar
 ├── NewsletterForm
 
lib/
 ├── api.ts
 ├── auth.ts
 ├── dashboard.ts
```
 
---
 
# ⚙️ Setup Instructions
 
### 1. Install dependencies
 
```
npm install
```
 
### 2. Run Next.js
 
```
npm run dev
```
 
### 3. Run Strapi
 
```
npm run develop
```
 
---
 
# 💯 Key Highlights
 
✔ Fully dynamic CMS-driven landing page
✔ Authentication with protected routes
✔ Real-time-like analytics dashboard
✔ Clean modular architecture
✔ Scalable for production use
 
---
 
# 🚀 Future Improvements
 
* Real-time dashboard (WebSockets / SWR)
* Charts & analytics
* Role-based access (Admin/Doctor)
* Appointment booking system
* Email automation for subscribers
 
---
 
# 👨‍💻 Author
 
Built as a full-stack healthcare SaaS prototype using modern web technologies.
 