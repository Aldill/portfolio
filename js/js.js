function show(elem, parent, _co, amount){
    document.getElementsByClassName(elem)[0].addEventListener("click", function () {
        document.getElementsByClassName(parent)[0].style._co = amount;

    });
}


/*
// click to show more about me
        document.getElementsByClassName("box__item--top")[0].addEventListener("click", function () {
            document.getElementsByClassName("about")[0].style.right = "0";
        });

        document.getElementsByClassName("about__close")[0].addEventListener("click", function () {
            document.getElementsByClassName("about")[0].style.right = "-20vw";
        })

        document.getElementsByClassName("box__item--center")[0].addEventListener("click", function () {
            document.getElementsByClassName("pages")[0].style.bottom = "0";
        })

        document.getElementsByClassName("pages__close")[0].addEventListener("click", function () {
            document.getElementsByClassName("pages")[0].style.bottom = "-75vh";
        })*/