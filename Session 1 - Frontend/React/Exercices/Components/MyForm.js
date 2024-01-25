import { useState } from "react";

function MyForm() {
  const [myFruit, setMyFruit] = useState("Apple");

  const handleChange = (event) => {
    setMyFruit(event.target.value)
  }

  return (
    <form>
      <select value={myFruit} onChange={handleChange}>
        <option value="Apple">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Mango">Mango</option>
      </select>
    </form>
  )
}

export default MyForm;