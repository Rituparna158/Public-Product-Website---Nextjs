'use client';

export default function PageError({
  message = 'Something went wrong',
}: {
  message?: string;
}) {
  return (
    <div className="page-bg page-content text-center">
      <h2>{message}</h2>
      <p>Please try again later.</p>
    </div>
  );
}
