'use client';

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then(data => console.log(data.data))
  }, []);

  return (
    <h1>Hello world!</h1>
  );
}
