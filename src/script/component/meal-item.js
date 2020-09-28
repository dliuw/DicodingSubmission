class MealItem extends HTMLElement {
  constructor() {
    super();
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col mb-4">
      <div class="card">
        <div class="row no-gutters">
          <div class="col-12">
            <img src="${this._meal.strMealThumb}" class="card-img"
              alt="Spicy Arabiata Penne">
          </div>
          <div class="col-12">
            <div class="card-body">
              <h5 class="card-title meal-name">${this._meal.strMeal}</h5>
              <p class="card-text"><small class="meal-category">${this._meal.strCategory}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("meal-item", MealItem);