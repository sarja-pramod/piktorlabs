import Header from './components/Header';
import Sidenav from './components/sidenav';
import Mrectangle from './components/mainrectangle';
import Rectangle1 from './components/rectangle1';
import Rectangle2 from './components/rectangle2';
import Table from './components/table';

import Table1 from './components/Table1';


function App() {
  return (
    <div className="App">
     <Header/>
     <div className="everything">
     <Sidenav/>
     
     <div className="all-content">
      <Mrectangle/>
      <Rectangle1/>
      <Rectangle2/>
      <Table1 className="lists" />
      

       </div>
     </div>

    </div>
  );
}

export default App;
