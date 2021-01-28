import newbtn from "./pics/down_arrow.png";

const f2=()=>{
    let modal = document.getElementById("myModal");
  modal.classList.toggle("modal_open");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  
 const close= span.onClick;
}


const close=()=>   {
  let modal = document.getElementById("myModal");
  modal.className="modal";
}

const rectangle = () => {
    return (
      <div className="main-rect">
      <div className="rectangle">
        
          <h2 className="my_contri">My contributions</h2>
          <h6 className="below-text">view your documents, blsogposts, tools, and dev journey u've created here</h6>
      </div>
      <button id="myBtn" className="new" onClick={f2}>+New<img src={newbtn}/></button>
      
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={close}>&times;</span>
        </div>
        
        </div>
  
  </div>
    )
}

export default rectangle
