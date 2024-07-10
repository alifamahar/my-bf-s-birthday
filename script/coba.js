
document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.container').style.animation = 'fadeIn 5s forwards';
    });
document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.container-blog').style.animation = 'fadeIn 5s forwards';
    });
function checkPassword(event) {
    event.preventDefault();
    
    const password = document.getElementById('passwordInput').value;
    const correctPassword = '230524';
    
    if (password === correctPassword) {
        window.location.href = 'page5.html';
    } else {
      document.getElementById('message').textContent = 'Wrong captcha. Try again!';
    }
  }
