import React from 'react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Home from './Home';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<div className="flex w-[100vw]">
				<Sidebar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
