import Poster from "@/components/Poster";

export default function Home() {
  const movies = [
    {
      name: "Iron Man",
      image:
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/bf/Iron_Man_1_Portada.png/revision/latest?cb=20191029194450&path-prefix=es",
      price: 100.24,
    },
    {
      name: "Iron Man 2",
      image:
        "https://image.tmdb.org/t/p/original/5tCA3oZXLRPHmS5DIDnlu7hY4Ab.jpg",
      price: 100.24,
    },
    {
      name: "Iron Man 3",
      image:
        "https://www.themoviedb.org/t/p/original/3OkXrXYsXELnqCqGhgYHvDXTc3v.jpg",
      price: 100.24,
    },
    {
      name: "UP",
      image:
        "https://www.cinepremiere.com.mx/wp-content/uploads/2009/06/up-movie-poster-720x1024.jpg",
      price: 100.24,
    },
    {
      name: "Iron Man 3",
      image:
        "https://www.themoviedb.org/t/p/original/3OkXrXYsXELnqCqGhgYHvDXTc3v.jpg",
      price: 100.24,
    },
    {
      name: "UP",
      image:
        "https://www.cinepremiere.com.mx/wp-content/uploads/2009/06/up-movie-poster-720x1024.jpg",
      price: 100.24,
    },
    {
      name: "Iron Man 3",
      image:
        "https://www.themoviedb.org/t/p/original/3OkXrXYsXELnqCqGhgYHvDXTc3v.jpg",
      price: 100.24,
    },
    {
      name: "UP",
      image:
        "https://www.cinepremiere.com.mx/wp-content/uploads/2009/06/up-movie-poster-720x1024.jpg",
      price: 100.24,
    },
    {
      name: "Iron Man 3",
      image:
        "https://www.themoviedb.org/t/p/original/3OkXrXYsXELnqCqGhgYHvDXTc3v.jpg",
      price: 100.24,
    },
    {
      name: "UP",
      image:
        "https://www.cinepremiere.com.mx/wp-content/uploads/2009/06/up-movie-poster-720x1024.jpg",
      price: 100.24,
    },
  ];

  return (
    <div className="mx-10 mt-20">
      <h2 className="text-xl font-medium mt-8">Top 10 peliculas</h2>
      <div className="overflow-x-auto flex space-x-2 overflow-auto p-2">
        {movies.map((movie) => (
          <Poster name={movie.name} img={movie.image} price={movie.price} />
        ))}
      </div>
      <h2 className="text-xl font-medium mt-8">Top 10 peliculas</h2>
      <div className="overflow-x-auto flex space-x-2 overflow-auto p-2">
        {movies.map((movie) => (
          <Poster name={movie.name} img={movie.image} price={movie.price} />
        ))}
      </div>
      <h2 className="text-xl font-medium mt-8">Top 10 peliculas</h2>
      <div className="overflow-x-auto flex space-x-2 overflow-auto p-2">
        {movies.map((movie) => (
          <Poster name={movie.name} img={movie.image} price={movie.price} />
        ))}
      </div>
      <h2 className="text-xl font-medium mt-8">Top 10 peliculas</h2>
      <div className="overflow-x-auto flex space-x-2 overflow-auto p-2">
        {movies.map((movie) => (
          <Poster name={movie.name} img={movie.image} price={movie.price} />
        ))}
      </div>
    </div>
  );
}
