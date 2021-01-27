const sidenav = () => {
    return (
        <div id="main-id" className="vector">
            <div>Your</div>	
		<div id="vec1" className="vectcolor" onclick="function1('vec1')"><img src="pics/project.png"/>	
			<div>projcts</div>
		</div>
		<div id="vec2" className="imgvect" onclick="function1('vec2')"><img src="pics/contri.png"/>
		<div>contribution</div>
	</div>
		<div id="vec3" className="imgvect" onclick="function1('vec3')"><img src="pics/journey.png"/>
		<div>journey</div>
	</div>
		<div  id="vec4" className="imgvect" onclick="function1('vec4')"><img src="pics/events.png"/>
		<div>events</div>
	</div>
		<div  id="vec5" className="imgvect" onclick="function1('vec5')"><img src="pics/access.png"/>
		<div>Access control</div>
	</div>
            
        </div>
    )
}

export default sidenav
