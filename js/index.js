function circleChange() {
    for (var i = 0; i < onlanguagechange.children.length; i++) {
        onlanguagechange.children[i].className = '';
    }
    onlanguagechange.children[circle].className = 'current';
}

var timer = setInterval(function () {
    arrow_r.click();
}, 2000);