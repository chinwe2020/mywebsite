const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.listen(5000, () => console.log("server has started on port 5000"));

//ROUTES//

//create an entry
app.post("/entries", async (req, res) => {
  try {
    const { emailAddress, emailMessage } = req.body;
    const newEntry = await pool.query(
      "INSERT INTO messageform (email_address, email_message) VALUES ($1,$2) RETURNING *",
      [emailAddress, emailMessage]
    );

    res.json(newEntry.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all entries
app.get("/entries", async (req, res) => {
  try {
    const allEntries = await pool.query("SELECT * FROM messageform");
    res.json(allEntries.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a entry
app.get("/entries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await pool.query(
      "SELECT * FROM messageform WHERE message_id = $1",
      [id]
    );

    res.json(entry.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update an entry

//delete an entry
