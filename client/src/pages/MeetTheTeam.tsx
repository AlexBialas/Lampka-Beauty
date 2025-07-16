import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import teamDataRaw from "../data/teamData";

const teamData = [
  ...teamDataRaw.filter((p) => p.name === "Daria Lampka"),
  ...teamDataRaw.filter((p) => p.name !== "Daria Lampka"),
];

const MeetTheTeamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = teamData.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const getClass = (index: number) => {
    if (index === currentIndex) return "z-30 scale-110 translate-z-10";
    if (index === (currentIndex + 1) % total)
      return "translate-x-[140px] rotate-y-[-30deg] scale-90 z-10 opacity-60";
    if (index === (currentIndex - 1 + total) % total)
      return "-translate-x-[140px] rotate-y-[30deg] scale-90 z-10 opacity-60";
    return "hidden";
  };

  return (
    <section className="min-h-screen bg-white py-20 px-4 text-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
        Poznaj każdą z nas
      </h2>
      <p className="text-[#777] max-w-xl mx-auto text-lg mb-16">
        Zespół Lampka Beauty to kobiety z pasją, doświadczeniem i sercem do
        piękna. Przesuwaj i poznaj nas bliżej.
      </p>

      <div className="relative w-full flex items-center justify-center perspective-[1200px]">
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-10 bg-[#d6b3ba] hover:bg-[#a8b28c] text-white p-2 rounded-full shadow-md z-40"
        >
          ❮
        </button>

        <div className="relative flex items-center justify-center w-[320px] md:w-[400px] h-[500px]">
          {teamData.map((person, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 transform-style preserve-3d ${getClass(
                index
              )} bg-white p-6 rounded-3xl shadow-2xl`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-48 h-auto object-contain mb-4 drop-shadow-2xl"
                />
                <h3 className="text-xl font-bold text-[#2d2d2d] mb-1">
                  {person.name}
                </h3>
                <p className="text-sm text-[#888] mb-2">{person.role}</p>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  {person.bio}
                </p>
                {person.instagram && (
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#d6b3ba] hover:text-[#a8b28c] transition mt-2"
                  >
                    <FaInstagram /> Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-10 bg-[#d6b3ba] hover:bg-[#a8b28c] text-white p-2 rounded-full shadow-md z-40"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default MeetTheTeamPage;
