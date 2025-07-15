const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#f9f9f7] py-24 px-6 h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-10 flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-2/3 text-[#2d2d2d]">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Lampka Beauty to miejsce, w którym każda klientka może poczuć się
            wyjątkowo. Oferujemy spersonalizowane zabiegi w komfortowej
            atmosferze, łącząc najwyższy standard usług z troską o detale. W
            jednym miejscu znajdziesz pełen zakres pielęgnacji – od zabiegów na
            twarz, przez stylizację paznokci i rzęs, aż po rytuały relaksacyjne.
            <br />
            <br />
            Dbamy nie tylko o wygląd, ale też o samopoczucie. Zapraszamy Cię do
            świata, w którym piękno spotyka się z troską i profesjonalizmem.
          </p>

          <p className="italic text-sm text-gray-600 mb-1">
            Nie mogę się doczekać, aż powitamy Cię w rodzinie Lampka Beauty.
          </p>

          <img
            src="/assets/signature.png"
            alt="Podpis Daria Lampka"
            className="h-25 w-auto mb-1"
          />
          <p className="text-sm font-medium text-gray-700">Daria Lampka</p>
          <p className="text-sm text-gray-500">Założycielka Lampka Beauty</p>
        </div>

        <div className="md:w-1/3">
          <img
            src="/assets/24.jpg"
            alt="Daria – właścicielka"
            className="w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
