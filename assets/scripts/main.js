
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

// banner3
const h1Element = $0;
const parentElement = h1Element.parentElement;
const imageElement = parentElement.querySelector('img'); // Assuming the image is a direct child of the parent

if (!imageElement) {
    // Search for the image within all descendants of the parent element
    const allDescendants = parentElement.querySelectorAll('*');
    for (const descendant of allDescendants) {
        if (descendant.tagName.toLowerCase() === 'img') {
            imageElement = descendant;
            break;
        }
    }

    if (!imageElement) {
        throw new Error('Image element not found within the parent element or its descendants.');
    }
}

const data = {
    imageSrc: imageElement.src,
    cssRules: Array.from(document.styleSheets)
        .flatMap(sheet => (sheet.cssRules || []))
        .filter(rule => rule.selectorText && rule.selectorText.includes(imageElement.tagName.toLowerCase()))
        .map(rule => ({
            selectorText: rule.selectorText,
            cssText: rule.cssText,
            media: rule.media && rule.media.mediaText
        }))
};


document.addEventListener('DOMContentLoaded', function () {
    const targetElement = document.querySelector('.box-content-banner1 p');
    const originalText = targetElement.textContent;
    targetElement.textContent = ''; // Clear the original text

    const textParts = [
        { text: originalText, id: 'typing-text', newLine: false }
    ];

    let partIndex = 0;
    let charIndex = 0;
    let typingDelay = 75; // Adjust typing speed here
    let currentSpan;

    function typeNextPart() {
        if (partIndex < textParts.length) {
            const part = textParts[partIndex];
            if (!currentSpan || charIndex === 0) {
                currentSpan = document.createElement('span');
                currentSpan.id = part.id;
                targetElement.appendChild(currentSpan);
                if (part.newLine && partIndex !== 0) {
                    targetElement.appendChild(document.createElement('br'));
                }
            }

            currentSpan.textContent += part.text[charIndex];
            charIndex++;
            if (charIndex === part.text.length) {
                partIndex++;
                charIndex = 0;
                currentSpan = null;
            }
            setTimeout(typeNextPart, typingDelay);
        }
    }

    typeNextPart();
});
