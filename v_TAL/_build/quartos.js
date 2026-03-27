document.addEventListener("DOMContentLoaded", () => {

    const filters = document.querySelectorAll('.filter-chip');
    const rooms = document.querySelectorAll('.room-card');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {

            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const category = filter.getAttribute('data-filter');

            rooms.forEach(room => {
                const roomCategory = room.getAttribute('data-category');

                if (category === 'all' || roomCategory.includes(category)) {
                    room.style.display = '';
                } else {
                    room.style.display = 'none';
                }
            });
        });
    });

});