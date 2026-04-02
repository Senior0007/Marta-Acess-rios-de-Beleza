import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { products, categories, Product } from '../data/products';
import { useCart } from '../context/CartContext';

export const Loja = () => {
  const location = useLocation();
  const { addToCart } = useCart();
  
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('recentes');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(50000);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [location]);

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'Todos') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }

    // Filter by price
    result = result.filter(p => p.price <= maxPrice);

    // Sort
    switch (sortBy) {
      case 'preco-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'preco-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'vendidos':
        result.sort((a, b) => (b.sales || 0) - (a.sales || 0));
        break;
      case 'recentes':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    setFilteredProducts(result);
  }, [activeCategory, sortBy, searchQuery, maxPrice]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 2
    }).format(price).replace('AOA', 'Kz');
  };

  return (
    <div className="bg-surface-container-lowest min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-headline font-bold text-on-surface mb-4">A Nossa Coleção</h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Explore a nossa seleção cuidadosamente curada de acessórios que realçam a sua beleza única.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-surface p-4 rounded-2xl shadow-sm border border-surface-variant">
          
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container hover:bg-surface-variant text-on-surface'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Price Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-sm text-on-surface-variant whitespace-nowrap">Até {formatPrice(maxPrice)}</span>
              <input 
                type="range" 
                min="0" 
                max="50000" 
                step="1000"
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 accent-primary"
              />
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                type="text"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary text-sm text-on-surface placeholder-on-surface-variant"
              />
            </div>

            {/* Sort */}
            <div className="relative w-full sm:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none bg-surface-container pl-4 pr-10 py-2 rounded-full border-none focus:ring-2 focus:ring-primary text-sm text-on-surface cursor-pointer"
              >
                <option value="recentes">Mais recentes</option>
                <option value="vendidos">Mais vendidos</option>
                <option value="preco-asc">Preço: Menor ao Maior</option>
                <option value="preco-desc">Preço: Maior ao Menor</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 text-sm text-on-surface-variant">
          Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'resultado' : 'resultados'}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-surface-variant group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Novo
                    </span>
                  )}
                  <button 
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm text-primary p-3 rounded-full shadow-sm hover:bg-primary hover:text-on-primary transition-colors opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300"
                    aria-label="Adicionar ao carrinho"
                  >
                    <span className="material-symbols-outlined">shopping_bag</span>
                  </button>
                </div>
                <div className="p-5">
                  <div className="text-xs text-on-surface-variant mb-2 uppercase tracking-wider font-medium">{product.category}</div>
                  <h3 className="font-headline font-semibold text-lg text-on-surface mb-2 line-clamp-1">
                    <Link to={`/produto/${product.id}`} className="hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-primary text-xl">{formatPrice(product.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface rounded-2xl border border-surface-variant">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">search_off</span>
            <h3 className="text-xl font-headline font-semibold text-on-surface mb-2">Nenhum produto encontrado</h3>
            <p className="text-on-surface-variant">Tente ajustar os seus filtros ou termo de pesquisa.</p>
            <button 
              onClick={() => {
                setActiveCategory('Todos');
                setSearchQuery('');
              }}
              className="mt-6 px-6 py-2 bg-primary-container text-on-primary-container rounded-full font-medium hover:bg-primary hover:text-on-primary transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
