// querySelectorAll outputs a nodeList
const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {
    // dataset grabs all the data-* from the element
    const suffix = this.dataset.sizing || '';
    console.log(this.value)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
//inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));





