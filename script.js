function randomtext() {
    var randomtxt = [
        'You are Beautiful!',
        'You are Awesome!',
        'You are a Great Person!',
        'Keep up the Good Work!',
        ];
    return randomtxt[Math.floor((Math.random() * 3.99))];
}

document.getElementById("spam").innerHTML = randomtext();
