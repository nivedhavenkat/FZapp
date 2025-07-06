import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [appId, setAppId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/dashboard?appId=${appId}&customerId=${customerId}`);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Enter App Info</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="App ID"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          required
        /><br /><br />
        <input
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Launch 🚀</button>
      </form>
    </div>
  );
}

export default Home;