
function showMessage() {
    const startDate = new Date("2021-06-08");
    const today = new Date();
    const diffTime = today - startDate;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayCount = Math.floor(diffTime / oneDay);
    const index = dayCount % messages.length;
    document.getElementById("daysCounter").innerText = `Bugün ${dayCount}. günümüz`;
    document.getElementById("message").innerText = `${dayCount + 1}. Mesaj: ` + messages[index];
}
