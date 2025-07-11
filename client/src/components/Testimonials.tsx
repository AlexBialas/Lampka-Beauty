const testimonials = [
  {
    name: "Anna K.",
    review:
      "Cudowna obsługa i świetna atmosfera! Moje brwi nigdy nie wyglądały lepiej.",
    rating: 5,
  },
  {
    name: "Julia M.",
    review: "Makijaż ślubny był perfekcyjny. Polecam z całego serca!",
    rating: 5,
  },
  {
    name: "Kasia W.",
    review:
      "Zawsze wychodzę stąd piękniejsza i zrelaksowana. Mój ulubiony salon!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-12">
          Opinie naszych klientek
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-pink-50 p-6 rounded-2xl shadow-md text-left"
            >
              <p className="text-gray-700 mb-4 italic">"{t.review}"</p>
              <div className="text-yellow-400 mb-2">
                {"★".repeat(t.rating) + "☆".repeat(5 - t.rating)}
              </div>
              <p className="text-sm font-semibold text-gray-600">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
