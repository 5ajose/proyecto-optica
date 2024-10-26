//let getUl = document.getElementsByTagName("ul")
//let getLi = document.getElementsByTagName("li")

//console.log(getUl);
//console.log(getLi);

//let getAll = document.querySelectorAll("ul li")

//console.log(getAll);


const button = document.getElementById('bgcolor');

        button.addEventListener('click', () => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        });