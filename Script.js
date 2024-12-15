document.addEventListener("DOMContentLoaded", () => {
    const offers = document.querySelectorAll('.offer');
    offers.forEach(offer => {
        const radio = offer.querySelector('input[type="radio"]');
        const dropdowns = offer.querySelectorAll('.dropdowns');

        dropdowns.forEach(d => {
            d.style.display = radio.checked ? 'flex' : 'none';
        });

        // Add a click event listener to the radio button
        radio.addEventListener('click', () => {
            // Remove borders from all offers
            offers.forEach(o => {
                o.classList.remove('most-popular')
                o.style.border = '1px solid #eaeaea'; // Reset border for other offers
            });

            // Add border to the selected offer
            offer.style.border = '2px solid red';
            offer.classList.add('most-popular')

            // Hide all dropdowns first
            document.querySelectorAll('.offer .dropdowns').forEach(d => {
                d.style.display = 'none';
            });

            // Show dropdowns for the selected offer
            dropdowns.forEach(d => d.style.display = 'flex');
        });
    });
});