import insta from "../img/Fb.png"
import facebook from "../img/Ig.png"
import youtube from "../img/Yt.png"
import Ficon from "../img/vector.png"

export function Footer(){
    return(<>
<footer className="relative">
<div className="absolute -bottom-36 right-2 mb-8 flex justify-end z-10">
    <img className="w-8 h-8 m-3" src={insta}/>
    <img className="w-8 h-8 m-3" src={facebook}/>
    <img className="w-8 h-8 m-3 " src={youtube}/>
</div>
<img className="h-52 absolute -bottom-36 w-full right-0" src={Ficon}/>
{/* <svg className=" absolute -bottom-36 right-0 " width="375" height="197" viewBox="0 0 375 197" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="w-full object-fill" d="M242.908 67.8722L170.816 95.7123L110.816 150.553L0 197H375V1H355.714L311.02 15.8294L282.551 43.6695L242.908 67.8722Z" fill="black" stroke="black"/>
</svg> */}

</footer>
    </>)
}