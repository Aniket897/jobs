const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.get("/start", async (req, resp) => {
  async function Drive() {
    try {
      const response = await axios.get(
        "https://drive-bnpw.onrender.com/auth/login"
      );
      console.log(response.data);
    } catch (error) {
      console.log(
        "IN DRIVE",
        error.response ? error.response.data : error.message
      );
    }
  }

  async function Board() {
    try {
      const response = await axios.get(
        "https://board-server-rdag.onrender.com/tasks"
      );
      console.log(response.data);
    } catch (error) {
      console.log(
        "IN BOARD",
        error.response ? error.response.data : error.message
      );
    }
  }

  async function collabe() {
    try {
      const response = await axios.get(
        "https://collabe-server.onrender.com/health"
      );
      console.log(response.data);
    } catch (error) {
      console.log(
        "IN COLLABE",
        error.response ? error.response.data : error.message
      );
    }
  }

  await Board();
  await collabe();
  await Drive();

  resp.status(200).json({
    message: "Job executed",
  });
});

app.listen(8080, () => {
  console.log("Server is running");
  setInterval(() => {
    console.log("Starting jobs");
    startJobs();
  }, 50000);
});

async function startJobs() {
  try {
    const response = await axios.get("https://jobs-o37o.onrender.com/start");
    console.log(response.data);
  } catch (error) {
    console.log(
      "IN STARTJOBS",
      error.response ? error.response.data : error.message
    );
  }
}
