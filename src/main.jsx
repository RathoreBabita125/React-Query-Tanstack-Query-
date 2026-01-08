import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Post from './Post/Post.jsx';
import IndvidualPost from './Post/IndvidualPost.jsx';

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/post',
          element: <Post />
        },
        {
          path: `/post/:id`,
          element: <IndvidualPost />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }
  ]
)

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}>
       <App />
      </RouterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
