import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import { Counter } from './features/counter/Counter';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
   

    <BrowserRouter>
       <Header/>
       <h1>Hola estoy funcionando</h1>
       <Routes>
                  
        <Route path ="/search" element = { <SearchPage/>} />
         
         <Route exact path ="/" element = {<Home/>}/>
       </Routes>
      
 
    </BrowserRouter>
  );
}

export default App;
