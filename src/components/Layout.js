import React from 'react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Home from './Home';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<div className="flex  bg-[#f6f6f6]">
				<Sidebar />

				{children}
			</div>
		</div>
	);
};

export default Layout;
