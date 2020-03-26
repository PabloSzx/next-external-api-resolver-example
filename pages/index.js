import { useState, useEffect } from "react";

const Home = () => {
  const [expressData, setExpressData] = useState();
  const [connectData, setConnectData] = useState();

  useEffect(() => {
    fetch("/api/express/todos?userId=1")
      .then(response => response.json())
      .then(json => {
        setExpressData(json);
      });

    fetch("/api/connect/todos?userId=1")
      .then(response => response.json())
      .then(json => {
        setConnectData(json);
      });
  }, []);

  return (
    <div>
      <h1>Express API Proxy</h1>
      <p>{expressData ? JSON.stringify(expressData, null, 2) : "Loading..."}</p>
      <h1>connect API Proxy</h1>
      <p>{connectData ? JSON.stringify(connectData, null, 2) : "Loading..."}</p>
    </div>
  );
};

export default Home;
