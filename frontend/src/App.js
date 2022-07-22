import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("test")
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setUser(res.user);
      });
  }, []);

 
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {message ? message : "No hay conexión con el backend"}
        <p>Usuario registrado en la bbdd :{user ? user.name : ""} </p>
      </h1>
    </div>
  );
};

export default App;