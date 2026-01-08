// import { motion } from "motion/react";


function MinistryCard({ name, staffCount, onClick }) {

    return (
        <div 
            onClick={onClick}
            className="bg-[#091022] rounded-xl shadow-md p-4 font-merriweather text-white text-center cursor-pointer"
        >
            {name} ({staffCount})
        </div>
    )
}

export default MinistryCard;