import { Home, User, Book, Contact, Briefcase } from 'lucide-react'
import { NavType } from '../types/Nav'

export const navData: NavType[] = [
  {
    name: 'Home',
    path: '/',
    icon: <Home />,
  },
  {
    name: 'About',
    path: '/about',
    icon: <User />,
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: <Briefcase />,
  },
  {
    name: 'Blog',
    path: '/blog',
    icon: <Book />,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <Contact />,
  },
]
