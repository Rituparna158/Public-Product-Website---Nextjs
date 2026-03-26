import { fetchAPI } from '@/lib/api';
import type { BlogDetailResponse, Blog } from '@/types/blog';

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetchAPI<BlogDetailResponse>('/blogs');

  const blog: Blog | undefined = res.data.find(
    (b) => b.slug && b.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!blog) {
    return <div className="p-10">Blog not found</div>;
  }

  const contentText = Array.isArray(blog.content)
    ? blog.content
        .map((block) => block.children.map((child) => child.text).join(''))
        .join('\n')
    : blog.content;

  return (
    <div className="page-wrapper max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-bold leading-tight">{blog.title}</h1>

      <div className="mt-6 h-[2px] w-12 bg-[var(--sage)] rounded-full" />

      <p className="mt-6 text-gray-600 whitespace-pre-line leading-7 text-[15px]">
        {contentText}
      </p>
    </div>
  );
}
//  import { fetchAPI } from "@/lib/api";
//  import type { BlogDetailResponse, Blog } from "@/types/blog";
// import { Link } from "lucide-react";

//  export default async function BlogDetail({
//    params,
//  }: {
//    params: Promise<{ slug: string }>;
//  }) {
//    const { slug } = await params;
//    const res = await fetchAPI<BlogDetailResponse>("/blogs");

//    const blog: Blog | undefined = res.data.find(
//      (b) => b.slug && b.slug.toLowerCase() === slug.toLowerCase()
//    );

//    if (!blog) {
//      return (
//        <>
//          <style>{`
//            @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
//            :root { --sage:#4a7c59; --ink:#141c1a; --warm-white:#fdfbf8; }
//            * { box-sizing:border-box; margin:0; padding:0; }
//            body { font-family:'DM Sans',sans-serif; background:var(--warm-white); color:var(--ink); }
//            .not-found { min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; text-align:center; padding:40px; }
//            .not-found h1 { font-family:'Instrument Serif',serif; font-size:3rem; color:var(--sage); }
//            .not-found p { color:#3d4d48; }
//            .back-link { display:inline-flex; align-items:center; gap:8px; padding:12px 24px; background:var(--sage); color:white; border-radius:10px; text-decoration:none; font-weight:500; margin-top:8px; }
//          `}</style>
//          <div className="not-found">
//            <h1>Article not found</h1>
//            <p>The article you&apos;re looking for doesn&apos;t exist or has been moved.</p>
//            <Link href="/blog" className="back-link">← Back to Insights</Link>
//          </div>
//        </>
//      );
//    }

//    const contentText = Array.isArray(blog.content)
//      ? blog.content.map((block) => block.children.map((child) => child.text).join("")).join("\n\n")
//      : blog.content;

//    const wordCount = contentText?.split(" ").length ?? 0;
//    const readTime = Math.max(1, Math.round(wordCount / 200));

//    return (
//      <>
//        <style>{`
//          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
//          :root {
//            --sage: #4a7c59; --sage-light: #6a9e7a; --sage-pale: #eef4f0;
//            --sage-mid: #d4e8da; --ink: #141c1a; --ink-soft: #3d4d48;
//            --sand: #f7f3ee; --warm-white: #fdfbf8;
//          }
//          * { box-sizing: border-box; margin: 0; padding: 0; }
//          body { font-family: 'DM Sans', sans-serif; background: var(--warm-white); color: var(--ink); overflow-x: hidden; }

//          /* NAV */
//          .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 18px 48px; background: rgba(253,251,248,0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(74,124,89,0.12); }
//          .nav-logo { display: flex; align-items: center; gap: 10px; font-size: 1.25rem; font-weight: 600; color: var(--ink); text-decoration: none; }
//          .nav-logo-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--sage); display: flex; align-items: center; justify-content: center; color: white; }
//          .nav-links { display: flex; gap: 32px; list-style: none; }
//          .nav-links a { color: var(--ink-soft); font-size: 0.9rem; font-weight: 500; text-decoration: none; transition: color 0.2s; }
//          .nav-links a:hover { color: var(--sage); }
//          .nav-cta { padding: 10px 22px; background: var(--sage); color: white; border: none; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; }

//          /* ARTICLE HERO */
//          .article-hero {
//            padding: 140px 80px 64px;
//            background: linear-gradient(135deg, var(--warm-white) 55%, var(--sage-pale) 100%);
//            border-bottom: 1px solid var(--sage-mid);
//            position: relative; overflow: hidden;
//          }
//          .hero-blob { position: absolute; right: -100px; top: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle at 40% 40%, #d4e8da 0%, transparent 70%); opacity: 0.6; pointer-events: none; }
//          .article-hero-inner { position: relative; z-index: 1; max-width: 760px; }
//          .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; font-size: 0.82rem; color: var(--ink-soft); }
//          .breadcrumb a { color: var(--sage); text-decoration: none; font-weight: 500; }
//          .breadcrumb-sep { color: rgba(20,28,26,0.3); }
//          .article-tag { display: inline-block; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sage); background: var(--sage-pale); border: 1px solid var(--sage-mid); padding: 5px 12px; border-radius: 100px; margin-bottom: 20px; }
//          .article-title { font-family: 'Instrument Serif', serif; font-size: clamp(2rem, 4vw, 3rem); line-height: 1.2; font-weight: 400; color: var(--ink); margin-bottom: 24px; }
//          .article-meta { display: flex; align-items: center; gap: 20px; font-size: 0.84rem; color: var(--ink-soft); }
//          .article-meta-item { display: flex; align-items: center; gap: 7px; }
//          .meta-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--sage-mid); }

//          /* ARTICLE LAYOUT */
//          .article-layout {
//            display: grid; grid-template-columns: 1fr 280px; gap: 64px;
//            max-width: 1100px; margin: 0 auto; padding: 64px 80px 100px;
//            align-items: start;
//          }
//          .article-body { min-width: 0; }
//          .article-cover {
//            height: 360px; border-radius: 20px; overflow: hidden; margin-bottom: 48px;
//            background: linear-gradient(135deg, var(--sage) 0%, var(--sage-light) 60%, #8dc4a0 100%);
//            position: relative;
//          }
//          .article-cover::after { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
//          .article-cover-label { position: absolute; bottom: 20px; left: 20px; font-family: 'Instrument Serif', serif; font-size: 1.6rem; color: white; opacity: 0.4; font-style: italic; }

//          .prose { font-size: 1rem; color: var(--ink-soft); line-height: 1.85; }
//          .prose p { margin-bottom: 1.4em; }
//          .prose p:last-child { margin-bottom: 0; }

//          /* SIDEBAR */
//          .article-sidebar { position: sticky; top: 100px; }
//          .sidebar-card { background: white; border: 1px solid rgba(20,28,26,0.08); border-radius: 18px; padding: 28px; margin-bottom: 20px; }
//          .sidebar-card h3 { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; color: var(--ink-soft); margin-bottom: 16px; }
//          .sidebar-stat { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(20,28,26,0.06); font-size: 0.85rem; }
//          .sidebar-stat:last-child { border-bottom: none; }
//          .sidebar-stat-val { font-weight: 600; color: var(--sage); }
//          .sidebar-cta { background: var(--ink); border-radius: 18px; padding: 28px; color: white; }
//          .sidebar-cta h3 { font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
//          .sidebar-cta p { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 20px; line-height: 1.6; }
//          .sidebar-btn { display: block; padding: 12px 20px; background: var(--sage); color: white; border-radius: 10px; text-align: center; text-decoration: none; font-size: 0.85rem; font-weight: 500; transition: background 0.2s; }
//          .sidebar-btn:hover { background: var(--sage-light); }

//          /* DIVIDER */
//          .article-divider { height: 2px; width: 48px; background: var(--sage); border-radius: 2px; margin: 32px 0; }

//          /* BACK LINK */
//          .back-link { display: inline-flex; align-items: center; gap: 8px; color: var(--sage); font-size: 0.85rem; font-weight: 500; text-decoration: none; margin-bottom: 40px; transition: gap 0.2s; }
//          .back-link:hover { gap: 12px; }

//          /* FOOTER */
//          .footer { background: var(--ink); color: rgba(255,255,255,0.4); padding: 28px 80px; display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; }
//          .footer-logo { display: flex; align-items: center; gap: 8px; font-size: 1rem; font-weight: 600; color: white; text-decoration: none; }
//          .footer-logo-icon { width: 28px; height: 28px; border-radius: 8px; background: var(--sage); display: flex; align-items: center; justify-content: center; color: white; }

//          @media (max-width: 900px) {
//            .nav { padding: 16px 24px; } .nav-links { display: none; }
//            .article-hero { padding: 120px 24px 48px; }
//            .article-layout { grid-template-columns: 1fr; padding: 40px 24px 80px; gap: 40px; }
//            .article-sidebar { position: static; }
//            .footer { padding: 20px 24px; flex-direction: column; gap: 12px; text-align: center; }
//          }
//        `}</style>

//        <nav className="nav">
//          <Link href="/" className="nav-logo">
//            <span className="nav-logo-icon">
//              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
//            </span>
//            LifeLine
//          </Link>
//          <ul className="nav-links">
//            <li><Link href="/features">Features</Link></li>
//            <li><Link href="/blog" className="active">Insights</Link></li>
//            <li><Link href="/pricing">Pricing</Link></li>
//          </ul>
//          <a href="/signup" className="nav-cta">Get Started</a>
//        </nav>

//        <main>
//          <section className="article-hero">
//            <div className="hero-blob" />
//            <div className="article-hero-inner">
//              <div className="breadcrumb">
//                <Link href="/blog">Insights</Link>
//                <span className="breadcrumb-sep">›</span>
//                <span>{blog.title}</span>
//              </div>
//              <span className="article-tag">Healthcare Insight</span>
//              <h1 className="article-title">{blog.title}</h1>
//              <div className="article-meta">
//                <span className="article-meta-item">
//                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//                  {readTime} min read
//                </span>
//                <span className="meta-dot" />
//                <span className="article-meta-item">
//                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
//                  {wordCount} words
//                </span>
//              </div>
//            </div>
//          </section>

//          <div className="article-layout">
//            <article className="article-body">
//              <Link href="/blog" className="back-link">
//                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
//                Back to Insights
//              </Link>

//              <div className="article-cover">
//                <span className="article-cover-label">LifeLine Insights</span>
//              </div>

//              <div className="prose">
//                {contentText?.split("\n\n").map((para, i) => (
//                  <p key={i}>{para}</p>
//                ))}
//              </div>

//              <div className="article-divider" />

//              <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "24px", background: "var(--sage-pale)", borderRadius: "14px", border: "1px solid var(--sage-mid)" }}>
//                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--sage)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>
//                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
//                </div>
//                <div>
//                  <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--sage)", marginBottom: "2px" }}>Published by LifeLine Editorial</p>
//                  <p style={{ fontSize: "0.8rem", color: "var(--ink-soft)" }}>Bringing you evidence-based insights for better clinic management.</p>
//                </div>
//              </div>
//            </article>

//            <aside className="article-sidebar">
//              <div className="sidebar-card">
//                <h3>Article Info</h3>
//                <div className="sidebar-stat"><span>Read time</span><span className="sidebar-stat-val">{readTime} min</span></div>
//                <div className="sidebar-stat"><span>Word count</span><span className="sidebar-stat-val">{wordCount}</span></div>
//                <div className="sidebar-stat"><span>Category</span><span className="sidebar-stat-val">Insights</span></div>
//              </div>
//              <div className="sidebar-cta">
//                <h3>Try LifeLine Free</h3>
//                <p>Join 500+ clinics transforming patient care with smarter tools.</p>
//                <a href="/signup" className="sidebar-btn">Get started →</a>
//              </div>
//            </aside>
//          </div>
//        </main>

//        <footer className="footer">
//          <Link href="/" className="footer-logo">
//            <span className="footer-logo-icon">
//              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
//            </span>
//            LifeLine
//          </Link>
//          <span>© {new Date().getFullYear()} LifeLine Health Technologies.</span>
//          <span>Made with care for clinicians.</span>
//        </footer>
//      </>
//    );
//  }
