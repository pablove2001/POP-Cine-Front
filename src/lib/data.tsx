type Movies = {
  id: string;
  title: string;
  picture: string;
  price: number;
  category: string;
  rentals: number;
  description: string;
};

export const fetchMovies = async () => {
  const res = await fetch("http://localhost:9000/movies");
  if (!res.ok) {
    console.log("ERROR: fetchMovies API");
    return [];
  }
  console.log("no error");
  const data: Movies[] = await res.json();
  return data;
};
