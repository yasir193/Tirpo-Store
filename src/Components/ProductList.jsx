import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import StyledCard from "./Common/StyledCard";

export default function ProductList() {
  const { subcategoryId } = useParams();
  const [selectedProductId, setSelectedProductId] = useState(null);

  const subcategory = productsData
    .flatMap((cat) => cat.categories)
    .find((sub) => sub.id === parseInt(subcategoryId));

  if (!subcategory) return <p className="text-center text-danger">المنتجات غير موجودة</p>;

  const handleCardClick = (id) => {
    setSelectedProductId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container py-4">
      <h2 className="text-center text-white mb-4">{subcategory.name}</h2>
      <div className="row">
        {subcategory.products.map((product) => {
          const imageUrl = new URL(
            `/src/assets/imgs/${product.image}`,
            import.meta.url
          ).href;

          const isSelected = selectedProductId === product.id;

          return (
            <StyledCard
              key={product.id}
              image={imageUrl}
              title={product.name}
              subtitle={product.price !== "N/A" ? product.price : ""}
              onClick={() => handleCardClick(product.id)}
              showWhatsApp={isSelected}
              whatsappMessage={`مرحبا، أود الاستفسار عن المنتج: ${product.name}`}
              phoneNumber="01000178117"
            />
          );
        })}
      </div>
    </div>
  );
}
