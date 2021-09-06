import React from "react";
import "./styles.css";
import { useState } from "react";

const brandsDictionary = {
  samsung: [
    { name: "Samsung Galaxy M32 5G", price: "₹ 20,999" },
    { name: "Samsung Galaxy A03s 64GB 4GB RAM", price: "₹ 12,499" },
    { name: "Samsung Galaxy A52s 5G", price: "₹ 33,490" }
  ],
  apple: [
    { name: "Apple iPad Pro 12.9", price: "₹ 1,04,091" },
    { name: "Apple iPad Pro 11", price: "₹ 75,466" },
    { name: "Apple iPhone 12 Pro Max", price: "₹ 1,15,900" }
  ],
  vivo: [
    { name: "vivo Y33s", price: "₹ 17,990" },
    { name: "vivo Y21", price: "₹ 15,490" },
    { name: "VIVO Y20", price: "₹ 13,990" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("apple");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem" }}> Latest mobiles📲 </h1>
      <p style={{ fontSize: "large" }}>
        {" "}
        Checkout latest mobiles. Select any brand to get started{" "}
      </p>

      <div>
        {Object.keys(brandsDictionary).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#f5e050",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 1rem",
              fontSize: "larger"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          <div className="device">
            {brandsDictionary[selectedGenre].map((brands) => (
              <li
                key={brands.name}
                style={{
                  marginTop: "1rem",
                  listStyle: "none",
                  padding: "2rem",
                  border: "3px solid #f5e050",
                  alignItems: "center",
                  paddingBottom: "2rem",
                  width: "60%",
                  margin: "1rem auto",
                  borderRadius: "0.5rem",
                  height: "3rem",
                  textAlign: "center"
                }}
              >
                {" "}
                <div style={{ fontSize: "1.6rem" }}> {brands.name} </div>
                <div style={{ fontSize: "1.3rem" }}> {brands.price} </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <footer
        className="footer"
        style={{
          marginTop: "1rem",
          bottom: "0",
          position: "fixed",
          padding: "0.5rem"
        }}
      >
        <p> Made using ReactJS with ❤</p>
      </footer>
    </div>
  );
}
