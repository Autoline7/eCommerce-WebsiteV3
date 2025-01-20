import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/AppContext';
import EmptyCartImg from "../../assets/empty-cart.svg"

const Cart = ({cartOpen, setCarOpen}) => {
    const {cart, addToCart, reduceCartQuantity, removeItem, total} = useContext(AppContext);

    function Subtotal(){
        let totalPrice = 0;
        cart.forEach((item) =>{
            totalPrice += (item.price * item.quantity);
        });
        return totalPrice;
    }

    return (
        <div className={`cart__wrapper ${cartOpen && "cart-open"}`}>
                <nav className="cart">
                    <div className="cart__header">
                        <h3 className="cart__header__title">Your Shopping Cart</h3>
                        <button onClick={() => setCarOpen(false)} className="cart__header__close">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="cart__items">
                        {
                            cart.length > 0 ?
                            cart.map(item => <div key={item.id} className="cart__item">
                                <div className="cart__item__left">
                                    <img src={`https://ecommerce-samurai.up.railway.app/${item.images[0]}`} alt="" className="cart__item__img" />
                                </div>
                                <div className="cart__item__mid">
                                    <h4 className="cart__item__title">
                                        {item.name}
                                    </h4>
                                    <span className="cart__item__price">${item.price * item.quantity}</span>
                                    <div className="cart__item__quantity">
                                        <button onClick={() => reduceCartQuantity(item)} className="cart__item__quantity__btn">
                                            -
                                        </button>
                                        <span className="cart__item__quantity__amount">{item.quantity}</span>
                                        <button onClick={() => addToCart(item, 1)} className="cart__item__quantity__btn">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <FontAwesomeIcon onClick={() => removeItem(item)} icon={faTimes} className='cart__item__remove' />
                            </div>)
                            :
                            <div className='cart__empty'>
                                <img src={EmptyCartImg} alt="" className="cart__empty__img" />
                                <span className="cart__empty__text">Your Cart is Empty!</span>
                                <button className="cart__empty__btn" onClick={
                                    () => setCarOpen(false)
                                }>Keep Browsing</button>
                            </div>
                        }
                        
                    </div>
                    <div className="cart__footer">
                        <div className="cart__footer__details">
                            <h4 className="cart__footer__title">Subtotal</h4>
                            <span className="cart__footer__subtotal">${Subtotal()}</span>
                        </div>
                        <button className="cart__footer__btn" onClick={
                            () => alert("Haven't implemented this feature yet!")
                        }>Go to checkout</button>
                    </div>
                </nav>
            </div>
    );
}

export default Cart;
