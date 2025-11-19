import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MinistryCard from "../../components/ministryCard/MinistryCard";

function MinistriesPage() {

    const navigate = useNavigate();

    const ministries = [
        "Ministry of Finance",
        "Ministry of Education",
        "Ministry of Health",
        "Ministry of Works",
        "Ministry of Agriculture",
        "Ministry of Information",
        "Ministry of Transport",
        "Ministry of Justice",
        "Ministry of Environment",
        "Ministry of Petroleum",
        "Ministry of Lands & Housing",
        "Ministry of Culture",
        "Ministry of Youth",
        "Ministry of Sports",
        "Ministry of Science",
    ]

    const itemsPerPage = 12;
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(ministries.length / itemsPerPage);

    const startIndex = (page - 1) * itemsPerPage
    const currentItems = ministries.slice(startIndex, startIndex + itemsPerPage)

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((m, i) => (
                    <MinistryCard
                        name={m} key={i} onClick={() => navigate(`/ministries/${i}`)}
                    />
                ))}
            </div>

            <div className="mt-10 flex items-center justify-center space-x-6">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className={`px-4 py-2 rounded-md border ${page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-bg-red"}`}
                >
                    Previous
                </button>

                <span>
                    Page {page} of {totalPages}
                </span>

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className={`px-4 py-2 rounded-md border ${page === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-bg-red"}`}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default MinistriesPage;