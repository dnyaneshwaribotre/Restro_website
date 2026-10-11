import { useState } from "react";
import { useEffect} from "react";
import { navLinks } from "../data/data";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = ()=>{
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll",handleScroll );
    return ()=> window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className={`fixed top-0 left-0 z-20 w-full bg-white px-6 transition-all duration-300 
        ${scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'}`}>                                                                                                                                             

        <div className="mx-auto flex max-w-7xl items-center justify-between py-6 font-medium">

          {/* ================= LOGO ================= */}
          <a href="/">
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="h-10 w-auto"
            />
          </a>


          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-8 md:flex">

            {/* Navigation Links */}
            <div className="flex items-center gap-8">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    relative
                    font-medium
                    text-zinc-800
                    transition-all
                    duration-300
                    hover:text-orange-500
                  "
                >
                  {link.name}

                  {/* Animated Underline */}
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-0
                      bg-orange-500
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  ></span>
                </a>
              ))}

            </div>


            {/* ================= BOOK A TABLE ================= */}
            <a
              href="#Booking Process"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-orange-500
                px-6
                py-3
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:scale-105
                hover:bg-orange-600
                hover:shadow-xl
                active:scale-95
              "
            >
              <span>Book A Table</span>

              {/* Arrow */}
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="
              rounded-md
              bg-zinc-800
              p-2
              text-white
              transition-all
              duration-300
              hover:bg-orange-500
              md:hidden
            "
          >
            <MenuIcon size={25} />
          </button>

        </div>
      </nav>


      {/* ================================================= */}
      {/*              MOBILE MENU DRAWER                  */}
      {/* ================================================= */}

      {/* Background Overlay */}
      <div
        className={`
          fixed
          inset-0
          z-30
          bg-black/30
          transition-opacity
          duration-300
          md:hidden
          ${
            mobileOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
        onClick={() => setMobileOpen(false)}
      ></div>


      {/* Right Side Drawer */}
      <div
        className={`
          fixed
          right-0
          top-0
          z-40
          h-full
          w-[300px]
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          md:hidden
          ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Drawer Content */}
        <div className="flex h-full flex-col p-8">

          {/* Close Button */}
          <div className="flex justify-end">

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-md
                bg-zinc-800
                p-2
                text-white
                transition-all
                duration-300
                hover:bg-orange-500
              "
            >
              <XIcon size={24} />
            </button>

          </div>


          {/* Mobile Navigation Links */}
          <div className="mt-12 flex flex-col items-end gap-7">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="
                  text-xl
                  font-medium
                  text-zinc-800
                  transition-all
                  duration-300
                  hover:text-orange-500
                "
              >
                {link.name}
              </a>
            ))}


            {/* Mobile Book A Table */}
            <a
              href="#Booking Process"
              onClick={() => setMobileOpen(false)}
              className="
                mt-2
                rounded-full
                bg-orange-500
                px-6
                py-3
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:bg-orange-600
                hover:shadow-lg
              "
            >
              Book A Table →
            </a>

          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;