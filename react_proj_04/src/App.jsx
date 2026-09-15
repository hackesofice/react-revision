// import { memo } from 'react';
import {Routes, Route, Link} from 'react-router';
import About from './components/about/about';
import HomePage from './components/homePage/homePage';
import Contact from './components/contact/contact';


const App = () => {
  return ( 

    <div className='h-screen w-screen'>
      <div className='flex justify-between bg-amber-200'>
        <div className=''>
          BrowserRouter
        </div>

        <div className='text-amber-300 w-1/2 flex justify-between'>
          <Link to='/'>Home</Link>    
          <Link to='/about'>about</Link>  
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
};

export default App