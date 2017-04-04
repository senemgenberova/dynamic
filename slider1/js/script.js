function Slider(className, childName) {
    var self = this;
    this.main = document.querySelector(".icons");
    this.margin = 0;
    this.prev = 0;
    this.className = className;
    this.childName = childName;

    this.slide_div_length = document.getElementsByClassName(childName)[0].clientWidth; // 1 slide divin width -in olcur
    this.slider_length = document.querySelectorAll("." + childName).length; // bu slides divin icinde nece dene slide div oldugun qaytariri yeni 9
    this.slides_div_margin = document.getElementsByClassName(className)[0].style.marginLeft = 0;

    document.getElementsByClassName(className)[0].style.transition = "all 0.5s"; // bu ise transition bildiyiimiz kimi

    this.main.children[1].addEventListener("click", function() {
        self.prev++;
        // console.log("next" + prev);
        self.margin -= self.slide_div_length + 20; // burada divin olcusu + margin qeder cixmasi ucun yazdim margini-de "slide_div_length" kimi goturmek olardi
        self.slides_div_margin = document.getElementsByClassName(className)[0].style.marginLeft = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        // console.log(slides_div_margin);

        if (self.prev >= self.slider_length - 4) {
            self.margin = 0;
            self.slides_div_margin = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
            self.prev = 0;
        }
    });

    this.main.children[0].addEventListener("click", function() {
        self.prev--;
        self.margin += self.slide_div_length + 20;
        self.slides_div_margin = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        // console.log("prev" + prev);

        if (self.prev <= 0) {
            self.margin = -(self.slide_div_length + 20) * 4;
            // console.log(margin);
            self.prev = 5;
            self.slides_div_margin = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        }
    });
}

var slider1 = new Slider("slides1", "slide1");
var slider1 = new Slider("slides2", "slide2");
console.log(slider1.className);
console.log(slider1.childName);