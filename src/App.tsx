import { StrictMode, useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Widget from './poi?t/ithem|&o';
import Loading from './pages/Loading';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

export default function App() {
  useEffect(() => {
    // Ensure the document is in the correct language identifier when the app is loaded
    document.documentElement.lang = localStorage.getItem('potia-lang') || 'en';
  }, []);

  return (
    <StrictMode>
      <ThemeProvider>
        <LocalizationProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              {/* Loading page */}
              <Route path="/loading" element={<Loading />} />
              {/* Main pages */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </StrictMode>
  );
}