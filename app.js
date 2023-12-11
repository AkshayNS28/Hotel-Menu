const menu = [
    {
        id: 1,
        title: "Masala Dosa",
        category: "dosa",
        price: 100,
        img: "./image/1.jpg",
        desc: `Masala dosa is a popular South Indian dish that originated in the town of Udupi in Karnataka.`,
    },
    {
        id: 2,
        title: "Rava Dosa",
        category: "dosa",
        price: 80,
        img: "./image/2.jpg",
        desc: `Rava dosa is a popular, crispy, and tasty South Indian breakfast dish. It's made from semolina (rava or sooji), rice flour, all-purpose flour (maida), and a variety of spices and herbs.`,
    },
    {
        id: 3,
        title: "Onion Dosa",
        category: "dosa",
        price: 110,
        img: "./image/3.jpg",
        desc: `Onion dosa is a crispy, spicy, crêpe-like food made from fermented rice and lentils. It's a popular dish in India and abroad.`,
    },
    {
        id: 4,
        title: "Kali Dosa",
        category: "dosa",
        price: 90,
        img: "./image/4.jpg",
        desc: `Kali dosa is a soft and spongy dosa made in a stone dosa pan. The name comes from the word kal, which means stone. The dosa is thicker and softer than traditional dosas because the batter includes idli rice and poha.`,
    },
    {
        id: 5,
        title: "Ghee Roast Dosa",
        category: "dosa",
        price: 110,
        img: "./image/5.jpg",
        desc: `Ghee roast dosa is a classic South Indian breakfast dish made from fresh homemade dosa batter.`,
    },
    {
        id: 6,
        title: "Ghee Paneer Dosa",
        category: "dosa",
        price: 160,
        img: "./image/6.jpg",
        desc: `Paneer dosa is a crispy Indian savory crepe made with a filling of paneer (Indian cottage cheese). The dosa is cooked on a griddle (tawa) until crisp, and then the paneer filling is added.`,
    },
    {
        id: 7,
        title: "Idli Vade",
        category: "tiffin",
        price: 100,
        img: "./image/7.jpg",
        desc: `Idli is a popular breakfast dish in South India. It's made from a batter of fermented black lentils and steamed rice.`,
    },
    {
        id: 8,
        title: "Khara Pongal",
        category: "tiffin",
        price: 80,
        img: "./image/8.jpg",
        desc: `Khara pongal, also known as ven pongal, is a traditional South Indian dish. It's made with rice, split yellow mung dal, ghee, cumin, ginger, pepper, and curry leaves.`,
    },
    {
        id: 9,
        title: "Chole Bhature",
        category: "tiffin",
        price: 120,
        img: "./image/9.jpg",
        desc: `Chole bhature is a popular dish in the northern areas of India. It's a combination of chana masala (spicy white chickpeas) and bhatura, a deep-fried bread made from maida.`,
    },
    {
        id: 10,
        title: "Parotta",
        category: "tiffin",
        price: 120,
        img: "./image/10.jpg",
        desc: `Parotta originated in the Jaffna area of Sri Lanka, which is populated by Tamils. Migrant workers from there introduced it to coastal Tamil Nadu in India.Parotta is made from maida, which is a highly refined, bleached wheat flour.`,
    },
    {
        id: 11,
        title: "Chapati",
        category: "tiffin",
        price: 100,
        img: "./image/11.jpg",
        desc: `Chapati is a flat, unleavened bread from the Indian subcontinent.It's a staple food in North India and Pakistan.Chapati is made from whole wheat flour, salt, and water.`,
    },
    {
        id: 12,
        title: "Pomegranate juice",
        category: "juice",
        price: 80,
        img: "./image/12.jpg",
        desc: `Contains antioxidants, polyphenols, vitamins C, E, and K, and essential micronutrients. It can lower cholesterol.`,
    },
    {
        id: 13,
        title: "Pineapple juice",
        category: "juice",
        price: 80,
        img: "./image/13.jpg",
        desc: `Contains manganese, copper, vitamin B6, and vitamin C. `,
    },
    {
        id: 14,
        title: "Grape juice",
        category: "juice",
        price: 100,
        img: "./image/14.jpg",
        desc: `Can provide some of the heart benefits of wine.`,
    },
    {
        id: 15,
        title: "Carrot juice",
        category: "juice",
        price: 80,
        img: "./image/15.jpg",
        desc: `Can help with weight loss and strengthen your body's defense mechanism.`,
    },
    {
        id: 16,
        title: "Mango juice",
        category: "juice",
        price: 100,
        img: "./image/16.jpg",
        desc: `Contains vitamin A and beta-carotene, which can promote eye health.`,
    },
    {
        id: 17,
        title: "Cherry juice",
        category: "juice",
        price: 120,
        img: "./image/17.jpg",
        desc: `Contains potassium and iron.`,
    },
    {
        id: 18,
        title: "Cheesecake",
        category: "desserts",
        price: 150,
        img: "./image/18.jpg",
        desc: `A dessert with a biscuit base and a soft cheese top. It can be baked or unbaked.`,
    },
    {
        id: 19 ,
        title: "Tiramisu",
        category: "desserts",
        price: 180,
        img: "./image/19.jpg",
        desc: `An Italian dessert made with coffee-soaked sponge cake, soft cheese, and powdered chocolate.`,
    },
    {
        id: 20,
        title: "Apple pie",
        category: "desserts",
        price: 120,
        img: "./image/20.jpg",
        desc: `A dessert with a crispy crust.`,
    },
    {
        id: 21,
        title: "Brownies",
        category: "desserts",
        price: 150,
        img: "./image/21.jpg",
        desc: `A versatile dessert that can be made from scratch or with a mix.`,
    },
    {
        id: 22,
        title: "Cupcakes",
        category: "desserts",
        price: 100,
        img: "./image/22.jpg",
        desc: `A dessert that comes in many flavors, such as chocolate, vanilla, and red velvet.`,
    },
    {
        id: 23,
        title: "Baked Alaska",
        category: "desserts",
        price: 140,
        img: "./image/23.jpg",
        desc: `A dessert made with ice cream, sponge cake, and meringue.`,
    },
];

const sectioncenter = document.querySelector('.section-center')
const container = document.querySelector(".btn-container")



//load items
window.addEventListener('DOMContentLoaded', function () {
    displaymenuitems(menu)
    displaymenubuttons()

})


//menu items startpage
function displaymenuitems(menuitems) {
    let displaymenu = menuitems.map(function (item) {

        return `<article class="menu-item">
                    <img src=${item.img} class="photo" alt=${item.title}>
                        <div class="item-info">
                            <header>
                                <h4>${item.title}</h4>
                                <h4 class="price">RS${item.price}</h4>
                            </header>
                            <p class="item-text">${item.desc}</p>
                        </div>
                </article>`
    })
    displaymenu = displaymenu.join('')
    sectioncenter.innerHTML = displaymenu
}




//filtering menu
function displaymenubuttons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ['all'])
    const categorybtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" 
        data-id=${category}>${category}</button>`
    }).join("")
    container.innerHTML = categorybtns
    const filterbtn = container.querySelectorAll('.filter-btn')
    //filter items
    filterbtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id
            const menucategory = menu.filter(function (menuitem) {
                if (menuitem.category == category) {
                    return menuitem
                }

            })
            if (category === 'all') {
                displaymenuitems(menu)
            }
            else {
                displaymenuitems(menucategory)
            }
        })
    })
}