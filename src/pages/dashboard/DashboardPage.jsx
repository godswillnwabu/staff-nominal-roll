import DashboardCards from "../../components/DashboardCards/Card";
import GetMinistry from "../../components/Forms/getMinistry";
import CreateMinistry from "../../components/Forms/createMinistry";
import ImportMinistry from "../../components/Forms/importMinistry";
import UpdateMinistry from "../../components/Forms/updateMinistry";
import DeleteMinistry from "../../components/Forms/deleteMinistry";


function DashboardPage() {

    return (
        <div className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="order-1 h-fit bg-white shadow-lg rounded-xl p-3 hover:shadow-xl transition">
                        <DashboardCards
                            name={`Create Ministry`}
                        />
                        <CreateMinistry />
                    </div>

                    <div className="order-2 h-fit bg-white shadow-lg rounded-xl p-3 hover:shadow-xl transition">
                        <DashboardCards
                            name={`Search Ministry`}
                        />
                        <GetMinistry />
                    </div>

                    <div className="order-3 h-fit bg-white shadow-lg rounded-xl p-3 hover:shadow-xl transition">
                        <DashboardCards
                            name={`Import Ministry`}
                        />
                        <ImportMinistry />
                    </div>

                    <div className="order-4 h-fit bg-white shadow-lg rounded-xl p-3 hover:shadow-xl transition">
                        <DashboardCards
                            name={`Update Ministry`}
                        />
                        <UpdateMinistry />
                    </div>

                    <div className="order-5 h-fit bg-white shadow-lg rounded-xl p-3 hover:shadow-xl transition">
                        <DashboardCards
                            name={`Delete Ministry`}
                        />
                        <DeleteMinistry />
                    </div>
                </div>
            </div>
    )
}

export default DashboardPage;