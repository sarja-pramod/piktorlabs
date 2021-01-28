import proj from './pics/project.png';

const Box1 = (props) => {
    const func=()=>{
        let curr,x,i,y;
        x = document.getElementsByClassName("imgvect");
        y=document.getElementsByClassName("vectcolor");
        curr="vec1";
        y[0].className="imgvect";
        document.getElementById("vec1").className="vectcolor";
        
        }
    return (
        <div onClick={func} id="vec1"  className="vectcolor"><img src={proj}/>	
			<div>projcts</div>
		</div>
    )
}

export default Box1
