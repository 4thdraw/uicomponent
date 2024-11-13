import { GlobalStyle } from './commonui/uimenu';
import { Routes, Route } from 'react-router-dom';
import HOME from './routes/Home'
import Category from './routes/Category'

import './App.css';
import './commonui/scss/bgsvg.scss'

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Routes>
         <Route path='/' element={<HOME></HOME> }></Route>
         <Route path='/products/:nm' element={ <Category></Category> }></Route>
         <Route path='*' element={<p>404에 해당 컴포넌트 디자인부탁해용</p>}></Route>
      </Routes>     
    </div>
  );
}

export default App;
