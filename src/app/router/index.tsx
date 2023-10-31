import { createHashRouter } from 'react-router-dom'
import App from '..'
import Radar from '../components/radar'
import Home from '../components/home'
import { Skills } from '../components/skills'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'radar',
        element: <Radar />
      }, {
        path: 'skills',
        element: <Skills />
      },
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])
