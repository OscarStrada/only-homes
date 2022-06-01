import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Houses } from '../pages/Houses';

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
          <Route path="houses" element={<Houses />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<DefaultRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
