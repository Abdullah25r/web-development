let profileImg = document.getElementById("profile-img");
let inputImg = document.getElementById("input-img");
inputImg.onchange = () => {
  profileImg.src = URL.createObjectURL(inputImg.files[0]);
};
