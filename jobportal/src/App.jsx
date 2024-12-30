import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
import './App.css';
import AppLayout from './Layouts/app-layout';
import LandingPage from './Pages/landing';
import Onboarding from './Pages/onboarding';
import JobListing from './Pages/job-listing';
import SavedJobs from './Pages/saved-job';
import PostJob from './Pages/post-job';
import MyJobs from './Pages/my-jobs';
import JobPage from './Pages/job.jsx';
import ProtectedRoute from './components/protected-route';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider> 
  )
}

export default App
