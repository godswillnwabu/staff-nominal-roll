// import { motion } from "motion/react";


function DashboardCards({ name }) {

    return (
        <div 
            className="bg-[#091022] rounded-xl shadow-md p-4 font-merriweather text-white text-center"
        >
            {name}
        </div>
    )
}

export default DashboardCards;