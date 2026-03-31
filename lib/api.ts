const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function fetchAPI<T>(path: string, options?:{cache?:  "no-store"}): Promise<T | null> {
  const url = `${API_URL}${path}`;

 
  for (let i = 0; i < 5; i++) {
    try {
      const res = await fetch(url, {
        ...(options?.cache === "no-store"
          ? {cache: "no-store"}
          : {next: { revalidate: 60 }}
        )
        
      });

      if (!res.ok) {
        return null;
      }

      return await res.json();
    } catch (error) {
      console.log(`Retry ${i + 1}...`);
      await new Promise((r) => setTimeout(r, 2000)); 
    }
  }

  console.error("API failed after retries");
  return null;
}
