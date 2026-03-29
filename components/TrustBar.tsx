export default function TrustBar() {
  const items = [
    'HIPAA Compliant',
    'ISO 27001',
    'NABH Ready',
    '256-bit Encryption',
    '99.9% Uptime SLA',
  ];

  return (
    <div className="trust-bar">
      <span className="trust-label">Certified &amp; compliant</span>

      <div className="trust-items">
        {items.map((item) => (
          <span className="trust-item" key={item}>
            <span className="trust-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
