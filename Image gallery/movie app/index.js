const search = document.querySelector(".search-box input");
const images = document.querySelectorAll(".image-box");
search.addEventListener("keyup", e => {
  if (e.key == "Enter") {
    let searchValue = search.value.toLowerCase(); 
    images.forEach(image=> {
      if ( image.dataset.name.toLowerCase()===searchValue) {
         image.style.display = "block";
      }else{
       image.style.display = "none";
      }
    });
  }
});
search.addEventListener("keyup", () => {
  if (search.value != "") return;

  images.forEach((image) => {
    image.style.display = "block";
  });
});



