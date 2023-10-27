document.getElementById("insurance-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const zipcode = document.getElementById("zipcode").value;

    const quotes = [
        { provider: "Provider 1", quote: "$100/month" },
        { provider: "Provider 2", quote: "$120/month" },
        { provider: "Provider 3", quote: "$90/month" },
    ];

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