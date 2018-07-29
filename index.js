function makeModal() {
  const myModal = new ModalBox({
    content: "This is a ModalBox!"
  });
  myModal.open();
}

const modalButton = document.querySelector("#openModal");

modalButton.addEventListener("click", makeModal);
