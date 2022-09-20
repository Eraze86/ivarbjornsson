import { useState } from "react"
import seal1 from "../img/Dall1.png"
import seal2 from "../img/Dall2.png"
import seal3 from "../img/Dall3.png"
import seal4 from "../img/Dall4.png"
import { Menu } from "./menu"

export function Header() {



    return (<>

        <header className="max-h-full">
            <nav className="bg-black sm:bg-white h-16 flex justify-between items-center">
                <div className="w-72 sm:max-w-full ">
                    <svg className=" sm:h-16 p-4 pl-12 pr-12 bg-black" id="Lager_2" fill="white" data-name="Lager 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 863.49 81.21">
                        <g id="Lager_1-2" data-name="Lager 1">
                            <g>
                                <path d="M0,79.9V8.3H3.2V79.9H0Z" />
                                <path d="M37.9,79.9L11.1,8.3h3.5l23.3,62.4L61.5,8.3h3.4l-27,71.6Z" />
                                <path d="M126.2,79.9V34.4h-43.6c-6,13.6-8.7,25.4-8.6,37.7v7.8h-3.2v-7.8c0-19,5.9-37.8,21.3-60.6h-21v-3.2h58.3V79.9h-3.2Zm0-68.4h-30.2c-3.6,5.3-6.4,8.9-11.7,19.8h41.9V11.5Z" />
                                <path d="M179,51.5l18.1,28.4h-3.9l-16.4-25.7c-9.7,11-21.8,20.1-35.4,25.7V8.3h57.7c-2.6,15.9-10,30.8-20.1,43.2ZM144.6,11.6v63.5c24.9-11.6,44.8-36.7,50.6-63.5h-50.6Z" />
                                <path d="M284.5,46.5c8.1,9.2,16.2,21.2,18.8,33.4h-58.4V8.3h58.4c-1.7,14.1-9.7,27.5-18.8,38.2ZM248.1,11.5v61.6c24.6-16.4,45.4-34.8,51.2-61.6h-51.2Zm34.5,37.2c-8.9,9-23.5,22-34.5,27.9h51.1c-2.8-9.4-9-18.5-16.6-27.9Z" />
                                <path d="M321.9,50.2h4c-6,8.1-10.5,17-14.1,26.4h49.6V8.3h3.2V79.9h-57.2c2.8-9.3,8.7-22,14.5-29.7Z" />
                                <path d="M373.4,44c0-20.5,16.7-37.2,37.2-37.2s37.2,16.7,37.2,37.2-16.7,37.2-37.2,37.2-37.2-16.7-37.2-37.2Zm3.1,0c0,18.8,15.3,34.1,34.1,34.1s34-15.3,34-34.1-15.2-34-34-34-34.1,15.2-34.1,34ZM393.4,0h3.6V3.2h-3.6V0Zm29.2,0h3.6V3.2h-3.6V0Z" />
                                <path d="M494.5,51.5l18.1,28.4h-3.9l-16.4-25.7c-9.7,11-21.8,20.1-35.4,25.7V8.3h57.7c-2.6,15.9-10,30.8-20.1,43.2Zm-34.4-39.9v63.5c24.9-11.6,44.8-36.7,50.6-63.5h-50.6Z" />
                                <path d="M578.9,79.9V37.1c-14.6-11.3-34.1-21.8-52.4-25.2V79.9h-3.2V8.4c17.4,1.5,41.9,14,55.6,24.8V8.4h3.2V79.9h-3.2Z" />
                                <path d="M609.29,11.5c-6.6,0-14.5,1.2-14.5,9.6s7.6,10.2,14.5,10.2h35.9c1.8,0,3.8,.3,3.8,2.7,0,2-.8,3.9-1.6,5.8-8.4,18.2-35.6,38.2-55.6,40.1v-3.2c17.7-2.9,34.2-14,45.6-27.7,2.1-2.5,8.1-10.2,8.1-13.6,0-.4-.6-.8-.9-1h-35.3c-9,0-17.7-2.7-17.7-13.3s9-12.8,17.7-12.8h40.9v3.2h-40.9Z" />
                                <path d="M674.69,11.5c-6.6,0-14.5,1.2-14.5,9.6s7.6,10.2,14.5,10.2h35.9c1.8,0,3.8,.3,3.8,2.7,0,2-.8,3.9-1.6,5.8-8.4,18.2-35.6,38.2-55.6,40.1v-3.2c17.7-2.9,34.2-14,45.6-27.7,2.1-2.5,8.1-10.2,8.1-13.6,0-.4-.6-.8-.9-1h-35.3c-9,0-17.7-2.7-17.7-13.3s9-12.8,17.7-12.8h40.9v3.2h-40.9Z" />
                                <path d="M721.59,44c0-20.5,16.7-37.2,37.2-37.2s37.2,16.7,37.2,37.2-16.7,37.2-37.2,37.2-37.2-16.7-37.2-37.2Zm3.1,0c0,18.8,15.3,34.1,34.1,34.1s34-15.3,34-34.1-15.2-34-34-34-34.1,15.2-34.1,34Z" />
                                <path d="M860.29,79.9V37.1c-14.6-11.3-34.1-21.8-52.4-25.2V79.9h-3.2V8.4c17.4,1.5,41.9,14,55.6,24.8V8.4h3.2V79.9h-3.2Z" />
                            </g>
                        </g>
                    </svg>
                </div>
                <Menu />


               
            </nav>

            <section className="flex flex-col lg:flex-row">

                <div className="max-w-full lg:w-3/6">
                    <img src={seal1} /></div>
                <div className="max-w-full lg:w-3/6">
                    <h1 className="text-5xl lg:text-7xl m-7">Precuise säl</h1>
                    <p className="text-base lg:text-xl m-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut venenatis tellus in metus vulputate. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Pellentesque nec nam
                        aliquam sem et tortor consequat id porta. Purus sit amet volutpat consequat mauris nunc. Euismod nisi porta lorem mollis
                        aliquam ut. Vivamus at augue eget arcu dictum varius duis at. Leo vel orci porta non. Justo eget magna fermentum iaculis
                        eu. Ut consequat semper viverra nam libero. Donec enim diam vulputate ut pharetra.
                    </p>
                </div>
            </section>

            {/* <img src={seal2} /><h1>Prinsessasn sealuless</h1>
            <img src={seal3} /><h1>Säl med bling</h1>
            <img src={seal4} /><h1>Säl in da hood</h1> */}
        </header>
    </>)
}