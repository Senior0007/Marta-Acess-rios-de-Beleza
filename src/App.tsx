/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Loja } from './pages/Loja';
import { Produto } from './pages/Produto';
import { Carrinho } from './pages/Carrinho';
import { Entrega } from './pages/Entrega';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="loja" element={<Loja />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="carrinho" element={<Carrinho />} />
            <Route path="entrega" element={<Entrega />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}
