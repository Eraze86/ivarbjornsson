import { useState } from "react"

export function Menu(){
    const [navMenu, setNavMenu] = useState(false)
    function menu() {

        setNavMenu(true)
    }
    return(<>
    <div className="p-4 lg:hidden">
                    <svg onClick={menu} width="47" height="26" viewBox="0 0 47 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3H46.5" stroke="#9747FF" strokeWidth="6" />
                        <path d="M0 13H46.5" stroke="#9747FF" strokeWidth="6" />
                        <path d="M0 23H46.5" stroke="#9747FF" strokeWidth="6" />
                    </svg>
                </div>
                
                <div className="hidden lg:block">
                    <ul className="lg: flex lg:flex-row p-6">
                        <li className="mx-4">
                            <a className="font-bold text-green-300 hover:text-green-400" href="www.hej.com">Länkar</a>
                        </li>
                        <li className="mx-4">
                            <a className="font-bold text-green-300 hover:text-green-400" href="www.hej.com">Länkar</a>
                        </li>
                        <li className="mx-4">
                            <a className="font-bold text-green-300 hover:text-green-400" href="www.hej.com">Länkar</a>
                        </li>
                    </ul>

                </div>


                {navMenu && <><div className=" h-30 w-20 lg:hidden">
                   <ul className="flex flex-column">
                        <li className="mx-4">
                            <a className="font-bold text-green-300 hover:text-green-400" href="www.hej.com">Länkar</a>
                        </li>
                        <li className="mx-4">
                            <a className="font-bold text-green-300 hover:text-green-400" href="www.hej.com">Länkar</a>
                        </li>
                        <li className="mx-4">
                            <a className="font-bold text-green-300 hover:text-green-400" href="www.hej.com">Länkar</a>
                        </li>
                    </ul>
                   
                </div> </>}
    </>)
}