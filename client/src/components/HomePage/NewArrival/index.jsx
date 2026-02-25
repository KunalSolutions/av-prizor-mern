const HomeCards = () => {
  const sections = [
    {
      title: "Display",
      description:
        "Explore premium TVs and advanced CCTV systems for home and business use.",
      image: "/images/newarrival1.png",
      bgColor: "bg-sky-100",
    },
    {
      title: "Speakers",
      description:
        "Discover high-performance speakers, amplifiers and audio solutions for powerful and clear sound.",
      image: "/images/newarrival2.png",
      bgColor: "bg-rose-100",
    },
    {
      title: "Accessories",
      description:
        "Find quality mounts, cables, and essential accessories to complete your electronic setup.",
      image: "/images/newarrival3.png",
      bgColor: "bg-amber-100",
    },
  ];

  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-5 p-6 rounded-2xl 
              ${item.bgColor}
              transition duration-300`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-xl"
              />

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeCards;