import { useEffect, useState } from "react";
import Slider from "react-slick";
import { booksyReviews } from "../data/booksyReviews";
import { fetchGoogleReviews } from "../utils/fetchGoogleReviews";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaStar } from "react-icons/fa";

interface CombinedReview {
  source: "Booksy" | "Google";
  name: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
}

const CustomPrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-10"
  >
    <MdArrowBackIos className="text-xl" />
  </button>
);

const CustomNextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-10"
  >
    <MdArrowForwardIos className="text-xl" />
  </button>
);

const Testimonials = () => {
  const [reviews, setReviews] = useState<CombinedReview[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const google = await fetchGoogleReviews();

        const googleMapped: CombinedReview[] =
          google?.reviews?.map((r: any) => ({
            source: "Google",
            name: r.author_name,
            rating: r.rating,
            text: r.text,
            date: new Date(r.time * 1000).toLocaleDateString(),
            profilePhoto: r.profile_photo_url,
          })) || [];

        const booksyMapped: CombinedReview[] = booksyReviews.map((r) => ({
          source: "Booksy",
          name: r.name,
          rating: r.rating,
          text: r.text,
          date: r.date,
        }));

        setReviews([...googleMapped, ...booksyMapped]);
        setIsLoaded(true);
      } catch (error) {
        console.error("Błąd ładowania opinii:", error);
        setReviews(
          booksyReviews.map((r) => ({
            source: "Booksy",
            name: r.name,
            rating: r.rating,
            text: r.text,
            date: r.date,
          }))
        );
        setIsLoaded(true);
      }
    };

    loadReviews();
  }, []);

  const averageRating = isLoaded
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(
        1
      )
    : null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="bg-[#2d2d2d] text-white py-20 px-4 lg:px-8"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest mb-6 md:mb-0">
            Co mówią nasze klientki
          </h2>
          {averageRating && (
            <div className="flex items-center gap-4">
              <img
                src="/assets/lampka-logo.png"
                alt="Lampka Beauty Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="flex items-center gap-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gold" />
                  ))}
                  <span className="ml-2 text-base font-semibold">
                    {averageRating}
                  </span>
                </div>
                <p className="text-xs text-gray-400">Średnia ocen</p>
              </div>
            </div>
          )}
        </div>

        {/* Reviews */}
        {isLoaded ? (
          <Slider {...settings}>
            {reviews.map((review, idx) => (
              <div key={idx} className="px-4 h-full">
                <div className="bg-[#2d2d2d] border border-white/10 rounded-xl p-6 h-full flex flex-col justify-between shadow-md hover:shadow-xl transition duration-300 min-h-[320px]">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={
                        review.source === "Booksy"
                          ? "/assets/booksy-icon.png"
                          : "/assets/google-icon.png"
                      }
                      alt={review.source}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>

                  <p className="text-base italic text-gray-200 mb-4 line-clamp-6">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gold text-sm" />
                    ))}
                  </div>

                  <div className="text-sm text-center text-gray-400">
                    <p className="font-medium">{review.name}</p>
                    <p className="text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-white/80">Ładowanie opinii...</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
