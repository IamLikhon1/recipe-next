import { useLoaderData } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import ShowModal from "./ShowModal/ShowModal";
const SingleRecipe = () => {
    const loader = useLoaderData();
    const { name, ingredients, instruction } = loader
    // console.log(loader);
    return (
        <div className="mt-10 flex justify-center text-center mx-2 lg:mx-10 lg:text-start 
        ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold my-10 underline">Full Details About : {name} Recipe</h2>
                <div className="border-2 py-16 px-4 lg:px-28  rounded-md shadow hover:shadow-md cursor-pointer h-fit">

                    {/* Edit icon */}
                    <div onClick={() => document.getElementById('my_modal_3').showModal()} className="relative">
                        <span className="text-4xl absolute right-0 bottom-3 hover:text-blue-600 duration-300 "> <FiEdit /></span>
                    </div>
                    {/* show modal */}

                    <ShowModal loader={loader} />

                    {/* show modal */}

                    {/* Edit icon */}

                    <h2 className="text-xl font-bold mt-10">Recipe Name: {name}</h2>
                    <h4 className="text-lg font-semibold my-7">Recipe Ingredients: {ingredients}</h4>
                    <p className="font-semibold my-7 text-lg">Recipe Instruction : {instruction}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;