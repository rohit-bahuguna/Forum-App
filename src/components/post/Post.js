import React, { createContext, useContext, useState } from 'react';
import { forumData } from '../../utils/forumData';
import PostCard from './PostCard';
import { usePostData } from '../../context/dataContext';
const Post = () => {
	const { data, updateVote, markBookmark } = usePostData();
	return (
		<div className="flex flex-col gap-5">
			{data &&
				data.posts.map(post =>
					<PostCard
						key={post.postId}
						posts={post}
						updateVote={updateVote}
						markBookmark={markBookmark}
					/>
				)}
		</div>
	);
};

export default Post;
