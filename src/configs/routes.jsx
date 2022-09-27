import { Home } from '@/pages/Home'
import { Settings } from '@/pages/Settings'

export const routes = [
  {
    path: '/',
    element: <Home />,
    children: [],
  },
  {
    path: '/settings',
    element: <Settings />,
    children: [],
  },
]
