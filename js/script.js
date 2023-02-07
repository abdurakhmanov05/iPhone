const spaceblack = document.querySelector(".Alpine-Green");
const deeppurple = document.querySelector(".Silver");
const gold = document.querySelector(".Gold");
const silver = document.querySelector(".Graphite");
const boxIphone = document.querySelector(".imgiPhone2");

function removeimges() {
  boxIphone.classList.remove("imgiPhone3");
  boxIphone.classList.remove("imgiPhone4");
  boxIphone.classList.remove("imgiPhone5");
  boxIphone.classList.remove("imgiPhone6");
}

spaceblack.onclick = () => {
  removeimges();
  console.log(spaceblack);
  boxIphone.classList.add("imgiPhone6");

};
deeppurple.onclick = () => {
  removeimges();
  console.log(deeppurple);
  boxIphone.classList.add("imgiPhone3");
};
gold.onclick = () => {
  removeimges();
  console.log(gold);
  boxIphone.classList.add("imgiPhone4");
};
silver.onclick = () => {
  removeimges();
  console.log(silver);
  boxIphone.classList.add("imgiPhone5");
};
