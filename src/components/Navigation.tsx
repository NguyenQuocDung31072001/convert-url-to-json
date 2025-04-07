import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-xl font-bold"
        >
          Dashboard
        </Link>
        <div className="space-x-4">
          <Link
            to="/convert-url-to-json"
            className="text-white hover:text-blue-300 transition-colors"
          >
            URL to JSON
          </Link>
          <Link
            to="/mp3-player"
            className="text-white hover:text-blue-300 transition-colors"
          >
            MP3 Player
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
