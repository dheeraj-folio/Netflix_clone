import React from "react";
import { Tv, Smile } from "lucide-react";
import { FiDownload } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";

const Section2 = () => {
  return (
    <section className="bg-black px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-6">
        More reasons to join
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="relative rounded-2xl p-6 min-h-[400px] text-white bg-gradient-to-b from-[#1a214f] via-[#17102d] to-[#1a0818]">
          <h2 className="text-2xl font-bold mb-4">
            Enjoy on your TV
          </h2>

          <p className="text-gray-300">
            Watch on smart TVs, PlayStation, Xbox,
            Chromecast, Apple TV, Blu-ray players
            and more.
          </p>

          <div className="absolute bottom-5 right-5">
            <Tv size={70} className="text-pink-500" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-2xl p-6 min-h-[400px] text-white bg-gradient-to-b from-[#1a214f] via-[#17102d] to-[#1a0818]">
          <h2 className="text-2xl font-bold mb-4">
            Download your shows to watch offline
          </h2>

          <p className="text-gray-300">
            Save your favourites easily and always
            have something to watch.
          </p>

          <div className="absolute bottom-5 right-5">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 bg-purple-500 rounded-full blur-xl opacity-70"></div>

              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-pink-200 to-pink-400 border-4 border-purple-400">
                <FiDownload className="text-purple-800 text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-2xl p-6 min-h-[400px] text-white bg-gradient-to-b from-[#1a214f] via-[#17102d] to-[#1a0818]">
          <h2 className="text-2xl font-bold mb-4">
            Watch everywhere
          </h2>

          <p className="text-gray-300">
            Stream unlimited movies and TV shows
            on your phone, tablet, laptop, and TV.
          </p>

          <div className="absolute bottom-5 right-5">
            <div className="relative flex items-center justify-center w-16 h-16">
              <div className="absolute w-16 h-16 bg-pink-500/40 rounded-full blur-2xl"></div>

              <GiPartyPopper className="relative text-5xl text-pink-500 rotate-[-25deg]" />

              <span className="absolute top-0 left-0 text-red-500">
                ★
              </span>

              <span className="absolute bottom-0 right-0 text-pink-500">
                ★
              </span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative rounded-2xl p-6 min-h-[400px] text-white bg-gradient-to-b from-[#1a214f] via-[#17102d] to-[#1a0818]">
          <h2 className="text-2xl font-bold mb-4">
            Create profiles for kids
          </h2>

          <p className="text-gray-300">
            Send kids on adventures with their
            favourite characters in a space made
            just for them — free with your
            membership.
          </p>

          <div className="absolute bottom-5 right-5">
            <div className="relative w-14 h-14">
              <div className="absolute top-0 left-1 w-9 h-9 rounded-lg bg-pink-200 flex items-center justify-center">
                <Smile size={18} className="text-pink-900" />
              </div>

              <div className="absolute bottom-0 right-0 w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 via-red-500 to-purple-700 flex items-center justify-center">
                <Smile size={18} className="text-white" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Section2;