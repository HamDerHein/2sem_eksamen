        var slideIndex = 1;
        showDivs(slideIndex);
        let time = setInterval(auto, 28000, n = 1);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = x.length
            }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }

        function auto() {
            // var n = 1;
            console.log("virker auto?");
            showDivs(slideIndex += n);
        }
