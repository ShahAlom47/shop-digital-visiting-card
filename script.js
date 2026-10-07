function shareCard() {
    const cardUrl = window.location.href;
    const shareTitle = "TekzoBD";
    const shareText = "TekzoBD - Electronics & Electrical Service";

    // Mobile / supported browser
    if (navigator.share) {
        navigator.share({
            title: shareTitle,
            text: shareText,
            url: cardUrl
        }).catch(() => {
            // User cancelled share — do nothing
        });

        return;
    }

    // Browser doesn't support native share
    if (navigator.clipboard) {
        navigator.clipboard.writeText(cardUrl)
            .then(() => {
                alert("Digital Card link copied!");
            })
            .catch(() => {
                copyLinkFallback(cardUrl);
            });

        return;
    }

    // Older browser fallback
    copyLinkFallback(cardUrl);
}


function copyLinkFallback(url) {
    const input = document.createElement("input");

    input.value = url;
    document.body.appendChild(input);

    input.select();
    input.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(input);

    alert("Digital Card link copied!");
}