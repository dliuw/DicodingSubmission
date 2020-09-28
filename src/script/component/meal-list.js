import "./meal-item.js";

class MealList extends HTMLElement {
  constructor() {
    super();
  }

  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.innerHTML = ``;
    this._meals.forEach(meal => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    })
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2>${message}</h2>`;
  }
}

customElements.define("meal-list", MealList);