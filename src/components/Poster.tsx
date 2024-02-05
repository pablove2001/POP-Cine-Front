export default function Poster(props: {
  name: string;
  img: string;
  price: number;
}) {
  return (
    <>
      <div
        className="overflow-hidden h-72 min-w-40 drop-shadow-lg rounded-md bg-cover bg-center group relative hover:scale-[1.05] transition-all duration-300 ease-out"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className="absolute top-72 w-full h-full bg-black bg-opacity-70 group-hover:top-0 group-hover:opacity-100 opacity-0 flex transition-all duration-300 ease-out items-center object-cover">
          <div className="w-52 mx-auto text-white text-center">
            <h1 className="text-xl font-medium">{props.name}</h1>
            <p className="p-5">Cost: ${props.price}</p>
            <div className="flex items-center justify-around"></div>
          </div>
        </div>
      </div>
    </>
  );
}
