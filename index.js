const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.get("/start", (req, resp) => {
  async function Drive() {
    try {
      const response = await fetch("https://drive-bnpw.onrender.com");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function Board() {
    try {
      const response = await fetch(
        "https://board-server-rdag.onrender.com/tasks"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function collabe() {
    try {
      const response = await fetch(
        "https://collabe-server.onrender.com/health"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  setInterval(() => {
    collabe();
    Drive();
    Board();
  }, 50000);

  resp.status(200).json({
    message: "job started",
  });
});

app.listen(8080, () => {
  console.log("server is running");
});
