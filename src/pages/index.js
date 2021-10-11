import React from "react";
import { deviceDetect } from "react-device-detect";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Hello Gatsby v3!</h1>
      </div>
      <pre>
        <code>{JSON.stringify(deviceDetect(), null, 2)}</code>
      </pre>
    </div>
  );
}
