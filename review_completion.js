document.addEventListener('DOMContentLoaded', function () {
    const markCompleteBtns = document.querySelectorAll('.mark-complete-btn');

    markCompleteBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Identify the review ID or relevant information
            const reviewId = btn.getAttribute('data-review-id');

            // Send the review completion status to the server (you need a backend for this)
            // Example: You can use fetch() to make an API request to your server
            fetch(`/api/mark-review-complete/${reviewId}`, {
                method: 'POST',
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the response from the server (e.g., show a success message)
                    console.log(data);
                    
                    // Optionally, update the UI to reflect that the review is complete
                    btn.disabled = true;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    });
});
