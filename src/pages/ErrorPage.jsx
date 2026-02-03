import { useNavigate } from "react-router-dom";
import CardForMDAs from "../components/CardForMDAs/Card";


function ErrorPage() {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen bg-bg-blue/50">
            <div className="flex flex-col">
                <h1 className="font-fjalla-one text-5xl text-red-900 font-bold mb-5">
                    Page not found
                </h1>

                <CardForMDAs
                    name={`Go to Dashboard`}
                    onClick={() => navigate("/")}
                />
            </div>
        </div>

    )
}

export default ErrorPage;