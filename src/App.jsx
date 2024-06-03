import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/addtodo",
        formData
      );

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={(e) => postData(e)}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
