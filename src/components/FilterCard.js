import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai';

const FilterCard = () => {
	return (
		<div>
			<h1 className="text-xl font-bold">Sort By</h1>
			<select className="w-[15vw] bg-gray-300  h-[5vh] text-lg px-2 ">
				<option className="text-lg" value="Latest Posts">
					Latest Posts
				</option>
				<option className="text-lg" value="upvoted">
					{' '}Most UpVoted
				</option>
			</select>
		</div>
	);
};

export default FilterCard;
