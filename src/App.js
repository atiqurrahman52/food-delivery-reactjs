import './App.css';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
import Blog from './components/blog/Blog';
import Home from './pages/Home';

function App() {
  return (
   <Routes>
   <Route path='/' element={<BasicLayout />}>
   {/* <Route index element={<Home />} /> */}
   <Route path='/' element={<Home />} />
   <Route path="/blog" element={<Blog />} />


   </Route>
     
   </Routes>
  );
}

export default App;
