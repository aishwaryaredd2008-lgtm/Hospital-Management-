import { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const [appointments, setAppointments] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const login = () => {
    if (
      email === "hospital@gmail.com" &&
      password === "12345"
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  const bookAppointment = () => {
    if (!patient || !doctor || !date) {
      alert("Fill all fields");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      patient,
      doctor,
      date,
      completed: false,
    };

    setAppointments([...appointments, newAppointment]);

    setPatient("");
    setDoctor("");
    setDate("");
  };

  const markCompleted = (id) => {
    setAppointments(
      appointments.map((app) =>
        app.id === id
          ? { ...app, completed: true }
          : app
      )
    );
  };

  if (!loggedIn) {
    return (
      <div className="container">
        <div className="card">
          <h1>Login</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button onClick={login}>
            Login
          </button>

          <p>Email: hospital@gmail.com</p>
          <p>Password: 12345</p>
        </div>
      </div>
    );
  }

  const completedCount = appointments.filter(
    (a) => a.completed
  ).length;

  const displayedAppointments = showCompleted
    ? appointments.filter((a) => a.completed)
    : appointments;

  return (
    <div className="container">
      <div className="card">
        <h1>Hospital Dashboard</h1>

        <h3>
          Total Appointments:{" "}
          {appointments.length}
        </h3>

        <h3>
          Completed Appointments:{" "}
          {completedCount}
        </h3>

        <button
          onClick={() =>
            setLoggedIn(false)
          }
        >
          Logout
        </button>

        <hr />

        <h2>Book Appointment</h2>

        <input
          placeholder="Patient Name"
          value={patient}
          onChange={(e) =>
            setPatient(e.target.value)
          }
        />

        <input
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) =>
            setDoctor(e.target.value)
          }
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        <button
          onClick={bookAppointment}
        >
          Book
        </button>

        <div className="tabs">
          <button
            onClick={() =>
              setShowCompleted(false)
            }
          >
            All Appointments
          </button>

          <button
            onClick={() =>
              setShowCompleted(true)
            }
          >
            Completed
          </button>
        </div>

        {displayedAppointments.length ===
        0 ? (
          <p>No appointments found</p>
        ) : (
          displayedAppointments.map(
            (app) => (
              <div
                key={app.id}
                className="appointment"
              >
                <p>
                  Patient:
                  {app.patient}
                </p>

                <p>
                  Doctor:
                  {app.doctor}
                </p>

                <p>
                  Date:
                  {app.date}
                </p>

                <p>
                  Status:
                  {app.completed
                    ? "Completed"
                    : "Pending"}
                </p>

                {!app.completed && (
                  <button
                    onClick={() =>
                      markCompleted(
                        app.id
                      )
                    }
                  >
                    Mark Completed
                  </button>
                )}
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default App;