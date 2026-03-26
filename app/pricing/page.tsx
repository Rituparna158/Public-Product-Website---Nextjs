import { fetchAPI } from '@/lib/api';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PricingResponse } from '@/types/Pricing';

export default async function PricingPage(): Promise<JSX.Element> {
  const res = await fetchAPI<PricingResponse>('/pricing-plans');

  return (
    <main className="page-container">
      <h1 className="page-title">Simple, Transparent Pricing</h1>

      <div className="grid-3">
        {res.data.map((plan) => (
          <Card key={plan.id} className="card">
            <h2>{plan.name}</h2>

            <p className="price">₹{plan.price}</p>
            <p className="price-sub">per month</p>

            <ul className="feature-list">
              {plan.features?.map((block, i) => (
                <li key={i}>{block.children.map((c) => c.text).join('')}</li>
              ))}
            </ul>

            <Button className="btn-main">Get Started</Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
// import { fetchAPI } from "@/lib/api";
// import { Link } from "lucide-react";

// interface RichTextChild { text: string; }
// interface RichTextBlock { type: string; children: RichTextChild[]; }
// interface Plan { id: number; name: string; price: number; features: RichTextBlock[]; }
// interface PricingResponse { data: Plan[]; }

// const planMeta: Record<number, { badge?: string; highlight: boolean; description: string }> = {
//   0: { highlight: false, description: "Perfect for solo practitioners and small clinics just getting started." },
//   1: { badge: "Most Popular", highlight: true, description: "Everything a growing clinic needs to scale operations efficiently." },
//   2: { highlight: false, description: "For hospital networks and multi-branch clinics needing full control." },
// };

// export default async function PricingPage(): Promise<JSX.Element> {
//   const res = await fetchAPI<PricingResponse>("/pricing-plans");

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
//         :root {
//           --sage: #4a7c59; --sage-light: #6a9e7a; --sage-pale: #eef4f0;
//           --sage-mid: #d4e8da; --ink: #141c1a; --ink-soft: #3d4d48;
//           --sand: #f7f3ee; --warm-white: #fdfbf8; --gold: #c9963f;
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
//         .nav-cta { padding: 10px 22px; background: var(--sage); color: white; border: none; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; }
//         .nav-cta:hover { background: var(--sage-light); }

//         /* HERO */
//         .page-hero { padding: 140px 80px 80px; background: linear-gradient(135deg, var(--warm-white) 55%, var(--sage-pale) 100%); border-bottom: 1px solid var(--sage-mid); position: relative; overflow: hidden; text-align: center; }
//         .hero-blob { position: absolute; right: -100px; top: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle at 40% 40%, #d4e8da 0%, transparent 70%); opacity: 0.6; pointer-events: none; }
//         .hero-blob-2 { position: absolute; left: -80px; bottom: -80px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, #eef4f0 0%, transparent 70%); opacity: 0.5; pointer-events: none; }
//         .page-hero-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
//         .page-tag { display: inline-block; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sage); margin-bottom: 14px; }
//         .page-title { font-size: clamp(2.4rem, 4vw, 3.6rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px; }
//         .page-title em { font-style: italic; font-family: 'Instrument Serif', serif; color: var(--sage); }
//         .page-sub { font-size: 1.05rem; color: var(--ink-soft); line-height: 1.7; font-weight: 300; }
//         .toggle-group { display: inline-flex; align-items: center; gap: 0; background: rgba(20,28,26,0.06); border-radius: 100px; padding: 4px; margin-top: 32px; }
//         .toggle-btn { padding: 8px 22px; border-radius: 100px; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 500; border: none; cursor: pointer; background: transparent; color: var(--ink-soft); transition: all 0.2s; }
//         .toggle-btn.active { background: white; color: var(--ink); box-shadow: 0 2px 8px rgba(20,28,26,0.1); }
//         .toggle-save { font-size: 0.72rem; color: var(--sage); font-weight: 600; background: var(--sage-pale); padding: 3px 10px; border-radius: 100px; margin-left: 6px; }

//         /* PRICING */
//         .pricing-section { padding: 80px 80px; }
//         .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1060px; margin: 0 auto; align-items: start; }

//         .plan-card { background: white; border: 1px solid rgba(20,28,26,0.08); border-radius: 24px; padding: 40px 36px; position: relative; transition: transform 0.25s, box-shadow 0.25s; }
//         .plan-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(20,28,26,0.1); }
//         .plan-card.highlighted { background: var(--ink); border-color: var(--ink); color: white; transform: scale(1.04); }
//         .plan-card.highlighted:hover { transform: scale(1.04) translateY(-4px); box-shadow: 0 20px 60px rgba(20,28,26,0.25); }

//         .plan-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--sage); color: white; font-size: 0.72rem; font-weight: 600; padding: 5px 16px; border-radius: 100px; letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap; }
//         .plan-name { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600; color: var(--sage); margin-bottom: 12px; }
//         .plan-card.highlighted .plan-name { color: var(--sage-light); }
//         .plan-price { font-family: 'Instrument Serif', serif; font-size: 3.2rem; line-height: 1; margin-bottom: 4px; }
//         .plan-price-sub { font-size: 0.82rem; color: var(--ink-soft); margin-bottom: 16px; }
//         .plan-card.highlighted .plan-price-sub { color: rgba(255,255,255,0.5); }
//         .plan-desc { font-size: 0.86rem; color: var(--ink-soft); line-height: 1.6; padding-bottom: 24px; margin-bottom: 24px; border-bottom: 1px solid rgba(20,28,26,0.08); }
//         .plan-card.highlighted .plan-desc { color: rgba(255,255,255,0.55); border-color: rgba(255,255,255,0.1); }
//         .plan-features { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
//         .plan-feature { display: flex; align-items: flex-start; gap: 10px; font-size: 0.875rem; line-height: 1.5; }
//         .plan-check { width: 18px; height: 18px; border-radius: 50%; background: var(--sage-pale); color: var(--sage); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
//         .plan-card.highlighted .plan-check { background: rgba(74,124,89,0.25); color: var(--sage-light); }
//         .plan-card.highlighted .plan-feature { color: rgba(255,255,255,0.8); }
//         .plan-btn { display: block; text-align: center; padding: 14px 24px; border-radius: 12px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600; text-decoration: none; transition: all 0.2s; cursor: pointer; border: none; width: 100%; }
//         .plan-btn-default { background: var(--sage-pale); color: var(--sage); }
//         .plan-btn-default:hover { background: var(--sage-mid); }
//         .plan-btn-highlight { background: var(--sage); color: white; }
//         .plan-btn-highlight:hover { background: var(--sage-light); }

//         /* COMPARISON NOTE */
//         .comparison-note { text-align: center; margin-top: 40px; font-size: 0.85rem; color: var(--ink-soft); }
//         .comparison-note a { color: var(--sage); font-weight: 500; text-decoration: none; }

//         /* TRUST */
//         .trust-section { padding: 60px 80px; background: var(--sand); border-top: 1px solid var(--sage-mid); text-align: center; }
//         .trust-title { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-soft); font-weight: 600; margin-bottom: 24px; }
//         .trust-items { display: flex; justify-content: center; align-items: center; gap: 40px; flex-wrap: wrap; }
//         .trust-item { display: flex; align-items: center; gap: 8px; font-size: 0.88rem; color: var(--ink-soft); font-weight: 500; }
//         .trust-icon { color: var(--sage); }

//         /* FOOTER */
//         .footer { background: var(--ink); color: rgba(255,255,255,0.4); padding: 28px 80px; display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; }
//         .footer-logo { display: flex; align-items: center; gap: 8px; font-size: 1rem; font-weight: 600; color: white; text-decoration: none; }
//         .footer-logo-icon { width: 28px; height: 28px; border-radius: 8px; background: var(--sage); display: flex; align-items: center; justify-content: center; color: white; }

//         @media (max-width: 900px) {
//           .nav { padding: 16px 24px; } .nav-links { display: none; }
//           .page-hero { padding: 120px 24px 60px; }
//           .pricing-section { padding: 60px 24px; }
//           .pricing-grid { grid-template-columns: 1fr; }
//           .plan-card.highlighted { transform: scale(1); }
//           .trust-section { padding: 50px 24px; } .trust-items { gap: 20px; }
//           .footer { padding: 20px 24px; flex-direction: column; gap: 12px; text-align: center; }
//         }
//       `}</style>

//       <nav className="nav">
//         <Link href="/" className="nav-logo">
//           <span className="nav-logo-icon">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
//           </span>
//           LifeLine
//         </Link>
//         <ul className="nav-links">
//           <li><a href="/features">Features</a></li>
//           <li><Link href="/blog">Insights</Link></li>
//           <li><a href="/pricing" className="active">Pricing</a></li>
//         </ul>
//         <a href="/signup" className="nav-cta">Get Started</a>
//       </nav>

//       <main>
//         <section className="page-hero">
//           <div className="hero-blob" />
//           <div className="hero-blob-2" />
//           <div className="page-hero-inner">
//             <span className="page-tag">Pricing</span>
//             <h1 className="page-title">Simple, <em>Transparent</em> Pricing</h1>
//             <p className="page-sub">
//               No hidden fees. No long-term lock-ins. Pick the plan that fits your clinic and scale as you grow.
//             </p>
//             <div className="toggle-group">
//               <button className="toggle-btn active">Monthly</button>
//               <button className="toggle-btn">Annual <span className="toggle-save">Save 20%</span></button>
//             </div>
//           </div>
//         </section>

//         <section className="pricing-section">
//           <div className="pricing-grid">
//             {res.data.map((plan, idx) => {
//               const meta = planMeta[idx] ?? { highlight: false, description: "The plan for your needs." };
//               return (
//                 <div className={`plan-card${meta.highlight ? " highlighted" : ""}`} key={plan.id}>
//                   {meta.badge && <span className="plan-badge">{meta.badge}</span>}
//                   <p className="plan-name">{plan.name}</p>
//                   <p className="plan-price">
//                     ₹{plan.price.toLocaleString()}
//                   </p>
//                   <p className="plan-price-sub">per month, billed monthly</p>
//                   <p className="plan-desc">{meta.description}</p>
//                   <ul className="plan-features">
//                     {plan.features?.map((block, i) => (
//                       <li className="plan-feature" key={i}>
//                         <span className="plan-check">
//                           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
//                         </span>
//                         {block.children.map((c) => c.text).join("")}
//                       </li>
//                     ))}
//                   </ul>
//                   <button className={`plan-btn ${meta.highlight ? "plan-btn-highlight" : "plan-btn-default"}`}>
//                     Get Started
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//           <p className="comparison-note">
//             All plans include a 14-day free trial. No credit card required.{" "}
//             <a href="/features">Compare all features →</a>
//           </p>
//         </section>

//         <section className="trust-section">
//           <p className="trust-title">Trusted and verified</p>
//           <div className="trust-items">
//             {[
//               { icon: "🔒", label: "HIPAA Compliant" },
//               { icon: "🛡️", label: "ISO 27001 Certified" },
//               { icon: "⚡", label: "99.9% Uptime SLA" },
//               { icon: "🔄", label: "Cancel anytime" },
//               { icon: "💬", label: "24/7 Support" },
//             ].map((item, i) => (
//               <span className="trust-item" key={i}>
//                 <span className="trust-icon">{item.icon}</span>
//                 {item.label}
//               </span>
//             ))}
//           </div>
//         </section>
//       </main>

//       <footer className="footer">
//         <Link href="/" className="footer-logo">
//           <span className="footer-logo-icon">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
//           </span>
//           LifeLine
//         </Link>
//         <span>© {new Date().getFullYear()} LifeLine Health Technologies.</span>
//         <span>Made with care for clinicians.</span>
//       </footer>
//     </>
//   );
// }
