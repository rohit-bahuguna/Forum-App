import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BiComment, BiBookmark } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import PostCard from './PostCard';
import Layout from '../Layout';
import { forumData } from '../../utils/forumData';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostData } from '../../context/dataContext';
const PostDetails = () => {
    const { id } = useParams();
    const [post , setPost] = useState()
    const navigate = useNavigate()
  	const { data, markBookmark  ,  updateVote } = usePostData();

    useEffect(() => {
          let newpost = data.posts.reduce(
        (acc, curr) => (curr.postId === id ? curr : acc),
        {}
          );
        setPost(newpost)
    },[data])


    return (
        <Layout>
            <div className='mt-5 flex justify-center w-[85vw] '>
                 <div className='bg-white'>
                <h1 className='px-5 py-2 '>
                        <BiArrowBack className='text-3xl mr-10 inline ' onClick={() => navigate(-1)} /> <span className='text-xl font-semibold'> 
                            Post
                    </span>
                </h1>
               {post &&  <PostCard posts={post} updateVote={updateVote} 						markBookmark={markBookmark}
 />}
                <div className='mt-5 p-3 w-[50vw]  '>
                    {
                        post?.comments && post.comments.map(({ commentId,
                            username,
                            picUrl,
                            name,
                            likes,
                            comment,
                            createdAt }) => <div key={commentId} className='flex gap-3 '>
                                <img src={picUrl} className='w-10 h-10' />     <div className='w-[40vw]'>
                                    <p><span className='text-black font-semibold'>{name}</span> <span className='text-gray-400'>@{username} .1m</span></p>
                                    <p>
                                        Relpying to <span className='text-indigo-500'>@{post.username}</span>
                                    </p>
                                    <p>{comment}</p>
                                     <div className='mt-2 flex justify-between'>
                                        <p><MdFavorite className='text-2xl inline mr-2'/> {likes} </p>
                                        <BiComment className='text-2xl' />
                                        <BiBookmark className='text-2xl'/>
                                </div>
                                </div>
                               

                            </div>)
                    }
                </div>
            </div>
           </div>
        </Layout>
    );
};

export default PostDetails;
