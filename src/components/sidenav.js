import proj from './pics/project.png';
import contri from "./pics/contri.png";
import jour from "./pics/journey.png";
import events from "./pics/events.png";
import access from "./pics/access.png";


const sidenav = () => {
    return (
        <div id="main-id" className="vector">
            <div>Your</div>	
		<div id="vec1" className="vectcolor" onclick="function1('vec1')"><img src={proj}/>	
			<div>projcts</div>
		</div>
		<div id="vec2" className="imgvect" onclick="function1('vec2')"><img src={contri}/>
		<div>contribution</div>
	</div>
		<div id="vec3" className="imgvect" onclick="function1('vec3')"><img src={jour}/>
		<div>journey</div>
	</div>
		<div  id="vec4" className="imgvect" onclick="function1('vec4')"><img src={events}/>
		<div>events</div>
	</div>
		<div  id="vec5" className="imgvect" onclick="function1('vec5')"><img src={access}/>
		<div>Access control</div>
	</div>
            
        </div>
    )
}

export default sidenav
