import { useState } from "react";
import { useDeleteMinistry } from "../../hooks/useMinistries";

function DeleteMinistry() {

    const { mutate, isPending, isError, error, isSuccess } = useDeleteMinistry();
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(id);
    }

    return (
        <div className="w-full" >
            <form onSubmit={handleSubmit}>
                <div className="py-6">
                    <input
                        type="number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter Ministry ID"
                        className="no-spinner w-full border border-gray-300 rounded-xl p-2 outline-none"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button type="submit" disabled={isPending}
                        className="py-2 px-6 bg-red-400 rounded-xl text-white text-center cursor-pointer hover:bg-red-600 transition"
                    >
                        {isPending ? "Deleting..." : "Delete Ministry"}
                    </button>
                </div>

                {isError && (
                    <p className="text-red-600 text-sm mt-1">
                        {error?.response?.data?.detail || "Something went wrong"}
                    </p>
                )}
                {isSuccess && <p className="text-green-600 text-sm">Deleted Successfully</p>}
            </form>
        </div>
    )
}

export default DeleteMinistry;