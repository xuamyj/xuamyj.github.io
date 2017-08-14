class HomeScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
  }

  show() {
    console.log("SHOWS")
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    console.log("HIDES")
    this.containerElement.classList.add('inactive');
  }
}
