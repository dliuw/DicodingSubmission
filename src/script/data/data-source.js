class DataSource {
	static getCategory(){
		return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
		.then(response =>{
			return response.json();
		})
		.then(responseJson => {
			return Promise.resolve(responseJson);
		})
		catch(error => {
			return Promise.reject('Error');
		})
	}
}