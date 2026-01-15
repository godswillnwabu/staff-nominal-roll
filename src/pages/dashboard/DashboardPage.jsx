import DashboardCards from "../../components/DashboardCards/Card";
import GetMinistry from "../../components/Forms/getMinistry";
import CreateMinistry from "../../components/Forms/createMinistry";
import ImportMinistry from "../../components/Forms/importMinistry";


function DashboardPage() {

    return (
        <div className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="h-fit bg-white shadow-lg rounded-xl p-3 hover:shadow-xl transition">
                        <DashboardCards
                            name={`Create Ministry`}
                        />
                        <CreateMinistry />
                    </div>

                    <div className="h-fit bg-white shadow-lg rounded-xl p-3 hover:shadow-xl transition">
                        <DashboardCards
                            name={`Search Ministry`}
                        />
                        <GetMinistry />
                    </div>

                    <div className="h-fit bg-white shadow-lg rounded-xl p-3 hover:shadow-xl transition">
                        <DashboardCards
                            name={`Import Ministry`}
                        />
                        <ImportMinistry />
                    </div>
                </div>
            </div>
    )
}

export default DashboardPage;