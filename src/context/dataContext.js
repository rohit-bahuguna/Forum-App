import { createContext, useContext, useState } from 'react';
import { forumData } from '../utils/forumData';

const PostContext = createContext();

const PostProvider = ({ children }) => {
	const [data, setData] = useState(forumData);

	const updateVote = (type, id) => {
		if (type === 'up') {
			const updatedPost = data.posts.map(post => {
				return post.postId === id
					? { ...post, upvotes: post.upvotes + 1 }
					: post;
			});
			setData({ ...data, posts: updatedPost });
		} else {
			const updatedPost = data.posts.map(post => {
				return post.postId === id
					? { ...post, upvotes: post.upvotes - 1 }
					: post;
			});
			setData({ ...data, posts: updatedPost });
		}
	};

	const markBookmark = (id, value) => {
		const updatedPosts = data.posts.map(post => {
			return post.postId === id ? { ...post, isBookmarked: !value } : post;
		});

		setData({ ...data, posts: updatedPosts });
	};

	const updateSinglePostVote = (type, id) => {
		// if (type === 'up') {
		// 	setPost({ ...post, upvotes: post.upvotes + 1 });
		// } else {
		// 	setPost({ ...post, upvotes: post.upvotes - 1 });
		// }
	};

	const sortByVotes = () => {};

	return (
		<PostContext.Provider
			value={{ data, setData, updateVote, markBookmark, updateSinglePostVote }}>
			{children}
		</PostContext.Provider>
	);
};

const usePostData = () => useContext(PostContext);

export { usePostData, PostProvider };
