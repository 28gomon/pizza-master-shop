import React from 'react';
import './scss/app.scss';

import { Categories, Header, Sort, } from './components/exp-components';

const App = () => {
	return (
		<div className={ 'app' }>

			<div className={ 'wrapper' }>

				<div className={ 'content' }>

					<Header/>

					<div className={ 'top-bar' }>

						<Categories
							onClickItem={(name) => console.log(name)}
							items={ [
								'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',
							] }
						/>

						<Sort
							items={['популярности', 'цене', 'алфавиту']}
						/>

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
							<h4 className={ 'product__name' }>Чизбургер-пицца</h4>
							<div className={ 'product__selectors' }>
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
								<div className={ 'btn-add-to-cart' }>
									<button>
										<i className="fa fa-plus"/>
										<span className={ 'btn-title' }>Добавить</span>
										<span className={ 'btn-count' }>2</span>
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
							<h4 className={ 'product__name' }>Чизбургер-пицца</h4>
							<div className={ 'product__selectors' }>
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
								<div className={ 'btn-add-to-cart' }>
									<button>
										<i className="fa fa-plus"/>
										<span className={ 'btn-title' }>Добавить</span>
										<span className={ 'btn-count' }>2</span>
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
							<h4 className={ 'product__name' }>Чизбургер-пицца</h4>
							<div className={ 'product__selectors' }>
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
								<div className={ 'btn-add-to-cart' }>
									<button>
										<i className="fa fa-plus"/>
										<span className={ 'btn-title' }>Добавить</span>
										<span className={ 'btn-count' }>2</span>
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
							<h4 className={ 'product__name' }>Чизбургер-пицца</h4>
							<div className={ 'product__selectors' }>
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
								<div className={ 'btn-add-to-cart' }>
									<button>
										<i className="fa fa-plus"/>
										<span className={ 'btn-title' }>Добавить</span>
										<span className={ 'btn-count' }>2</span>
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
							<h4 className={ 'product__name' }>Чизбургер-пицца</h4>
							<div className={ 'product__selectors' }>
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
								<div className={ 'btn-add-to-cart' }>
									<button>
										<i className="fa fa-plus"/>
										<span className={ 'btn-title' }>Добавить</span>
										<span className={ 'btn-count' }>2</span>
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
							<h4 className={ 'product__name' }>Чизбургер-пицца</h4>
							<div className={ 'product__selectors' }>
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
								<div className={ 'btn-add-to-cart' }>
									<button>
										<i className="fa fa-plus"/>
										<span className={ 'btn-title' }>Добавить</span>
										<span className={ 'btn-count' }>2</span>
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
							<h4 className={ 'product__name' }>Чизбургер-пицца</h4>
							<div className={ 'product__selectors' }>
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
								<div className={ 'btn-add-to-cart' }>
									<button>
										<i className="fa fa-plus"/>
										<span className={ 'btn-title' }>Добавить</span>
										<span className={ 'btn-count' }>2</span>
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
							<h4 className={ 'product__name' }>Чизбургер-пицца</h4>
							<div className={ 'product__selectors' }>
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
								<div className={ 'btn-add-to-cart' }>
									<button>
										<i className="fa fa-plus"/>
										<span className={ 'btn-title' }>Добавить</span>
										<span className={ 'btn-count' }>2</span>
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
							<h4 className={ 'product__name' }>Чизбургер-пицца</h4>
							<div className={ 'product__selectors' }>
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
								<div className={ 'btn-add-to-cart' }>
									<button>
										<i className="fa fa-plus"/>
										<span className={ 'btn-title' }>Добавить</span>
										<span className={ 'btn-count' }>2</span>
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
