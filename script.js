document.addEventListener("DOMContentLoaded",
    function(){
        const imags=document.querySelectorAll(".images img");
        
        const model=document.querySelector(".model");
        const modelImg=document.querySelector(".model-img");
        const modelTxt=document.querySelector(".model-text");
        const closeBtn=document.querySelector(".close");
        let currentInd=0;
        const prev=document.querySelector(".btnPrev");
        const nxt=document.querySelector(".btnNext");

        
        

        imags.forEach((image,index)=>{
            image.addEventListener("click",function(){
                currentInd=index;
                update();

                model.classList.add("show");
            })
        });
        function update(){
                const imc=imags[currentInd];
                modelImg.classList.remove("show");
                setTimeout(()=>{
                    modelImg.src=imc.src;
                modelTxt.innerHTML=imc.alt;
                modelImg.classList.add("show");
                },300);

        }
        nxt.addEventListener("click",function(){
            currentInd=currentInd+1>=imags.length?0:currentInd+1;
            update();
        });
        prev.addEventListener("click",function(){
            currentInd=currentInd-1<0?imags.length-1:currentInd-1;
            update();
        });


        closeBtn.addEventListener("click",function(){
            model.classList.remove("show");
        });
    }
);