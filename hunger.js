document.addEventListener('DOMContentLoaded', (event) => {
    const updatesButton = document.getElementById('updatesButton');
    const updatesContent = document.getElementById('updatesContent');

    updatesButton.addEventListener('click', () => {
        // Toggle the display of the updates content
        if (updatesContent.style.display === 'none') {
            updatesContent.style.display = 'block';
        } else {
            updatesContent.style.display = 'none';
        }
    });
});
