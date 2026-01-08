import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, getPost, updatePost } from "../API/PostAPI";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
import { useState } from "react";


const Post = () => {

    const [pageNumber, setPageNumber] = useState(0)
    const queryClient = useQueryClient()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['posts', pageNumber],
        queryFn: () => getPost(pageNumber),

        // gcTime:2000 //garbage collection time
        // staleTime:20000
        // refetchInterval: 1000,
        // refetchIntervalInBackground: true
        placeholderData: keepPreviousData //help to load data in ui (first load data and then show on UI)
    })


    const handleDeletePost = useMutation({
        mutationFn: (id) => deletePost(id),
        onSuccess: (data, id) => {
            console.log(data, id);

            queryClient.setQueryData(['posts', pageNumber], (postData) => {
                return postData.filter((post) => post.id !== id)
            })

        }
    })


    const handleUpdatePost = useMutation({
        mutationFn: (id) => updatePost(id),
        onSuccess: (ApiData, postID) => {
            // console.log(ApiData, postID);  
            queryClient.setQueryData(['posts', pageNumber], (postData) => {
                return postData.map((currPost) => currPost.id === postID ? {...currPost, title:ApiData.data.title} : currPost)
            })

        }
    })


    const handleCreatePost = useMutation({
        mutationFn: createPost,
        onSuccess: (ApiData, postID) => {
            // console.log(ApiData, postID);  
            queryClient.setQueryData(['posts', pageNumber], (postData) => {
                return [...postData, ApiData.data]
            })

        }
    })


    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <div className="w-full h-lvh flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold font-serif text-center text-green-900">{`OOPs!  Something went wrong!... ${error}`}</h1>
        </div>
    }

    return (
        <div className="w-full h-auto flex justify-center items-center mt-10">
            <div>
                <ul className="grid grid-cols-3 gap-10 space-y-8">
                    {
                        data?.map((currPost) => {
                            return (
                                <li className="w-[20vw] h-[70vh] flex flex-col gap-4 border-t-6 border-b-4 border-green-800 shadow-2xl p-4 text-green-950 rounded-2xl" key={currPost.id}>
                                    <p className="font-bold text-xl">{currPost.id}</p>
                                    <p className="font-bold text-xl">{currPost.title}</p>
                                    <p className="font-serif">{currPost.body}</p>

                                    <div className="flex flex-row justify-center items-center">
                                        <div className="flex flex-row gap-2 font-serif">

                                            <NavLink to={`/post/${currPost.id}`}>
                                                <button
                                                    className="p-1 mt-2 cursor-pointer bg-green-900 text-white  rounded-[2px]"
                                                // onClick={handleSeeMoreBTN}
                                                >More</button>
                                            </NavLink>
                                            <button
                                                className="p-1 mt-2 cursor-pointer bg-green-900 text-white rounded-[2px]"
                                                onClick={() => handleDeletePost.mutate(currPost.id)}
                                            >Delete</button>
                                            <button
                                                className="p-1 mt-2 cursor-pointer bg-green-900 text-white  rounded-[2px]"
                                                onClick={() => handleUpdatePost.mutate(currPost.id)}
                                            >Update</button>
                                            <button
                                                className="p-1 mt-2 cursor-pointer bg-green-900 text-white  rounded-[2px]"
                                                onClick={() => handleCreatePost.mutate()}
                                            >Create</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex flex-row justify-center items-center gap-7 mb-5">
                    <button
                        className="p-1.5 w-[12vw] bg-green-900 text-white font-semibold rounded-[2px] cursor-pointer"
                        disabled={pageNumber === 0 ? true : false}
                        onClick={() => setPageNumber((pre) => pre - 3)}
                    >Previous</button>
                    <p className="text-green-900 font-bold text-xl">{(pageNumber / 3) + 1}</p>
                    <button
                        className="p-1.5 w-[12vw] bg-green-900 text-white font-semibold rounded-[2px] cursor-pointer"
                        onClick={() => setPageNumber((pre) => pre + 3)}
                    >Next</button>
                </div>
            </div>
        </div>
    );
}
export default Post;
