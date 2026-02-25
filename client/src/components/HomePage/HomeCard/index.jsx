import homeCards from "../../../data/HomeCardsData";

const HomeCards = () => {
  return (
    <div id="offer" className=" py-6 px-4 mt-45 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {homeCards.map((card) => (
          <div
            key={card.id}
            className="bg-white p-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-lg font-semibold mb-4">{card.title}</h2>

            <div className="grid grid-cols-2 gap-3">
              {card.items.map((item, index) => (
                <div key={index} className="text-sm">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-24 object-cover"
                  />
                  <p className="mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* <p className="text-blue-600 text-sm mt-4 cursor-pointer hover:underline">
              See more
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;