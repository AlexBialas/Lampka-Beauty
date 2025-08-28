const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#f9f9f7] py-24 px-6 flex items-center min-h-screen"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
        {/* Tekst */}
        <div className="md:w-2/3 text-[#2d2d2d] text-center md:text-left">
          <p className="text-base md:text-lg leading-relaxed mb-6 max-w-prose mx-auto md:mx-0">
            <strong>Lampka Beauty</strong> to miejsce, w którym każda klientka
            może poczuć się wyjątkowo. Oferujemy spersonalizowane zabiegi w
            komfortowej atmosferze, łącząc najwyższy standard usług z troską o
            detale. W jednym miejscu znajdziesz pełen zakres pielęgnacji – od
            zabiegów na twarz, przez stylizację paznokci i rzęs, aż po rytuały
            relaksacyjne.
            <br />
            <br />
            Dbamy nie tylko o wygląd, ale też o samopoczucie. Zapraszamy Cię do
            świata, w którym piękno spotyka się z troską i profesjonalizmem.
          </p>

          <div className="mt-6">
            <p className="italic text-sm text-gray-600 mb-2">
              Nie mogę się doczekać, aż powitamy Cię w rodzinie Lampka Beauty.
            </p>
            <img
              src="/assets/signature.png"
              alt="Podpis Daria Lampka"
              className="h-20 w-auto mb-1 drop-shadow-md mx-auto md:mx-0"
            />
            <p className="text-sm font-medium text-gray-700">Daria Lampka</p>
            <p className="text-sm text-gray-500">Założycielka Lampka Beauty</p>
          </div>
        </div>

        {/* Zdjęcie */}
        <div className="md:w-1/3 w-full">
          <img
            src="/assets/24.jpg"
            alt="Daria – właścicielka"
            className="w-full rounded-2xl object-cover shadow-md hover:shadow-xl transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
