import { useState } from "react";
import { useImportMinistry } from "../../hooks/useMinistries";


function ImportMinistry() {

    const { mutate, isPending, isError, error, isSuccess } = useImportMinistry();
    const [file, setFile] = useState(null);
    const [ministryId, setMinistryId] = useState("");

    const handleUpload = () => {
        mutate({ file, ministryId });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full ">
            <form onSubmit={handleSubmit}>
                <div className="py-6">
                    <div className="flex justify-between gap-6">
                        <label className="w-full px-6 py-2 bg-amber-600 text-white rounded-xl cursor-pointer hover:bg-amber-700 transition">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept=".xlsx, .xls"
                                className="hidden"
                                required
                            />
                            Select Excel file
                        </label>

                        <input
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={ministryId}
                            onChange={(e) => setMinistryId(e.target.value)}
                            placeholder="Ministry ID"
                            className="w-full no-spinner border border-gray-300 rounded-xl p-2 outline-none"
                            required
                        />
                        {/* {isError && (
                            <p className="text-red-600 text-sm mt-1">
                                {error?.response?.data?.detail || "Something went wrong"}
                            </p>
                        )} */}
                    </div>
                </div>

                {file && (
                    <p className="text-sm text-gray-600">
                        Selected: {file.name}
                    </p>
                )}

                <div className="flex justify-end">
                    <button
                        onClick={handleUpload}
                        className="py-2 px-6 bg-[#091022]/60 rounded-xl text-white text-center cursor-pointer hover:bg-[#091022]/90 transition"
                    >
                        {isPending ? "Updating..." : "Update"}
                    </button>
                </div>

                {isError && <p className="text-red-600 text-sm">{error.message}</p>}
                {isSuccess && <p className="text-green-600 text-sm">Import Successful</p>}
            </form>
        </div>
    )
}

export default ImportMinistry;