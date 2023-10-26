document.getElementById("insurance-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get user inputs
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const zipcode = document.getElementById("zipcode").value;

    // You can open a new tab or display quotes in a modal here
    // In a real-world scenario, you'd need to fetch quotes from a server

    // For a new tab:
    window.open(`quotes.html?age=${age}&gender=${gender}&zipcode=${zipcode}`, "_blank");
    
    // For a modal, you can use a library like Bootstrap or create a custom one.
});