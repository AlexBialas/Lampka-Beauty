const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="/assets/salon.jpg"
          alt="Salon Lampka Beauty"
          className="w-full md:w-1/2 rounded-2xl shadow-xl"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            Poznaj nasz salon
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Lampka Beauty to przestrzeń stworzona z pasji do piękna. Naszym
            celem jest podkreślenie naturalnego uroku każdej klientki poprzez
            indywidualne podejście i najwyższy standard usług.
          </p>
          <p className="text-lg text-gray-700">
            Zespół doświadczonych specjalistek zadba o Ciebie w atmosferze
            relaksu i komfortu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
