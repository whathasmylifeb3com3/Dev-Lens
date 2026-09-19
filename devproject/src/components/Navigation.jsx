function Navigation({ currentPage, onNavigate }) {
  /* ### TO-DO ### 
  // Add accesibility/screen reader support */
  return (
    <nav id="Navigation__main" className="Navigation__main container grid">
      <button onClick={() => onNavigate("dashboard")}>
        Dashboard
      </button>

      <button onClick={() => onNavigate("inspector")}>
        Inspector
      </button>

      <button onClick={() => onNavigate("quiz")}>
        Quiz
      </button>

      <button onClick={() => onNavigate("tutor")}>
        Tutor
      </button>

      <button onClick={() => onNavigate("progress")}>
        Progress
      </button>

      <button onClick={() => onNavigate("settings")}>
        Settings
      </button>
    </nav>
  );
}

export default Navigation;