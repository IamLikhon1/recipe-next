import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ShowModal = ({ loader }) => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const navigate = useNavigate()
    const { _id } = loader
    const onSubmit = (data) => {
        const name = data.name;
        const ingredients = data.ingredients;
        const instruction = data.instruction;
        const allData = { name, ingredients, instruction };
        fetch(`http://localhost:5000/updateRecipe/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Your Recipe Updated')
                    navigate(`/single/${_id}`)
                }
            })
        reset()

    }
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box text-center">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <Toaster />
                <h2 className="text-xl text-[#07332F] my-3 font-semibold">Update Your Recipe</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* recipe  name */}

                    <input {...register("name", { required: true })} type="text" name="name" className="mt-5 lg:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Recipe Name"
                    />

                    <br />

                    {/* recipe ingredients */}

                    <input {...register("ingredients", { required: true })} type="text" name="ingredients" className="mt-2 lg:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Ingredients Name"
                    />

                    <br />

                    {/* instruction */}

                    <textarea {...register("instruction", { required: true })} type="text" name="instruction" className="mt-2 lg:ml-1 mb-5 w-full px-5 py-7 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder=" Recipe Instruction"
                    />

                    <br />


                    {/* button */}
                    <div>
                        <input type="submit" value='Update' className="mt-8 w-full  px-5 py-3 rounded-md border-2 bg-[#07332F] text-white cursor-pointer font-medium" />
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default ShowModal;