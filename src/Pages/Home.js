import React from "react";

export const Home = () => {
  const cars = [
    {
      id: 1,
      name: "Model 3",
      info: "Leasing starting at $349/mo",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&amp;format=auto",
    },
    {
      id: 2,
      name: "Model s",
      info: "Leasing starting at $349/mo",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/9584e5ae-f8df-4e18-8aa3-c84ce07e1fb2/bvlatuR/std/2880x1800/Model-S-Main-Hero-Desktop-LHD?quality=auto-medium&amp;format=auto",
    },
    {
      id: 3,
      name: "Model Y",
      info: "",
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop?quality=auto-medium&amp;format=auto",
    },
  ];

  return (
    <main>
      {cars.map((data) => {
        return (
          <section id="model-3" className="relative" key={data.id}>
            <div className="tcl-image">
              <img src={data.image} alt={data.name} />
            </div>
            <div className="tcl-text text-center absolute top-32 left-1/2 -translate-x-1/2 max-lg:top-auto max-lg:bottom-2">
              <h2 className="text-5xl mb-4 max-lg:mb-2 max-lg:text-3xl max-lg:text-white">
                {data.name}
              </h2>
              <p className="text-xl max-lg:text-white max-lg:text-sm">
                {data.info}
              </p>
            </div>
          </section>
        );
      })}
    </main>
  );
};
