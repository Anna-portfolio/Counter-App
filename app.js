let valueOne = document.getElementById("counter-value1");
let valueTwo = document.getElementById("counter-value2");
let valueThree = document.getElementById("counter-value3");
let scrollDownButton = document.getElementById("scrolldown-btn");
let scrollUpButton = document.getElementById("scrollup-btn");

valueOne.innerHTML = "0";
valueTwo.innerHTML = "0";
valueThree.innerHTML = "0";

function getCount() {
    function getCounterOne() {
        let i = 0;
        let intervalOne;

        function counterOne() {
            let valueOneInt = 500;
            if (i >= valueOneInt) {
                clearInterval(intervalOne);
            }

            valueOne.innerHTML = i;
            i = i + 10;
        }

        intervalOne = setInterval(counterOne, 20);
    }
    function getCounterTwo() {
        let i = 0;
        let intervalTwo;

        function counterTwo() {
            let valueTwoInt = 1000;
            if (i >= valueTwoInt) {
                clearInterval(intervalTwo);
            }

            valueTwo.innerHTML = "+" + i;
            i = i + 20;
        }

        intervalTwo = setInterval(counterTwo, 20);
    }
    function getCounterThree() {
        let i = 0;
        let intervalThree;

        function counterThree() {
            let valueThreeInt = 20;
            if (i >= valueThreeInt) {
                clearInterval(intervalThree);
            }

            valueThree.innerHTML = i;
            i++;
        }

        intervalThree = setInterval(counterThree, 25);
    }

    getCounterOne();
    getCounterTwo();
    getCounterThree();
}

scrollDownButton.addEventListener("click", () => {
    let y = this.pageYOffset;
    window.scrollBy(y, 1000);
});

scrollUpButton.addEventListener("click", () => {
    let y = this.pageYOffset;
    window.scrollBy(y, -1000);
});

window.addEventListener("scroll", () => {
    if (this.pageYOffset > window.screen.availHeight) {
        getCount();
        //replaces getCount() with an empty function, so that it is called only once
        getCount = function () {};
    }
});
