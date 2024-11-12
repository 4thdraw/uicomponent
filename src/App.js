import './App.css';

import { Uimenu } from './commonui/uimenu';

function App() {
  return (
    <div className="App">
      <div className='d-flex gap-3'>
        <Uimenu ><span className='d-block mt-2'>정기배송</span></Uimenu>
        <Uimenu ><span className='d-block mt-2'>정기배송</span></Uimenu>
        <Uimenu ><span className='d-block mt-2'>정기배송</span></Uimenu>
        <Uimenu ><span className='d-block mt-2'>정기배송</span></Uimenu>
      </div>

    </div>
  );
}

export default App;
