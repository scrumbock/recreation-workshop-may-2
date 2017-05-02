var gallery = document.getElementsByClassName('gallery')[0];
console.log(gallery);

$.ajax({
    url: "https://api-practice-wdi.herokuapp.com/posts",
    method: "GET",
    
    success: function(response){
        console.log(response);
        displayPosts(response.posts)
    }

})

function displayPosts(postsArray) {

	postsArray.forEach(function(post) {
		var newDiv = "<div class='gallery-item'>";
		newDiv += post.title;

		var imageDiv = "<div class='gallery-item__img'></div>";
		newDiv += imageDiv;


		newDiv += "</div>";
		gallery.innerHTML += newDiv;



	});

	var imageDivs = document.getElementsByClassName('gallery-item__img');
	console.log(imageDivs);

	[].forEach.call(imageDivs, function(div, index) {
		div.style.backgroundImage = "url('" + postsArray[index].img + "')";
	});
}