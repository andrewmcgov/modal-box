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
    // Create a document fragment to append the box to
    const docFrag = document.createDocumentFragment();

    // Set up the main modal box container
    // Apply styles from the settings
    this.modalBox = document.createElement("div");
    this.modalBox.classList.add("modalBox");
    this.modalBox.style.maxWidth = this.options.maxWidth + "px";
    //this.modalBox.style.maxHeight = this.options.maxHeight + "px";

    // Create the modal header if it is enabled
    if (this.options.header) {
      this.header = document.createElement("div");
      this.header.classList.add("modalBox__header");
      if (this.options.headerText) {
        const headerText = document.createElement("h3");
        headerText.classList.add("modalBox__header-text");
        headerText.textContent = this.options.headerText;
        this.header.appendChild(headerText);
      }
      this.modalBox.appendChild(this.header);
    }

    // Add close button if enabled to header or main box
    if (this.options.closeButton) {
      this.closeButton = document.createElement("span");
      this.closeButton.classList.add("modalBox__close");
      this.closeButton.innerHTML = "x";
      this.header
        ? this.header.appendChild(this.closeButton)
        : this.modalBox.appendChild(this.closeButton);
    }

    const content = document.createElement("div");
    content.classList.add("modalBox__content");

    if (typeof this.options.content === "string") {
      const contentText = document.createElement("p");
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
