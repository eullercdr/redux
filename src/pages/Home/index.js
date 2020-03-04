import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-18/3420_trio7.jpg"
          alt=""
        />
        <strong>Tenis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-18/3420_trio7.jpg"
          alt=""
        />
        <strong>Tenis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-18/3420_trio7.jpg"
          alt=""
        />
        <strong>Tenis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-18/3420_trio7.jpg"
          alt=""
        />
        <strong>Tenis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-18/3420_trio7.jpg"
          alt=""
        />
        <strong>Tenis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/bnn/l_netshoes/2020-02-18/3420_trio7.jpg"
          alt=""
        />
        <strong>Tenis muito legal</strong>
        <span>R$129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
