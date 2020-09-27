class CategoryItem extends HTMLElement {
  constructor() {
    super();
  }

  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
      <div class="col mb-3 d-flex justify-content-center">
        <button class="btn btn-lg btn-custom">button</button>
      </div>
    `;
  }
}

customElements.define('category-item', CategoryItem);
