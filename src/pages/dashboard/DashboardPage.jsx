import { GiThink } from "react-icons/gi";

function DashboardPage() {

    return (
        <div className="pt-10">
            <div className="grid place-items-center font-merriweather font-bold text-7xl">
                <p className="pb-5">Total Number of</p>
                <p className="pb-5">Abia State</p>
                <div className="flex gap-3">
                    <p className="pb-5">Work Force = </p>
                    <GiThink />
                </div>

            </div>
        </div>
    )
}

export default DashboardPage;