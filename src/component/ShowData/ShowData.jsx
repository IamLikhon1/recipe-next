import { useQuery } from "@tanstack/react-query";
import DeleteData from "./DeleteData/DeleteData";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import TopLoaderShow from "../TopLoaderShow/TopLoaderShow";

const ShowData = () => {
    const [progress, setProgress] = useState(0)
     const { isLoading, data, refetch } = useQuery({
        queryKey: ['getRecipeData'],
        queryFn: () =>
          fetch(`https://recipe-server-production.up.railway.app/getRecipe?search`).then((res) =>
            res.json()
          ),
      })
      if (isLoading) return <div className="text-center text-xl font-bold">Loading...</div>
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl my-16 font-bold text-center">Our Total Recipe: {data?.length}</h2>
            <SearchBar />
            <div className="grid lg:grid-cols-3 gap-7 mx-2 mt-14 mb-20">
                {
                    data?.map(item => (
                        <div key={item._id}>

                            <div className="border-2 py-10 px-3 rounded-md text-center">
                                <h2 className="text-2xl font-semibold">{item.name}</h2>
                                {/* TopShowLoader */}
                                <TopLoaderShow progress={progress}setProgress={setProgress}/>
                                {/* view more button */}
                               <Link to={`/single/${item._id}`}> <button onClick={() => setProgress(100)} className="w-full py-3 hover:text-black font-semibold bg-[#07332F] border-2 border-[#07332F] mt-7 rounded-md hover:bg-transparent text-white duration-500">View More</button></Link>

                                {/* delete button */}
                               <DeleteData item={item} refetch={refetch}/>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ShowData;