
document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.container-blog').style.animation = 'fadeIn 5s forwards';
    });

    document.addEventListener('DOMContentLoaded', () => {
        const nextButton = document.getElementById('nextButton');
        const containerBlog = document.querySelector('.container-blog');
    
        nextButton.addEventListener('click', () => {
            containerBlog.classList.add('fade-out'); // Menambah kelas fade-out saat tombol Next diklik
        });
    });