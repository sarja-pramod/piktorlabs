

const rectangle = () => {
    return (
      <div className="main-rect">
      <div className="rectangle">
        
          <h2 className="my_contri">My contributions</h2>
          <h6 className="below-text">view your documents, blsogposts, tools, and dev journey u've created here</h6>
      </div>
      <button id="myBtn" className="new" onclick="f2()">+New<img src="pics/down_arrow.png"/></button>
      
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
        </div>
        
        </div>
  
  </div>
    )
}

export default rectangle
