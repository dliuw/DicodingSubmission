import DataSource from '../data/data-source.js';
import '../component/nav-category';

const main = () => {
  const categoryElement = document.querySelector('nav-category');

  const getCategory = async () => {
    try {
      const result = await DataSource.getCategory();
      renderResult(result);
    } catch (message) {}
  };

  const renderResult = (results) => {
    categoryElement.categories = results;
  };
};

export default main;
