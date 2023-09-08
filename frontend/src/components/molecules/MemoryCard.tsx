import React from "react";
import { Card } from "../../types/Card";
import "./MemoryCard.css";

interface MemoryCardProps {
  card: Card;
  flipped: boolean; 
  onClick: () => void;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ card, flipped, onClick }) => {

  
  const handleClick = () => {
    onClick();
  };

  console.log(card.name, "flipped: ", flipped )

  return (
    <li onClick={handleClick} className={`card ${flipped ? "flipped" : ""} md:w-[90px] md:h-[90px] w-[50px] h-[50px]`}>
      <div className="card-inner">
        <div className={`card-front ${flipped ? "flipped" : "hidden"}`}>
          <img src={card.img_url} alt={card.name} />
        </div>
        <div className="card-back"></div>
      </div>
    </li>
  );
};

export default MemoryCard;
