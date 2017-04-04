function Image(img_id){
    var self = this;

    this.main = document.getElementById("main");
    this.img = document.getElementById(img_id);
    // this.main.style.position = "relative"

    this.img.addEventListener('click', function(event) {
        var x = event.x;
        var y = event.y;

        var span = document.createElement('span');
        span.className = 'badge';
        span.style.top = y;
        span.style.left = x;
        self.main.appendChild(span);
    });

    this.main.addEventListener('click', function(event) {
        if (event.target.className == 'badge') {
            self.main.removeChild(event.target);
        }
    })
}

var image1 = new Image("img1");
var image2 = new Image("img2");
