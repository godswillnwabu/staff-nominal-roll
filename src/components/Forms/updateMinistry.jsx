import { useState } from "react";
import { useUpdateMinistry } from "../../hooks/useMinistries";

function UpdateMinistry() {

    const { mutate, isPending, isError, error, isSuccess } = useUpdateMinistry();
    const [id, setId] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ id, data: { name } });
    }

    return (
        <div className="w-full ">
            <form onSubmit={handleSubmit}>
                <div className="py-6 space-y-4">
                    <input
                        type="number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Ministry ID"
                        className="no-spinner w-full border border-gray-300 rounded-xl p-2 outline-none"
                        required
                    />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ministry Name"
                        className="w-full border border-gray-300 rounded-xl p-2 outline-none"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit" 
                        className="py-2 px-6 bg-[#091022]/60 rounded-xl text-white text-center cursor-pointer hover:bg-[#091022]/90 transition"
                    >
                        {isPending ? "Updating..." : "Update"}
                    </button>
                </div>
                {isError && (
                    <p className="text-red-600 text-sm mt-1">
                        {error?.response?.data?.detail || "Something went wrong"}
                    </p>
                )}
                {isSuccess && <p className="text-green-600 text-sm">Updated Successfully</p>}
            </form>
        </div>
    )
}

export default UpdateMinistry;