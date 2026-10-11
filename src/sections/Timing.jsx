import Animated from "../components/Animated";
import { timingData } from "../data/data";

const Timing = () => {
  return (
    <section id="timing" className="mt-44 px-4">

      <Animated
        scale={0.8}
        y={0}
        className="
          w-full max-w-5xl
          h-[650px]
          rounded-3xl
          bg-cover bg-center
          flex items-center justify-start
          px-6 md:px-12
          overflow-hidden
          mx-auto
          bg-[url('/assets/restro-timing.png')]
        "
      >

        {/* Left Side White Card */}
        <div className="bg-white rounded-3xl p-7 w-full max-w-sm">

          <Animated delay={0.2}>
            <h3 className="text-xl mb-7 font-medium">
              Opening time:
            </h3>
          </Animated>

          <div className="space-y-6">

            {timingData.map((item, index) => (
              <Animated
                key={index}
                delay={index * 0.15}
                className="grid grid-cols-[1fr_auto] items-center gap-4
                  text-sm" >
                
              

                {/* Day */}
                <span className="font-medium text-zinc-500">
                  {item.day}
                </span>

                {/* Hours */}
                <span
                  className={`font-medium ${
                    item.hours.toLowerCase() === "closed"
                      ? "text-zinc-400"
                      : "text-zinc-500"
                  }`}
                >
                  {item.hours}
                </span>

              </Animated>
            ))}

          </div>
            <Animated delay={0.2} className="mt-12 flex justify-center">
              <a href="#booking-process" className='bg-orange-500 hover:bg-orange-600
              text-white font-medium px-6 py-3 rounded-full transition'>
                Book a table
              </a>
            </Animated>

        </div>

      </Animated>

    </section>
  );
};

export default Timing;