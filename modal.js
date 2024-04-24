function checkEmail() {
    var emailField = document.getElementById('field');
    var email = emailField.value;
    
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(emailReg.test(email)) {
        var message = 'Congratulations! You are subscribed';
        emailField.value = '';
        showModal(message);
        setTimeout(function() {
            hideModal();
        }, 2000);
    } else {
        emailField.value = '';
        var errorMessage = 'Please, enter a correct e-mail.';
        showModal(errorMessage); setTimeout(function() {
            hideModal();
        }, 3000);
    }
}

function showModal(message) {
    var modal = document.getElementById('modal');
    var modalMessage = document.getElementById('modal-message');
    modalMessage.innerHTML = message;
    modal.style.display = 'block';
    
    // закриваємо модальне вікно за допомогою "X"
    var closeButton = document.getElementsByClassName('close')[0];
    closeButton.onclick = function() {
        hideModal();
    }
}

function hideModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}