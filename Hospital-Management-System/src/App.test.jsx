import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, beforeEach } from "vitest";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("unit test: home page renders", () => {
  render(<App />);
  expect(
    screen.getByText("Hospital Appointment Management System")
  ).toBeInTheDocument();
});

test("unit test: login page opens", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Login"));
  expect(screen.getByText("Password: 12345")).toBeInTheDocument();
});

test("integration test: valid login opens dashboard", () => {
  render(<App />);

  fireEvent.click(screen.getByText("Login"));

  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "hospital@gmail.com" },
  });

  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "12345" },
  });

  fireEvent.click(screen.getByRole("button", { name: "Login" }));

  expect(screen.getByText("Dashboard")).toBeInTheDocument();
});