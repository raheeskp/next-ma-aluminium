const team = [
  { name: "Hamza", designation: "Founder & CEO", image: "/images/achu.jpeg" },
  { name: "Muhammed", designation: "Sales Manager", image: "/images/team.jpg" },
  {
    name: "Rahees",
    designation: "Accounts Manager",
    image: "/images/team.jpg",
  },
  {
    name: "Jabir",
    designation: "Purchase Manager",
    image: "/images/jabir.jpeg",
  },
  { name: "Ajitha", designation: "Cashier", image: "/images/team-lady.png" },
  {
    name: "Aboobacker",
    designation: "Sales Executive",
    image: "/images/team.jpg",
  },
  {
    name: "Muhammed Uvais",
    designation: "Sales Executive",
    image: "/images/team.jpg",
  },
  {
    name: "Afthabu Rahman",
    designation: "Sales Executive",
    image: "/images/team.jpg ",
  },
];

const TeamMembers = () => {
  return (
    <div>
      <h1 className="mt-10 text-center text-2xl md:text-4xl font-bold">
        __ Team Members __
      </h1>
      <div className="px-5 mt-10 grid gap-5 sm:px-30 md:grid-cols-2 md:px-15 lg:grid-cols-4 lg:px-30">
        {team.map((member, index) => {
          return (
            <div
              key={index}
              className="border-5 border-gray-200 p-5 flex flex-col gap-2 justify-between text-center"
            >
              <img src={member.image} alt="image" className="w-full rounded" />
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-primary">
                  {member.name}
                </h3>
                <span>- {member.designation} -</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembers;
