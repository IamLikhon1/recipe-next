import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const FormPage = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const ingredients = data.ingredients;
        const instruction = data.instruction;
        const allData = { name, ingredients, instruction };

        fetch('http://localhost:5000/postRecipe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Your Recipe post  successfully Please Reload the page')
                }
            })
        reset()

    }
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-center font-bold mt-20">Recipe App</h2>

            <div className="flex justify-center mt-10">
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[45%] w-full mx-2 border-2 py-8 px-5 rounded-md shadow-md">
                    {/* title */}
                    <span className="my-4 font-semibold">Recipe Title*</span> <br />
                    <input type="text" name='name' {...register("name", { required: true })} className="w-full lg:w-[90%] py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Recipe Name" required /> <br />

                    {/* ingredients  */}
                    <span className="my-4 font-semibold">Recipe Ingredients *</span> <br />
                    <input type="text" name='ingredients' {...register("ingredients", { required: true })} className="w-full lg:w-[90%] py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Recipe Ingredients " required /> <br />

                    {/* instruction   */}
                    <span className="my-4 font-semibold">Recipe Instruction  *</span> <br />
                    <textarea type="text" name='instruction' {...register("instruction", { required: true })} className="w-full lg:w-[90%] py-6 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Recipe Instruction  " required />
                    {/* button */}
                    <div className="flex justify-center">
                        <input type="submit" value='SUBMIT' name='ingredients ' className="w-full lg:w-[90%] py-4 px-3 font-semibold border-2 bg-blue-400 text-white rounded-lg  mt-3 cursor-pointer" placeholder="Recipe Ingredients " required />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPage;