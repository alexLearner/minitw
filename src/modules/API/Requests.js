import API from "./API";

class RequestsClass extends API {

  getUsers = () => this.get('/json/users.json');

  getNews = () => this.get('/json/news.json');

}

const Requests = new RequestsClass();

export default Requests;