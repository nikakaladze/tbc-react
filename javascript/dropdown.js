const dropdownToggleArray = document.querySelectorAll('.toggle-menu-footer-responsive-content');
const dropdownContentArray = document.querySelectorAll('.toggle-menu-footer-dropdown-content');
dropdownToggleArray.forEach((dropdownToggle, index) => {
    dropdownToggle.addEventListener('click', () => {
        closeDropdowns(index)
        dropdownToggle.classList.toggle('open')
        dropdownContentArray[index].classList.toggle('open')
    })
})


function closeDropdowns(indexNumber) {
    dropdownToggleArray.forEach((dropdownToggle, index) => {
        if (indexNumber !== index) {
            dropdownToggle.classList.remove('open')
            dropdownContentArray[index].classList.remove('open')
        }
    })
}