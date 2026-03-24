import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import SolutionsPage from './pages/SolutionsPage'
import SpaceHeatingPage from './pages/SpaceHeatingPage'
import DomesticHotWaterPage from './pages/DomesticHotWaterPage'
import FireplacesPage from './pages/FireplacesPage'
import PoolHeatingPage from './pages/PoolHeatingPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'solutions', element: <SolutionsPage /> },
      { path: 'solutions/space-heating', element: <SpaceHeatingPage /> },
      { path: 'solutions/hot-water', element: <DomesticHotWaterPage /> },
      { path: 'solutions/fireplaces', element: <FireplacesPage /> },
      { path: 'solutions/pool-heating', element: <PoolHeatingPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default router
