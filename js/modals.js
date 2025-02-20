const dialogModal = document.getElementById("order-modal")
const dialogModalo = document.getElementById("order-modal-o")
const orderForm = document.getElementById("order-modal-form")

dialogModal.showModal()

orderForm.onsubmit = e => {
    console.log("Имитация отправки данных");
    dialogModalo.showModal()
}