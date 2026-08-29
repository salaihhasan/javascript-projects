let products = document.getElementById("products");
let result;

async function renderProduct() {
    const prod = await fetch("https://dummyjson.com/products");
    const data = await prod.json();
    result = data.products;
   showAll(result);
    
}

function showAll(items){
   products.innerHTML = "";
   items.map((arr) =>{
       let card =  document.createElement("div");
       card.className = "card";
      card.innerHTML = `
         <div class= "img-div"><img src = "${arr.thumbnail}"></div>
         <div class = "title"><h3>${arr.title}<h3></div>
         <div class = "price-div">
            <span class = "price">$${arr.price}</span>
            <span class="bi bi-cart"></span>
         </div>
      `
      products.appendChild(card);

    })
}

document.getElementById("input").oninput = function (){
   const input = document.getElementById("input").value.toLowerCase();
   const newResult = result.filter(item =>{
      return item.title.toLowerCase().includes(input);
   })

   showAll(newResult);
}

renderProduct();