let buttons = document.querySelectorAll('.nav-btn');
let articles = document.querySelectorAll('.article');

const changeBlock = function (id) {
    for (let button of buttons) {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        }
    }
    let button = buttons[id];
    if (button.classList.contains('active') == false) {
        button.classList.add('active');
        for (let article of articles) {
            if (article.classList.contains('non-visible') == false) {
                article.classList.add('non-visible');
            }
        }
    }
    let article = articles[id];
    article.classList.remove('non-visible');
}
