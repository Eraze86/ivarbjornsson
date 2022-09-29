import insta from "../img/Fb.png"
import facebook from "../img/Ig.png"
import youtube from "../img/Yt.png"
import Ficon from "../img/vector.png"

export function Footer(){
    return(<>
<footer className="relative">
<div className="absolute -bottom-36 right-2 mb-8 flex justify-end z-10">
    <img className="w-8 h-8 m-3" src={insta} alt="instagram logo" />
    <img className="w-8 h-8 m-3" src={facebook} alt="facebook logo"/>
    <img className="w-8 h-8 m-3 " src={youtube} alt="youtube logo"/>
</div>
<img className="h-52 absolute -bottom-36 w-full right-0" src={Ficon} alt="black bakground"/>

</footer>
    </>)
}