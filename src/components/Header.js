import  D from './pics/dd.png';
import Arrow from './pics/Polygon7.svg';
import Search from './pics/search.png';
import Group from "./pics/Group.svg";
const Header = () => {
    return (
     
              
	<header className="header"> 
		<div className="header-part1">
			<div className="D"><img src={D}/></div>
			<div className="dev" onclick="openNav()"  > DEV</div>
			<div className="center" onclick="openNav()" >CENTER</div>
		</div>
			<div className="header-part2">
			<div className="header-text" onclick="lifecycle_menu()">Lifecycle<img src={Arrow}/></div>
			
			
			<div id="lifeDropdown" className="life-dropdown-content">
				<a>option 1</a>
				<a >option 2</a>
				<a >option 3</a>
				<a>option 4</a>
			  </div>


  
			<div className="header-text">Starter Kits</div> 
			<div className="header-text">Dev journey</div> 
			<div className="header-text">Resources<img src={Arrow}/></div> 
			<div className="header-text">community<img src={Arrow}/></div>
		</div>
		<div className="header-part3">
			<div className="jason"><img className="search" src={Search}/></div>
			<div>jason</div>
			<div><img onclick="jason_menu()" className="group" src={Group}/></div>
            <div id="jasonDropdown" className="jason-dropdown-content">
				<a>option 1</a>
				<a >option 2</a>
				<a >option 3</a>
				<a>option 4</a>
			  </div>
				
			

		</div>
       
		

	
	</header>
    )
}

export default Header
