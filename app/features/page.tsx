import { fetchAPI } from '@/lib/api';
import { Card } from '@/components/ui/card';

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface FeatureResponse {
  data: Feature[];
}

export default async function FeaturesPage(): Promise<JSX.Element> {
  const res = await fetchAPI<FeatureResponse>('/features');

  return (
    <main className="page-container">
      <h1 className="page-title">Powerful Features for Healthcare</h1>

      <div className="grid-3">
        {res.data.map((feature) => (
          <Card key={feature.id} className="card">
            <h2>{feature.title}</h2>
            <p className="feature-desc">{feature.description}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}

// import { fetchAPI } from "@/lib/api";

// interface Feature {
//   id: number;
//   title: string;
//   description: string;
// }
// interface FeatureResponse {
//   data: Feature[];
// }

// const featureIcons = [
//   // Calendar
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></svg>,
//   // Shield
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
//   // Activity
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
//   // Users
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
//   // Bell
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
//   // File
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>,
// ];

// export default async function FeaturesPage(): Promise<JSX.Element> {
//   const res = await fetchAPI<FeatureResponse>("/features");

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
//         :root {
//           --sage: #4a7c59; --sage-light: #6a9e7a; --sage-pale: #eef4f0;
//           --sage-mid: #d4e8da; --ink: #141c1a; --ink-soft: #3d4d48;
//           --sand: #f7f3ee; --warm-white: #fdfbf8;
//         }
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         body { font-family: 'DM Sans', sans-serif; background: var(--warm-white); color: var(--ink); overflow-x: hidden; }

//         /* NAV */
//         .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 18px 48px; background: rgba(253,251,248,0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(74,124,89,0.12); }
//         .nav-logo { display: flex; align-items: center; gap: 10px; font-size: 1.25rem; font-weight: 600; color: var(--ink); text-decoration: none; }
//         .nav-logo-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--sage); display: flex; align-items: center; justify-content: center; color: white; }
//         .nav-links { display: flex; gap: 32px; list-style: none; }
//         .nav-links a { color: var(--ink-soft); font-size: 0.9rem; font-weight: 500; text-decoration: none; transition: color 0.2s; }
//         .nav-links a:hover, .nav-links a.active { color: var(--sage); }
//         .nav-cta { padding: 10px 22px; background: var(--sage); color: white; border: none; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; transition: background 0.2s; }
//         .nav-cta:hover { background: var(--sage-light); }

//         /* PAGE HERO */
//         .page-hero { padding: 140px 80px 80px; background: linear-gradient(135deg, var(--warm-white) 55%, var(--sage-pale) 100%); border-bottom: 1px solid var(--sage-mid); position: relative; overflow: hidden; }
//         .hero-blob { position: absolute; right: -100px; top: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle at 40% 40%, #d4e8da 0%, transparent 70%); opacity: 0.6; pointer-events: none; }
//         .page-hero-inner { position: relative; z-index: 1; }
//         .page-tag { display: inline-block; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sage); margin-bottom: 14px; }
//         .page-title { font-size: clamp(2.4rem, 4vw, 3.6rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px; }
//         .page-title em { font-style: italic; font-family: 'Instrument Serif', serif; color: var(--sage); }
//         .page-sub { font-size: 1.05rem; color: var(--ink-soft); line-height: 1.7; max-width: 560px; font-weight: 300; }

//         /* GRID */
//         .features-section { padding: 80px 80px; }
//         .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
//         .feature-card { background: white; border: 1px solid rgba(20,28,26,0.08); border-radius: 20px; padding: 36px 32px; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; position: relative; overflow: hidden; }
//         .feature-card::before { content: ''; position: absolute; inset: 0; border-radius: 20px; background: linear-gradient(135deg, var(--sage-pale) 0%, transparent 60%); opacity: 0; transition: opacity 0.25s; }
//         .feature-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(20,28,26,0.1); border-color: var(--sage-mid); }
//         .feature-card:hover::before { opacity: 1; }
//         .feature-num { position: absolute; top: 24px; right: 24px; font-family: 'Instrument Serif', serif; font-size: 3.5rem; color: rgba(20,28,26,0.05); line-height: 1; user-select: none; }
//         .feature-icon { width: 52px; height: 52px; border-radius: 14px; background: var(--sage-pale); color: var(--sage); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; position: relative; z-index: 1; transition: background 0.25s, color 0.25s; }
//         .feature-card:hover .feature-icon { background: var(--sage); color: white; }
//         .feature-title { font-size: 1.1rem; font-weight: 600; margin-bottom: 12px; position: relative; z-index: 1; }
//         .feature-desc { font-size: 0.88rem; color: var(--ink-soft); line-height: 1.7; position: relative; z-index: 1; }

//         /* CTA STRIP */
//         .cta-strip { margin: 0 80px 80px; padding: 56px 64px; background: var(--ink); border-radius: 24px; display: flex; align-items: center; justify-content: space-between; gap: 40px; }
//         .cta-strip-text h2 { font-size: 1.8rem; font-weight: 700; color: white; margin-bottom: 8px; }
//         .cta-strip-text p { color: rgba(255,255,255,0.55); font-size: 0.92rem; }
//         .btn-white { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; background: white; color: var(--ink); border-radius: 12px; font-family: 'DM Sans', sans-serif; font-size: 0.92rem; font-weight: 600; text-decoration: none; transition: transform 0.15s, box-shadow 0.2s; box-shadow: 0 4px 24px rgba(0,0,0,0.15); white-space: nowrap; }
//         .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.2); }

//         /* FOOTER */
//         .footer { background: var(--ink); color: rgba(255,255,255,0.4); padding: 28px 80px; display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; }
//         .footer-logo { display: flex; align-items: center; gap: 8px; font-size: 1rem; font-weight: 600; color: white; text-decoration: none; }
//         .footer-logo-icon { width: 28px; height: 28px; border-radius: 8px; background: var(--sage); display: flex; align-items: center; justify-content: center; color: white; }

//         @media (max-width: 900px) {
//           .nav { padding: 16px 24px; } .nav-links { display: none; }
//           .page-hero { padding: 120px 24px 60px; }
//           .features-section { padding: 60px 24px; }
//           .features-grid { grid-template-columns: 1fr; }
//           .cta-strip { margin: 0 24px 60px; padding: 36px 28px; flex-direction: column; text-align: center; }
//           .footer { padding: 20px 24px; flex-direction: column; gap: 12px; text-align: center; }
//         }
//       `}</style>

//       <nav className="nav">
//         <a href="/" className="nav-logo">
//           <span className="nav-logo-icon">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
//           </span>
//           LifeLine
//         </a>
//         <ul className="nav-links">
//           <li><a href="/features" className="active">Features</a></li>
//           <li><a href="/blog">Insights</a></li>
//           <li><a href="/pricing">Pricing</a></li>
//         </ul>
//         <a href="/signup" className="nav-cta">Get Started</a>
//       </nav>

//       <main>
//         <section className="page-hero">
//           <div className="hero-blob" />
//           <div className="page-hero-inner">
//             <span className="page-tag">Platform Features</span>
//             <h1 className="page-title">Built for <em>Modern Healthcare</em></h1>
//             <p className="page-sub">
//               Every tool your clinic needs to run smoothly — from patient onboarding to billing — designed with clinicians in mind.
//             </p>
//           </div>
//         </section>

//         <section className="features-section">
//           <div className="features-grid">
//             {res.data.map((feature, idx) => (
//               <div className="feature-card" key={feature.id}>
//                 <span className="feature-num">{String(idx + 1).padStart(2, "0")}</span>
//                 <div className="feature-icon">{featureIcons[idx % featureIcons.length]}</div>
//                 <h3 className="feature-title">{feature.title}</h3>
//                 <p className="feature-desc">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <div className="cta-strip">
//           <div className="cta-strip-text">
//             <h2>Ready to put these to work?</h2>
//             <p>Start your free trial — no credit card required.</p>
//           </div>
//           <a href="/signup" className="btn-white">
//             Get Started Free
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
//           </a>
//         </div>
//       </main>

//       <footer className="footer">
//         <a href="/" className="footer-logo">
//           <span className="footer-logo-icon">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
//           </span>
//           LifeLine
//         </a>
//         <span>© {new Date().getFullYear()} LifeLine Health Technologies.</span>
//         <span>Made with care for clinicians.</span>
//       </footer>
//     </>
//   );
// }
