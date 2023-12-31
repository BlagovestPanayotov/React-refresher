import { useEffect } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

const EffectCleanUp = () => {
  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return <h2>EffectCleanUp</h2>;
};

export default EffectCleanUp;
