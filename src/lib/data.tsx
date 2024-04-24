import { Movie } from "@/types/Movie";

export const fetchMovies = async () => {
  const res = await fetch(
    "http://movies.us-east-1.elasticbeanstalk.com/movies",
    { cache: "no-cache" }
  );
  const data: Movie[] = await res.json();
  console.log(data);
  return data;
};
