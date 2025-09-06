import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [list, setList] = useState([]); // store all entries
  const [editIndex, setEditIndex] = useState(null); // track which index is being edited

  // Load data from localStorage when app starts
  useEffect(() => {
    const savedList = localStorage.getItem("userList");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  // Save data to localStorage whenever list changes
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(list));
  }, [list]);

  const handleAdd = () => {
    const newEntry = { name, email, phone, country };

    if (editIndex !== null) {
      // update existing entry
      const updatedList = [...list];
      updatedList[editIndex] = newEntry;
      setList(updatedList);
      setEditIndex(null); // reset edit mode
    } else {
      // add new entry
      setList([...list, newEntry]);
    }

    // clear inputs
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
  };

  const handleEdit = (index) => {
    const item = list[index];
    setName(item.name);
    setEmail(item.email);
    setPhone(item.phone);
    setCountry(item.country);
    setEditIndex(index); // set edit mode
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    if (editIndex === index) {
      // if deleting the one being edited, reset input
      setName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setEditIndex(null);
    }
  };

  return (
    <div className="container">
      <h2>User Form</h2>

      <input 
        type="text" 
        placeholder="Enter Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      /><br/><br/>

      <input 
        type="email" 
        placeholder="Enter Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      /><br/><br/>

      <input 
        type="text" 
        placeholder="Enter Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      /><br/><br/>

      <input 
        type="text" 
        placeholder="Enter Country" 
        value={country} 
        onChange={(e) => setCountry(e.target.value)} 
      /><br/><br/>

      <button onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add" }
      </button>

      <h3>User List</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <b>Name:</b> {item.name}, <b>Email:</b> {item.email}, 
            <b> Phone:</b> {item.phone}, <b>Country:</b> {item.country}
            {""}
            <button onClick={() => handleEdit(index)}>Edit</button>
            {" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
