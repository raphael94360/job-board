import "./App.scss"
import Header from "./components/Header"
import Jobs from "./components/Jobs"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Jobs />
      </div>

      <Footer />
    </>
  )
}

export default App
