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
          <p class="email"><strong><i class="fas fa-envelope"></i> Email:</strong> ${user.email}</p>
          <p class="phone"><strong><i class="fas fa-phone"></i> Teléfono:</strong> ${user.phone}</p>
        </div>
      `);
      this.userList.append(userCard);
    });
  }
}

  