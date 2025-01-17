const stars = document.querySelectorAll('.star');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                // Reset all stars
                stars.forEach(s => s.classList.remove('rated'));

                // Highlight the selected stars
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('rated');
                }

                console.log(`You rated this book: ${index + 1} star(s)`);
            });
        });

        // Open PDF book
        function openBook(pdfFile) {
            window.open(pdfFile, '_blank');
        }

        function toggleLike(bookId) {
            const likeButton = document.getElementById(`like${bookId}`);
            if (!likeButton) {
                console.log("Error: Like button not found!");
                return;
            }
        
            console.log(`Button clicked for book with ID ${bookId}`);
            console.log(`Current button text: ${likeButton.innerText}`);
        
            if (likeButton.innerText === "Liked") {
                likeButton.innerText = "Unliked";
                likeButton.classList.add('unliked');
                console.log("Button text changed to 'Unliked'");
            } else {
                likeButton.innerText = "Liked";
                likeButton.classList.remove('unliked');
                console.log("Button text changed to 'Liked'");
            }
        }

        
        let navbar = document.querySelector('.navbar');

        document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        }