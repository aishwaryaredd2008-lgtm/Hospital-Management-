import Header from "./components/Header"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Course from "./components/CourseEnrolled"
import Attendence from "./components/Attendence"

function App() {
  const userName = "Priya"

  return (
    <div>
      <h1>Welcome to {userName}'s dashboard</h1>

      <Header />

      <main>
        <Profile />
        <CourseEnrolled />
        <Attendence />
      </main>

      <Footer />
    </div>
  )
}

export default App