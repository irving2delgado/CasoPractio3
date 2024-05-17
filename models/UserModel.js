class UserModel {
    constructor() {
      this.users = [];
    }
  
    async fetchUsers() {
      try {
        //Completa esta sección
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
  