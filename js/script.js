const menu = [
    {
      id: 1,
      title: "African Salad",
      category: "breakfast",
      price: 15.99,
      img: "../img/abacha.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Jollof Rice",
      category: "lunch",
      price: 13.99,
      img: "../img/jollof_rice.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Palm Wine",
      category: "Desert",
      price: 6.99,
      img: "../img/palm.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Yam and Egg_sauce",
      category: "breakfast",
      price: 20.99,
      img: "../img/yam.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Garden_Egg_sauce and Yam",
      category: "lunch",
      price: 22.99,
      img: "../img/garden.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "puff",
      category: "Desert",
      price: 18.99,
      img: "../img/puff.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Baked_beans and Plaintain",
      category: "lunch",
      price: 8.99,
      img: "../img/beans.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "N'salla",
      category: "dinner",
      price: 12.99,
      img: "../img/nsalla.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Egusi",
      category: "dinner",
      price: 16.99,
      img: "../img/egusi.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Bitter leaf soup",
      category: "dinner",
      price: 22.99,
      img: "../img/bitter_leaf.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const btnContainer = document.querySelector(".btn-container");
  const sectionCenter = document.querySelector(".section-center");
  // display all items when page loads
  window.addEventListener('DOMContentLoaded',function(){
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }


  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }