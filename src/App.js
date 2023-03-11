import './App.css';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
// import Blog from './components/blog/Blog';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './components/blog/BlogDetail';
import About from './pages/About';

function App() {
  return (
   <Routes>
   <Route path='/' element={<BasicLayout />}>
   {/* <Route index element={<Home />} /> */}
   <Route path='/' element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/blog" element={<Blog />} />
   <Route path="/blog-detail" element={<BlogDetail />} />


   </Route>
     
   </Routes>
  );
}

export default App;
