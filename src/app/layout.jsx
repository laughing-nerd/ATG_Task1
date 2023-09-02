import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import Authprovider from "./components/Authprovider/Authprovider";
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.css"

const sans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin']
})

export const metadata = {
  title: 'ATG Task-1',
  description: 'Task 1 of Across The Globe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className}>
        
        <Authprovider>
          <NavBar />
          {children}
        </Authprovider>
      </body>
    </html>
  )
}
