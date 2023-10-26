fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data =>{
    data.forEach((user) => {
        const homeReview = document.querySelector('.home-review')
        const reviewCard = document.createElement('div')
        reviewCard.classList.add('review-card')
        reviewCard.innerHTML = `<img src="images/pic.png"><div class="user">Name: <span>${user.name}</span></div>
                                <div class="email">Email: <span>${user.email}</span></div>
                                <div class="review"><span>${user.body}</span></div>`
        homeReview.appendChild(reviewCard)
    })
})

.catch(errror => console.error('Error', error))