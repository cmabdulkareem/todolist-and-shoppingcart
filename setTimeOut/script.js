let images= [
    "https://livewireindia.com/assets/banner/emi.jpg",
    "https://livewireindia.com/assets/banner/master-certificate-cyber-security.jpg",
    "https://livewireindia.com/assets/banner/master-certificate-ai.jpg"
]

let image = document.querySelector("img")

images.forEach((value, index)=>{
    setTimeout(()=>{
        image.src = value
    }, index *1000)
})