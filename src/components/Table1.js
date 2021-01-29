import react,{useState} from 'react';
import page1 from './pics/abc.jpg';
import dots1 from "./pics/three.jpg";
import json from './jsondata.json';
import Show from './showmore';

const Table1 = () => {

    var abc=json.map((ro)=>(
        <tr className={ro.title}>
        <td className="first">
            <div className="img11"><img src={page1}/></div>
            <div>{ro.document_title}</div>
        </td>	
        <td className="second"> <mark>{ro.stages}</mark></td>
        <td className="second">{ro.owned_by}</td>
        <td className="second">09/20/2020, 06:07am</td>
        <td className="green-dot1"></td>
        <td className="second">Published</td>
        <td><img className="Tdot" src={dots1}/>
        </td>
        </tr>
))

    function handleclick() {
        // Similar to this.setState({ fruit: 'orange' })
        var a=json.push(abc);
        show_more(a);
      }
   
         const [json1,show_more]=useState([
            
        ]
        );

     
    return (

        <>
        <table className="lists" id="lists1">
            <tbody>
            {json.map((row)=>(
                    <tr className={row.title}>
                    <td className="first">
                        <div className="img11"><img src={page1}/></div>
                        <div>{row.document_title}</div>
                    </td>	
                    <td className="second"> <mark>{row.stages}</mark></td>
                    <td className="second">{row.owned_by}</td>
                    <td className="second">09/20/2020, 06:07am</td>
                    <td className="green-dot1"></td>
                    <td className="second">Published</td>
                    <td><img className="Tdot" src={dots1}/>
                    </td>
                    </tr>
            ))}
            </tbody>
        </table>
        <div className="show-more" onClick={handleclick} >Show more</div>
        </>
    )
}

export default Table1
