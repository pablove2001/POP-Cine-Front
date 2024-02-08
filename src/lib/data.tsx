import { Movie } from "@/types/Movie";

export const fetchMovies = async () => {
  const res = await fetch("http://localhost:9000/movies", { cache: 'no-store' });
  const data: Movie[] = await res.json();
  console.log(data);
  return data;
};
