import Slider from "react-slick";
import { booksyReviews } from "../data/booksyReviews";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const CustomPrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-10"
  >
    <MdArrowBackIos className="text-xl" />
  </button>
);

const CustomNextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-10"
  >
    <MdArrowForwardIos className="text-xl" />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const averageRating = (
    booksyReviews.reduce((sum, r) => sum + r.rating, 0) / booksyReviews.length
  ).toFixed(1);

  return (
    <section
      className="bg-[#2d2d2d] text-white py-20 px-6 relative"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest">
            Co mówią nasze klientki
          </h2>
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <img
              src="/assets/lampka-logo.png"
              alt="Lampka Beauty Logo"
              className="h-15 rounded-full"
            />
            <div className="text-left">
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-gold" />
                ))}
                <span className="ml-2 text-base">{averageRating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <Slider {...settings}>
          {booksyReviews.map((review, idx) => (
            <div key={idx} className="px-4 h-full">
              <div className="bg-[#2d2d2d] p-8 md:p-10 h-full flex flex-col justify-between border-r border-l border-white/10">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="/assets/booksy-icon.png"
                    alt="Booksy"
                    className="h-10 rounded-full"
                  />
                </div>

                <p className="text-lg italic mb-4 min-h-[100px]">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-gold text-sm" />
                  ))}
                </div>

                <div className="text-sm opacity-80 text-center">
                  <p className="font-semibold">{review.name}</p>
                  <p>{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
