import access from "./pics/access.png";

const Box4 = () => {
    const func=()=>{
        let curr,x,i,y;
        x = document.getElementsByClassName("imgvect");
        y=document.getElementsByClassName("vectcolor");
        curr="vec4";
        y[0].className="imgvect";

        document.getElementById("vec4").className="vectcolor";
        

        
    }
    return (
        <div onClick={func}  id="vec4" className="imgvect"><img src={access}/>
		<div>events</div>
	</div>
    )
}

export default Box4
