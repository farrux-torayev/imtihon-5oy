tailwind.config = {
  theme: {
    container: {
      center: true,
      width: {
        DEFAULT: "100%",
        tablet: "600px",
        largetablet: "600px",
        desktop: "1440px",
      },
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      tablet: "640px",
      largetablet: "1000px",
      desktop: "1440px",
    },
    extends: {
      colors: {},
    },
  },
};

const wrapperEl = document.querySelector(".wrapper-camp");

fetchProducts();

async function fetchProducts() {
  try {
    const result = await fetch("http://localhost:5000/products");
    const res = await result.json();

    const products = res.data;
    console.log(products);

    products.forEach((product) => {
      wrapperEl.appendChild(
        createCard(product.name, product.price, product.image)
      );
    });
  } catch (err) {
    console.log(err);
  } finally {
  }
}

function createCard(name, price, image) {
  const newEl = document.createElement("div");
  newEl.classList.add("card");
  const newdivEl = document.createElement("button");
  newdivEl.classList.add("card2");
  newEl.appendChild(newdivEl);
  newEl.innerHTML = `
        <img src="${image}" alt="">
        <p class="name">${name}</p>
        <p class="price">${price}$</p>
        <p class="pay">1  974  000 so'm x 12 oy</p>
        <p class="stock"> <span class="savat"> <img class="" src="./assets/images/cart.png" alt=""> </span> <span class="category"> Muddatli to'lov </span> </p>`;

  return newEl;
}

let timeEl = localStorage.getItem("timeEL")
  ? parseInt(localStorage.getItem("timeEL"))
  : 3 * 60 * 60;

function updateTimer() {
  let hours = Math.floor(timeEl / 3600);
  let minutes = Math.floor((timeEl % 3600) / 60);
  let seconds = timeEl % 60;
  document.getElementById("timer").innerText = `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  localStorage.setItem("timeEL", timeEl);
}

function startTimer() {
  let timer = setInterval(() => {
    if (timeEl > 0) {
      timeEl--;
      updateTimer();
    } else {
      clearInterval(timer);
      localStorage.removeItem("timeEL");
      alert("Taymer tugadi!");
    }
  }, 1000);
}

updateTimer();
startTimer();
