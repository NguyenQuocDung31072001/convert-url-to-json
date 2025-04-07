import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import UrlToJsonConverter from "./pages/UrlToJsonConverter"
import Mp3Player from "./pages/Mp3Player"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/convert-url-to-json"
            element={<UrlToJsonConverter />}
          />
          <Route
            path="/mp3-player"
            element={<Mp3Player />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
