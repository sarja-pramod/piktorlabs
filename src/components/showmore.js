
import page1 from './pics/abc.jpg';
import dots1 from "./pics/three.jpg";

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
 let  html=`<tr class="${jason[key].title}">
   <td class="first">
   <div class="img11"><img src=${page1}/></div>
   <div>${jason[key].document_title}</div>
   </td>	
   <td class="second ${jason[key].class}">${jason[key].stages}</td>
   <td class="second">${jason[key].owned_by}</td>
   <td class="second">09/20/2020, 06:07am</td>
   <td class="green-dot1"></td>
   <td class="second">Published</td>
   <td><img class="Tdot" src=${dots1}/>
   </td>
   </tr>
   `
   
   document.getElementsByClassName('listbody')[0].innerHTML+=html;
    }
   
   }
   

const showmore = () => {
    return (
        <div className="show-more" onClick={show_more}>Show more</div>
    )
}

export default showmore
