import { useRef, useState } from "react";
import left from "../img/poly-left.png"
import right from "../img/poly-right.png"
import seal1 from "../img/Dall1.png"
import seal2 from "../img/Dall2.png"
import seal3 from "../img/Dall3.png"
import seal4 from "../img/Dall4.png"

export function Slide() {
    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Pellentesque nec namaliquam sem et tortor consequat id porta. Purus sit amet volutpat consequat mauris nunc. Euismod nisi porta lorem mollisaliquam ut. Vivamus at augue eget arcu dictum varius duis at. Leo vel orci porta non. Justo eget magna fermentum iaculiseu. Ut consequat semper viverra nam libero. Donec enim diam vulputate ut pharetra."
    const seals = [
        { id: 0, img: seal1, title: "Precious säl", description: text },
        { id: 1, img: seal2, title: "Bling Bling säl", description: text},
        { id: 2, img: seal3, title: "Here is the säl", description: text},
        { id: 3, img: seal4, title: "Yoho säl", description: text }
    ]

    const [selected, setSelected] = useState({
        id: 0,
        img: seal1,
        title: "Precious säl",
        description: text,
    })

    const count = useRef(0)

    function next() {
        if(count.current === 3){
            count.current = 0
            let found = seals.find((seal)=>seal.id === count.current)
            if( found === undefined){
                console.log("error")
            }else{
                 setSelected(found)
            console.log("kolla om det finns",selected)}
         
        }else{
        count.current = count.current +1
        let found = seals.find((seal)=>seal.id === count.current)
        if( found === undefined){
            console.log("error")
        }else{ setSelected(found)
        console.log("kolla om det finns igen",selected)}}
    }

    function prev() {
        if(count.current === 0){
       count.current = 3

       let found = seals.find((seal)=>seal.id === count.current)
       if( found === undefined){
           console.log("error")
       }else{ setSelected(found)
       console.log("kolla om det finns igen",selected)}
        
    }else {  count.current = count.current -1
        let found = seals.find((seal)=>seal.id === count.current)
        if( found === undefined){
            console.log("error")
        }else{ setSelected(found)
        console.log("kolla om det finns igen",selected)}}
    }


    return (<>
        <section className="lg:relative flex flex-col lg:flex-row pt-16">
            <div className="relative lg:static max-w-full lg:w-3/6">
                <div>{selected.img}</div>
                {/* <img src={seal1} /> */}
                <img src={left} alt="arrow left" onClick={prev} className="absolute bottom-3 lg:left-2/4" />
                <img src={right} alt="arrow right" onClick={next} className="absolute right-2 bottom-3 lg:" />
            </div>
            <div className="max-w-full lg:w-3/6">
                <h1 className=" m-7">{selected.title}</h1>
                <p className="lg:text-xl m-7">{selected.description}
                </p>
            </div>


        </section>
    </>)
}