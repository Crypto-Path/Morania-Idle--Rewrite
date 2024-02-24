class Notification {
    constructor(message) {
        this.message = message;
        this.create();
    }

    create() {
        const notificationContainer = document.querySelector('.notification-container');
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.style.transform = 'opacity: 0;';

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-btn');
        closeBtn.innerHTML = '&times;';

        const remove = function() {
            notification.style.transform = 'translateY(calc(100% + 10px))';
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }

        closeBtn.addEventListener('click', remove);

        const text = document.createElement('p');
        text.innerText = this.message;

        notification.appendChild(closeBtn);
        notification.appendChild(text);
        notificationContainer.appendChild(notification);
        notification.style.transform = 'opacity: 1;';

        setTimeout(() => {
            notification.classList.add('active');
        }, 100);
        
        setTimeout(remove, 5000);
    }
}

function createNotification(message) {
    new Notification(message);
}