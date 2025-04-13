import React from "react";
import "./Home.css";
import stone from "../../assets/images/احجار طبيعي/خليط احجار وزلط لحشو المزهريه.jpg";
import clear_quartz_stone from "../../assets/images/حجر كورتز شفاف/احجار الكورتز اصفر نقي نمره من 1_2.jpg";
import sand from "../../assets/images/رمل الوان/رمل ناعم نقي الوان صناعي/رمل ناعم نقي  الوان صناعي.jpg";
import Colored_gravel from "../../assets/images/زلط الوان وسط فرز اول/زلط اسود وسط لامع.jpg";
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <section id="products" className="bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="stones position-relative">
              <Link to={'/products/stones'}>
                <img src={stone} className="w-100 opacity-75" alt="stone" />
              </Link>
              <h3 className="position-absolute top-50 start-50 translate-middle text-white m-0">
                احجار طبيعية
              </h3>
            </div>
          </div>

          <div className="col-md-6 p-0">
            <div className="quartz position-relative">
              <Link to={'/products/quartz'} > 
                <img
                  src={clear_quartz_stone}
                  className="w-100 opacity-75"
                  alt="clear_quartz_stone"
                />
              </Link>
              <h3 className="position-absolute top-50 start-50 translate-middle text-white m-0">
                احجار كوارتز شفاف
              </h3>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="sand position-relative">
              <img src={sand} className="w-100 opacity-75" alt="sand" />
              <h3 className="position-absolute top-50 start-50 translate-middle text-white m-0">
                رمل الوان
              </h3>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="gravel position-relative">
              <img
                src={Colored_gravel}
                className="w-100 opacity-75"
                alt="Colored gravel"
              />
              <h3 className="position-absolute top-50 start-50 translate-middle text-white m-0">
                زلط الوان
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
