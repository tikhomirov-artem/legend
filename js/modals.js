const dialogModal = document.getElementById("order-modal")
const dialogModalSuccess = document.getElementById("order-modal-success")
const orderForm = document.getElementById("order-modal-form")
const allOrderTriggers = document.querySelectorAll(".order-trigger")

const modals = [
    {
        el: dialogModal
    },
    {
        el: dialogModalSuccess
    }
]

function openDialogModal() {
    this.opened = true
    this.style.display = "block"
    this.showModal()
}

function closeDialogModal() {
    this.opened = false
    this.close()
    this.style.display = "unset"
}

function initOrderDialogTriggers() {
    if (allOrderTriggers.length) {
        allOrderTriggers.forEach(item => {
            item.onclick = function (e) {
                e.preventDefault()
                openDialogModal.call(dialogModal)
                addClickOutsideContentListener()
            }
        })
    }
}

function handleClickOutsideContentDialog(e) {
    if (!e.target.closest(".order-trigger") && !e.target.classList.contains("order-trigger")) {
        modals.forEach(modal => {
            if (modal.el.opened) {
                if (!e.target.closest(".order-modal__content")) {
                    modal.el.opened = false
                    closeDialogModal.call(modal.el)

                    if (!modals.some(item => item.el.opened)) {
                        removeClickOutsideContentListener()
                    }
                }
            }
        })
    }
}

function addClickOutsideContentListener() {
    document.addEventListener("click", handleClickOutsideContentDialog)
}

function removeClickOutsideContentListener() {
    document.removeEventListener("click", handleClickOutsideContentDialog)
}

initOrderDialogTriggers()

orderForm.onsubmit = () => openDialogModal.call(dialogModalSuccess)