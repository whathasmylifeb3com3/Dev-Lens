function Inspector() {
  function testConnection() {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      (tabs) => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { type: "PING" },
          (response) => {
            console.log(response);
          }
        );
      }
    );
  }

  return (
    <section>
      <h2>Inspector</h2>

      <p>
        Select code or a page element to inspect it.
      </p>

      <button onClick={testConnection}>
        Test Connection
      </button>
    </section>
  );
}

export default Inspector;