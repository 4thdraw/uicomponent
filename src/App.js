import './App.css';

import { Uimenu, GlobalStyle } from './commonui/uimenu';
import './commonui/scss/bgsvg.scss'

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <div className='d-flex gap-3'>
        <Uimenu  className='bg0'><span className='d-block mt-2'>정기배송</span></Uimenu>
        <Uimenu  className='bg1'><span className='d-block mt-2'>이벤트</span></Uimenu>
        <Uimenu ><span className='d-block mt-2'>정기배송</span></Uimenu>
        <Uimenu ><span className='d-block mt-2'>정기배송</span></Uimenu>
      </div>
    </div>
  );
}

export default App;
