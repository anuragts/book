import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function test() {
  const [Hello, setHello] = useState("");

  const name = "Anurag";
  const email = "anurag@gmail.com";
  const Class = "5";
  useEffect(() => {
    const fetchData = async () => {
      const data = await  axios.post("/api/user/student", {
        name,
        email,
        Class,
      });
      console.log(data);
    };
    fetchData()
  }, [email]);

  return <>
  <div>
    Data :
    <div>
        {Hello}
    </div>
  </div>
  </>;
}
