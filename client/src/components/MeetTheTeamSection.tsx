const teamMembers = [
  {
    name: "Anna Lampka",
    role: "Founder & Skin Expert",
    image: "/assets/anna.jpg",
    bio: "Treating clients holistically is not just my passion – it's my commitment. Your story is unique, and we honour that from the very first consultation.",
    signature: "/assets/signature.png",
  },
];

const MeetTheTeamSection = () => {
  return (
    <section className="bg-[#fdfbf6] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Meet the Team</h2>

        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="md:flex items-center bg-white rounded-xl shadow-md overflow-hidden p-6 mb-12"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover rounded-full mx-auto md:mx-0 md:mr-8"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-pink-700 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              {member.signature && (
                <img src={member.signature} alt="Signature" className="h-10" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
