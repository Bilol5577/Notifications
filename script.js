function showNotification(type) {
    const container = document.getElementById('notificationContainer');

    let message = "";
    switch (type) {
      case 'success':
        message = "Well done!";
        break;
      case 'error':
        message = "Oh snap! Change a few things up.";
        break;
      case 'warning':
        message = "Warning!";
        break;
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <span>${message}</span>
      <span class="close" onclick="this.parentElement.remove()">×</span>
    `;

    container.appendChild(notification);

    // Avtomatik yo‘qolishi (3 soniyadan keyin)
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }