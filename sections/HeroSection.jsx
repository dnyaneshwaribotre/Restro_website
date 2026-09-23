import Animated from "../components/Animated";
import { Star } from "lucide-react";

const avatars = [
    "/assets/user-1.jpeg",
    "/assets/user-2.jpeg",
    "/assets/user-3.jpeg",
    "/assets/user-4.jpeg"
]
const HeroSection = () =>{
    return(
        <section className="flex flex-col items-center min-h-screen justify-center 
        bg-[url('/assets/heroBanner.png')] bg-cover bg-center bg-no-repeat px-4 pt-20">
          
             <Animated y={-20} delay={0.2}>
                <p className='text-orange-600'>WHERE FLAVOR MEETS ELEGANCE</p>
            </Animated>

            <Animated  y={40} delay={0.2}>
                <h1 className="text-5xl md:text-6xl font-medium max-w-3xl text-center mt-5
                 font-urbanist text-balance">
                    Crafted For Unforgettable Dining Moment
                </h1>
            </Animated>

            <Animated delay={0.4}>
                <p className='text-zinc-600 max-w-md text-center mt-3'>Experience Carefully curated menus, fresh local ingredient
                    and impeccable service in a made for every celebration.
                </p>
            </Animated>

            <Animated>
                <a href="#Booking Process" className="bg-orange-500 hover:bg-orange-600
                text-white font-medium px-6 py-3 mt-8 rounded-full block transition">
                    Book a Table
                </a>
            </Animated>

            <Animated className="flex items-center justify-center md:jusify-start mt-9">
                <div className="flex -space-x-3.5 pr-3">
                    {avatars.map((src, i)=>(
                        <img key={i} src={src} alt="guest" className="size-10 border-2
                        border-slate-50 rounded-full hover:-translate-y-px transition"  />
                    ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i)=>(
                        <Star key={i} className="size-3.5 fill-orange-500 text-orange-500"/>
                    ))}
                  </div>
                  <p className="text-zinc-800">4.8/5 Rating - 10,000 reviews</p>
                </div>

            </Animated>
        </section>
    )
}
 export default HeroSection;