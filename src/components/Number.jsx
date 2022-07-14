import React from "react";
import { useParams } from "react-router";

export default function Number() {
  const { param, text, bg } = useParams();
  console.log(param);
  console.log(text);
  console.log(bg);
  return (
    <div>
      {isNaN(param) ? (
        <h1
          style={{ color: `${text && text}`, backgroundColor: `${bg && bg}` }}>
          The Word is: {param}
        </h1>
      ) : (
        <h1>The Number is :{param}</h1>
      )}
    </div>
  );
}
