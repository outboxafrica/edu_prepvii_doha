function openSlide(){
  document.querySelector('.open-slide').style.display = "none";
    document.querySelector('.side-menu').style.width= '250px';
    // document.querySelector('.page').style.marginLeft= '250px';
  }
  function closeSlide(){
    document.querySelector('.open-slide').style.display = "flex";
    document.querySelector('.side-menu').style.width = '0px';
    document.querySelector('.page').style.marginLeft = '0px';
  }

  