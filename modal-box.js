(function() {
  // Constructor
  this.ModalBox = function() {
    const defaults = {
      overlay: true,
      closeButton: true,
      maxWidth: 400,
      maxHeight: 300,
      header: true,
      headerText: "",
      content: ""
    };

    this.options = Object.assign(defaults, arguments[0]);
  };

  // Public Methods ----------------------------------

  ModalBox.prototype.open = function() {
    buildModalBox.call(this);
    attachCloseEvents.call(this);
  };

  ModalBox.prototype.close = function() {
    this.modalBox.remove();
  };

  // Private methods ---------------------------------
  function buildModalBox() {
    var docFrag = document.createDocumentFragment();

    this.modalBox = document.createElement("div");
    this.modalBox.classList.add("modalBox");
    this.modalBox.style.maxWidth = this.options.maxWidth + "px";
    this.modalBox.style.maxHeight = this.options.maxHeight + "px";

    if (this.options.closeButton) {
      this.closeButton = document.createElement("button");
      this.closeButton.classList.add("modalBox__close");
      this.closeButton.innerHTML = "x";
      this.modalBox.appendChild(this.closeButton);
    }

    var content = document.createElement("div");

    if (typeof this.options.content === "string") {
      var contentText = document.createElement("p");
      contentText.textContent = this.options.content;
      content.appendChild(contentText);
    } else {
      content.appendChild(this.options.content);
    }

    this.modalBox.appendChild(content);
    docFrag.appendChild(this.modalBox);
    document.body.appendChild(docFrag);
  }

  function attachCloseEvents() {
    this.closeButton.addEventListener("click", this.close.bind(this));
  }
})();
