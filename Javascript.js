function ToyCar(
  SKU,
  UPC,
  brand,
  model,
  color,
  decade,
  packaging,
  scale,
  vehicleType,
  imageUrl,
  priceRange
) {
  this.SKU = SKU;
  this.UPC = UPC;
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.decade = decade;
  this.packaging = packaging;
  this.scale = scale;
  this.vehicleType = vehicleType;
  this.imageUrl = imageUrl;
  this.priceRange = priceRange;

  this.displayInfo = function () {
    return `
      <div class="car-details">
        <h2>${this.brand} - ${this.model}</h2>
        <table>
          <tr>
            <td><strong>Color:</strong></td>
            <td><input type="text" id="colorInput" value="${this.color}"></td>
          </tr>
          <tr>
            <td><strong>Decade:</strong></td>
            <td>${this.decade}</td>
          </tr>
          <tr>
            <td><strong>Packaging:</strong></td>
            <td>${this.packaging}</td>
          </tr>
          <tr>
            <td><strong>Scale:</strong></td>
            <td>${this.scale}</td>
          </tr>
          <tr>
            <td><strong>Vehicle Type:</strong></td>
            <td>${this.vehicleType}</td>
          </tr>
          <tr>
            <td><strong>SKU:</strong></td>
            <td>${this.SKU}</td>
          </tr>
          <tr>
            <td><strong>UPC:</strong></td>
            <td>${this.UPC}</td>
          </tr>
          <tr>
            <td><strong>Price Range:</strong></td>
            <td><input type="text" id="priceInput" value="${this.priceRange}"></td>
          </tr>
        </table>
        <button onclick="saveChanges()">Save Changes</button>
      </div>
    `;
  };
}

// Toy car data with price ranges
const toyCars = [
  new ToyCar(
    "GT878-GT-YELLOW",
    "680334723709",
    "Chevrolet",
    "Corvette C8-R #63",
    "Yellow",
    "After 2000",
    "Retail Gift Box",
    "1/18",
    "Race Car",
    "./Images/2021-Chevy-Corvette-.jpg",
    "50-100"
  ),
  new ToyCar(
    "US040-GT-WHITE",
    "680334709697",
    "Ford",
    "Mustang GT MKII Track",
    "White",
    "After 2000",
    "Retail Gift Box",
    "1/18",
    "Muscle Car",
    "./Images/2020-Ford-GT-MKII.jpg",
    "115-160"
  ),
  new ToyCar(
    "GT097-GTS-WHITE",
    "096647597669",
    "Ford",
    "Ford GT",
    "White w/ Red",
    "After 2000",
    "Retail Gift Box",
    "1/18",
    "Collectible",
    "./Images/GT-2017-Ford-GT-118.jpg",
    "165-200"
  ),
];

// Function to display car details and image based on selections
function displayCarDetails() {
  const selectedModel = document.getElementById("carSelect").value;
  const selectedPriceRange = document.getElementById("priceSelect").value;
  const carInfoDiv = document.getElementById("carInfo");
  const carImageContainer = document.getElementById("carImageContainer");

  // Find the selected car model and price range in toyCars array
  const selectedCar = toyCars.find(
    (car) =>
      car.model === selectedModel && car.priceRange === selectedPriceRange
  );

  if (selectedCar) {
    // Display car information with editable fields
    carInfoDiv.innerHTML = selectedCar.displayInfo();

    // Display car image
    carImageContainer.innerHTML = `<img src="${selectedCar.imageUrl}" alt="${selectedCar.model}">`;

    // Store the currently selected car globally for saving changes
    window.selectedCar = selectedCar;
  } else {
    carInfoDiv.innerHTML =
      "<p>Please select both a car model and price range.</p>";
    carImageContainer.innerHTML = "";
  }
}

// Function to save changes to selected car's properties
function saveChanges() {
  if (window.selectedCar) {
    // Update selected car properties with new input values
    window.selectedCar.color = document.getElementById("colorInput").value;
    window.selectedCar.priceRange = document.getElementById("priceInput").value;

    // Refresh display with updated info
    displayCarDetails();
  }
}

// Event listeners for dropdown changes
document
  .getElementById("carSelect")
  .addEventListener("change", displayCarDetails);
document
  .getElementById("priceSelect")
  .addEventListener("change", displayCarDetails);
