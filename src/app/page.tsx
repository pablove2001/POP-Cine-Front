import CardDesc from "@/components/CardDesc";
import Poster from "@/components/Poster";
import { fetchMovies } from "@/lib/data";
import { Movie } from "@/types/Movie";
import Image from "next/image";

const Home = async () => {
  const movies: Movie[] = await fetchMovies();
  const sortedMovies = movies.sort((a, b) => b.rentals - a.rentals);
  const topMovies = sortedMovies.slice(0, 10);
  const otherMovies = sortedMovies.slice(10);

  return (
    <div className="pt-16 bg-[#191b1c]">
      <div className="max-w-full h-48 sm:h-72 flex items-end justify-center px-10">
        <div className="relative w-40 sm:w-max">
          <Image src="/POP2.png" alt="" width={250} height={250} />
          <Image src="/suR.png" alt="" width={60} height={60} className="absolute left-0 -bottom-[19px] sm:-bottom-[24px] w-10 sm:w-[60px]" />
          <Image src="/suL.png" alt="" width={60} height={60} className="absolute right-0 -bottom-[19px] sm:-bottom-[24px] w-10 sm:w-[60px]" />
        </div>

      </div>
      <div className="px-10 py-5 bg-[#26282a]">
        <h2 className="text-3xl text-red-600 font-black">Top 10 peliculas</h2>
        <div className="overflow-x-auto flex space-x-10 overflow-auto p-2">
          {topMovies.map((movie) => (
            <Poster name={movie.title} img={movie.picture} price={movie.price} />
          ))}
        </div>
      </div>
      <div className="pt-10 flex flex-col items-center justify-start mx-10">
        {otherMovies.map((movie) => (
          <div className="w-full mb-4">
            <CardDesc name={movie.title} img={movie.picture} price={movie.price} description={movie.description} category={movie.category} />
          </div>
        ))}
      </div>
    </div>
  );

};

export default Home;
