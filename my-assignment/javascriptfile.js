
function f2(){
let modal = document.getElementById("myModal");
modal.classList.toggle("modal_open");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
 modal.className="modal"
}

}

/*nav bar*/
function function1(id)
{
let curr,x,i;
x = document.getElementsByClassName("imgvect");
y=document.getElementsByClassName("vectcolor");
curr=id;
y[0].className="imgvect";
document.getElementById(curr).className="vectcolor";


}




   /*sidepanel*/ 
function openNav() {
     document.getElementById("mySidepanel").classList.toggle("show_sidepanel");
    
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").classList.toggle("show_sidepanel");
  }



  /*lifecycle menu*/
  function lifecycle_menu() {
    document.getElementById("lifeDropdown").classList.toggle("arrow_box1");
    document.getElementById("lifeDropdown").classList.toggle("show");
   

  }
  
  window.onclick = function(event) {
    let modal = document.getElementById("myModal");

    document.getElementById("jasonDropdown").addEventListener('click', function (event) { 
  
      event.stopPropagation(); 
  }); 
  document.getElementById("lifeDropdown").addEventListener('click', function (event) { 
  
    event.stopPropagation(); 
}); 

    if ((!event.target.matches('.header-text')) ) {
      let dropdowns = document.getElementsByClassName("life-dropdown-content");
      let i;
        let openDropdown = dropdowns[0];
        if (openDropdown.classList.contains('life-dropdown-content')) {                                      
          openDropdown.classList.remove('show')
          openDropdown.classList.remove('arrow_box1');
        }
      
    }
   
    if (event.target == modal) {
     
      modal.className="modal"
    }
    if (!event.target.matches('.group')) {
        let dropdowns = document.getElementsByClassName("jason-dropdown-content");
        let i;
          let openDropdown = dropdowns[0];
          if (openDropdown.classList.contains('jason-dropdown-content')) {                                      
            openDropdown.classList.remove('show')
          openDropdown.classList.remove('arrow_box2');
          }
        
      }




  }

  /* jason menu*/

  function jason_menu() {
    document.getElementById("jasonDropdown").classList.toggle("arrow_box2");
    document.getElementById("jasonDropdown").classList.toggle("show");
   

  }


  /*show more*/
function show_more() {
 for(key in jason){
html=`<tr class="${jason[key].title}}">
<td class="first">
<div class="img11"><img src="pics/page1.png"/></div>
<div>${jason[key].document_title}</div>
</td>	
<td class="second ${jason[key].class}">${jason[key].stages}</td>
<td class="second">${jason[key].owned_by}</td>
<td class="second">09/20/2020, 06:07am</td>
<td class="green-dot1"></td>
<td class="second">Published</td>
<td><img class="Tdot" src="pics/3dots.png"/>
</td>
</tr>
`

document.getElementsByClassName('lists')[0].innerHTML+=html;
 }

}

jason=[
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
     





