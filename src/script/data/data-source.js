class DataSource {
  static getCategory() {
    return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((responseJson) => Promise.resolve(responseJson))
      .catch((error) => Promise.reject('Error'));
  }

  static searchItem(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} not found`);
        }
      });
  }
}
export default DataSource;
