const section = document.querySelector("section");
const theme = document.querySelector(".theme");

theme.addEventListener("click", () => {
  section.classList.toggle("dark");
});

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector(".hour").innerText = hour;
  document.querySelector(".minute").innerText = min;
  document.querySelector(".second").innerText = sec;
}, 1000);
