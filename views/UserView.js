class UserView {
  constructor() {
    this.userList = $('#userList');
  }

  displayUsers(users) {
    this.userList.empty();
    users.forEach(user => {
      const userCard = $(`
        <div class="user-card">
          <p><strong>Nombre:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Teléfono:</strong> ${user.phone}</p>
        </div>
      `);
      this.userList.append(userCard);
    });
  }
}

  