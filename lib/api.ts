const API_URL = 'http://localhost:1337/api';

export async function fetchAPI<T>(path: string): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 60 }, // ISR
    });

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    return res.json() as Promise<T>;
  } catch (error) {
    console.log('Fetch error:', error);
    throw error;
  }
}
