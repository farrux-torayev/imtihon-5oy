const addProductFromEl = document.getElementById("add-product-form");

addProductFromEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e);

  const form = new FormData(e.target);
  try {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      body: form,
    });
    console.log(res.status);
    const data = await res.json();
    if (res.status === 201) {
      alert("success:" + data?.message);
    } else {
      alert("error:" + data?.message || "Nimadir xato");
    }
  } catch (err) {
    console.log(err);
    alert("error:" + data?.message || "Nimadir xato ketdi");
  }
});


