import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useParams, useNavigate } from "react-router-dom";
import { useStaff } from "../../hooks/useStaff";
import { useDepartment } from "../../hooks/useDepartmentId";
import { ImCross } from "react-icons/im";

function NominalPage() {
    const { departmentId } = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [rank, setRank] = useState("");
    const debouncedSearch = useDebounce(search, 900);

    const { data, isFetching } = useStaff({
        departmentId, page, pageSize: 6, search: debouncedSearch, rank,
    });
    console.log(data)

    const [selected, setSelected] = useState(null);
    const department = useDepartment(departmentId);


    // Utility: fallback photo initials
    const getInitials = (name) => {
        const words = name.split(" ");
        return words[0][0] + (words[1] ? words[1][0] : "");
    };

    const totalPages = Math.ceil(data?.total / data?.page_size);

    return (
        <div className="pt-5">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <h1 className="font-fjalla-one text-xl md:text-2xl mb-6 md:mb-0">
                    {department.data ? department.data.ministry.name : 'Ministry'} - {department.data ? department.data.name : 'Department'} Staff List
                </h1>

                <button
                    onClick={() => navigate(-1)}
                    className="bg-[#091022] rounded-xl px-6 py-2 font-merriweather text-white text-center cursor-pointer"
                >
                    Go Back
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">

                {/* Search and Filter */}
                <input
                    type="text"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); }}
                    placeholder="Search staff by name..."
                    className="border p-2 rounded w-full md:w-1/2 outline-none"
                />

                <select
                    value={rank}
                    onChange={(e) => { setRank(e.target.value); }}
                    className="border p-2 rounded w-full md:w-1/2 outline-none"
                >
                    <option key="">All</option>
                    <option key="Director">Director</option>
                    <option key="Accountant">Accountant</option>
                </select>
            </div>

            {isFetching && <p className="font-fjalla-one">Loading...</p>}


            {/* Staff Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.items?.map((s) => (
                    <div
                        key={s.id}
                        onClick={() => setSelected(s)}
                        className="bg-white shadow-lg rounded-lg p-3 cursor-pointer hover:shadow-xl transition"
                    >
                        <div className="flex items-start gap-5">
                            <div>
                                {
                                    !s.photo && (
                                        <div className="w-20 h-20 rounded-4 bg-gray-300 flex items-center justify-center text-4xl font-bold text-gray-700">
                                            {getInitials(s.full_name)}
                                        </div>
                                    )
                                }
                                {s.photo && (
                                    <img
                                        src={`http://localhost:8000/photos/${s.photo}`}
                                        alt={s.full_name}
                                        className="w-20 h-20 rounded-4 object-cover"
                                    />
                                )}
                            </div>
                            <div className="font-merriweather">
                                <h2 className="text-lg font-semibold text-gray-900">{s.full_name} ({s.gender})</h2>
                                <p className="text-sm text-gray-600">{s.rank} ({s.level})</p>
                                <p className="text-sm text-gray-600">{s.post} (Post)</p>
                                <div className="flex gap-3">
                                    <p className="text-sm text-gray-600 font-bold">
                                        {s.native},
                                    </p>
                                    <p className="text-sm text-gray-600">{s.phone_num}</p>
                                </div>
                                <div className="flex gap-3">
                                    <p className="text-sm text-green-600 font-bold">
                                        {s.first_appointment}
                                    </p>
                                    <p className="text-sm text-red-600 font-bold">{s.retirement}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {!isFetching && data?.items?.length === 0 && (
                <p className="font-fjalla-one text-center text-gray-600 mt-10">No staff found.</p>
            )}

            {/* Profile Modal */}
            {selected && (
                <div className="fixed inset-0 bg-black/80 bg-opacity-90 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md relative">

                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                            onClick={() => setSelected(null)}
                        >
                            <ImCross />
                        </button>

                        <div className="flex flex-col items-center font-merriweather">
                            {selected.photo ? (
                                <img
                                    src={`http://localhost:8000/photos/${selected.photo}`}
                                    alt={selected.full_name}
                                    className="w-35 h-35 rounded-full mb-4 object-cover"
                                />
                            ) : (
                                <div className="relative w-35 h-35 mb-4 rounded-full bg-gray-300 flex items-center justify-center text-4xl font-bold text-gray-700">
                                    {getInitials(selected.full_name)}
                                    <div className="absolute -top-5 text-xs italic text-red-500">
                                        please include picture
                                    </div>
                                </div>
                            )}

                            <h2 className="text-xl font-semibold">{selected.full_name}</h2>
                            <p className="text-green-600 font-bold">{selected.rank}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-10 flex items-center justify-center space-x-6">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(p => p - 1)}
                    className={`px-4 py-2 rounded-md border ${page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-bg-red"}`}
                >
                    Previous
                </button>

                <span>
                    Page {page} of {totalPages}
                </span>

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(p => p + 1)}
                    className={`px-4 py-2 rounded-md border ${page === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-bg-red"}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default NominalPage;