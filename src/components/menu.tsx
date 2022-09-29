import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";


export function Menu() {
    const toggle = useRef(null);
    const link = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);

    const [isOpen, setIsOpen] = useState(false)

    function menu(e: any) {
        e.preventDefault()
        if (isOpen === !true) {
            setIsOpen(true)
            console.log("true")
            gsap.to([line1.current], { y: 2 });
            gsap.to([line2.current], { y: 0 });
            gsap.to([line3.current], { y: -2 });
        } else {
            setIsOpen(false)
            console.log("false")
            gsap.to([line1.current], { y: 0 });
            gsap.to([line2.current], { y: 0 });
            gsap.to([line3.current], { y: 0 });
        }
    }

    const tl = gsap.timeline()
    useEffect(() => {

        if (isOpen) {
            tl.to([toggle.current], { height: "18rem", ease: "none" })
            tl.to([link.current], { delay: 0.2, opacity: 1 })
        } else {
        
        }
    }, [isOpen, tl])

    return (<>
        <div className="p-4 lg:hidden z-10">
            <svg onClick={menu} width="47" height="26" viewBox="0 0 47 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={line1} d="M0 3H46.5" stroke="#9747FF" strokeWidth="6" />
                <path ref={line2} d="M0 13H46.5" stroke="#9747FF" strokeWidth="6" />
                <path ref={line3} d="M0 23H46.5" stroke="#9747FF" strokeWidth="6" />
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


        {isOpen && <>
            <div ref={toggle} className=" z-10 w-56 h-0 bg-black  absolute top-16 right-0 lg:hidden ">
                <ul ref={link} className="opacity-0 flex flex-col items-center">
                    <li className="m-8">
                        <a className="font-bold text-green-300 hover:text-green-400" href="www.hej.com">Länkar</a>
                    </li>
                    <li className="m-8">
                        <a className="font-bold text-green-300 hover:text-green-400" href="www.hej.com">Länkar</a>
                    </li>
                    <li className="m-8">
                        <a className="font-bold text-green-300 hover:text-green-400" href="www.hej.com">Länkar</a>
                    </li>
                </ul>

            </div> </>}
    </>)
}