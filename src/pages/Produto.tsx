import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const Produto = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(products.find(p => p.id === id));

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setQuantity(1);
    } else {
      navigate('/loja');
    }
  }, [id, navigate]);

  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 2
    }).format(price).replace('AOA', 'Kz');
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-surface-container-lowest min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm text-on-surface-variant" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
                <Link to="/loja" className="hover:text-primary transition-colors">Loja</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
                <Link to={`/loja?category=${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
                <span className="text-on-surface font-medium">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-surface rounded-3xl shadow-sm border border-surface-variant overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Gallery */}
            <div className="relative h-96 md:h-auto bg-surface-container-low">
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {product.isNew && (
                <span className="absolute top-6 left-6 bg-primary text-on-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Novo
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="text-sm text-primary font-medium tracking-wider uppercase mb-3">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">
                {product.name}
              </h1>
              <div className="text-3xl font-bold text-primary mb-6">
                {formatPrice(product.price)}
              </div>
              
              <div className="prose prose-sm text-on-surface-variant mb-8">
                <p>{product.description}</p>
              </div>

              <div className="border-t border-surface-variant pt-8 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface font-medium">Quantidade</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-outline rounded-full bg-surface">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none"
                      aria-label="Diminuir quantidade"
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="w-12 text-center font-medium text-on-surface">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none"
                      aria-label="Aumentar quantidade"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                  <div className="text-on-surface-variant text-sm">
                    Total: <span className="font-bold text-on-surface">{formatPrice(product.price * quantity)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-on-primary py-4 px-8 rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center justify-center shadow-sm"
                >
                  <span className="material-symbols-outlined mr-2">shopping_bag</span>
                  Adicionar ao Carrinho
                </button>
                <button 
                  className="flex-none bg-surface-container text-on-surface py-4 px-6 rounded-full font-medium hover:bg-surface-variant transition-colors flex items-center justify-center border border-surface-variant"
                  aria-label="Adicionar aos favoritos"
                >
                  <span className="material-symbols-outlined">favorite_border</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-surface-variant pt-8">
                <div className="flex items-center text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary mr-2">local_shipping</span>
                  Entrega rápida
                </div>
                <div className="flex items-center text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary mr-2">verified</span>
                  Qualidade garantida
                </div>
                <div className="flex items-center text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary mr-2">lock</span>
                  Pagamento seguro
                </div>
                <div className="flex items-center text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary mr-2">support_agent</span>
                  Suporte dedicado
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">Poderá também gostar de</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-surface-variant group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <button 
                      onClick={() => addToCart(relatedProduct)}
                      className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm text-primary p-3 rounded-full shadow-sm hover:bg-primary hover:text-on-primary transition-colors opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300"
                      aria-label="Adicionar ao carrinho"
                    >
                      <span className="material-symbols-outlined">shopping_bag</span>
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-on-surface-variant mb-2 uppercase tracking-wider font-medium">{relatedProduct.category}</div>
                    <h3 className="font-headline font-semibold text-lg text-on-surface mb-2 line-clamp-1">
                      <Link to={`/produto/${relatedProduct.id}`} className="hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-primary text-xl">{formatPrice(relatedProduct.price)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
