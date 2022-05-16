const accordionBtns = document.querySelectorAll(".accordion");
accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("icon");
    let content = this.nextElementSibling;
    // console.log(content);
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    //   console.log(content.style.maxHeight);
    }
  };
});