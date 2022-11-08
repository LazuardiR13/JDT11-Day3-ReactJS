import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({ random, productName, productPrice, productCategory, onClick }) => {
  const navigate =useNavigate()
  return (
    <>
      <Card
        className="product-card"
        hoverable
        cover={
          <img alt="example" src={`https://picsum.photos/200?random=${random}`} />
        }
      >
        <Meta
          title={productName}
          description={
            <div>
              <div className="ant-card-meta-category">{productCategory}</div>
              <div className="ant-card-meta-price">Rp. {productPrice}</div>
              
            </div>
          }
        />
      </Card>
        <button type="primary" onClick={()=> navigate(`/detail-product/${onClick}`)}> Detail Product</button>
    </>
  );
};

export default ProductCard;
