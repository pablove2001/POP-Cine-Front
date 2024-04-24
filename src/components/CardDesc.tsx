export default function CardDesc(props: {
  name: string;
  img: string;
  price: number;
  description: string;
  category: string;
  key: string;
}) {
  return (
    <div
      key={props.key}
      className="flex flex-col items-center w-full group relative hover:scale-[1.010] transition-all duration-300 ease-out"
    >
      <div className="h-[200px] bg-[#26282a] mx-auto mb-4 rounded-md overflow-hidden shadow-lg w-full">
        <div className="flex items-center">
          <img
            src={props.img}
            alt="Product Image"
            className="w-40 h-[200px] object-cover rounded-l-md"
          />
          <div className="p-8 w-full">
            <h2 className="text-xl font-semibold text-white">{props.name}</h2>
            <p className="text-zinc-400">{props.description}</p>
            <p className="text-green-600 font-bold">${props.price}</p>
            <p className="text-blue-500">Category: {props.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
