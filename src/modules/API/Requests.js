import API from "./API";

class RequestsClass extends API {

  getUsers = () => this.get('/json/users.json');

  getPosts = () => this.get('/json/posts.json');

}

const Requests = new RequestsClass();

export default Requests;