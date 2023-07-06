import {Sidebar,Home,Footer, About, CryptoCurrencies, CryptoDetails, News} from './components'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
   <div className="h-full w-full grid   grid-rows-[85vh_minmax(15vh,_1fr)_0px]">
     <div className="h-full w-full grid grid-cols-[18vw_minmax(82vw,_1fr)_0px]">
       <Sidebar/>
       <div className='h-full w-full overflow-auto mt-2'>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cryptocurrencies' element={<CryptoCurrencies/>}/>
        <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
        <Route path='/news' element={<News/>}/>
       
       </Routes>
       </div>
     </div>
     <div >
      <Footer/>
     </div>
   </div>
   </Router>
  );
}

export default App;
