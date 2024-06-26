document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"},
        {id: 3, name: "Product C"},
        {id: 4, name: "Product D"}
    ];
    const productNameSelect = 
document.getElementById("product-name");
   
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
  });

  const usefulFeatures = [
    "Durability", "Ease of Use", "Performance", "Design"
  ];

  const usefulFeaturesDiv = 
  document.getElementById("useful-features");

  usefulFeatures.forEach((feature, index) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `feature-${index}`;
    checkbox.name = "useful-feature";
    checkbox.value = feature;
    
    const label = document.createElement("label");
    label.htmlFor = `feature-${index}`;
    label.textContent = feature;

    usefulFeaturesDiv.appendChild(checkbox);
    usefulFeaturesDiv.appendChild(label);

   usefulFeaturesDiv.appendChild(document.createElement("br"));

  });

});

var currentYear = new Date().getFullYear();
var lastModifiedDate = document.lastModified;
document.getElementById("currentYear").innerText = currentYear;
document.getElementById("lastModified").innerText = lastModifiedDate;