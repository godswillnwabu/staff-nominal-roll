import { useParams } from "react-router-dom";
import { useState } from "react";
import { ImCross } from "react-icons/im";

function NominalPage() {

    const { ministryId, deptId } = useParams();

    const staffList = [
        {
            id: 1,
            name: "John Okafor",
            role: "Admin Officer",
            photo: ""
        },
        {
            id: 2,
            name: "Amaka Ndukwe",
            role: "Account Clerk",
            photo: ""
        }
    ];

    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");
    const [selected, setSelected] = useState(null);

    // Extract unique roles
    const roles = ["All", ...new Set(staffList.map((p) => p.role))];

    // Filter by search
    let filtered = staffList.filter((p) =>
        p.name.toLowerCase().includes(search.toLocaleLowerCase())
    );

    // Filter by role
    if (roleFilter !== "All") {
        filtered = filtered.filter((p) => p.role === roleFilter)
    }

    // Error state (empty result)
    const isEmpty = filtered.lenght === 0;

    // Utility: fallback photo initials
    const getInitials = (name) => {
        const words = name.split(" ");
        return words[0][0] + (words[1] ? words[1][0] : "");
    };

    return (
        <div className="p-8">
            <h1 className="font-fjalla-one text-2xl mb-6">
                Nominal Roll - Ministry {ministryId}, Department {deptId}
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mb-6">

                <input
                    type="text"
                    placeholder="Search staff by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded w-full md:w-1/2 outline-none"
                />

                <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="border p-2 rounded w-full md:w-1/2 outline-none"
                >
                    {roles.map((r) => (
                        <option key={r}>{r}</option>
                    ))}
                </select>
            </div>

            {/* Empty/Error State */}
            {isEmpty && (
                <p className="text-gray-500 italic">No staff found.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((person) => (
                    <div
                        key={person.id}
                        onClick={() => setSelected(person)}
                        className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
                    >
                        <div className="flex flex-col items-center">

                            {person.photo ? (
                                <img
                                    src={person.photo}
                                    alt={person.name}
                                    className="w-24 h-24 rounded-full mb-4 object-cover"
                                />
                            ):(
                                <div className="w-24 h-24 mb-4 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-700">
                                    {getInitials(person.name)}
                                </div>
                            )}

                            <h2 className="text-lg font-semibold text-gray-900">{person.name}</h2>
                            <p className="text-sm text-gray-600">{person.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Profile Modal */}
            {selected && (
                <div className="fixed inset-0 bg-black/80 bg-opacity-90 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md relative">

                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                            onClick={() => setSelected(null)}
                        >
                            <ImCross />
                        </button>

                        <div className="flex flex-col items-center">
                            {selected.photo ? (
                                <img
                                    src={selected.photo}
                                    alt={selected.name}
                                    className="w-28 h-28 rounded-full mb-4 object-cover"
                                />
                            ):(
                                <div className="w-28 h-28 mb-4 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-gray-700">
                                    {getInitials(selected.name)}
                                </div>
                            )}

                            <h2 className="text-xl font-semibold">{selected.name}</h2>
                            <p className="text-gray-600">{selected.role}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NominalPage;