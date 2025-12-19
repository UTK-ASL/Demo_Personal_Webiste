import { FaHeart } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Built with <FaHeart className="heart-icon" /> using React & Vite
        </p>
        <p>&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
