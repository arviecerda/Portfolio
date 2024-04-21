const body = document.querySelector("main");
     sidebar = body.querySelector(".sidebar"),
     toggle = body.querySelector(".toggle"),
     searchBtn = body.querySelector(".search-box"),
     modeSwitch = body.querySelector(".toggle-switch"),
     modeText = body.querySelector(".mode-text");

   //   for sidebar for checking user width

     window.addEventListener('resize', function() {
      if (window.innerWidth <= 560) {
          document.querySelector('.sidebar').classList.add('close');
      } else {
          document.querySelector('.sidebar').classList.remove('close');
      }
  });
  
  // Check screen width on page load
  if (window.innerWidth <= 560) {
      document.querySelector('.sidebar').classList.add('close');
  }

     toggle.addEventListener('click', ()=>{
        sidebar.classList.toggle("close")
     });
     
   //   searchBtn.addEventListener('click', ()=>{
   //      sidebar.classList.remove("close")
   //   });

     modeSwitch.addEventListener('click', ()=>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode";
         }else{
            modeText.innerText = "Dark Mode";
         }
     })


   //   TODO Show articles and Hide articles
const btns = document.querySelectorAll('.btn');
const profile = document.querySelector('.damn');
const articles = document.querySelectorAll('.article');

profile.addEventListener('click', function(e){
   const id = e.target.dataset.id;
   if(id){
      btns.forEach(function(btn){
         btn.classList.remove("active");
         e.target.classList.add("active");
      });
      // TODO to hide other articles
      articles.forEach(function(article){
         article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
   }
})
