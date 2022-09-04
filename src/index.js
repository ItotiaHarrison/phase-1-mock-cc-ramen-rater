// write your code here

document.addEventListener('DOMContentLoaded', () => {

    function fetchData() {
        fetch('http://localhost:3000/ramens')
            .then(response => response.json())
            .then(ramenData => ramenData.forEach(data => appendData(data)))
    }
    fetchData()

    const appendData = (data) => {
        const imgDiv = document.getElementById("ramen-menu")
        const img = document.createElement("img")
        img.src = data.image
        imgDiv.appendChild(img)
        img.addEventListener("click", () => updateProfile(data))



    }

    const updateProfile = (data) => {
        const ramenDetails = document.getElementById("ramen-detail")
        ramenDetails.innerHTML = `<img class="detail-image" src="${data.image}" alt="${data.name}" />
                              <h2 class="name">${data.name}</h2>
                              <h3 class="restaurant">${data.restaurant}</h3>`

        const rating = document.getElementById("rating-display")
        rating.innerText = data.rating
        const comment = document.getElementById("comment-display")
        comment.innerText = data.comment
    }

    function updateFromForm() {
        const form = document.getElementById("new-ramen")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const name = form.name.value
            const restaurant = form.restaurant.value
            const rating = form.rating.value
            const image = form.image.value
            console.log(image)

                (document.getElementById("ramen-menu").innerHTML += `<img src="${image}"/>`).addEventListener("click", () => updateProfile(data))

            console.log(name)

        })
    }
    updateFromForm()

})
