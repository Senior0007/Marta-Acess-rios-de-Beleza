import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Carrinho = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  const formatPrice = (price: number) => {
    return `${new Intl.NumberFormat('pt-AO').format(price)} Kz`;
  };

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = 'Olá Marta Acessórios! Gostaria de encomendar os seguintes produtos:\n\n';
    
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (${formatPrice(item.price)})\n`;
    });
    
    message += `\n*Total: ${formatPrice(totalPrice)}*\n\n`;
    message += 'Aguardo informações sobre o pagamento e entrega.';

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/244958182232?text=${encodedMessage}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="bg-surface-container-lowest min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20 bg-surface rounded-3xl shadow-sm border border-surface-variant">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-6">shopping_bag</span>
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">O seu carrinho está vazio</h2>
            <p className="text-on-surface-variant mb-8 max-w-md mx-auto">
              Parece que ainda não adicionou nenhum acessório ao seu carrinho. Explore a nossa coleção e encontre a peça perfeita para si.
            </p>
            <Link 
              to="/loja" 
              className="inline-flex items-center px-8 py-4 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Continuar a Comprar
              <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h1 className="text-4xl font-headline font-bold text-on-surface mb-2">O Seu Carrinho</h1>
          <p className="text-on-surface-variant">Revise os seus itens antes de finalizar a encomenda.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-surface rounded-3xl shadow-sm border border-surface-variant overflow-hidden">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-surface-container-low border-b border-surface-variant text-sm font-medium text-on-surface-variant uppercase tracking-wider">
                <div className="col-span-6">Produto</div>
                <div className="col-span-2 text-center">Quantidade</div>
                <div className="col-span-3 text-right">Subtotal</div>
                <div className="col-span-1"></div>
              </div>

              {/* Items */}
              <div className="divide-y divide-surface-variant">
                {items.map(item => (
                  <div key={item.id} className="p-6 flex flex-col md:grid md:grid-cols-12 md:items-center gap-6 hover:bg-surface-container-lowest transition-colors">
                    {/* Product Info */}
                    <div className="col-span-6 flex items-center gap-6">
                      <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border border-surface-variant">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{item.category}</div>
                        <h3 className="font-headline font-semibold text-lg text-on-surface mb-1">
                          <Link to={`/produto/${item.id}`} className="hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <div className="text-on-surface-variant font-medium">{formatPrice(item.price)}</div>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2 flex justify-start md:justify-center items-center">
                      <div className="flex items-center border border-outline rounded-full bg-surface">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none"
                          aria-label="Diminuir quantidade"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="w-10 text-center font-medium text-on-surface text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none"
                          aria-label="Aumentar quantidade"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-3 flex justify-between md:justify-end items-center">
                      <span className="md:hidden text-sm text-on-surface-variant">Subtotal:</span>
                      <span className="font-bold text-primary text-lg">{formatPrice(item.price * item.quantity)}</span>
                    </div>

                    {/* Remove */}
                    <div className="col-span-1 flex justify-end">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-outline hover:text-error transition-colors p-2 rounded-full hover:bg-error-container focus:outline-none"
                        aria-label="Remover item"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-surface rounded-3xl shadow-sm border border-surface-variant p-8 sticky top-28">
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Resumo da Encomenda</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal ({items.length} itens)</span>
                  <span className="font-medium text-on-surface">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Entrega</span>
                  <span className="text-primary font-medium text-sm">A combinar</span>
                </div>
                <div className="border-t border-surface-variant pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-on-surface">Total</span>
                    <span className="text-2xl font-bold text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-2 text-right">Taxas incluídas</p>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-primary text-on-primary py-4 px-6 rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center justify-center shadow-sm mb-4"
              >
                <span className="material-symbols-outlined mr-2">send</span>
                Encomendar via WhatsApp
              </button>
              
              <Link 
                to="/loja" 
                className="w-full bg-surface-container text-on-surface py-4 px-6 rounded-full font-medium hover:bg-surface-variant transition-colors flex items-center justify-center border border-surface-variant"
              >
                Continuar a Comprar
              </Link>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-surface-variant">
                <div className="flex items-center justify-center space-x-6 text-on-surface-variant">
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-primary mb-1">lock</span>
                    <span className="text-xs text-center">Pagamento<br/>Seguro</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-primary mb-1">local_shipping</span>
                    <span className="text-xs text-center">Entrega<br/>Rápida</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-primary mb-1">support_agent</span>
                    <span className="text-xs text-center">Suporte<br/>Dedicado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
