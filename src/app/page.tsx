import CardDesc from "@/components/CardDesc";
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
    <>
      <br />
      <br />
      <div className="bg-[#f1f5f9] max-w-full h-96 flex items-center justify-center">
        <img
          src="https://as2.ftcdn.net/v2/jpg/06/68/12/59/1000_F_668125990_uhARS2y12jdp9pK3AVUgNoKGhD6KqRMg.webp"
          alt="Descripción de la imagen"
          className="max-w-full max-h-full"
        />
      </div>
      <div className="mx-10 mt-12">
      <h2 className="text-3xl mt-8 pb-8 text-red-600 font-black">Top 10 peliculas</h2>
      <div className="overflow-x-auto flex space-x-10 overflow-auto p-2">
        {movies.map((movie) => (
          <Poster name={movie.name} img={movie.image} price={movie.price} />
        ))}
      </div>
    </div>
    <div className="pt-[70px] bg-[#f1f5f9] h-96 overflow-auto flex flex-col items-center justify-start p-4">
      {movies.map((movie) => (
        <div className="w-full mb-4">
          <CardDesc name={movie.name} img={movie.image} price={movie.price} />
        </div>
      ))}
    </div>
    </>
  );
}
