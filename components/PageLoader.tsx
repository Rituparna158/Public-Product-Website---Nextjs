export default function PageLoader({ text }: { text?: string }) {
  return (
    <div className="page-bg page-content text-center">
      <p>{text || 'Loading...'}</p>
    </div>
  );
}
