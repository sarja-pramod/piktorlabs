import jour from "./pics/journey.png";

const Box2 = () => {
    const func=()=>{
        let curr,x,i,y;
        x = document.getElementsByClassName("imgvect");
        y=document.getElementsByClassName("vectcolor");
        curr="vec2";
        y[0].className="imgvect";
        document.getElementById("vec2").className="vectcolor";
        
        }
    return (
        <div onClick={func}  id="vec2" className="imgvect"><img src={jour}/>
		<div>contribution</div>
	</div>
    )
}

export default Box2
