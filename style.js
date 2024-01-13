 var right=document.getElementById('right');
    right.style.maxHeight="0px";

    function menuToggle(){
        if(right.style.maxHeight=="0px"){
            right.style.maxHeight="200px";
        }else{
            right.style.maxHeight="0px"
        }
    }

  const toggleModal = () => {
   iletisimEl= document.querySelector(".iletisim");
  iletisimEl.classList.toggle('active');
};

const toggleModalcv = () => {
    cvEl= document.querySelector(".cv");
    cvEl.classList.toggle('active');
 };

 const toggleModalcizim = () => {
    çizimEl= document.querySelector(".cizim");
    çizimEl.classList.toggle('active');
 };





function mpıpdf() {
   
    var yeniSayfaURL = "mpıpdf.html";
    
    window.location.href = yeniSayfaURL;
}
function uppdf() {
   
    var yeniSayfaURL = "uppdf.html";
    
    window.location.href = yeniSayfaURL;
}
function ctpdf() {
   
    var yeniSayfaURL = "ctpdf.html";
    
    window.location.href = yeniSayfaURL;
}
function fckpdf() {
   
    var yeniSayfaURL = "fckpdf.html";
    
    window.location.href = yeniSayfaURL;
}

function button() {
   
    var yeniSayfaURL = "style1.html";
    
    window.location.href = yeniSayfaURL;
}

