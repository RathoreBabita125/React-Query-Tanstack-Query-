import { NavLink, useParams } from "react-router-dom";
import { getIndividualPost } from "../API/PostAPI";
import { useQuery } from "@tanstack/react-query";

const IndvidualPost = () => {

    const { id } = useParams()
    // console.log(id);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['post', id],
        queryFn: () => getIndividualPost(id),
    })
    // console.log(data);


    if (isLoading) {
        return <div className="w-full h-lvh flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold font-serif text-center text-green-900">Post is being Loaded.....</h1>
        </div>
    }

     if (isError) {
        return <div className="w-full h-lvh flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold font-serif text-center text-green-900">{`OOPs!  Something went wrong!... ${error}`}</h1>
        </div>
    }

    return (
        <div className="w-full h-auto flex justify-center items-center">
            <div className="w-[60vw] h-[70vh] rounded-2xl mt-15 flex flex-col gap-5">
                <h1 className="text-4xl font-bold font-serif">Individual Post with ID: {data.id}</h1>
                {/* <p className="font-bold text-xl">{data.id}</p> */}
                <p className="font-bold text-xl mt-3">{data.title}</p>
                <p className="font-serif">{data.body}</p>
                <NavLink to='/post'>
                    <button
                        className="p-2 w-[8vw] mt-2 cursor-pointer bg-green-900 text-white font-semibold rounded-xl"
                    >Take Back</button>
                </NavLink>
            </div>
        </div>
    );
}

export default IndvidualPost;













