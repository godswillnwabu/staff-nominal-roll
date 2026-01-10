import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDepartments } from "../../hooks/useDepartments";
import { useMinistry } from "../../hooks/useMinistryId";
import DepartmentCard from "../../components/departmentCard/DepartmentCard";

function DepartmentPage() {
    const { ministryId } = useParams();
    const [page, setPage] = useState(1);
    const { data, loading } = useDepartments({ ministryId, page, pageSize: 9 });
    const ministry = useMinistry(ministryId);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;

    const totalPages = Math.ceil(data.total / data.page_size);

    return (
        <div className="pt-5">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <h1 className="font-fjalla-one text-xl md:text-2xl mb-6 md:mb-0">
                    Departments in {ministry.data ? ministry.data.name : 'Ministry'}
                </h1>

                <button
                    onClick={() => navigate(-1)}
                    className="bg-[#091022] rounded-xl px-6 py-2 font-merriweather text-white text-center cursor-pointer"
                >
                    Go Back
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.items.map(d => (
                    <DepartmentCard
                        key={d.id}
                        name={d.name}
                        staffCount={d.staff_count}
                        onClick={() => navigate(`/ministries/${ministryId}/departments/${d.id}/staff`)}
                    />
                ))}
            </div>

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
                    disabled={page === totalPages || page > totalPages}
                    onClick={() => setPage(p => p + 1)}
                    className={`px-4 py-2 rounded-md border ${page === totalPages || page > totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-bg-red"}`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default DepartmentPage;