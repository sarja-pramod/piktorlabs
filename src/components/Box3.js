import events from "./pics/events.png";

const Box3 = () => {
    const func=()=>{
        let curr,x,i,y;
        x = document.getElementsByClassName("imgvect");
        y=document.getElementsByClassName("vectcolor");
        curr="vec3";
        y[0].className="imgvect";
        document.getElementById("vec3").className="vectcolor";
        }
    return (
        <div onClick={func}   id="vec3" className="imgvect"><img src={events}/>
		<div>journey</div>
	</div>
    )
}

export default Box3
