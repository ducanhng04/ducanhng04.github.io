        // Scroll to top button functionality
        window.onscroll = function() {
            const btn = document.getElementById('back-to-top');
            if (document.documentElement.scrollTop > 300) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        };

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Mark workout as complete
        function markComplete(dayId) {
            const day = document.getElementById(dayId);
            day.style.backgroundColor = '#d4edda';
            day.style.color = '#155724';
            alert(`${day.querySelector('h3').textContent} marked as complete!`);
        }