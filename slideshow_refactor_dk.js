var slideshow = {

	photoList: ["photo1", "photo2", "photo3", "photo4", "photo5"],

	currentPhotoIndex: 0,

	// need to set as a property, as it's something we must be able to measure (in time)
	playInterval: "",

	play: function() {
		// then we can apply the function to the property
		playInterval = setInterval( function (){
			if ( this.currentPhotoIndex < ( this.photoList.length ) ) {
				console.log(this.photoList[this.currentPhotoIndex]);
				this.currentPhotoIndex += 1;
			} else {
				console.log("End of slideshow");
				// remember: need to call the function, even in an object!
				this.pause();
			}
		}.bind(this), 2000);	
	},

	pause: function() {
		// no need to refer to 'this' here
		clearInterval(playInterval);
	}

}

console.log(slideshow.play());
