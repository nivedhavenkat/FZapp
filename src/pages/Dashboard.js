import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const [params] = useSearchParams();
  const appId = params.get("appId");
  const customerId = params.get("customerId");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.retention.chargebee.com/assets/webpack/retention.js";
    script.async = true;

    script.onload = () => {
      if (window.Retention && appId && customerId) {
        window.Retention.init({ appId, customerId });
      }
    };
    
  // ✅ Show the offer manually (popup/modal)
  window.Retention.showOffer?.();
}

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [appId, customerId]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🏋️ Welcome to FitZone</h1>
      <p>App ID: {appId}</p>
      <p>Customer ID: {customerId}</p>
      <div style={{
        marginTop: "2rem",
        padding: "1.5rem",
        backgroundColor: "#e0e0e0",
        color: "#777",
        borderRadius: "8px",
        textAlign: "center",
        opacity: 0.6
      }}>
        <h3>Premium Feature</h3>
        <p>This content is disabled on trial plans.</p>
      </div>
    </div>
  );
}

export default Dashboard;