//your JS code here. If required.

let button = document.getElementById("btn");

button.addEventListener("click", async function() {

    let message = document.getElementById("text").value;
    let delay = Number(document.getElementById("delay").value);

    let output = document.getElementById("output");

    // Create delay using Promise
    function wait(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    // Async function
    async function displayMessage() {

        await wait(delay);

        output.innerText = message;

    }

    displayMessage();

});
