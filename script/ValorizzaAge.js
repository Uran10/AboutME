function valorizzaAge() {
    var birthday = new Date("Sep 18, 1980 01:00:00").getTime();
    var now = new Date().getTime();
    var distance = now - birthday;
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    document.getElementById("countDown").innerHTML = years.toString();
};
