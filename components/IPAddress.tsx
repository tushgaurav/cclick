"use client";

import { useState, useEffect } from "react";

const IpAddress = () => {
  const [ip, setIp] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json").then((response) =>
      response.json().then((data) => setIp(data.ip))
    );
  }, []);

  return (
    <div>
      <span>IP Address: {ip}</span>
    </div>
  );
};

export default IpAddress;
