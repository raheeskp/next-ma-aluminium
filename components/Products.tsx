import Link from "next/link";

const productsData = [
  {
    id: "1",
    cardImage: "/images/aluminium.jpg",
    cardTitle: "Aluminium Profiles",
    description:
      "We have quality aluminium profiles with wide veriety of colours and sizes from leading companies in India.",
  },
  {
    id: "2",
    cardImage: "/images/pvc-sheet.jpg",
    cardTitle: "PVC Laminated Sheets",
    description:
      "High tempered laminated sheet from leading companies from India like Meraki, Crystel, Sky Decor etc.",
  },
  {
    id: "3",
    cardImage: "/images/doors.jpg",
    cardTitle: "PVC & UPVC Doors",
    description:
      "PVC and UPVC door from major companies of India like Seaoux, Star Plastics, Sarvesh, Yuva, Everlast etc.",
  },
  {
    id: "4",
    cardImage: "/images/wall-panel.jpg",
    cardTitle: "Wall Panels for Interior & Exterior Purpose",
    description:
      "Wide veriety of sellections available for decorating homes and offices.",
  },
  {
    id: "5",
    cardImage: "/images/ladder.jpg",
    cardTitle: "Alluminium self Support Ladders",
    description: "Ladders available in different sizes and quality.",
  },
  {
    id: "6",
    cardImage: "/images/hardwares.jpg",
    cardTitle: "All type hardwares for Fabrication  ",
    description:
      "Fablock, Babylatch, Towerbolt, Handles, Screws, Door Closers, Beedings etc.",
  },
];

const Products = () => {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold text-center lg:text-4xl">
        __ Products Available __
      </h1>
      <div className="px-5 mt-10 grid gap-6 sm:px-20 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-25">
        {productsData.map((item) => {
          return (
            <div key={item.id} className="">
              <div className="">
                <img
                  src={item.cardImage}
                  alt="image"
                  className="h-[215px] w-full overflow-hidden object-cover"
                />
              </div>
              <div className="border-x-4 border-b-4 border-gray-100 py-5 px-8 text-center">
                <h1 className="text-2xl font-bold">{item.cardTitle}</h1>
                <p className="mt-3">{item.description}</p>
                <div className="mt-7">
                  <Link
                    href=""
                    className="bg-primary text-sm text-white px-5 py-3 hover:bg-primary-hover"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
