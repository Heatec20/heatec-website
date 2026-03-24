import { createBrowserRouter } from 'react-router-dom';
import { suspense } from 'react';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SolutionsPage from './pages/SolutionsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';


const router = createBrowserRouter(
  [
    { path: '/', element: <HomePage /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '/solutions', element: <SolutionsPage /> },
    { path: '/contact', element: <ContactPage /> },
    { path: '/blog', element: <BlogPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '*', element: <NotFoundPage /> }
  ]
)$}

export default router;