import React from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { BiBookmark, BiComment } from 'react-icons/bi';
import { BsFillBookmarkFill, BsShareFill } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const PostCard = ({ posts, updateVote, markBookmark }) => {
	const navigate = useNavigate();
	const {
		username,
		postId,
		name,
		picUrl,
		post,
		postDescription,
		upvotes,
		downvotes,
		isBookmarked,
		tags,
		createdAt
	} = posts;
	return (
		<div className="bg-white ">
			<div className="flex gap-5   w-[50vw] bg-white rounded-md p-3">
				<div>
					<AiFillCaretUp
						className="text-indigo-700 text-5xl"
						onClick={() => updateVote('up', postId)}
					/>
					<p className="text-indigo-700 text-center text-xl">
						{downvotes > upvotes ? upvotes - downvotes : upvotes}
					</p>
					<AiFillCaretDown
						onClick={() => updateVote('down', postId)}
						className=" text-5xl"
					/>
				</div>
				<div
					className="flex flex-col gap-4"
					onClick={() => navigate(`/post/${postId}`)}>
					<div className="flex items-center gap-3">
						<img src={picUrl} alt={name} className="w-10" />
						<p className="text-gray-500">
							Poasted by <span className="text-indigo-500">@{username}</span> .
							1m
						</p>
					</div>
					<h1 className="text-3xl font-bold">
						{post}
					</h1>
					<div className="flex gap-3">
						{tags &&
							tags.map(tag =>
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
			<div className="flex px-10 py-5 justify-between">
				<BsShareFill className="text-2xl " />

				<BiComment
					className="text-2xl"
					onClick={() => navigate(`/post/${postId}`)}
				/>
				<BsFillBookmarkFill
					className={`text-2xl ${isBookmarked
						? `text-black`
						: 'text-gray-400'}`}
					onClick={() => markBookmark(postId, isBookmarked)}
				/>
			</div>
		</div>
	);
};

export default PostCard;
