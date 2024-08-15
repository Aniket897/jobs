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
    const response = await fetch("https://collabe-server.onrender.com/health");
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
