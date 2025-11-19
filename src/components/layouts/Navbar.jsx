import { Link } from "react-router-dom";
import AbSG_Logo from "../../assets/logos/absg-logo.png"
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function Navbar() {

    return (
        <div className="fixed top-0 left-0 right-0 bg-[#091022] text-white px-4 md:px-8 lg:px-16 py-1 z-999">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="">
                        <img src={AbSG_Logo} alt="Logo" className="w-[50px] md:w-[80px] lg:w-[100px] inline-block mr-2" />
                    </div>
                    <div>
                        <h1 className="hidden md:inline-block md:text-sm lg:text-base font-fjalla-one tracking-wider">Abia State Goverment <br />
                            Staff Nominal Roll <br />
                            Ministries, Departments & Agencies
                        </h1>
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    {/* <div className="">
                        <button className="cursor-pointer">
                            <BsToggleOff className="inline-block text-3xl font-thin"/>
                        </button>
                    </div> */}

                    <div className="flex md:text-sm lg:text-base font-fjalla-one tracking-wider gap-10">
                        <Link to="/" className="underline underline-offset-4">Dashboard</Link>
                        <Link to="ministries" className="underline underline-offset-4">Ministries</Link>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;