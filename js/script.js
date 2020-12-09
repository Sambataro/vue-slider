
var myObject = new Vue({
  el: '#app',
  data:
  {
    imageIndex: 0,
    images: [
      "https://nightcity.gg/wp-content/uploads/2020/06/Cyberpunk-2077-Character-Life-Paths-1024x602.jpg",
      "https://static.wikia.nocookie.net/cyberpunk/images/4/46/Nomad_MV_Guide.png/revision/latest/scale-to-width-down/657?cb=20200626140242",
      "https://static.wikia.nocookie.net/cyberpunk/images/7/7d/Corp_FV_Guide.JPG/revision/latest/scale-to-width-down/1000?cb=20200626031237",
      "https://static.wikia.nocookie.net/cyberpunk/images/d/df/Streetkid_FV_Guide_2.jpg/revision/latest/scale-to-width-down/1000?cb=20200626031237"

    ]
  },
  methods: {
    nextImage: function() {
      this.imageIndex++;

      if (this.imageIndex == this.images.length) {
        this.imageIndex = 0;
      }
    },

    prevImage: function() {
      this.imageIndex--;

      if (this.imageIndex == -1) {
        this.imageIndex = this.images.length -1;
      }
    }
  }
 }
);
