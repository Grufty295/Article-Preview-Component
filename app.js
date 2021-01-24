document
  .getElementById("share-button")
  .addEventListener("click", toggleShareMenu);

function toggleShareMenu(e) {
  console.log(document.getElementById("footer"));
  const footer = document.getElementById("footer");
  if (e.target.offsetParent.className == "product-card-footer --share-shown") {
    footer.classList.remove("--share-shown");
  } else {
    console.log("asdas 2");
    footer.classList.add("--share-shown");
  }
}
