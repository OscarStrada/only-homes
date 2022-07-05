import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Blog } from '../pages/Blog';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Homes } from '../pages/Homes';
import { PostDetails } from '../pages/PostDetails';
import { SingleHome } from '../pages/SingleHome';

const DefaultRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <></>;
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog/:slug" element={<PostDetails />} />
          <Route path="homes/:slug" element={<SingleHome />} />
        </Route>

        <Route path="homes" element={<Homes />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<DefaultRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
