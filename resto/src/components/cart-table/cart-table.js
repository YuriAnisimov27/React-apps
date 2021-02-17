import React from 'react';
import {connect} from 'react-redux';
import './cart-table.scss';
import {removeFromCart} from '../../actions';

const CartTable = ({items, removeFromCart}) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {
          items.map(item => {
            const {title, price, id, url} = item;
            return (
              <div className="cart__item" key={id}>
                <img src={url} className='cart__item-img' alt={title}/>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{price}$</div>
                <div className="cart__close" onClick={() => removeFromCart(id)}>&times;</div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

const mapStateToProps = ({items}) => {
  return {
    items
  };
};

const mapDispatchToProps = {
  removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
