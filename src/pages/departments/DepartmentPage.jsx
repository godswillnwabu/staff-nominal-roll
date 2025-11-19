import { useParams, useNavigate } from "react-router-dom";
import DepartmentCard from "../../components/departmentCard/DepartmentCard";

function DepartmentPage() {

    const { ministryId } = useParams();
    const navigate = useNavigate();

    // dummy DATA
    const allDepartments = {
        0: ["Admin", "Accounts", "Store", "Transport Unit"],
        1: ["Admin", "Accounts", "Store", "Transport Unit"],
        2: ["Admin", "Accounts", "Store", "Transport Unit"],
        3: ["Admin", "Accounts", "Store", "Transport Unit"],
        4: ["Admin", "Accounts", "Store", "Transport Unit"],
        5: ["Admin", "Accounts", "Store", "Transport Unit"],
        6: ["Admin", "Accounts", "Store", "Transport Unit"],
        7: ["Admin", "Accounts", "Store", "Transport Unit"],
        8: ["Admin", "Accounts", "Store", "Transport Unit"],
        9: ["Admin", "Accounts", "Store", "Transport Unit"],
        10: ["Admin", "Accounts", "Store", "Transport Unit"],
        11: ["Admin", "Accounts", "Store", "Transport Unit"],
        12: ["Admin", "Accounts", "Store", "Transport Unit"],
        13: ["Admin", "Accounts", "Store", "Transport Unit"],
        14: ["Admin", "Accounts", "Store", "Transport Unit"],
        15: ["Admin", "Accounts", "Store", "Transport Unit"],
    };

    const departments = allDepartments[ministryId] || [];

    return (
        <div className="pt-10">
            <h2 className="font-fjalla-one text-2xl mb-6">
                Departments
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept, i) => (
                    <DepartmentCard 
                        key={i}
                        name={dept}
                        onClick={() => navigate(`/ministries/${ministryId}/${i}`)}
                    />
                ))}
            </div>
        </div>
    )
}

export default DepartmentPage;