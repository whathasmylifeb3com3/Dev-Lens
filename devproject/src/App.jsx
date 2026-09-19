import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

import Dashboard from "./pages/Dashboard";
import Inspector from "./pages/Inspector";
import Quiz from "./pages/Quiz";
import Tutor from "./pages/Tutor";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  function renderPage() {
    switch (currentPage) {
      case "inspector":
        return <Inspector />;

      case "quiz":
        return <Quiz />;

      case "tutor":
        return <Tutor />;

      case "progress":
        return <Progress />;

      case "settings":
        return <Settings />;

      case "dashboard":
      default:
        return <Dashboard />;
    }
  }

  return (
    <div className="app">
      <Header />

      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;