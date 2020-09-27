class SearchBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchForm').value;
  }

  render() {
    this.innerHTML = /*html*/ `
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search your item here"
          aria-label="Search your item here"
          aria-describedby="actionSearch"
          id="inputItem"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="buttonSearch"
          >
            Search
          </button>
        </div>
      </div>
    `;

    this.querySelector('#buttonSearch').addEventListener(
      'click',
      this._clickEvent
    );
  }
}

customElements.define('search-bar', SearchBar);
