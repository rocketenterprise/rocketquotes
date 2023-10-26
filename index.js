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
    popup.innerHTML = "<h2>Insurance Quotes</h2>";
    quotes.forEach((quote) => {
        popup.innerHTML += `
            <div class="quote-card">
                <h3>${quote.provider}</h3>
                <p>${quote.quote}</p>
            </div>
        `;
    });

    popup.style.display = "block";
});