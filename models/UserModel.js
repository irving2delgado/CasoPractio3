class UserModel {
  constructor() {
    this.users = [];
  }

  async fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
      return this.users;
    } catch (error) {
      console.error('Error al obtener datos de usuarios:', error);
      return [];
    }
  }

  getUsers() {
    return this.users;
  }
}

  