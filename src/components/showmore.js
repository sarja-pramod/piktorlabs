import page from "./pics/3dots.png";
import dots from "./pics/3dots.png";

let  jason=[
    {
      title:"list13",
      document_title:"Proxy Generation Documentation",
      stages:'<mark>Devolpment</mark>',
      class:'grey-box',
      owned_by: "Veneela Nagabandi",

    
    },
    {
      title:"list14",
      document_title:"proxygen release notes ",
      stages:"...",
      class:'',
      owned_by: "Veneela Nagabandi"
    
      },
      {
        title:"list15",
        document_title:"API Security Workshop",
        stages:"<mark>Design</mark>",
        class:'grey-box',
        owned_by:"ER, Vinay"
      }
]
       /*show more*/
       let key;
const  show_more=()=> {
    for(key in jason){
 let  html=`<tr className="${jason[key].title}}">
   <td className="first">
   <div className="img11"><img src=${page}/></div>
   <div>${jason[key].document_title}</div>
   </td>	
   <td className="second ${jason[key].class}">${jason[key].stages}</td>
   <td className="second">${jason[key].owned_by}</td>
   <td className="second">09/20/2020, 06:07am</td>
   <td className="green-dot1"></td>
   <td className="second">Published</td>
   <td><img className="Tdot" src={dots}/>
   </td>
   </tr>
   `
   
   document.getElementsByClassName('lists')[0].innerHTML+=html;
    }
   
   }
   

const showmore = () => {
    return (
        <div className="show-more" onClick={show_more}>Show more</div>
    )
}

export default showmore
