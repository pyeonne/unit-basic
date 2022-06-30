class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      // * 서비스 내부에 fetch()를 둔다면 단위 테스트를 하기 어려움
      // * why? 네트워크에 항상 의존하면 단위 테스트가 어려워짐
      // * 그래서 별도의 클라이언트 클래스로 따로 추출하는 것이 좋음
      //return fetch('http://example.com/login/id+password') //
      // .then((response) => response.json());
      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;
