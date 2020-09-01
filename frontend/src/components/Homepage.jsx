import React, { useState } from 'react';
import Product from './partial/Product';

function Homepage() {
	const [openCategory, setOpenCategory] = useState(false);

	return (
		<div className="products-main-container">
			<div className="search-filters">
				<div className="search">
					<input type="text" placeholder="Search" />
					<button className="btn-primary">SEARCH</button>
				</div>
				<div className="filters">
					<span className="price-filters">
						<span>
							<p>From:</p>
							<input type="text" placeholder="$$$" />
						</span>
						<span>
							<p>To:</p>
							<input type="text" placeholder="$$$" />
						</span>
					</span>
					<span
						className="category-dropdown"
						onClick={() => setOpenCategory(prev => !prev)}>
						<button className="btn-category">Running</button>
						<ul className={openCategory ? '' : 'hidden'}>
							<li>All Categories</li>
							<li>Running</li>
							<li>Lifestyle</li>
							<li>Basketball</li>
						</ul>
					</span>
				</div>
			</div>

			<div className="products">
				<Product isAdmin={true} canEdit={true} />
				<Product isAdmin={true} canEdit={false} />
				<Product isAdmin={false} canEdit={false} />
				<Product isAdmin={false} canEdit={false} />
				<Product isAdmin={false} canEdit={false} />
				<Product isAdmin={false} canEdit={false} />
			</div>

			<div className="page-selection">
				<a className="prev-page" href="">
					Previous
				</a>
				<ul>
					<li>
						<a>1</a>
					</li>
					<li className="active-page">
						<a>2</a>
					</li>
					<li>
						<a>3</a>
					</li>
				</ul>
				<a className="next-page" href="">
					Next
				</a>
			</div>
		</div>
	);
}

export default Homepage;