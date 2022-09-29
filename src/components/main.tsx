import artist from "../img/artist.png"

export function Main(){
    return(<>
<section className="lg:flex mt-6  md:mr-36">
<article className="lg:m-4 bg-[#00000080] flex flex-row text-white lg:w-4/6">
    <img className="w-40 h-40 sm:w-96 sm:h-96" src={artist} alt="artist"/>
    <div className="m-4 w-4/6 pl-2 ">
        <h3 className="text-4xl pb-4">Om Ivar</h3>
    <p className="font-bold text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</article>
<article className=" bg-[#00000080]  lg:m-4 flex flex-col p-4 pl-12 pr-12  lg:w-2/6" >
   <h3 className="text-4xl pb-2  ">Vill du gå på vernissage?</h3>
    <p className="text-base text-white mb-4">Ange ditt namn och e-post nedan för att få information om var ivar kommer ställa ut härnäst.</p>

    <form>
    <label className="hidden sm:inline text-base font-bold">Namn </label><input className="m-1 w-full sm:w-48"/><br/>
    <label className="hidden sm:inline text-base font-bold">Epost </label><input className="m-1 w-full sm:ml-2 sm:w-48"/><br/>
    <button className="mb-16">Subscribe</button>
    </form>
</article>
</section>
    </>)
}