import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleItemSubmit(newItem) {
    setItems([...items, newItem]);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay = items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={handleItemSubmit}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
