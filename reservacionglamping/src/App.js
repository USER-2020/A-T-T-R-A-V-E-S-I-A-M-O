import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import { Counter } from './features/counter/Counter';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
   

    <BrowserRouter>
       <Header/>
       <Routes>
                  
        <Route path ="/search" element = { <SearchPage/>} />
         
         <Route exact path ="/" element = {<Home/>}/>
       </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
