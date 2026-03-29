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
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ totalSubscribers: 0 }), {
      status: 500,
    });
  }
}
