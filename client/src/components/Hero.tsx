const Hero = () => {
  return (
    <section className="bg-pink-100 text-gray-900 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Witamy w Lampka Beauty
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Ekskluzywny salon kosmetyczny, w którym każda kobieta poczuje się
        wyjątkowo.
      </p>
      <button className="bg-pink-600 text-white py-3 px-6 rounded-full text-lg shadow-md hover:bg-pink-700 transition-colors duration-300">
        Umów wizytę
      </button>
    </section>
  );
};
export default Hero;
