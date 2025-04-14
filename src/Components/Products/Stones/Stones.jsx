import React, { useState, useEffect } from 'react';
import productsData from '../../../data/natural.json'; // Adjust path as needed
import './Stones.css';

function Stones() {
  const [products, setProducts] = useState([]);
  const [activeProductId, setActiveProductId] = useState(null);

  useEffect(() => {
    const filtered = productsData.filter(product => product.name.trim() !== '');
    const withImages = filtered.map(product => ({
      ...product,
      imageUrl: new URL(`/src/assets/images/${product.image}`, import.meta.url).href
    }));
    setProducts(withImages);
  }, []);

  const handleSend = (productName) => {
    const ownerNumber = '01000178117';
    const message = `مرحبا، أريد الاستفسار عن المنتج: ${productName}`;
    const url = `https://wa.me/2${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const toggleForm = (productId) => {
    setActiveProductId(activeProductId === productId ? null : productId);
  };

  return (
    <section id="natural-products" className="py-5" style={{ backgroundColor: '#000' }}>
      <div className="container">
        <h2 className="text-center mb-5 text-white">الاحجار الطبيعية</h2>
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-md-3 col-sm-6">
              <div
                className="card h-100 border-0 shadow"
                style={{ backgroundColor: '#1a1a1a', color: '#fff', cursor: 'pointer' }}
                onClick={() => toggleForm(product.id)}
              >
                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={product.imageUrl}
                    className="img-fluid h-100 w-100 object-fit-cover"
                    alt={product.name}
                    onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  {product.price !== 'N/A' && (
                    <p className="text-muted">{product.price}</p>
                  )}
                </div>

                {activeProductId === product.id && (
                  <div className="px-3 pb-3">
                    <button
                      className="btn btn-success w-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSend(product.name);
                      }}
                    >
                      إرسال عبر واتساب
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stones;
