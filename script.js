function navAnimation(){
    let nav =document.querySelector('nav');
nav.addEventListener("mouseenter",function(){
  

    let tl=gsap.timeline()

    tl.to("#nav-bottom",{
        height:'23vh',
        duration:0.1
    })
    tl.to(".nav-part2 h5",{
        display:"block",
        duration:0.1
    })

    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.1
        }
    })
})

nav.addEventListener("mouseleave",function(){
  

    let tl=gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.1
        }
    })

    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })

    tl.to("#nav-bottom",{
        height:'0',
        duration:0.1
    })

    
})
}

function page2Animation(){
    var rightElems=  document.querySelectorAll(".right-elem");
    rightElems.forEach((elem)=>{
        elem.addEventListener("mouseenter",()=>{
            gsap.to(elem.childNodes[3],{
                opacity: 1,
                scale : 1
            })
            
        })
        elem.addEventListener("mouseleave",()=>{
            gsap.to(elem.childNodes[3],{
                opacity: 0,
                scale : 0
            })
        })
        elem.addEventListener("mousemove",(dets)=>{
            console.log(elem.getBoundingClientRect().y)
            gsap.to(elem.childNodes[3],{
                x:dets.x-elem.getBoundingClientRect().x-88,
                y:dets.y-elem.getBoundingClientRect().y-230
            })
        })
    })
}

function page3VideoAnimation(){


    var page3Center= document.querySelector(".page3-center");
    var video= document.querySelector("#page3 video");
    
    page3Center.addEventListener("click",()=>{
        video.play();
        gsap.to(video,{
            transform : "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius : 0,
            transition: "all ease 0.9s"
        })
    })
    
    video.addEventListener("click",()=>{
        video.pause();
        gsap.to(video,{
            opacity: 0,
            borderRadius : "35px",
            transform : "scaleX(0.7) scaleY(0)"
        })
    })
    
    

}

function page5Generate(){
    const datas=[{
        num:"$500M",
        para:"In funding secured owning to our designs",
        i : "/001"
    }
    ,{
        num:"+1 million",
        para:"Increase in customer base",
        i : "/002"
    }
    ,{
        num:"1 000 000+",
        para:"Of active marketplace users",
        i : "/003"
    }
    ,{
        num:"25 million",
        para:"Monthly E-commerce visits",
        i : "/004"
    }
    ,{
        num:"+300%",
        para:"Increase in sign-up conversion rate",
        i : "/005"
    }
    ,{
        num:"+42%",
        para:"Increase in the app’s retention rate",
        i : "/006"
    }
];
const page5= document.querySelector("#page5");
datas.forEach((data)=>{
    page5.innerHTML+=`
    <div class="page5Box">
          <h1>${data.num}</h1>
          <p>${data.para}</p>
          <h5>${data.i}</h5>
        </div>
    `;

})


}

page3VideoAnimation()
navAnimation()
page2Animation();

page5Generate();