export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const email: string = body.email;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
      });
    }

    // Check duplicate
    const checkRes = await fetch(
      `http://localhost:1337/api/subscribers?filters[email][$eq]=${email}`,
    );

    const checkData = await checkRes.json();

    if (checkData.data.length > 0) {
      return new Response(JSON.stringify({ error: 'Already subscribed' }), {
        status: 400,
      });
    }

    // Save to Strapi
    await fetch('http://localhost:1337/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { email },
      }),
    });

    return new Response(
      JSON.stringify({ message: 'Subscribed successfully' }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
      status: 500,
    });
  }
}
