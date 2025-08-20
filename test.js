import axios from "axios";

axios.get("http://localhost:3000/products?page=1&limit=10")
  .then(res => {
    console.log("Response data:", res.data);
  })
  .catch(err => {
    console.log("Error:", err.message);
  });
