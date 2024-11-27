
(function () {
    const inner1 = document.getElementById('inner1');
    const inner2 = document.getElementById('inner2');

    if (inner1 && inner2) {
        const speed = 0.8; // Adjust speed as needed
        const inner1Width = inner1.offsetWidth;
        const inner2Width = inner2.offsetWidth;
        let inner1Offset = 0;
        let inner2Offset = 0;

        // Clone and append content for continuous looping (increased cloning)
        inner1.innerHTML += inner1.innerHTML + inner1.innerHTML; // Triplicate the content of inner1
        inner2.innerHTML += inner2.innerHTML + inner2.innerHTML; // Triplicate the content of inner2

        function animateInner1() {
            inner1Offset -= speed;

            // Continuous looping logic
            if (inner1Offset < -inner1.scrollWidth / 3 + inner1Width) { // Check if one-third of the content has scrolled past
                inner1Offset = 0; // Reset to the starting position
            }

            inner1.style.transform = `translateX(${inner1Offset}px)`;
            requestAnimationFrame(animateInner1);
        }

        function animateInner2() {
            inner2Offset += speed;

            // Continuous looping logic
            if (inner2Offset > inner2.scrollWidth / 3 - inner2Width) { // Check if one-third of the content has scrolled past
                inner2Offset = 0; // Reset to the starting position
            }

            inner2.style.transform = `translateX(${inner2Offset}px)`;
            requestAnimationFrame(animateInner2);
        }

        animateInner1();
        animateInner2();
    }
})();

``
const cursor = document.querySelector('.cursor-mouse');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});