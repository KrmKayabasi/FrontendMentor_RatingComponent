const mainContainer = document.querySelector(".wrapper");
const thanksContainer = document.querySelector(".thanks");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rate");

submitButton.addEventListener("click", () => {
    mainContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})

