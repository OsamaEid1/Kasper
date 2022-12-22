// Start Portfolio
let lis = document.querySelectorAll(".shuffle li");
let boxes = document.querySelectorAll(".imgs-container .box");

lis.forEach( li => {
    li.onclick = () => {
        //remove Active class from element that have it
        document.querySelector(".shuffle .active").classList.remove("active");
        //add Active class for this clicked element
        li.classList.add("active");
        
        //show OR hide boxes according to the clicked item
        boxes.forEach((box) => {
            if (li.innerHTML == "All") box.style.display = "block";
            else if (box.dataset.cat != li.innerHTML)
                box.style.display = "none";
            else box.style.display = "block";
        });
    }
});

// Start Video 
let videoTextBtn = document.querySelector(".video .text button");

videoTextBtn.onclick = () => {
    //remove text from on the video
    videoTextBtn.parentElement.style.display = "none";
}

// Start Stats AND Progress Pars
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .box .number");
let ourSkillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".skills .prog-holder .prog span");

let started = false;
let fullWidth = false;
window.onscroll = () => {
    if (scrollY > statsSection.offsetTop - 350) {
        if (!started) {
            increaseStatsNumbers();
        }

        if (scrollY > ourSkillsSection.offsetTop - 350) {
            if (!fullWidth) {
                fillProgressPar();
            }
        }
    }
}

function increaseStatsNumbers() {
    nums.forEach((num) => {
        let goal = num.dataset.goal;
        let counter = setInterval(() => {
            num.textContent++;
            if (num.textContent == goal) {
                clearInterval(counter);
            }
        }, 2000 / goal);
    });
    started = true;
}


// Start Progress Par 

function fillProgressPar() {
    console.log("hi");
    spans.forEach(span => {
        console.log(span.dataset.progress);
        span.style.width = span.dataset.progress;
    });
    fullWidth = true;
}