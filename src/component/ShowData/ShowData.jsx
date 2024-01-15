import { useQuery } from "@tanstack/react-query";
import DeleteData from "./DeleteData/DeleteData";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const ShowData = () => {
     const { isLoading, data, refetch } = useQuery({
        queryKey: ['getRecipeData'],
        queryFn: () =>
          fetch(`http://localhost:5000/getRecipe?search`).then((res) =>
            res.json()
          ),
      })
      if (isLoading) return <div className="text-center text-xl font-bold">Loading...</div>
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl my-16 font-semibold text-center">Our Total Recipe: {data?.length}</h2>
            <SearchBar />
            <div className="grid lg:grid-cols-3 gap-7 mx-2 mt-14 mb-20">
                {
                    data?.map(item => (
                        <div key={item._id}>

                            <div className="border-2 py-10 px-3 rounded-md text-center">
                                <h2 className="text-2xl font-semibold">{item.name}</h2>
                                {/* view more button */}
                               <Link to={`/single/${item._id}`}> <button className="w-full py-3 hover:text-black font-semibold bg-blue-500 border-2 border-blue-500 mt-7 rounded-md hover:bg-transparent text-white duration-500">View More</button></Link>

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