import React, { useState } from "react";
import "./Tour.scss";

const Tour = (props) => {
  
  
const [showInfo,setShowInfo] = useState(false)

      const handleInfo =()=>{
      
        setShowInfo(!showInfo);
      
      }
     
  const { id,city, img, name, info } = props.tour;
 
 const  {removeTour} = props;

  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="" />

    <span className="close-btn" onClick={() => removeTour(id)}>
   <i className="fas fa-window-close"></i>
    </span>

      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={handleInfo}>

          <i class="fa-solid fa-square-caret-down"></i>
          </span>

        </h5>

        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};

export default Tour;
