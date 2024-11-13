import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./slices/productSlice";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateProduct({ id: editId, data: { name, price } }));
      setEditId(null);
    } else {
      dispatch(createProduct({ name, price }));
    }
    setName("");
    setPrice("");
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setEditId(product.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="App">
      <h1>CRUD de Productos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">
          {editId ? "Actualizar" : "Crear"} Producto
        </button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleEdit(product)}>Editar</button>
            <button onClick={() => handleDelete(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
