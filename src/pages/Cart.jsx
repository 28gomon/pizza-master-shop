import React, { useEffect } from 'react';
import { Button } from '../exp-components';

const Cart = () => {

	useEffect(() => {
		document.title = 'Оформление заказа';
	});

	return (
		<div className={'cart'}>

			<div className={'cart__top'}>
				<h2><i className="fa fa-shopping-cart" />Ваш заказ</h2>
				<button><i className="fa fa-trash-o" /> Удалить заказ</button>
			</div>

			<div className={ 'cart__items' }>

				<div className={ 'cart__item' }>
					<div className={'cart__item-img'}>
						<img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="Name"/>
					</div>
					<div className={'cart__item-info'}>
						<h3>Сырный цыпленок</h3>
						<p>тонкое тесто, 26 см.</p>
					</div>
					<div className={'cart__item-count'}>
						<button><i className="fa fa-minus" /></button>
						<span>2</span>
						<button><i className="fa fa-plus" /></button>
					</div>
					<div className={'cart__item-price'}>
						<span>45 BYN</span>
					</div>
					<div className={'cart__item-remove'}>
						<button><i className="fa fa-times"/></button>
					</div>
				</div>

				<div className={ 'cart__item' }>
					<div className={'cart__item-img'}>
						<img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="Name"/>
					</div>
					<div className={'cart__item-info'}>
						<h3>Сырный цыпленок</h3>
						<p>тонкое тесто, 26 см.</p>
					</div>
					<div className={'cart__item-count'}>
						<button><i className="fa fa-minus" /></button>
						<span>2</span>
						<button><i className="fa fa-plus" /></button>
					</div>
					<div className={'cart__item-price'}>
						<span>45 BYN</span>
					</div>
					<div className={'cart__item-remove'}>
						<button><i className="fa fa-times"/></button>
					</div>
				</div>

				<div className={ 'cart__item' }>
					<div className={'cart__item-img'}>
						<img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="Name"/>
					</div>
					<div className={'cart__item-info'}>
						<h3>Сырный цыпленок</h3>
						<p>тонкое тесто, 26 см.</p>
					</div>
					<div className={'cart__item-count'}>
						<button><i className="fa fa-minus" /></button>
						<span>2</span>
						<button><i className="fa fa-plus" /></button>
					</div>
					<div className={'cart__item-price'}>
						<span>45 BYN</span>
					</div>
					<div className={'cart__item-remove'}>
						<button><i className="fa fa-times"/></button>
					</div>
				</div>

			</div>

			<div className={'cart__bottom-block'}>
				<div className={'detail-order'}>
					<span>Всего пицц: <b>3 шт.</b></span>
					<span>Сумма заказа: <b>100 BYN</b></span>
				</div>

				<div className={'buttons'}>
					<Button><i className="fa fa-angle-left"/> Вернуться назад</Button>
					<Button>Оплатить</Button>
				</div>
			</div>

		</div>
	)
};

export default Cart;