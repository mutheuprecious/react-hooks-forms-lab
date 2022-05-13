import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    category: "Produce",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: newItem.name,
      category: newItem.category,
    });
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={newItem.category}
          onChange={handleChange}
        >
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
