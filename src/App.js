
import './App.css';
import Midframe from './Components/Midframe/Midframe';
import Topbar from './Components/Topbar/Topbar';
import Content from './Components/Content/content'
import Side from './Components/Side/Side';
function App() {
  return (
    <div className="body" >
      <div className="c1">
      <Topbar/>
      <Midframe/>
      <div className="C2" style={{alignItem:'center'}}>
        <div className="d1">
       <Content/> 
       </div>
       <div className="d2">
       <Side/>
       </div>
       </div>
      </div>
    
  </div>
  );
}

export default App;
