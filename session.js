function checkLogin() {
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
}

checkLogin();
