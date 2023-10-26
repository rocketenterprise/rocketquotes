document.getElementById("insurance-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get user inputs
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const zipcode = document.getElementById("zipcode").value;

    // Simulate generating quotes (replace with actual quote generation logic)
    const quotes = [
        { provider: "Provider 1", quote: "$100/month" },
        { provider: "Provider 2", quote: "$120/month" },
        { provider: "Provider 3", quote: "$90/month" },
    ];

    // Create and display the pop-up
    const popup = document.getElementById("popup");
    popup.innerHTML = "<h2>Quotes for You:</h2>";
    quotes.forEach((quote) => {
        popup.innerHTML += `<div class="quote-card">${quote.provider}: ${quote.quote}</div>`;
    });

    // Clear form inputs
    document.getElementById("age").value = "";
    document.getElementById("zipcode").value = "";

    popup.style.display = "block";

    // Close the pop-up after a few seconds (adjust timing as needed)
    setTimeout(() => {
        popup.style.display = "none";
    }, 5000);
});