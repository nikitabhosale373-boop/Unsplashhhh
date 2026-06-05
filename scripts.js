
function setSidebarActive(activeId) {
  ['img', 'pen'].forEach(id => {
    let el = document.getElementById(id);
    el.style.cssText = "";
  });
  let active = document.getElementById(activeId);
  active.style.cssText = "color: black; background-color: #e0e0e0; border-radius: 4px; padding: 0px 4px";
}

function attachActiveToMenu() {
  let menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {

  
      menuLinks.forEach(l => {
        l.style.color = "";
        l.style.borderBottom = "";
        l.style.paddingBottom = "";
      });


      if (window.innerWidth < 768) {
        link.style.color = "black";
        link.style.borderBottom = "2px solid black";
        link.style.paddingBottom = "24px";
      } else {
        link.style.color = "black";
        link.style.borderBottom = "2px solid black";
        link.style.paddingBottom = "12px";
      }
    });
  });
}









let input = document.querySelector('input');

input.addEventListener('change', () => {
  console.log("Input event Triggered..!!!");
  let choice = input.value;
  input.value = "";
  fetchDataFromUnsplashServer(choice);
})

let fetchDataFromUnsplashServer = (choice) => {
  fetch(`https://api.unsplash.com/search/photos?query=${choice}&per_page=30&client_id=djfkAHyPlNGIcqE66j_VbFHDnKDkVi62OFwkh63de_o`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);

      let images = document.querySelector('.images');

      images.innerHTML = "";

      data.results.forEach((obj) => {

        console.log(obj.urls.regular);

        let img = document.createElement('img');
        img.setAttribute('src', obj.urls.regular);

        

        images.appendChild(img);
      });
    })
    .catch((err) => {
      console.log(err);
    })
}




let container = document.querySelector('.images');
const accessKey = "djfkAHyPlNGIcqE66j_VbFHDnKDkVi62OFwkh63de_o";

let queries = ["nature", "dogs", "cars", "dogs", "peoples", "tech", "travel", "tea", "cats", "books"];




window.addEventListener("load", () => {

  setSidebarActive('img');

  document.querySelector('#img').classList.add('active');
  
  container.innerHTML = "";

  document.querySelector('.menu').innerHTML = `
    <a href="#" class="featured md:hover:text-black">Featured</a>
    <a href="#" class="summer md:hover:text-black">NewSummer</a>
    <a href="#" class="wallpaper md:hover:text-black">Wallpapers</a>
    <a href="#" class="renders md:hover:text-black">3D Renders</a>
    <a href="#" class="nature md:hover:text-black">Nature</a>
    <a href="#" class="texture md:hover:text-black">Textures</a>
    <a href="#" class="film md:hover:text-black">Film</a>
    <a href="#" class="architecture md:hover:text-black">Architecture</a>
    <a href="#" class="photography md:hover:text-black">Street Photography</a>
    <a href="#" class="experimental md:hover:text-black">Experimental</a>
    <a href="#" class="travel md:hover:text-black">Travel</a>
    <a href="#" class="people md:hover:text-black">People</a>
  `;

  // document.querySelector('.featured').style.cssText = "color: black; border-bottom: 2px solid black;";

  document.querySelector('.card1 img').src = "images/card1.png";
  document.querySelector('.card2 img').src = "images/card2.png";
  document.querySelector('.card3 img').src = "images/card3.png";

  queries.forEach(q => {
    fetch(`https://api.unsplash.com/search/photos?query=${q}&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  let featured = document.querySelector('.featured');
  featured.addEventListener("click", () => {
    container.innerHTML = "";
    document.querySelector('.card1 img').src = "images/card1.png";
    document.querySelector('.card2 img').src = "images/card2.png";
    document.querySelector('.card3 img').src = "images/card3.png";
    queries.forEach(q => {
      fetch(`https://api.unsplash.com/search/photos?query=${q}&per_page=30&client_id=${accessKey}`)
        .then(res => res.json())
        .then(data => {
          data.results.forEach(imgData => {
            let img = document.createElement("img");
            img.src = imgData.urls.small;
            img.className = "w-full mb-[15px] block cursor-zoom-in";
            container.appendChild(img);
          });
        });
    });
  });

  document.querySelector('.summer').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=summer&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/summe1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/summer2.png";
        document.querySelector('.card3 img').src = "images/summer3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.wallpaper').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=wallpaper&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/wallpaper1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/wallpaper2.png";
        document.querySelector('.card3 img').src = "images/wallpaper3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.renders').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=3D+renders&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/render1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/render2.png";
        document.querySelector('.card3 img').src = "images/render3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.nature').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=nature&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/nature1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/nature2.png";
        document.querySelector('.card3 img').src = "images/nature3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.texture').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=abstract textures&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/texture1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/texture2.png";
        document.querySelector('.card3 img').src = "images/texture3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.film').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=film&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/film1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/film2.png";
        document.querySelector('.card3 img').src = "images/film3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.architecture').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=homearchitecture&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/architecture1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/architecture2.png";
        document.querySelector('.card3 img').src = "images/architecture3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.photography').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=street photography&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/photo1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/photo2.png";
        document.querySelector('.card3 img').src = "images/photo3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.experimental').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=experimental&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/exp1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/exp2.png";
        document.querySelector('.card3 img').src = "images/exp3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.travel').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=travel&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/travel1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/travel2.png";
        document.querySelector('.card3 img').src = "images/travel3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.people').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=people&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('.card1 img').src = "images/people1.png";
        document.querySelector('.card1').style.border = "none";
        document.querySelector('.card2 img').src = "images/people2.png";
        document.querySelector('.card3 img').src = "images/people3.png";
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  attachActiveToMenu();
});












function photoUI() {

  container.innerHTML = "";

  document.querySelector('.menu').innerHTML = `
    <a href="#" class="featured md:hover:text-black">Featured</a>
    <a href="#" class="summer md:hover:text-black">NewSummer</a>
    <a href="#" class="wallpaper md:hover:text-black">Wallpapers</a>
    <a href="#" class="renders md:hover:text-black">3D Renders</a>
    <a href="#" class="nature md:hover:text-black">Nature</a>
    <a href="#" class="texture md:hover:text-black">Textures</a>
    <a href="#" class="film md:hover:text-black">Film</a>
    <a href="#" class="architecture md:hover:text-black">Architecture</a>
    <a href="#" class="photography md:hover:text-black">Street Photography</a>
    <a href="#" class="experimental md:hover:text-black">Experimental</a>
    <a href="#" class="travel md:hover:text-black">Travel</a>
    <a href="#" class="people md:hover:text-black">People</a>
  `;

  document.querySelector('.card1 img').src = "images/card1.png";
  document.querySelector('.card2 img').src = "images/card2.png";
  document.querySelector('.card3 img').src = "images/card3.png";

  queries.forEach(q => {
    fetch(`https://api.unsplash.com/search/photos?query=${q}&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {
        data.results.forEach(imgData => {
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });








  let featured = document.querySelector('.featured');

featured.addEventListener("click", () => {

  container.innerHTML = "";

  document.querySelector('.card1 img').src = "images/card1.png";
  document.querySelector('.card2 img').src = "images/card2.png";
  document.querySelector('.card3 img').src = "images/card3.png";

  queries.forEach(q => {
    fetch(`https://api.unsplash.com/search/photos?query=${q}&per_page=30&client_id=${accessKey}`)
      .then(res => res.json())
      .then(data => {

        data.results.forEach(imgData => {

          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);

        });

      });
  });

});




let summer = document.querySelector('.summer');

summer.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=summer&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {


      document.querySelector('.card1 img').src = "images/summe1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/summer2.png";
      document.querySelector('.card3 img').src = "/summer3.png";

      data.results.forEach(imgData => {

        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);

      });

    });

});


let wallpaper = document.querySelector('.wallpaper');

wallpaper.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=wallpaper&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {


      document.querySelector('.card1 img').src = "images/Wallpaper1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/wallpaper2.png";
      document.querySelector('.card3 img').src = "images/wallpaper3.png";

      data.results.forEach(imgData => {

        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);

      });

    });

});




let renders = document.querySelector('.renders');

renders.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=renders&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {

      document.querySelector('.card1 img').src = "images/render1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/render2.png";
      document.querySelector('.card3 img').src = "images/render3.png";
      

      data.results.forEach(imgData => {

        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);

      });

    });

});



let nature = document.querySelector('.nature');

nature.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=nature&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {

      document.querySelector('.card1 img').src = "images/nature1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/nature2.png";
      document.querySelector('.card3 img').src = "images/nature3.png";


      data.results.forEach(imgData => {

        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);

      });

    });

});


let textures = document.querySelector('.texture');

textures.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=abstract textures&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {

      data.results.forEach(imgData => {


      document.querySelector('.card1 img').src = "images/texture1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/texture2.png";
      document.querySelector('.card3 img').src = "images/texture3.png";

        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);

      });

    });

});


let film = document.querySelector('.film');

film.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=film&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {

      data.results.forEach(imgData => {

      document.querySelector('.card1 img').src = "images/film1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/film2.png";
      document.querySelector('.card3 img').src = "images/film3.png";

        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);

      });

    });

});





let architecture = document.querySelector('.architecture');

architecture.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=homearchitecture&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {

      data.results.forEach(imgData => {


      document.querySelector('.card1 img').src = "images/architecture1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/architecture2.png";
      document.querySelector('.card3 img').src = "images/architecture3.png";

        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);

      });

    });

});



let photography = document.querySelector('.photography');

photography.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=street photography&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {

      data.results.forEach(imgData => {


      document.querySelector('.card1 img').src = "images/photo1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/photo2.png";
      document.querySelector('.card3 img').src = "images/photo3.png";

        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);

      });

    });

});





let experimental = document.querySelector('.experimental');

experimental.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=experimental&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {

      data.results.forEach(imgData => {

      document.querySelector('.card1 img').src = "images/exp1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/exp2.png";
      document.querySelector('.card3 img').src = "images/exp3.png";

        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);

      });

    });

});





let travel = document.querySelector('.travel');

travel.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=travel&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {

      data.results.forEach(imgData => {

      document.querySelector('.card1 img').src = "images/travel1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/travel2.png";
      document.querySelector('.card3 img').src = "images/travel3.png";

      let img = document.createElement("img");
      img.src = imgData.urls.small;
      img.className = "w-full mb-[15px] block cursor-zoom-in";
      container.appendChild(img);

      });

    });

});


let people = document.querySelector('.people');

people.addEventListener("click", () => {

  container.innerHTML = "";

  fetch(`https://api.unsplash.com/search/photos?query=people&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {

      data.results.forEach(imgData => {

      document.querySelector('.card1 img').src = "images/people1.png";
      document.querySelector('.card1').style.border = "none";
      document.querySelector('.card2 img').src = "images/people2.png";
      document.querySelector('.card3 img').src = "images/people3.png";

      let img = document.createElement("img");
      img.src = imgData.urls.small;
      img.className = "w-full mb-[15px] block cursor-zoom-in";
      container.appendChild(img);

      });

    });

});

  attachActiveToMenu();
  
}



let ImgIcon = document.querySelector('#img');
let PenIcon = document.querySelector('#pen');

ImgIcon.addEventListener("click", () => {
  setSidebarActive('img');
  photoUI();  
});

PenIcon.addEventListener("click", () => setSidebarActive('pen'));
































let pen = document.querySelector('#pen');

pen.addEventListener("click", () => {

  container.innerHTML = "";

  document.querySelector('.menu').innerHTML = `
    <a href="#" class="ill-featured active-menu md:hover:text-black">Featured</a>
    <a href="#" class="ill-singlehue md:hover:text-black">Single Hue</a>
    <a href="#" class="ill-summer md:hover:text-black">Summer</a>
    <a href="#" class="ill-wallpaper md:hover:text-black">Wallpapers</a>
    <a href="#" class="ill-business md:hover:text-black">Business & Tech</a>
    <a href="#" class="ill-food md:hover:text-black">Food & Drink</a>
    <a href="#" class="ill-people md:hover:text-black">People</a>
    <a href="#" class="ill-nature md:hover:text-black">Nature</a>
    <a href="#" class="ill-patterns md:hover:text-black">Patterns</a>
  `;

  document.querySelector('.card1 img').src = "images/pen1.png";
  document.querySelector('.card2 img').src = "images/pen2.png";
  document.querySelector('.card3 img').src = "images/pen3.png";

  fetch(`https://api.unsplash.com/search/photos?query=illustration+vector&per_page=30&client_id=${accessKey}`)
    .then(res => res.json())
    .then(data => {
      data.results.forEach(imgData => {
        let img = document.createElement("img");
        img.src = imgData.urls.small;
        img.className = "w-full mb-[15px] block cursor-zoom-in";
        container.appendChild(img);
      });
    });

  document.querySelector('.ill-featured').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=illustration&per_page=30&client_id=${accessKey}`)
      .then(res => res.json()).then(data => {
        data.results.forEach(imgData => {

          
          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.ill-singlehue').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=single+color+minimal+illustration&per_page=30&client_id=${accessKey}`)
      .then(res => res.json()).then(data => {
        data.results.forEach(imgData => {

          document.querySelector('.card1 img').src = "images/ill-singleHue.png";
          document.querySelector('.card1').style.border = "none";

          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.ill-business').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=business+tech+flat+illustration&per_page=30&client_id=${accessKey}`)
      .then(res => res.json()).then(data => {
        data.results.forEach(imgData => {


          document.querySelector('.card1 img').src = "images/ill-business.png";
          document.querySelector('.card1').style.border = "none";

          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.ill-nature').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=nature+illustration&per_page=30&client_id=${accessKey}`)
      .then(res => res.json()).then(data => {
        data.results.forEach(imgData => {

          document.querySelector('.card1 img').src = "images/ill-nature.png";
          document.querySelector('.card1').style.border = "none";

          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.ill-food').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=food+drink+flat+illustration+&per_page=30&client_id=${accessKey}`)
      .then(res => res.json()).then(data => {
        data.results.forEach(imgData => {

          document.querySelector('.card1 img').src = "images/ill-food.png";
          document.querySelector('.card1').style.border = "none";

          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.ill-people').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=people+character+illustration&per_page=30&client_id=${accessKey}`)
      .then(res => res.json()).then(data => {
        data.results.forEach(imgData => {

          document.querySelector('.card1 img').src = "images/ill-people.png";
          document.querySelector('.card1').style.border = "none";

          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.ill-patterns').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=pattern+design+illustration&per_page=30&client_id=${accessKey}`)
      .then(res => res.json()).then(data => {
        data.results.forEach(imgData => {

          document.querySelector('.card1 img').src = "images/ill-patterns.png";
          document.querySelector('.card1').style.border = "none";

          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.ill-summer').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=summer+illustration+art&per_page=30&client_id=${accessKey}`)
      .then(res => res.json()).then(data => {
        data.results.forEach(imgData => {

          document.querySelector('.card1 img').src = "images/ill-summer.png";
          document.querySelector('.card1').style.border = "none";

          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  document.querySelector('.ill-wallpaper').addEventListener("click", () => {
    container.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos?query=wallpaper+illustration+colorful&per_page=30&client_id=${accessKey}`)
      .then(res => res.json()).then(data => {
        data.results.forEach(imgData => {

          document.querySelector('.card1 img').src = "images/ill-wall.png";
          document.querySelector('.card1').style.border = "none";

          let img = document.createElement("img");
          img.src = imgData.urls.small;
          img.className = "w-full mb-[15px] block cursor-zoom-in";
          container.appendChild(img);
        });
      });
  });

  attachActiveToMenu();

});



























