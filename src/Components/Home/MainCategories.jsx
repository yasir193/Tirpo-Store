import React from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/products.json";
import sand from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم ارجواني.jpg'
import "./MainCategories.css";

export default function MainCategories() {
  return (
    <section id="products" className="bg-black">
      <div className="container">
        <div className="row">
          {productsData.map((category) => {
            const imagePath = category.image || ""; // fallback if no image

            // Build full image path using Vite's dynamic import
            const imageUrl = imagePath
              ? new URL(`/src/assets/imgs/${imagePath}`, import.meta.url).href
              : "/images/placeholder.jpg"; // fallback image

            return (
              <div key={category.id} className="col-md-6 p-0">
                <div className="position-relative" style={{ height: "100%" }}>
                  <Link to={`/category/${category.id}`}>
                    <img
                      src={imageUrl}
                      className="w-100 opacity-75"
                      alt={category.name}
                    />
                    <h3 className="position-absolute top-50 start-50 translate-middle text-white m-0">
                      {category.name}
                    </h3>
                  </Link>
                </div>
              </div>
            );
          })}

          <div  className="col-md-6 p-0">
            <div className="position-relative" style={{ height: "100%" }}>
              <Link to={`/category/sand`}>
                <img
                  src={sand}
                  className="w-100 opacity-75"
                  alt={'sand'}
                />
                <h3 className="position-absolute top-50 start-50 translate-middle text-white m-0">
                  رمل الوان
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
