import { useState } from "react";

export default function name() {
  const [name, setMyName] = useState("Anirban");
  const [phone, setMyPhone] = useState("09623516516");
  const [quantity, setQuantity] = useState("55");

  return (
    <div className="container">
      <h1>Online dog shop</h1>
      <p>
        The cat is a domestic species of small carnivorous mammal. It is the
        only domesticated species in the family Felidae and is commonly referred
        to as the domestic cat or house cat to distinguish it from the wild
      </p>
      <br></br>
      <div>
        <form>
          <label>
            Enter your name:
            <input
              type="text"
              onChange={(event) => {
                // name = event.target.value;
                setMyName(event.target.value);
              }}
            />
            <br></br>
            <br></br>
            Enter your phone number:
            <input
              type="text"
              onChange={(event) => {
                // phone = event.target.value;
                setMyPhone(event.target.value);
              }}
            />
            <br></br>
            <br></br>
            select your quantity:
            <input
              type="number"
              onChange={(event) => {
                // quantity = event.target.value;
                setQuantity(event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <button
              type="button"
              onClick={() => {
                // console.log(name, phone, quantity);
              }}
            >
              Submit
            </button>
          </label>
        </form>
        <div>
          <img src="img/1.jpg "></img>
          <p>
            Your name is {name}
            <br></br> your phone number is {phone}
            <br></br> select quantity {quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
