import toast from "react-hot-toast";

const DeleteData = ({ item, refetch }) => {
    const { _id } = item
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteRecipe/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Recipe has been deleted')
                }
                refetch()
            })


    }
    return (
        <div>
            <button onClick={() => handleDelete(_id)} className="w-full mt-4  py-3 rounded-md border-2 border-red-400 text-black hover:bg-red-500 hover:text-white font-semibold duration-500 ">Delete The Recipe</button>
        </div>
    );
};

export default DeleteData;