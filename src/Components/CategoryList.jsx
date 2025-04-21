import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import StyledCard from "./common/StyledCard";

export default function CategoryList() {
  const { mainCategoryId } = useParams();
  const category = productsData.find(
    (cat) => cat.id === parseInt(mainCategoryId)
  );

  if (!category) return <p className="text-center text-danger">الفئة غير موجودة</p>;

  return (
    <div className="container py-4">
      <h2 className="text-center text-white mb-4">{category.name}</h2>
      <div className="row">
        {category.categories.map((sub) => {
          const imageUrl = new URL(
            `/src/assets/imgs/${sub.image}`,
            import.meta.url
          ).href;

          return (
            <StyledCard
              key={sub.id}
              image={imageUrl}
              title={sub.name}
              link={`/subcategory/${sub.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
