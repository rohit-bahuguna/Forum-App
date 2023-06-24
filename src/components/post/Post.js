import React, { useState } from 'react';
import { forumData } from '../../utils/forumData';
import PostCard from './PostCard';
const Post = () => {
	const [data, setData] = useState(forumData);
	console.log(forumData);
	return (
		<div className="flex flex-col gap-5">
			{data && data.posts.map(post => <PostCard posts={post} />)}
		</div>
	);
};

export default Post;
