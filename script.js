function shareCard() {
    if (navigator.share) {
        navigator.share({
            title: "TekzoBD",
            text: "TekzoBD - Electronics & Electrical Service",
            url: window.location.href
        });
    } else {
        alert("Your browser does not support sharing.");
    }
}