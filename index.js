const myString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque at tempor mauris.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed et rutrum quam.Morbi ultrices velit in metus interdum, quis vulputate nibh accumsan.Vivamus egestas arcu urna, eu fringilla nisi aliquet eu.Phasellus in mattis turpis.Morbi sed nisl mauris.Cras ut dui vel tellus vehicula lacinia.Pellentesque tincidunt porttitor nisl id molestie.Nulla sed porta arcu, quis commodo eros.Integer eu convallis nulla.Proin porta convallis tempus.Nullam vitae ex at diam sagittis cursus vel tincidunt nisi.Maecenas a nibh vulputate mi congue feugiat vitae eu mauris.Fusce nisi justo, lobortis sit amet mi et, dignissim ornare ipsum.Aliquam vestibulum mauris sit amet tincidunt condimentum.";
function makeModal() {
  const myModal = new ModalBox({
    content: myString,
    header: true,
    headerText: "Demo Modal Box"
  });
  myModal.open();
}

const modalButton = document.querySelector("#openModal");

modalButton.addEventListener("click", makeModal);
