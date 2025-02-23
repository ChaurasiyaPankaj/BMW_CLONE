let prevScrollPos = window.scrollY;
        window.addEventListener("scroll", function () {
            let currentScrollPos = window.scrollY;
            let navbar = document.getElementById("navbar");

            if (currentScrollPos > 50) {
                if (currentScrollPos > prevScrollPos) {
                    navbar.style.top = "-15vh"; 
                } else {
                    navbar.style.top = "0"; 
                }
            }
            prevScrollPos = currentScrollPos;
        });

        document.addEventListener("DOMContentLoaded", function () {
            const slider = document.querySelector(".slider");
            const slides = Array.from(slider.children);
            const slideWidth = slides[0].offsetWidth + 10; // Add gap/margin if any

            // Duplicate slides for seamless infinite effect
            slides.forEach(slide => {
                let clone = slide.cloneNode(true);
                slider.appendChild(clone);
            });

            let autoScrollInterval;

            function startAutoScroll() {
                autoScrollInterval = setInterval(() => {
                    slider.scrollBy({ left: slideWidth, behavior: "smooth" });

                    if (slider.scrollLeft >= (slideWidth * slides.length)) {
                        setTimeout(() => {
                            slider.scrollTo({ left: 0, behavior: "instant" });
                        }, 500);
                    }
                }, 3000);
            }

            function scrollSlider(direction) {
                clearInterval(autoScrollInterval); // Pause auto scroll
                slider.scrollBy({ left: direction * slideWidth, behavior: "smooth" });

                if (slider.scrollLeft >= (slideWidth * slides.length)) {
                    setTimeout(() => {
                        slider.scrollTo({ left: 0, behavior: "instant" });
                    }, 500);
                }
                startAutoScroll(); // Restart auto scroll after manual action
            }

            startAutoScroll();
        });


        let frame_3_currentIndex = 0;
            const frame_3_slides = document.querySelectorAll(".frame_3-slider-track img");
            const frame_3_totalSlides = frame_3_slides.length;

            function frame_3_updateSlider() {
                const slider = document.querySelector(".frame_3-slider-track");
                slider.style.transform = `translateX(${-frame_3_currentIndex * 600}px)`;
                document.getElementById("frame_3-currentSlide").innerText = frame_3_currentIndex + 1;
            }

            function frame_3_moveSlide(step) {
                frame_3_currentIndex += step;
                if (frame_3_currentIndex >= frame_3_totalSlides) frame_3_currentIndex = 0;
                if (frame_3_currentIndex < 0) frame_3_currentIndex = frame_3_totalSlides - 1;
                frame_3_updateSlider();
            }

frame_3_updateSlider();