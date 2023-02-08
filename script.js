window.addEventListener('DOMContentLoaded',function(){
    window.addEventListener('scroll',function(){
        const header=document.querySelector('.navbar');
        header.classList.toggle('sticky',window.scrollY>0)
    })
        const menuOpen=document.querySelector('.menu_open')
        const navigation = document.querySelector('.navigation')
        const navigationIteams = document.querySelectorAll('.navigation a')
        menuOpen.addEventListener('click',()=>{
            menuOpen.classList.toggle('active')
            navigation.classList.toggle('active')
        })
        navigationIteams.forEach(navIteam =>{
            navIteam.addEventListener('click',()=>{
                menuOpen.classList.remove('active')
                navigation.classList.remove('active')
            })
        })
        const scrollBtn = document.querySelector('.scrollToTop-btn')
        window.addEventListener('scroll',()=>{
            scrollBtn.classList.toggle('active',window.scrollY > 400)
        })
        scrollBtn.addEventListener('click',()=>{
            document.body.scrollTop = 0;
            document.documentElement.scrollTop=0;
        })
        window.addEventListener('scroll',()=>{
            let reveals = document.querySelectorAll('.reveal')
    
            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let revealTop = reveals[i].getBoundingClientRect().top;
                let revealPoint=50;
    
                if(revealTop < windowHeight - revealPoint){
                    reveals[i].classList.add('active')
                } 
            }
        })
    })