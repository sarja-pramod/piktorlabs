
 
 const  closeNav=()=> {
   document.getElementById("mySidepanel").classList.toggle("show_sidepanel");
 }


const sidepanel = () => {
    return (
        <div id="mySidepanel" class="sidepanel">
		<a href="#hh" class="closebtn" onClick={closeNav}>×</a>
	  </div>
	  
    )
}

export default sidepanel
