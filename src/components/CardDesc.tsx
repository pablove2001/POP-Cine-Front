export default function CardDesc(props: {
  name: string;
  img: string;
  price: number;
}) {
  return (
    <>
      <div className="flex flex-col items-center w-full group relative hover:scale-[1.010] transition-all duration-300 ease-out">
        {/* Card 1 */}
        <div className="h-[200px] bg-[#141414] mx-auto mb-4 bg-white rounded-md overflow-hidden shadow-lg w-full">
          <div className="flex items-center">
            <img
              src={props.img}
              alt="Product Image"
              className="w-40 h-[200px] object-cover rounded-l-md"
            />
            <div className="p-8 w-full">
              <h2 className="text-xl font-semibold text-white">{props.name}</h2>
              <p className="text-zinc-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus nemo sequi illum inventore obcaecati aperiam error qui aliquam et, veritatis corporis eaque vel nihil dolor ipsam suscipit cupiditate alias?</p>
              <p className="text-green-600 font-bold">${props.price}</p>
              <p className="text-blue-500">Category</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
