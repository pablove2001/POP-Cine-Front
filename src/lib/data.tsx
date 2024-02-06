import { Movie } from "@/types/Movie";

export const fetchMovies = async () => {
  const res = await fetch("http://localhost:9000/movies");
  if (!res.ok) {
    console.log("ERROR: fetchMovies API");
    return [];
  }
  console.log("no error");
  const data: Movie[] = await res.json();
  return data;
};
