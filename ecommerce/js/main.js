let buttons=document.querySelectorAll(".courses button");
let data=document.querySelector(".courserow .coursedata h2");
let datap=document.querySelector(".courserow .coursedata p");
let cdb=document.querySelector(".cdb h4");
let cimg=document.querySelector(".cimg");
const course_description={'Data Analytics':'Join this 16 weeks, Job-ready Program to master Data Analytics from scratch with Top Data Analysts from Microsoft, KPMG, Amazon, and Rapido.'
                          ,'Digital Marketing':'Join the best online digital marketing course in India by WsCube Tech. Become a digital marketer with our comprehensive program to elevate your career to reach new professional heights and excel in today s competitive landscape in 24 weeks.'
                          ,'Web Development':'Join the best full stack developer course online and accelerate your career as a skilled web developer. Learn from the top industry mentors and launch your career in Full Stack Web Development.'
                          ,'Cyber Security':'Learn the basics of ethical hacking and cyber security with the best online ethical hacker course in India. This training program is designed for beginners and covers core concepts, hacking methodologies, tools, techniques, and more.'
                          ,'App Development':'Learn Flutter from scratch and build a promising career with WsCube Tech’s online Flutter course. Get mentorship from experienced Flutter developers, with regular LIVE classes, hands-on projects, certification, and placement assistance.'
};

buttons.forEach(button=>{
    button.addEventListener("click",()=>
    {
        let courseName=button.querySelector("h5").innerText;
        data.innerText=`${courseName} Mentor Ship`;
        datap.innerText=course_description[courseName];
        cdb.innerText=courseName;
        cimg.innerHTML=`<img src="images/${courseName}.webp "class="img-thumbnail">`;

    });
});