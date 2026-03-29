'use client';

import { ArrowRightIcon, HeartIcon } from '@/components/Icons';
import { quickLinks, healthMetrics } from '@/utils/quickpanel';

export default function QuickPanel() {
  return (
    <aside className="db-quick-panel">
      <div className="db-panel-card">
        <h3 className="db-panel-title">Quick Actions</h3>

        <div className="db-quick-links">
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href} className="db-quick-link">
              <span className="db-quick-link-icon">{link.icon}</span>

              {link.label}

              <ArrowRightIcon />
            </a>
          ))}
        </div>
      </div>

      <div className="db-panel-card">
        <h3 className="db-panel-title">Clinic Health</h3>

        <div className="db-health-list">
          {healthMetrics.map((m) => (
            <div key={m.label} className="db-health-row">
              <div className="db-health-header">
                <span className="db-health-label">{m.label}</span>
                <span className="db-health-val">{m.value}%</span>
              </div>

              <div className="db-progress-bar">
                <div
                  className="db-progress-fill"
                  style={{ width: `${m.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="db-panel-cta">
        <div className="db-panel-cta-icon">
          <HeartIcon />
        </div>

        <h4 className="db-panel-cta-title">Upgrade your plan</h4>

        <p className="db-panel-cta-sub">
          Unlock advanced analytics, bulk billing, and priority support.
        </p>

        <a href="/pricing" className="db-panel-cta-btn">
          View Plans
        </a>
      </div>
    </aside>
  );
}
