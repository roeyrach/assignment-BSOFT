function addStarRatingListeners(id) {
	var q = document.querySelectorAll("[id^='" + id + "'] div")

	var reversedQ = Array.from(q).reverse()
	reversedQ.pop()

	var previousStars = []
	var starClicked = false
	reversedQ.forEach((star, index1) => {
		star.addEventListener("mouseover", () => {
			if (!starClicked) {
				// Set the current star to hover state
				star.querySelector("img").src = "images/star-full-darkBlue.svg"

				// Set the previous stars to hover state
				for (let i = 0; i < previousStars.length && i <= index1; i++) {
					previousStars[i].querySelector("img").src = "images/star-full-darkBlue.svg"
				}
			}
		})

		star.addEventListener("mouseout", () => {
			if (!starClicked) {
				// Set the current star to empty state
				star.querySelector("img").src = "images/star-empty-darkBlue.svg"

				// Set the previous stars to empty state
				for (let i = 0; i < previousStars.length && i <= index1; i++) {
					previousStars[i].querySelector("img").src =
						"images/star-empty-darkBlue.svg"
				}
			}
		})
		star.addEventListener("click", () => {
			// Set the current star and all the previous stars to full state
			for (let i = 0; i <= index1; i++) {
				previousStars[i].querySelector("img").src = "images/star-full-darkBlue.svg"
			}
			starClicked = true
		})

		// Add the current star to the previous stars array
		previousStars.push(star)
	})
}

window.addEventListener("DOMContentLoaded", function () {
	addStarRatingListeners("one")
	addStarRatingListeners("two")
	addStarRatingListeners("three")
	addStarRatingListeners("four")
	addStarRatingListeners("five")
})
