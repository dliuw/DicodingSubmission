import './category-item.js';

class NavCategory extends HTMLElement {
  constructor() {
    super();
  }

  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this._categories.forEach((category) => {
      const categoryItem = document.createElement('category-item');
      categoryItem.category = category;
      this.appendChild(categoryItem);
    });
  }
}

customElements.define('nav-category', NavCategory);
