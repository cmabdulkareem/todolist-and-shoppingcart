const fruits = [
    {
      itemName: "Apple",
      itemDesc: "A sweet and crunchy red fruit rich in fiber and vitamins.",
      itemPrice: 180,
      image: "/images/apple.jpg"
    },
    {
      itemName: "Banana",
      itemDesc: "A soft and sweet yellow fruit high in potassium.",
      itemPrice: 50,
      image: "/images/banana.jpeg"
    },
    {
      itemName: "Orange",
      itemDesc: "A juicy citrus fruit rich in vitamin C.",
      itemPrice: 90,
      image: "/images/orange.webp"
    },
    {
      itemName: "Grapes",
      itemDesc: "Small, sweet, and juicy fruits available in different colors.",
      itemPrice: 120,
      image: "/images/grapes.jpg"
    },
    {
      itemName: "Mango",
      itemDesc: "A tropical fruit known for its sweetness and fragrance.",
      itemPrice: 150,
      image: "/images/mango.webp"
    },
    {
      itemName: "Strawberry",
      itemDesc: "A bright red berry with a juicy and tangy taste.",
      itemPrice: 300,
      image: "/images/strawberry.avif"
    },
    {
      itemName: "Pineapple",
      itemDesc: "A tropical fruit with a sweet and tangy flavor.",
      itemPrice: 80,
      image: "/images/pineapple.jpg"
    },
    {
      itemName: "Watermelon",
      itemDesc: "A large, juicy fruit with high water content.",
      itemPrice: 50,
      image: "/images/watermelon.jpg"
    },
    {
      itemName: "Cherry",
      itemDesc: "Small, red, and sweet fruits with a slight tartness.",
      itemPrice: 400,
      image: "/images/cherry.webp"
    },
    {
      itemName: "Papaya",
      itemDesc: "A tropical fruit with orange flesh and a mild sweetness.",
      itemPrice: 60,
      image: "/images/pappaya.jpg"
    }
  ];

  let div = document.querySelector("div")
  let sorter = document.querySelector("select")

renderList()

function renderList(){

  div.innerHTML = ""

  fruits.forEach((value)=>{
    let card = document.createElement("div")
    card.style.cssText = "background-color: #ccc; width: 200px; height: 350px"
  
    let image = document.createElement("img")
    image.src = value.image
    image.style.width = "80%"
  
    let nameLabel = document.createElement("h4")
    nameLabel.textContent = `Item : ${value.itemName}`
  
    let descLabel = document.createElement("p")
    descLabel.textContent = `${value.itemDesc}`
  
    let priceLabel = document.createElement("p")
    priceLabel.textContent = `Price : ${value.itemPrice}`
  
    card.append(image)
    card.append(nameLabel)
    card.append(descLabel)
    card.append(priceLabel)
    div.append(card)
  })
}



  sorter.addEventListener("change", ()=>{
    if(sorter.value == "lth"){
      fruits.sort((a,b)=>a.itemPrice - b.itemPrice)
    }else{
      fruits.sort((a,b)=>b.itemPrice - a.itemPrice)
    }

    renderList()
  })

  fruits.sort(function(a,b){
    return a-b
  })