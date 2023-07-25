function login() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

        if (user == "admin" && password == "admin"){
            location.href = "home.html"
        }

}