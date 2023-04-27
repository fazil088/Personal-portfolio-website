// Navbar toggle

const menuIcon = document.querySelector('.bi-list')
const navbar = document.querySelector('nav')

menuIcon.addEventListener('click',function(){
    navbar.classList.toggle("show-header")
    menuIcon.classList.toggle("bi-x")
})

// Active tag in nab link

let sections = document.querySelectorAll('section')
let links = document.querySelectorAll('nav li a')

    window.onscroll = () => {
        sections.forEach((section) => {
            let top = window.scrollY;
            let offset = section.offsetTop - 300;
            let height = section.offsetHeight;
            let id = section.getAttribute('id')
    
            if(top >= offset && top < offset + height){
                links.forEach((link) => {
                    link.classList.remove("active")

                    document
                    .querySelector("nav li a[href*="+ id +"]")
                    .classList.add("active")
                })
            }
        })
        navbar.classList.remove("show-header")
        menuIcon.classList.remove("bi-x")
    }

    // Scroll Reveal

    ScrollReveal({
        reset:true,
        distance:"50px",
        duration: 1000,
        delay:100,
    })

    ScrollReveal().reveal('.home-details,.content-name2,.quote-content,.card-2,.card-4,.contact-sec2,.replit',{origin:"right"})
    ScrollReveal().reveal('.home-content img,.content-name1,.card-1,.card-3,.card-5,.github',{origin:"left"})
    ScrollReveal().reveal('.sec1-head',{origin:"bottom"})


    //Form submitting and Reloading

    $("#Submit-Form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwUnt6pB_T4U8YbuCzc8wnfFWz2lQOiXIR64CzuJV794qMeOaw-kf5323pGTy7OYGlSXw/exec",
            data:$("#Submit-Form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                FormData.clear()    
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })
