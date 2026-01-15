import { useState } from "react";
import { useMinistries } from "../../hooks/useMinistries";
import { useNavigate } from "react-router-dom";
import CardForMDAs from "../../components/CardForMDAs/Card";

function MinistriesPage() {
    const [page, setPage] = useState(1);
    const { data, loading, error } = useMinistries({ page, pageSize: 12 });
    const navigate = useNavigate();
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Unable to fetcch data.</p>;

    const totalPages = Math.ceil(data?.total / data?.page_size);
    
    return (
        <div className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.items?.map(m => (
                    <CardForMDAs
                        key={m.id} 
                        onClick={() => navigate(`/ministries/${m.id}/departments`)}
                        name={m.name}
                        staffCount={`(${m.staff_count})`}
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
                    disabled={page === totalPages} 
                    onClick={() => setPage(p => p + 1)}
                    className={`px-4 py-2 rounded-md border ${page === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-bg-red"}`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default MinistriesPage;