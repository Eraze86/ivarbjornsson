import { useState } from "react"

export function Cookie(){

    const [cookie, setCookie] = useState(true)

    function handleButton(){
        setCookie(false)
    }

    return(<>
    {cookie && 
    <div className="bg-white shadow-2xl w-10/12 md:w-8/12 p-2 text-center fixed top-24 lg:top-44 left-0 right-0 ml-auto mr-auto"> 
    <h3>This website uses coockies</h3>

    <div className="p-2">
        <span className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Imperdiet sed euismod nisi porta lorem mollis 
        aliquam ut. Et tortor consequat id porta. Mauris sit 
        amet massa vitae tortor.</span><br/>
        </div>
    <div className="lg:text-right">
        <button className="bg-primary hover:bg-dark-primary" onClick={handleButton}>Accept</button>
    <button className="bg-red hover:bg-dark-red" onClick={handleButton}>Deny</button>
    </div>
    </div>}
    </>)
}