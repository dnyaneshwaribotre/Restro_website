import Animated from "../components/Animated";
import { ArrowRight } from "lucide-react";
const floatingdishes = [
  {
    src: "/assets/dish1.png",
    alt: "dish1",
    className: "top-6 left-4 md:top-10 md:left-[6%] lg:left-[10%]",
  },
  {
    src: "/assets/dish2.png",
    alt: "dish2",
    className: "bottom-6 left-6 md:bottom-10 md:left-[10%] lg:left-[14%]",
  },
  {
    src: "/assets/dish3.png",
    alt: "dish3",
    className: "top-6 right-4 md:top-10 md:right-[6%] lg:right-[10%]",
 
},

  {
    src: "/assets/dish4.png",
    alt: "dish4",
    className: "bottom-6 right-6 md:bottom-10 md:right-[10%] lg:right-[14%]",
  },
];

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-orange-500 px-6 flex flex-col justify-center items-center min-h-[400px] md:min-h-[440px] mt-44"
    >
      <div className="absolute inset-0 w-full max-w-full mx-auto pointer-events-none">
        {floatingdishes.map((dish) => (
          <img
            key={dish.src}
            src={dish.src}
            alt={dish.alt}
            className={`absolute size-20 md:size-28 lg:size-36 rounded-full object-cover pointer-events-auto transition-all duration-300 hover:scale-105 z-10 ${dish.className}`}
          />
        ))}
      </div>

      <div className="relative-z-10 text-center max-w-2xl mx-auto">
        <Animated>
            <h1 clasName="text-3xl md:text-[40xl] font-medium text-white font-urbanist
            text-balance">
                Every Meal Is Made To Be Remembered
            </h1>
        </Animated>
        <Animated y={20} delay={0.2}>
            <p className="mt-4 text-whitemax-w-sm mx-auto">
                Join us for fresh ingredients, signature recipes and an unforgettable
                dining experience.
            </p>
        </Animated>

        <Animated delay={0.2} className="flex items-center justify-center">
            <a href="#bookingprocess" className="flex items-center gap-2.5 bg-white
            text-black pl-5 pr-2 py-2 rounded-full mt-5.5 transition">
              Book Your Table
              <span className="size-7 rounded-full bg-black text-white grid
              place-content-center">
                <ArrowRight size={16}/>
              </span>
            </a>

        </Animated>

      </div>

      {/* CTA content can go here */}
      <div className="relative z-20 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold">
          Experience Fine Dining
        </h2>

        <p className="mt-4 text-lg">
          Reserve your table and enjoy an unforgettable experience.
        </p>

        <button className="mt-6 bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Book A Table →
        </button>
      </div>
    </section>
  );
};

export default CTA;