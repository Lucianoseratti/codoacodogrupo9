new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap:30,
   
    breakpoints: {
    
      1130: {
        perView: 2
      },
      650:{
          perView: 1
      }
    }
  
  }).mount();