import { useState } from "react";
import { useMinistry } from "../../hooks/useMinistries";
import CardForMDAs from "../CardForMDAs/Card";
import { useNavigate } from "react-router-dom";


function GetMinistry() {

    const [id, setId] = useState("");
    const { data, isLoading, isError } = useMinistry(id);
    const navigate = useNavigate();

    return (
        <div className="w-full ">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="py-6">
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
                </div>

                {isLoading && <p className="font-bold text-center">Loading...</p>}
                {isError && <p className="text-red-600 text-center">No Ministry Found</p>}

                {data &&
                    <CardForMDAs
                        onClick={() => navigate(`/ministries/${data.id}/departments`)}
                        name={data.name}
                    />
                }
            </form>
        </div>
    )
}

export default GetMinistry;