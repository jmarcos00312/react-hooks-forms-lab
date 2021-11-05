import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category
    }
    console.log(newItem)
    props.onItemFormSubmit(newItem)

  }




  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
