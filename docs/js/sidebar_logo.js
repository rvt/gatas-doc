document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector('.md-nav--primary');
    if (nav) {
        var logoDiv = document.createElement('div');
        logoDiv.style.textAlign = 'center';
        logoDiv.style.marginTop = '20px';
        logoDiv.style.marginBottom = '20px';
        logoDiv.innerHTML = '';
        nav.appendChild(logoDiv);
    }
});
