import { STRAPI_URL } from '@/lib/config';
export async function GET(): Promise<Response> {
  try {
    const res = await fetch(`${STRAPI_URL}/subscribers`);
    const data = await res.json();

    return new Response(
      JSON.stringify({
        totalSubscribers: data?.meta?.pagination?.total ?? 0,
      }),
      { status: 200 },
    );
  } catch {
    return new Response(JSON.stringify({ totalSubscribers: 0 }), {
      status: 500,
    });
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const email: string = body.email;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
      });
    }

    const checkRes = await fetch(
      `${STRAPI_URL}/subscribers?filters[email][$eq]=${email}`,
    );
    const checkData = await checkRes.json();

    if (Array.isArray(checkData?.data) && checkData.data.length > 0) {
      return new Response(JSON.stringify({ error: 'Already subscribed' }), {
        status: 400,
      });
    }

    await fetch(`${STRAPI_URL}/subscribers`, {
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
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
      status: 500,
    });
  }
}
