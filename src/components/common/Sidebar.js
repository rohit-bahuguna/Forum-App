import React from 'react';
import { MdOutlineExplore } from 'react-icons/md';

import { BsBookmark } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { FaHome, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
	return (
		<div className="w-[15vw] h-[88vh] border-r-2 flex flex-col items-center">
			<div className="flex flex-col gap-5 mt-5 ">
				<NavLink className="flex items-center gap-2">
					<FaHome className="text-2xl" /> <span className="text-lg">Home</span>
				</NavLink>
				<NavLink className="flex items-center gap-2">
					<MdOutlineExplore className="text-2xl" />
					<span className="text-lg">Explore</span>
				</NavLink>
				<NavLink className="flex items-center gap-2">
					<BsBookmark className="text-2xl" />
					<span className="text-lg">Bookmarks</span>
				</NavLink>
				<NavLink className="flex items-center gap-2">
					<BiUserCircle className="text-2xl" />
					<span className="text-lg">Profile</span>
				</NavLink>
			</div>
		</div>
	);
};

export default Sidebar;
