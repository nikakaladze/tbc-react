const scrollableDiv = document.querySelectorAll('.card-container');
const scrollLeftBtn = document.querySelectorAll('.scroll-left');
const scrollRightBtn = document.querySelectorAll('.scroll-right');
const customScrollbar = document.querySelectorAll('.scrollbar');
const scrollbarThumb = document.querySelectorAll('.scrollbar-drag');

let isDown = false;
let startX;
let scrollLeft;

scrollLeftBtn.forEach((scrollableLeft, index) => {
    scrollableLeft.addEventListener('click', () => {
        scrollableDiv[index].scrollBy({ left: -451, behavior: 'smooth' });
        setTimeout(() => {
            updateThumbPosition(index);
        }, 400)
    });
})

scrollRightBtn.forEach((scrollableRight, index) => {
    scrollableRight.addEventListener('click', () => {
        scrollableDiv[index].scrollBy({ left: 451, behavior: 'smooth' });
        setTimeout(() => {
            updateThumbPosition(index);
        }, 400)
    });
})

scrollableDiv.forEach((scrollDiv, index) => {
    scrollDiv.addEventListener('scroll', updateThumbPosition(index));

    scrollDiv.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - scrollDiv.offsetLeft;
        scrollLeft = scrollDiv.scrollLeft;
        scrollDiv.classList.add('active');
    });

    scrollDiv.addEventListener('mouseleave', () => {
        isDown = false;
        scrollDiv.classList.remove('active');
    });

    scrollDiv.addEventListener('mouseup', () => {
        isDown = false;
        scrollDiv.classList.remove('active');
    });

    scrollDiv.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollDiv.offsetLeft;
        const walk = (x - startX) * 2;
        scrollDiv.scrollLeft = scrollLeft - walk;
        updateThumbPosition(index);
    });
})


function updateThumbPosition(index) {
    const scrollPercentage = scrollableDiv[index].scrollLeft / (scrollableDiv[index].scrollWidth - scrollableDiv[index].clientWidth);
    const thumbPosition = scrollPercentage * (customScrollbar[index].clientWidth - scrollbarThumb[index].clientWidth);
    scrollbarThumb[index].style.left = `${thumbPosition}px`;
}