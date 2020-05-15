
        let links = document.querySelectorAll("a")       
        for(let i=0; i<links.length; i++){
          links[i].addEventListener("mouseover",function(){
            alert(links[i].href)
          })
        }
 
        function hideImages(){
          let images = document.querySelectorAll("img")
          for(let i=0; i<images.length; i++){
            images[i].style.display="none"
          }
        }
 
        var show = true;
        function hideTable(){
         let table = document.querySelector("table")
          if(show == true){
           table.style.visibility="hidden"
           show=false
          }else{
            table.style.visibility=""
            show=true
          }
        }
 
        function titleRemover(){
           let title = document.querySelector("title")
           let newTitle = title.innerText
           let newStr = newTitle.substring(0, newTitle.length - 1);
           document.querySelector("title").innerText=newStr
        }
       
        function removeTable(){
         let table = document.querySelector("table")
         table.style.display="none"
        }
     </script>