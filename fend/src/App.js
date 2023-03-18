import File from './File'
import GridData from './GridData'
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sample from './Sample';


function App() {
  return (
    <BrowserRouter>
    <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/grid' element={<GridData/>}/>
<Route path='/Uplaoder' element={<File/>}/>
<Route path='/sample' element={<Sample/>}/>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
