import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.scss";
import productsData from "../../data/productsData";

const Card = () => {
  const navigate = useNavigate();

  const handleCardClick = (id,product) => {
    const serializedProduct = encodeURIComponent(JSON.stringify(product));

    navigate(`./product/${id}?data=${serializedProduct}`);
  };
  return (
    <>
      {productsData.map((product, index) => (
        <div
          className="card"
          onClick={() => handleCardClick(product.id, product)}
          key={index}
        >
          <div className="card-image">
            <img src={product.image} alt={product.title} />
            {product.discount > 0 && (
              <div className="discount">-{product.discount}%</div>
            )}
          </div>
          <div className="card-content">
            <h4 className="card-title">{product.name}</h4>
            <div className="card-price">
              <span className="current-price">${product.price}</span>
              {product.discount > 0 && (
                <span className="old-price">${product.oldPrice}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
