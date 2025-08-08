export async function GET() {
  const apiKey = process.env.TMDB_API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return Response.json({ data });
}
