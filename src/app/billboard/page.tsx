import Poster from "@/components/Poster";
import { fetchMovies } from "@/lib/data";

function ShowCategory({
  movies,
  showName,
  categoryName,
}: {
  movies: any;
  showName: string;
  categoryName: string;
}) {
  const filteredMovies = movies.filter(
    (movie: { category: string }) => movie.category == categoryName
  );
  return (
    <>
      <h2 className="text-xl font-medium mt-4">{showName}</h2>
      <div
        className="overflow-x-auto flex space-x-3 overflow-auto p-2"
        style={{ scrollbarWidth: "thin" }}
      >
        {filteredMovies.map(
          (movie: { title: string; picture: string; price: number }) => (
            <Poster
              name={movie.title}
              img={movie.picture}
              price={movie.price}
            />
          )
        )}
      </div>
    </>
  );
}

const Billboard = async () => {
  const movies = await fetchMovies();

  return (
    <div className="mx-10 pt-16">
      <ShowCategory
        movies={movies}
        showName={"Cinematic Adrenaline"}
        categoryName={"action"}
      />
      <ShowCategory movies={movies} showName={"Drama"} categoryName={"drama"} />
      <ShowCategory
        movies={movies}
        showName={"Guaranteed Laughs"}
        categoryName={"comedy"}
      />
      <ShowCategory
        movies={movies}
        showName={"Futuristic Universes"}
        categoryName={"sci-fi"}
      />
      <ShowCategory
        movies={movies}
        showName={"Animated Adventures"}
        categoryName={"animation"}
      />
      <ShowCategory
        movies={movies}
        showName={"Screen Horror"}
        categoryName={"horror"}
      />
    </div>
  );
};

export default Billboard;
