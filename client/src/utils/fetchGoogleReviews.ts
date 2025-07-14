export const fetchGoogleReviews = async () => {
  return {
    reviews: [
      {
        author_name: "Anna Z.",
        rating: 5,
        text: "Cudowne miejsce, profesjonalna obsługa!",
        time: Math.floor(Date.now() / 1000),
        profile_photo_url: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        author_name: "Monika G.",
        rating: 4,
        text: "Bardzo miła atmosfera, wrócę na pewno.",
        time: Math.floor(Date.now() / 1000) - 86400,
        profile_photo_url: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        author_name: "Katarzyna L.",
        rating: 5,
        text: "Najlepszy manicure w mieście!",
        time: Math.floor(Date.now() / 1000) - 172800,
        profile_photo_url: "https://randomuser.me/api/portraits/women/19.jpg",
      },
    ],
  };
};
