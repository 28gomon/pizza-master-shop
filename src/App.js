import React from 'react';
import './scss/app.scss';

import logo from './assets/image/logo.png';

const App = () => {
	return (
		<div className={ 'app' }>

			<div className={ 'wrapper' }>

				<div className={ 'content' }>

					<header className={ 'header' }>
						<div className={ 'header__logo' }>
							<a href="/">
								<img src={ logo } alt={ 'Logo' }/>
								<p>
									<span>PizzaMaster</span>
									Лучшая пицца твоего города
								</p>
							</a>
						</div>
						<div className={ 'header__cart' }>
							<a href="/cart" className={ 'btn btn-cart' }>
								<span>45 BYN</span>
								<span>2 <i className="fa fa-shopping-cart"/></span>
							</a>
						</div>
					</header>

					<div className={ 'top-bar' }>
						<div className={ 'categories' }>
							<ul>
								<li className="active">Все</li>
								<li>Мясные</li>
								<li>Вегетарианская</li>
								<li>Гриль</li>
								<li>Острые</li>
								<li>Закрытые</li>
							</ul>
						</div>

						<div className={ 'sort' }>
							<div className={ 'sort__label' }>
								<p><i className="fa fa-angle-down"/>Сортировка по:</p>
								<span>популярности</span>
							</div>
							<div className={ 'sort__popup' }>
								<ul>
									<li className={ 'active' }>популярности</li>
									<li>цене</li>
									<li>алфавиту</li>
								</ul>
							</div>
						</div>
					</div>

					<div className={ 'main-title' }>
						<h2>Все пиццы</h2>
					</div>

					<div className={ 'products__items' }>

						<div className={ 'product__item' }>
							<div className={ 'product__img' }>
								<img
									src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
									alt="Product name"/>
							</div>
							<h4 className={'product__name'}>Чизбургер-пицца</h4>
							<div className={'product__selectors'}>
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="product__block-bottom">
								<div className="product__price">32 BYN</div>
								<div className={'btn-add-to-cart'}>
									<button>
										<i className="fa fa-plus"/>
										<span className={'btn-title'}>Добавить</span>
										<span className={'btn-count'}>2</span>
									</button>
								</div>
							</div>
						</div>

						<div className={ 'product__item' }>
							<div className={ 'product__img' }>
								<img
									src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
									alt="Product name"/>
							</div>
							<h4 className={'product__name'}>Чизбургер-пицца</h4>
							<div className={'product__selectors'}>
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="product__block-bottom">
								<div className="product__price">32 BYN</div>
								<div className={'btn-add-to-cart'}>
									<button>
										<i className="fa fa-plus"/>
										<span className={'btn-title'}>Добавить</span>
										<span className={'btn-count'}>2</span>
									</button>
								</div>
							</div>
						</div>

						<div className={ 'product__item' }>
							<div className={ 'product__img' }>
								<img
									src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
									alt="Product name"/>
							</div>
							<h4 className={'product__name'}>Чизбургер-пицца</h4>
							<div className={'product__selectors'}>
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="product__block-bottom">
								<div className="product__price">32 BYN</div>
								<div className={'btn-add-to-cart'}>
									<button>
										<i className="fa fa-plus"/>
										<span className={'btn-title'}>Добавить</span>
										<span className={'btn-count'}>2</span>
									</button>
								</div>
							</div>
						</div>

						<div className={ 'product__item' }>
							<div className={ 'product__img' }>
								<img
									src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
									alt="Product name"/>
							</div>
							<h4 className={'product__name'}>Чизбургер-пицца</h4>
							<div className={'product__selectors'}>
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="product__block-bottom">
								<div className="product__price">32 BYN</div>
								<div className={'btn-add-to-cart'}>
									<button>
										<i className="fa fa-plus"/>
										<span className={'btn-title'}>Добавить</span>
										<span className={'btn-count'}>2</span>
									</button>
								</div>
							</div>
						</div>

						<div className={ 'product__item' }>
							<div className={ 'product__img' }>
								<img
									src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
									alt="Product name"/>
							</div>
							<h4 className={'product__name'}>Чизбургер-пицца</h4>
							<div className={'product__selectors'}>
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="product__block-bottom">
								<div className="product__price">32 BYN</div>
								<div className={'btn-add-to-cart'}>
									<button>
										<i className="fa fa-plus"/>
										<span className={'btn-title'}>Добавить</span>
										<span className={'btn-count'}>2</span>
									</button>
								</div>
							</div>
						</div>

						<div className={ 'product__item' }>
							<div className={ 'product__img' }>
								<img
									src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
									alt="Product name"/>
							</div>
							<h4 className={'product__name'}>Чизбургер-пицца</h4>
							<div className={'product__selectors'}>
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="product__block-bottom">
								<div className="product__price">32 BYN</div>
								<div className={'btn-add-to-cart'}>
									<button>
										<i className="fa fa-plus"/>
										<span className={'btn-title'}>Добавить</span>
										<span className={'btn-count'}>2</span>
									</button>
								</div>
							</div>
						</div>

						<div className={ 'product__item' }>
							<div className={ 'product__img' }>
								<img
									src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
									alt="Product name"/>
							</div>
							<h4 className={'product__name'}>Чизбургер-пицца</h4>
							<div className={'product__selectors'}>
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="product__block-bottom">
								<div className="product__price">32 BYN</div>
								<div className={'btn-add-to-cart'}>
									<button>
										<i className="fa fa-plus"/>
										<span className={'btn-title'}>Добавить</span>
										<span className={'btn-count'}>2</span>
									</button>
								</div>
							</div>
						</div>

						<div className={ 'product__item' }>
							<div className={ 'product__img' }>
								<img
									src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
									alt="Product name"/>
							</div>
							<h4 className={'product__name'}>Чизбургер-пицца</h4>
							<div className={'product__selectors'}>
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="product__block-bottom">
								<div className="product__price">32 BYN</div>
								<div className={'btn-add-to-cart'}>
									<button>
										<i className="fa fa-plus"/>
										<span className={'btn-title'}>Добавить</span>
										<span className={'btn-count'}>2</span>
									</button>
								</div>
							</div>
						</div>

						<div className={ 'product__item' }>
							<div className={ 'product__img' }>
								<img
									src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
									alt="Product name"/>
							</div>
							<h4 className={'product__name'}>Чизбургер-пицца</h4>
							<div className={'product__selectors'}>
								<ul>
									<li className="active">тонкое</li>
									<li>традиционное</li>
								</ul>
								<ul>
									<li className="active">26 см.</li>
									<li>30 см.</li>
									<li>40 см.</li>
								</ul>
							</div>
							<div className="product__block-bottom">
								<div className="product__price">32 BYN</div>
								<div className={'btn-add-to-cart'}>
									<button>
										<i className="fa fa-plus"/>
										<span className={'btn-title'}>Добавить</span>
										<span className={'btn-count'}>2</span>
									</button>
								</div>
							</div>
						</div>

					</div>

				</div>

			</div>

		</div>
	);
}

export default App;
