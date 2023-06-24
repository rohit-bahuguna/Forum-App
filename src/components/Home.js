import React from 'react';
import Layout from './Layout';
import Post from './post/Post';
import FilterCard from './FilterCard';

const Home = () => {
	return (
		<Layout>
			<div className="w-[85vw] flex justify-evenly mt-5">
				<Post />
				<FilterCard />
			</div>
		</Layout>
	);
};

export default Home;
