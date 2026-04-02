import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-high text-on-surface mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex-shrink-0 flex items-center mb-4">
              <span className="font-headline text-2xl font-bold text-primary">Marta</span>
              <span className="font-headline text-2xl text-on-surface ml-1">Acessórios</span>
            </Link>
            <p className="text-on-surface-variant text-sm mb-4">
              A sua loja online de acessórios de beleza em Angola. Elegância e qualidade ao seu alcance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">facebook</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Início</Link></li>
              <li><Link to="/loja" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Loja</Link></li>
              <li><Link to="/entrega" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Informações de Entrega</Link></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><Link to="/loja?category=Colares" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Colares</Link></li>
              <li><Link to="/loja?category=Brincos" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Brincos</Link></li>
              <li><Link to="/loja?category=Pulseiras" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Pulseiras</Link></li>
              <li><Link to="/loja?category=Anéis" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Anéis</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-2 text-xl">location_on</span>
                <span className="text-on-surface-variant text-sm">Luanda, Angola</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-2 text-xl">call</span>
                <span className="text-on-surface-variant text-sm">+244 958 182 232</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-2 text-xl">mail</span>
                <span className="text-on-surface-variant text-sm">contacto@martaacessorios.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-surface-variant mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-on-surface-variant text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Marta Acessórios de Beleza. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-on-surface-variant text-sm">Pagamento Seguro</span>
            <span className="text-on-surface-variant text-sm">Entrega Rápida</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
