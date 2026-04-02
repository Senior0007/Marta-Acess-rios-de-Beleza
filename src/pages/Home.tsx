import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const Home = () => {
  const { addToCart } = useCart();
  const newProducts = products.filter(p => p.isNew).slice(0, 4);
  const topProducts = [...products].sort((a, b) => (b.sales || 0) - (a.sales || 0)).slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 2
    }).format(price).replace('AOA', 'Kz');
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-surface-variant group">
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
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 pb-8 bg-surface-container-low sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-on-surface sm:text-5xl md:text-6xl font-headline">
                  <span className="block xl:inline">Realce a sua</span>{' '}
                  <span className="block text-primary xl:inline">beleza natural</span>
                </h1>
                <p className="mt-3 text-base text-on-surface-variant sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Descubra a nossa coleção exclusiva de acessórios desenhados para a mulher moderna angolana. Elegância, qualidade e estilo em cada detalhe.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/loja" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-on-primary bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 transition-colors">
                      Comprar Agora
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/loja?category=Novidades" className="w-full flex items-center justify-center px-8 py-3 border border-outline text-base font-medium rounded-full text-primary bg-transparent hover:bg-surface-variant md:py-4 md:text-lg md:px-10 transition-colors">
                      Ver Novidades
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img 
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Mulher usando acessórios elegantes" 
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Trust Elements */}
      <section className="bg-surface py-12 border-b border-surface-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">local_shipping</span>
              <h3 className="font-headline font-semibold text-lg text-on-surface mb-2">Entrega Rápida</h3>
              <p className="text-on-surface-variant text-sm">Entregamos em toda Luanda em até 24h.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">verified</span>
              <h3 className="font-headline font-semibold text-lg text-on-surface mb-2">Qualidade Garantida</h3>
              <p className="text-on-surface-variant text-sm">Peças selecionadas com os melhores materiais.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">support_agent</span>
              <h3 className="font-headline font-semibold text-lg text-on-surface mb-2">Atendimento Premium</h3>
              <p className="text-on-surface-variant text-sm">Suporte personalizado via WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Novidades */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-headline font-bold text-on-surface">Novidades</h2>
              <p className="mt-2 text-on-surface-variant">As últimas tendências acabadas de chegar.</p>
            </div>
            <Link to="/loja" className="hidden sm:flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              Ver tudo <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 sm:hidden flex justify-center">
            <Link to="/loja" className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              Ver tudo <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Categorias Destaque */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-on-surface text-center mb-12">Comprar por Categoria</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/loja?category=Colares" className="group relative h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1599643478514-4a820cbf311e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Colares" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-2">Colares</h3>
                  <span className="inline-flex items-center text-white/90 text-sm font-medium group-hover:text-primary-fixed transition-colors">
                    Explorar <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/loja?category=Brincos" className="group relative h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Brincos" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-2">Brincos</h3>
                  <span className="inline-flex items-center text-white/90 text-sm font-medium group-hover:text-primary-fixed transition-colors">
                    Explorar <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/loja?category=Pulseiras" className="group relative h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pulseiras" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-2">Pulseiras</h3>
                  <span className="inline-flex items-center text-white/90 text-sm font-medium group-hover:text-primary-fixed transition-colors">
                    Explorar <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mais Vendidos */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-headline font-bold text-on-surface">Mais Vendidos</h2>
              <p className="mt-2 text-on-surface-variant">Os favoritos das nossas clientes.</p>
            </div>
            <Link to="/loja" className="hidden sm:flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              Ver tudo <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
