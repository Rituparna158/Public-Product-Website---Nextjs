export async function GET(): Promise<Response> {
  try {
    const res = await fetch('http://localhost:1337/api/subscribers');

    const data = await res.json();

    return new Response(
      JSON.stringify({
        totalSubscribers: data.meta.pagination.total,
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ totalSubscribers: 0 }), {
      status: 500,
    });
  }
}
