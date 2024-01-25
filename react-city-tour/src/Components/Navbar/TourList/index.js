import React, { useState } from "react";
import "./Tourlist.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../TourList/tourData";

const TourList = () => {
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) => {
   
    const sortedTours = tours.filter((tour) => tour.id !== id);
    setTours(sortedTours);
  };

  const handleButtonClick = () => {
    const newTourData = [...tours];

    setTours(newTourData);

    console.log(newTourData);
  };

  return (
    <section className="tourList">
      {tours.map((tour) => {
        return (
          <Tour
            key={tour.Data}
            tour={tour}
            onClick={handleButtonClick}

            removeTour={() => removeTour(tour.id)}
          />
        );
      })}
    </section>
  );
};

export default TourList;
