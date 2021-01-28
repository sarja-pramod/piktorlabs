import access from "./pics/access.png";

const Box5 = () => {
    const func=()=>{
        let curr,x,i,y;
        x = document.getElementsByClassName("imgvect");
        y=document.getElementsByClassName("vectcolor");
        curr="vec5";
        y[0].className="imgvect";
        document.getElementById("vec5").className="vectcolor";
        

        
    }
    return (
        <div className="imgvect" id="vec5" onClick={func}  ><img src={access}/>
		<div>Access control</div>
	</div>
    )
}

export default Box5
