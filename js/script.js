
var myObject = new Vue({
  el: '#app',
  data:
  {
    imageIndex: 0,
    images: [
      "img/lifepaths.jpg",
      "img/nomad.png",
      "img/Streetkid.jpg",
      "img/corp.jpg"

    ]
  },

  created: function() {
    setInterval(this.nextImage, 4000);

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
