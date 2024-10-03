document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    if (name === '' || email === '') {
        event.preventDefault(); // Prevent form submission
        alert('Please fill out the required fields.');
    }
});
