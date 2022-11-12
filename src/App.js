import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import JobPage from './components/JobPage';
import PageNotFound from './components/PageNotFound';
import { useGlobalContext } from './context';
import './main.scss';

const App = () => {

  const { isDarkMode, isFiltersOpen, closeFiltersModal } = useGlobalContext()

  return (
    <main onClick={closeFiltersModal} className={`${isDarkMode ? 'dark' : ''} ${isFiltersOpen ? 'overlay' : ''}`}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs/:id' element={<JobPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
