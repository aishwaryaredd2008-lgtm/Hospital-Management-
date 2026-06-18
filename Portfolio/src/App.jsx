function Header() {
  return (
    <div className="header">
      <img
        src="https://i.pravatar.cc/150?img=47"
        alt="profile"
        className="profile-img"
      />
      <div>
        <h1>Aishwarya Reddy</h1>
        <h3>UG Student | Web Development Learner</h3>
        <p>Passionate about building clean and responsive web pages.</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I am a B.Tech Computer Science student interested in frontend
        development. I am learning HTML, CSS, JavaScript, and React.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="grid">
        <div>HTML5</div>
        <div>CSS3</div>
        <div>JavaScript</div>
        <div>React</div>
        <div>Python</div>
        <div>GitHub</div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Technology</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Portfolio Website</td>
            <td>React, CSS</td>
            <td>Personal profile website.</td>
          </tr>
          <tr>
            <td>Daily Routine Tracker</td>
            <td>React</td>
            <td>Tracks daily tasks with date and status.</td>
          </tr>
          <tr>
            <td>Login Form</td>
            <td>HTML, CSS</td>
            <td>Responsive login form.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function Education() {
  return (
    <section>
      <h2>Education</h2>
      <p>
        <b>B.Tech in Computer Science</b>
      </p>
      <p>KL University | 2025 - 2029</p>
    </section>
  );
}

function FeedbackForm() {
  return (
    <section>
      <h2>Feedback Form</h2>

      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <label>Feedback:</label>
        <textarea placeholder="Write your feedback"></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function App() {
  return (
    <div className="container">
      <Header />

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#feedback">Feedback</a>
      </nav>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="feedback">
        <FeedbackForm />
      </div>

      <footer>© 2026 Aishwarya Reddy | Student Portfolio</footer>
    </div>
  );
}

export default App;