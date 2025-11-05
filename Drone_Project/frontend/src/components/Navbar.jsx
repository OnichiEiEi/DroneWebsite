import { Link } from 'react-router-dom';
import { GiDeliveryDrone } from "react-icons/gi";
import { GoHome, GoPeople } from "react-icons/go";
import { TbCashRegister, TbLogout } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div className="flex h-screen w-16 flex-col justify-between bg-accent shadow-sm">
        <div>
            <div className="inline-flex size-16 items-center justify-center">
                <span className="grid size-10 place-content-center rounded-lg text-2xl"><GiDeliveryDrone/></span>
            </div>
            <div className="border-t border-gray-100">
                <div className="px-2">
                    <div className="py-4">
                        <a href="#" className="t group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-slate-700">
                            <GoHome className="text-xl"/>
                            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Home</span>
                        </a>
                    </div>
                    <ul className="space-y-1 border-t border-gray-100 pt-4">
                        <li>
                            <a href="#" className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-slate-700">
                                <GoPeople className="text-xl"/> 
                                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Teams</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                <TbCashRegister className="text-xl"/>
                                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Billing</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                <VscAccount className="text-xl"/>
                                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Account</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
