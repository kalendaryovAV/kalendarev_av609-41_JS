let submitButton = document.getElementById("submitButton");


submitButton.addEventListener("click", () => {
    let username = document.getElementById("name").value;
    let tel = document.getElementById("phone").value;

    let modalText = `${username}, ожидайте звонка на указанный вами номер: ${tel}`;

    event.preventDefault();
    document.getElementById("modalTextId").innerHTML = modalText;
    document.getElementById("modalWindowId").showModal();
})

