import './App.css';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
// import Blog from './components/blog/Blog';
import Home from './pages/Home';
import Blog from './pages/Blog';

import About from './pages/About';
import BlogDetail from './pages/BlogDetail';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import ForgetPassword from './components/authentication/ForgetPassword';
import Shop from './pages/Shop';
import Recipes from './pages/Recipes';

function App() {
  return (
   <Routes>
   <Route path='/' element={<BasicLayout />}>
   {/* <Route index element={<Home />} /> */}
   <Route path='/' element={<Home />} />
   <Route path='/sign-up' element={<SignUp />} />
   <Route path='/sign-in' element={<SignIn />} />
   <Route path='/forget-password' element={<ForgetPassword />} />
   <Route path="/about" element={<About />} />
   <Route path="/blog" element={<Blog />} />
   <Route path="/shop" element={<Shop />} />
   <Route path="/recipes" element={<Recipes />} />
   <Route path="/blog-detail" element={<BlogDetail />} />


   </Route>
     
   </Routes>
  );
}

export default App;
