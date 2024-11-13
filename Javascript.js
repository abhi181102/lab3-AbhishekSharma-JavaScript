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
