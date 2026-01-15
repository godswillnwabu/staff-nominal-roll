import { useState } from "react";
import { useCreateMinistry } from "../../hooks/useMinistries";


function CreateMinistry() {

    const { mutate, isPending, isError, error, isSuccess } = useCreateMinistry();
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ name });
    };


    return (
        <div className="w-full ">
            <form onSubmit={handleSubmit}>
                <div className="py-6">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ministry Name"
                        className="w-full border border-gray-300 rounded-xl p-2 outline-none"
                        required
                    />
                    {isError && (
                        <p className="text-red-600 text-sm mt-1">
                            {error?.response?.data?.detail || "Something went wrong"}
                        </p>
                    )}
                </div>
                <div className="flex justify-end">
                    <button
                        className="py-2 px-6 bg-[#091022]/60 rounded-xl text-white text-center cursor-pointer hover:bg-[#091022]/90 transition"
                        type="submit"
                    >
                        {isPending ? "Creating..." : "Create"}
                    </button>
                </div>

                {isError && <p className="text-red-600 text-sm">{error.message}</p>}
                {isSuccess && <p className="text-green-600 text-sm">Created Successfully</p>}
            </form>
        </div>
    )
}

export default CreateMinistry;