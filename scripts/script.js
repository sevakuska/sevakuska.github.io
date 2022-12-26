const changeColorTheme = function() {
    element = document.getElementById('cringe');
    if (element.dataset.bsTheme == 'light') {
        document.getElementById('logo_img').src = '/images/logo_light.png';
        element.dataset.bsTheme = 'dark';
        document.getElementById('change-theme-button').innerText = 'Светлая тема';
        footer = document.getElementById('footer');
        footer.classList.remove('bg-dark');
        footer.classList.add('bg-light');
        document.getElementById('ithub_ekat_footer_logo').src = '/images/ithub_ekat_dark.png';
    } else {
        document.getElementById('logo_img').src = '/images/logo_dark.png';
        element.dataset.bsTheme = 'light';
        document.getElementById('change-theme-button').innerText = 'Тёмная тема';
        footer.classList.remove('bg-light');
        footer.classList.add('bg-dark');
        document.getElementById('ithub_ekat_footer_logo').src = '/images/ithub_ekat_light.png';
    }
}