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
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
  });

  const usefulFeatures = [
    "Feature A", "Feature B", "Feature C", "Feature D"
  ];

  const usefulFeaturesDiv = 
  document.getElementById("useful-features");

  usefulFeatures.forEach((feature, index) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `feature-${index}`;
    checkbox.name = "useful-features";
    checkbox.value = feature;
    
    const label = document.createElement("label");
    label.htmlFor = `feature-${index}`;
    label.textContent = feature;

    usefulFeaturesDiv.appendChild(checkbox);
    usefulFeaturesDiv.appendChild(label);

  });

});