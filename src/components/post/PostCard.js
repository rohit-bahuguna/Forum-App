import React from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
const PostCard = ({ posts }) => {
	const {
		username,
		postId,
		name,
		picUrl,
		post,
		postDescription,
		upvotes,
		downVotes,
		tags,
		createdAt
	} = posts;
	return (
		<div className="flex gap-5 shadow  w-[50vw] bg-white rounded-md p-3">
			<div>
				<AiFillCaretUp className="text-indigo-700 text-5xl" />
				<p className="text-indigo-700 text-center text-xl">
					{upvotes}
				</p>
				<AiFillCaretDown className=" text-5xl" />
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-3">
					<img src={picUrl} alt={name} className="w-10" />
					<p className="text-gray-500">
						Poasted by <span className="text-indigo-500">@{username}</span> . 1m
					</p>
				</div>
				<h1 className="text-3xl font-bold">
					{post}
				</h1>
				<div className="flex gap-3">
					{tags.map(tag =>
						<span className="text-indigo-700 font-bold bg-indigo-100 px-2 rounded-xl">
							{tag.toUpperCase()}
						</span>
					)}
				</div>
				<p className="text-xl">
					{postDescription}
				</p>
			</div>
		</div>
	);
};

export default PostCard;
