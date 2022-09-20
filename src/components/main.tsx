import artist from "../img/artist.png"

export function Main(){
    return(<>
<section className="bg-[#00000080]">
<article className=" flex flex-row text-white">
    <img className="w-40 h-40" src={artist}/>
    <div className="m-4 w-4/6 pl-2">
        <h3 className="text-4xl pb-4">Om Ivar</h3>
    <p className="font-bold text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</article>
<article className="ml-7 mr-7 flex flex-col p-4">
    <h3 className="text-4xl pb-2">Vill du gå på vernissage?</h3>
    <p className="text-base text-white mb-4">Ange ditt namn och e-post nedan för att få information om var ivar kommer ställa ut härnäst.</p>
    <form>
    <label className="hidden md:block text-base">Namn </label><input className="m-1 w-full"/>
    <label className="hidden md:block text-base">Epost </label><input className="m-1 w-full md:ml-2"/><br/>
    <button>Subscribe</button>
    </form>
</article>
</section>
    </>)
}