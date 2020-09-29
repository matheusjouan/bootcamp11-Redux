import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';

const Cart: React.FC = () => {
  // Podemos passar a tipagem como Generic definito no arquivo criaçao do estado
  // 1º parâmetro: tipagem do state (estado do reducer)
  // 2º parâmetro do Generic: formato do retorno do useSelector()
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
