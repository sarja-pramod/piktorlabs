import Header from './components/Header';
import Sidenav from './components/sidenav';
import Mrectangle from './components/mainrectangle';
import Rectangle1 from './components/rectangle1';
import Rectangle2 from './components/rectangle2';
import Table from './components/table';
import Show from './components/showmore';
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
      <Table/>
      <Show/>

       </div>
     </div>

    </div>
  );
}

export default App;
