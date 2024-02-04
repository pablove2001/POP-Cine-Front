export default function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Billboard", link: "/billboard" },
  ];
  return (
    <>
      <nav className="fixed top-0 bg-black backdrop-blur-lg bg-opacity-70 w-full z-10">
        <div className="mx-auto px-10">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="sm:hover:text-gray-500 duration-300">
              <span className="text-2xl text-red-600 font-black">
                Movies.com
              </span>
            </a>
            <div
              className={`flex static space-x-7 w-auto text-center top-auto text-xl p-0 transition-all duration-300 ease-in left-[100vw] bg-opacity-90`}
            >
              {Links.map((link) => (
                <div key={link.name} className="sm:my-0 my-5">
                  <a
                    href={link.link}
                    className="sm:hover:text-neutral-300 duration-300 transition-all ease-out"
                  >
                    {link.name}
                  </a>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
