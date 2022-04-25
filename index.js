const container = document.querySelector('.container')
const submit = document.querySelectorAll('.submit')
const containerRating = document.querySelector('.container-rating')
const containerRated = document.querySelector('.container-rated')
const ratingSpan = document.querySelector('.rating-span')
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('rating')){
        var ratingValue = e.target.value
        ratingSpan.textContent = ratingValue
    } else if (e.target.classList.contains('submit')){
        containerRating.style.display = 'none'
        containerRated.style.display = 'flex'
    }
})