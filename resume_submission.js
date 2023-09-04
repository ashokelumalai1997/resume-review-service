document.addEventListener('DOMContentLoaded', function () {
    const submitResumeLinkBtn = document.querySelector('#submit-resume-link');
    const resumeLinkInput = document.querySelector('#resume-link');

    submitResumeLinkBtn.addEventListener('click', function () {
        // Get the resume link from the input field
        const resumeLink = resumeLinkInput.value;

        // Perform validation if needed

        // Send the resume link to the server (you need a backend for this)
        // Example: You can use fetch() to make an API request to your server
        fetch('/api/submit-resume', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ resumeLink }),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server (e.g., show a success message)
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
