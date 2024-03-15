


const bars = document.querySelector('.bars');
const barsId = document.querySelector('#bars');
const lines = document.querySelector('.lines');
const linesId = document.querySelector('#lines');
const listNav = document.querySelector('.list-nav');
const leftSquare = document.querySelector('.left-square');
const leftSquareId = document.querySelector('#left-square');
const semiCircle = document.querySelector('.right-semi-circle');
const semiCircleId = document.querySelector('#right-semi-circle');
const brand = document.querySelector('.brand');
const overlay = document.querySelector('.overlay');
const overlayId = document.querySelector('#overlay');
const ceo = document.querySelector('.ceo');
const navbar = document.querySelector('.cus-navbar');
const prev = document.querySelector('.left-btn');
const next = document.querySelector('.right-btn');



bars.addEventListener('click',()=>
{
    overlay.classList.toggle('show')
    listNav.classList.toggle('show');
    leftSquare.classList.toggle('show');
    semiCircle.classList.toggle('show');
    ceo.classList.toggle('show');
    // brand.classList.toggle('hide');
    bars.classList.toggle('show');
    document.body.classList.toggle('block');
})

document.body.addEventListener('click', (e) => {
    if (e.target.id !== 'left-square' && e.target.id !== 'right-semi-circle' && e.target.id !== 'bars' && e.target.id !== 'lines') {
        overlay.classList.remove('show')
        listNav.classList.remove('show');
        leftSquare.classList.remove('show');
        semiCircle.classList.remove('show');
        ceo.classList.remove('show');
        bars.classList.remove('show');
        document.body.classList.remove('block');
    }
})

document.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navbar.classList.add('nav-color')
    } else {
        navbar.classList.remove('nav-color')
    }
})








const employees = document.querySelectorAll('.ytaskers .in-ytaskers');
const allEmp = Array.from(employees);

let count = 0

emp(count)
prev.addEventListener('click', () => {
    count -= 1;
    emp(count);
})
next.addEventListener('click', () => {
    count += 1;
    emp(count);
})


    

const text = document.querySelectorAll('.text p');
const arrP = Array.from(text)


arrP.forEach(element => {
    const text = element.innerText
    element.innerHTML = text.split("").map((char, i) => `<span style="transform: rotate(${i * 25}deg)">${char}</span>`).join("");
});


function emp(id) {
    const lengthArr = allEmp.length - 1;
    if (id == lengthArr) {
        next.disabled = true
    } else {
        next.disabled = false
    }
    if (id == 0) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }
    allEmp.forEach(element => {
        element.classList.remove('show');
    });
    allEmp[id].classList.add('show')
}



function getClientId(id){
    const reviewId = document.querySelectorAll('.testimonial .points')
reviewId.forEach(element => {
    element.classList.remove('show')
    if (id == element.id) {
        element.classList.add('show')
    }
});
const client = document.querySelectorAll('.client');
client.forEach(element => {
    element.classList.remove('show')
    if (id == element.id) {
        element.classList.add('show')
    }
});
const client1 = document.querySelectorAll('.client1');
client1.forEach(element => {
    element.classList.remove('show')
    if (id == element.id) {
        element.classList.add('show')
    }
});

}

let newDate = new Date();
let yearDate = newDate.getFullYear();

document.getElementById('date').innerHTML = yearDate;
console.log(newDate);
console.log(yearDate);







    


