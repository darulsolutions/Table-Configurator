function sendMessage(message) {
  const app = document.getElementById("app");
  console.log(message)
  app.contentWindow.postMessage(message, "*");
}

const shapePrices = {
  Rectangle: 15000,
  Oval: 15200,
  Pebble: 15200,
  Around: 15500,
  "Danish Oval": 16000,
  "Half Oval": 16500,
  Semicircle: 16500,
  "Table du Sud x Studio Verbaan I": 18000,
  "Table du Sud x Studio Verbaan II": 17500,
  Abu: 17000,
  Dollop: 19500,
  Leaf: 18200,
  Olmo: 17500,
};

const shapeTypes = {
  Pebble: "Pebble",
  "Table du Sud x <br> Studio Verbaan I": "Table du Sud x Studio Verbaan I",
  Leaf: "Leaf",
};

const dimensions = {
  Rectangle: {
    Length: [
      180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 320, 350,
      400,
    ],
    Width: [80, 85, 90, 95, 100, 110, 120],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4, 5, 6],
  },
  Oval: {
    Size: [
      "180 x 90",
      "180 x 100",
      "200 x 90",
      "200 x 100",
      "200 x 110",
      "200 x 120",
      "215 x 115",
      "220 x 110",
      "220 x 120",
      "220 x 130",
      "240 x 110",
      "240 x 120",
      "240 x 120",
      "260 x 110",
      "260 x 120",
      "260 x 130",
      "280 x 120",
      "280 x 130",
      "300 x 120",
      "300 x 130",
      "300 x 140",
      "300 x 150",
      "320 x 120",
      "320 x 130",
      "350 x 140",
    ],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4, 5, 6],
  },
  Pebble: {
    Size: [
      "200 x 120",
      "200 x 125",
      "240 x 130",
      "260 x 135",
      "280 x 140",
      "300 x 145",
      "320 x 150",
    ],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4],
  },
  Around: {
    Size: [100, 110, 120, 130, 140, 150, 160, 170, 180],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4, 5, 6],
  },
  "Danish Oval": {
    Size: [
      "180 x 90",
      "180 x 100",
      "200 x 90",
      "200 x 100",
      "200 x 110",
      "200 x 120",
      "215 x 115",
      "220 x 110",
      "220 x 120",
      "220 x 130",
      "240 x 110",
      "240 x 120",
      "240 x 120",
      "260 x 110",
      "260 x 120",
      "260 x 130",
      "280 x 120",
      "280 x 130",
      "300 x 120",
      "300 x 130",
      "300 x 140",
      "300 x 150",
      "320 x 120",
      "320 x 130",
      "350 x 140",
    ],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4, 5, 6],
  },
  "Half Oval": {
    Size: [
      "180 x 90",
      "180 x 100",
      "200 x 90",
      "200 x 100",
      "200 x 110",
      "200 x 120",
      "215 x 115",
      "220 x 110",
      "220 x 120",
      "220 x 130",
      "240 x 110",
      "240 x 120",
      "240 x 120",
      "260 x 110",
      "260 x 120",
      "260 x 130",
      "280 x 120",
      "280 x 130",
      "300 x 120",
      "300 x 130",
      "300 x 140",
      "300 x 150",
      "320 x 120",
      "320 x 130",
      "350 x 140",
    ],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4, 5, 6],
  },
  Semicircle: {
    Size: [
      "180 x 90",
      "180 x 100",
      "200 x 90",
      "200 x 100",
      "200 x 110",
      "220 x 90",
      "220 x 100",
      "240 x 90",
      "240 x 100",
      "260 x 90",
      "260 x 100",
      "260 x 110",
      "280 x 90",
      "280 x 100",
      "280 x 110",
      "300 x 90",
      "300 x 100",
      "300 x 110",
      "320 x 90",
      "320 x 100",
      "320 x 110",
      "350 x 90",
      "350 x 100",
      "350 x 110",
    ],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4, 5, 6],
  },
  "Table du Sud x <br> Studio Verbaan I": {
    Length: [200, 220, 240, 260, 280],
    Width: [90, 100, 110],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4],
  },
  "Table du Sud x <br> Studio Verbaan II": {
    Size: [120, 130, 140],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4],
  },
  Abu: {
    Size: [
      "180 x 90",
      "180 x 100",
      "200 x 90",
      "200 x 100",
      "200 x 110",
      "220 x 90",
      "220 x 100",
      "220 x 110",
      "240 x 90",
      "240 x 100",
      "240 x 110",
      "260 x 90",
      "260 x 100",
      "260 x 110",
      "280 x 90",
      "280 x 100",
      "280 x 110",
      "280 x 120",
      "300 x 100",
      "300 x 110",
      "300 x 120",
      "320 x 100",
      "320 x 110",
      "320 x 120",
      "350 x 100",
      "350 x 110",
    ],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4],
  },
  Dollop: {
    Size: [
      "180 x 90",
      "180 x 100",
      "200 x 90",
      "200 x 100",
      "200 x 110",
      "220 x 90",
      "220 x 100",
      "220 x 110",
      "240 x 90",
      "240 x 100",
      "240 x 110",
      "260 x 90",
      "260 x 100",
      "260 x 110",
      "280 x 90",
      "280 x 100",
      "280 x 110",
      "280 x 120",
      "300 x 100",
      "300 x 110",
      "300 x 120",
      "320 x 100",
      "320 x 110",
      "320 x 120",
      "350 x 100",
      "350 x 110",
    ],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4],
  },
  Leaf: {
    Size: [
      "180 x 90",
      "180 x 100",
      "200 x 90",
      "200 x 100",
      "200 x 110",
      "220 x 90",
      "220 x 100",
      "220 x 110",
      "240 x 90",
      "240 x 100",
      "240 x 110",
      "260 x 90",
      "260 x 100",
      "260 x 110",
      "280 x 90",
      "280 x 100",
      "280 x 110",
      "280 x 120",
      "300 x 100",
      "300 x 110",
      "300 x 120",
      "320 x 100",
      "320 x 110",
      "320 x 120",
      "350 x 100",
      "350 x 110",
    ],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4],
  },
  Olmo: {
    Size: [100, 110, 120, 130, 140, 150],
    Height: [74, 75, 76, 77, 78],
    "Blade Thickness": [4],
  },
};

function active(selector, className) {
  const container = selector.closest(".config-box");

  container.querySelectorAll(".config-items, .dimensions").forEach((item) => {
    if (item !== selector) {
      item.classList.remove("active");
      let box = item.querySelector(className);
      if (box) {
        box.classList.remove("active");
      }
    }
  });

  let box = selector.querySelector(className);
  if (box) {
    box.classList.add("active");
  }
  selector.classList.add("active");
}

function selectedText(selector, id) {
  let selected = document.querySelector(id);
  if (selected) {
    selected.innerHTML = `<b>${selector.innerText}</b>`;

    let ids = [
      "#width-selected",
      "#height-selected",
      "#blade-thickness-selected",
      "#corner-finishing-selected",
      "#brush-selected",
      "#legs-position-selected",
      "#pauline-wingelaar-selected",
      "#powder-coating-selected",
      "#table-color-selected",
      "#table-finish-selected",
    ];
    if (ids.includes(id)) {
      selected.innerHTML = `<b> x ${selector.innerText}</b>`;
    }
  }
}

function clearDimensions() {
  document.querySelectorAll("#collapseThree .config-box").forEach((box) => {
    box.innerHTML = "";
  });
  const sections = document.querySelectorAll('[id$="-section"]');
  sections.forEach((section) => {
    section.style.display = "none";
  });
}

function createDimensionButtons(selector, values) {
  if (values) {
    const container = document.querySelector(selector);
    if (container) {
      values.forEach((value, index) => {
        const button = document.createElement("button");
        button.className = "dimensions";
        button.innerText = value;
        container.appendChild(button);

        button.addEventListener("click", () => {
          let text = button.closest(".config-box").previousElementSibling.innerText;
          let id;
          let message = text + " : " + button.innerText

          if (text == "Length") {
            id = "#length-selected";
          } else if (text == "Size") {
            id = "#size-selected";
          } else if (text == "Width") {
            id = "#width-selected";
          } else if (text == "Height") {
            id = "#height-selected";
          } else if (text == "Blade Thickness") {
            id = "#blade-thickness-selected";
          }

          active(button, ".dimensions");
          selectedText(button, id);
          sendMessage(message)
        });

        if (index === 0) {
          button.classList.add("active");

          let text = button.closest(".config-box").previousElementSibling.innerText;
          let id;

          if (text == "Length") {
            id = "#length-selected";
          } else if (text == "Size") {
            id = "#size-selected";
          } else if (text == "Width") {
            id = "#width-selected";
          } else if (text == "Height") {
            id = "#height-selected";
          } else if (text == "Blade Thickness") {
            id = "#blade-thickness-selected";
          }

          selectedText(button, id);
        }
      });
    }
  }
}

function showDimensions(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = "block";
  }
}

function showLegsPosition(base) {
  let legsPosition = document.querySelector("#legs-position-box");
  let text = base.querySelector("p").innerHTML.trim();
  let configBox = base.closest(".config-box");
  let baseId = configBox.id;

  let items = {
    "rectangle-base": [
      "Bonqui",
      "Camilla",
      "Square",
      "Case",
      "Cruz",
      "Felix",
      "Lachaud",
      "Mads",
      "Pip",
      "Quinn",
      "Taps",
    ],
    "oval-base": [
      "Camilla",
      "Case",
      "Cassi",
      "Clairz",
      "Chloe",
      "Coco",
      "Cruz",
      "Dida",
      "Duo Cylinder",
      "Felix",
      "Philippa",
      "Gap",
    ],
    "pebble-base": ["Egu", "Lachaud", "Liv", "Ozu"],
    "danish-oval-base": [
      "Table du Sud x <br> Art In Return",
      "Camilla",
      "Case",
      "Cassi",
      "Clairz",
      "Chloe",
      "Coco",
      "Cruz",
      "Dida",
      "Duo Cylinder",
      "Philippa",
      "Laughing",
      "Mads",
      "Pip",
      "Qone Duo",
      "Qone Duo Oak",
      "Quinn",
    ],
    "half-oval-base": [
      "Camilla",
      "Case",
      "Cassi",
      "Clairz",
      "Chloe",
      "Coco",
      "Cruz",
      "Dida",
      "Duo Cylinder",
      "Felix",
      "Philippa",
      "Laughing",
      "Mads",
      "Pip",
      "Qone Duo",
      "Qone Duo Oak",
      "Quinn",
    ],
    "semicircle-base": [
      "Camilla",
      "Case",
      "Cassi",
      "Clairz",
      "Chloe",
      "Coco",
      "Cruz",
      "Dida",
      "Duo Cylinder",
      "Felix",
      "Philippa",
      "Laughing",
      "Mads",
      "Pip",
      "Qone Duo",
      "Qone Duo Oak",
      "Quinn",
    ],
    "abu-base": [
      "Clairz",
      "Chloe",
      "Coco",
      "Duo Cylinder",
      "Philippa",
      "Laughing",
      "Pip",
      "Qone Duo",
      "Qone Duo Oak",
    ],
    "dollop-base": [
      "Case",
      "Cassi",
      "Chloe",
      "Coco",
      "Duo Cylinder",
      "Philippa",
      "Laughing",
      "Mads",
      "Pip",
      "Qone Duo",
      "Qone Duo Oak",
      "Quinn",
    ],
    "leaf-base": [
      "Camilla",
      "Case",
      "Cassi",
      "Clairz",
      "Chloe",
      "Coco",
      "Dida",
      "Felix",
      "Philippa",
      "Laughing",
      "Mads",
      "Pip",
      "Qone Duo",
      "Qone Duo Oak",
      "Quinn",
    ],
  };

  if (baseId in items && items[baseId].includes(text)) {
    legsPosition.style.display = "block";
    document.querySelector("#legs-position-selected").style.display = "inline";
  } else {
    legsPosition.style.display = "none";
    document.querySelector("#legs-position-selected").style.display = "none";
  }
}

function showColors(base) {
  let powderCoating = document.querySelector("#powder-coating-box");
  let paulineWingelaarColours = document.querySelector(
    "#pauline-wingelaar-colours-box"
  );

  let text = base.querySelector("p").innerHTML.trim();
  let configBox = base.closest(".config-box");
  let baseId = configBox.id;

  let powderCoatingItems = {
    "rectangle-base": [
      "Aaron",
      "Camilla",
      "Cruz",
      "Eminent",
      "Felix",
      "Gap",
      "Laughing",
      "Louise",
      "Ludovic",
      "Mads",
      "Marly",
      "Meryl",
      "Pom",
      "Quinn",
      "Taps",
      "W-leg",
      "XX10x4",
    ],
    "oval-base": [
      "Aaron",
      "Camilla",
      "Cruz",
      "Dida",
      "Duo Cylinder",
      "Eqone",
      "Eminent",
      "Felix",
      "Gap",
      "Lachaud",
      "Laughing",
      "Louise",
      "Ludovic",
      "Mads",
      "Marly",
      "Meryl",
      "Oval O-Leg",
      "Pom",
      "Qone Duo",
      "Quinn",
      "Taps",
      "W-leg",
      "XX10x4",
    ],
    "pebble-base": [
      "Egu",
      "Eqone",
      "Gap",
      "Laughing",
      "Ludovic",
      "Ozu",
      "Pom",
      "XX10x4",
    ],
    "around-base": [
      "Arlette",
      "Chaneau",
      "Einaudi",
      "Faye",
      "Nina",
      "Ozu",
      "Pizou 16 graden",
      "Qone",
      "Round O-leg",
      "Savie",
      "Vazy",
      "Xavier",
    ],
    "danish-oval-base": [
      "Aaron",
      "Camilla",
      "Cavalier",
      "Cruz",
      "Dida",
      "Duo Cylinder",
      "Eqone",
      "Eminent",
      "Felix",
      "Gap",
      "Lachaud",
      "Louise",
      "Ludovic",
      "Mads",
      "Marly",
      "Meryl",
      "Oval O-Leg",
      "Pom",
      "Qone Duo",
      "Quinn",
      "Taps",
      "W-leg",
      "XX10x4",
    ],
    "half-oval-base": [
      "Aaron",
      "Camilla",
      "Cruz",
      "Dida",
      "Duo Cylinder",
      "Eqone",
      "Eminent",
      "Felix",
      "Gap",
      "Lachaud",
      "Louise",
      "Ludovic",
      "Mads",
      "Marly",
      "Meryl",
      "Oval O-Leg",
      "Pom",
      "Qone Duo",
      "Quinn",
      "Taps",
      "W-leg",
      "XX10x4",
    ],
    "semicircle-base": [
      "Aaron",
      "Camilla",
      "Cruz",
      "Dida",
      "Duo Cylinder",
      "Eqone",
      "Eminent",
      "Felix",
      "Gap",
      "Lachaud",
      "Louise",
      "Ludovic",
      "Mads",
      "Marly",
      "Meryl",
      "Oval O-Leg",
      "Pom",
      "Qone Duo",
      "Quinn",
      "Taps",
      "W-leg",
      "XX10x4",
    ],
    "abu-base": [
      "Aaron",
      "Duo Cylinder",
      "Eqone",
      "Eminent",
      "Gap",
      "Laughing",
      "Ludovic",
      "Mads",
      "Marly",
      "Meryl",
      "Oval O-Leg",
      "Pom",
      "Qone Duo",
      "W-leg",
      "XX10x4",
    ],
    "dollop-base": [
      "Aaron",
      "Duo Cylinder",
      "Eqone",
      "Eminent",
      "Gap",
      "Lachaud",
      "Ludovic",
      "Oval O-Leg",
      "Qone Duo",
      "W-leg",
      "XX10x4",
    ],
    "leaf-base": [
      "Aaron",
      "Camilla",
      "Dida",
      "Eqone",
      "Felix",
      "Gap",
      "Laughing",
      "Louise",
      "Ludovic",
      "Mads",
      "Oval O-leg",
      "Pom",
      "Qone Duo",
      "Quinn",
      "Taps",
      "W-leg",
      "XX10x4",
    ],
    "olmo-base": [
      "Arlette",
      "Chaneau",
      "Einaudi",
      "Faye",
      "Nina",
      "Ozu",
      "Pizou 16 degrees",
      "Qone",
      "Ronde O-leg",
      "Savie",
      "Vazy",
      "Xavier",
    ],
  };

  let paulineWingelaarItems = {
    "rectangle-base": ["Case", "Pip"],
    "oval-base": ["Case", "Pip"],
    "pebble-base": ["Pippa"],
    "around-base": ["Pippa"],
    "danish-oval-base": ["Case", "Pip"],
    "half-oval-base": ["Case", "Pip"],
    "semicircle-base": ["Case", "Pip"],
    "abu-base": ["Pip"],
    "dollop-base": ["Case", "Pip"],
    "leaf-base": ["Case", "Pip"],
    "olmo-base": ["Pippa"],
  };

  if (
    baseId in powderCoatingItems &&
    powderCoatingItems[baseId].includes(text)
  ) {
    powderCoating.style.display = "block";
    document.querySelector("#powder-coating-selected").style.display = "inline";
  } else {
    powderCoating.style.display = "none";
    document.querySelector("#powder-coating-selected").style.display = "none";
  }

  if (
    baseId in paulineWingelaarItems &&
    paulineWingelaarItems[baseId].includes(text)
  ) {
    paulineWingelaarColours.style.display = "block";
    document.querySelector("#pauline-wingelaar-selected").style.display =
      "inline";
  } else {
    paulineWingelaarColours.style.display = "none";
    document.querySelector("#pauline-wingelaar-selected").style.display =
      "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const defaultShape = "Rectangle";
  if (dimensions.hasOwnProperty(defaultShape)) {
    clearDimensions();

    const shapeDimensions = dimensions[defaultShape];

    Object.keys(shapeDimensions).forEach((key) => {
      if (
        Array.isArray(shapeDimensions[key]) &&
        shapeDimensions[key].length > 0
      ) {
        const selector = `#dimension-${key.toLowerCase().replace(" ", "-")}`;
        const dimensionValues = shapeDimensions[key];

        createDimensionButtons(selector, dimensionValues);

        const section = `${key.toLowerCase().replace(" ", "-")}-section`;
        showDimensions(section);
      }
    });
  }
});

document.querySelectorAll("#shapes-box .config-items").forEach((shapes) => {
  shapes.addEventListener("click", () => {
    active(shapes, ".hover-box");
    selectedText(shapes, "#shape-selected");

    let shapePrice = document.querySelector("#shape-price");
    let text = shapes.querySelector("p");
    sendMessage(text.innerText)

    let types = document.querySelector("#shape-types");

    // Items to lock or disable
    const itemsToLock1 = ["Pebble", "Abu", "Dollop", "Leaf", "Olmo"];
    const itemsToLock2 = ["Oval", "Around", "Danish Oval", "Semicircle"];
    const itemsToLock3 = [
      "Table du Sud x <br> Studio Verbaan I",
      "Table du Sud x <br> Studio Verbaan II",
    ];
    const itemsToLock4 = ["Half Oval"];

    document
      .querySelectorAll("#material-box .config-items")
      .forEach((lockItems, lockIndex) => {
        if (itemsToLock1.includes(text.innerText)) {
          if (lockIndex === 1 || lockIndex === 4 || lockIndex === 5) {
            lockItems.classList.add("disable-items");
          } else {
            lockItems.classList.remove("disable-items");
          }
        } else if (itemsToLock2.includes(text.innerText)) {
          if (lockIndex === 5) {
            lockItems.classList.add("disable-items");
          } else {
            lockItems.classList.remove("disable-items");
          }
        } else if (itemsToLock3.includes(text.innerHTML)) {
          if (
            lockIndex === 1 ||
            lockIndex === 2 ||
            lockIndex === 3 ||
            lockIndex === 4 ||
            lockIndex === 5
          ) {
            lockItems.classList.add("disable-items");
          } else {
            lockItems.classList.remove("disable-items");
          }
        } else if (itemsToLock4.includes(text.innerText)) {
          if (lockIndex === 4 || lockIndex === 5) {
            lockItems.classList.add("disable-items");
          } else {
            lockItems.classList.remove("disable-items");
          }
        } else {
          lockItems.classList.remove("disable-items");
        }
      });

    // Show types of selected shape
    let selectedShape = text.innerHTML;
    if (shapePrices.hasOwnProperty(selectedShape)) {
      let price = shapePrices[selectedShape];
      shapePrice.innerHTML = `<b>€${price}</b>`;
    }

    let shapeKey = Object.keys(shapeTypes).find(
      (key) =>
        key.replace("<br>", " ").trim() ===
        text.innerHTML.replace("<br>", " ").trim()
    );

    if (shapeKey) {
      types.style.display = "block";
      document.querySelector("#type-selected").style.display = "inline";
      document.querySelector("#type-selected").innerHTML = "<b>x Type A</b>";

      const existingShapesBox = types.querySelector(".config-box");
      if (existingShapesBox) {
        existingShapesBox.remove();
      }

      let typeBox = document.createElement("div");
      typeBox.className = "config-box";
      typeBox.id = "type-box";

      typeBox.innerHTML = `
          <div class="config-items">
              <img src="asset/images/shapes-type-images/${shapeTypes[shapeKey]}typeA.jpg" alt="">
              <p>Type A</p>
              <div class="hover-box active"></div>
          </div>
          <div class="config-items">
              <img src="asset/images/shapes-type-images/${shapeTypes[shapeKey]}typeB.jpg" alt="">
              <p>Type B</p>
              <div class="hover-box"></div>
          </div>`;

      types.appendChild(typeBox);
    } else {
      types.style.display = "none";
      document.querySelector("#type-selected").style.display = "none";
    }

    // Show dimensions of selected shape
    if (dimensions.hasOwnProperty(selectedShape)) {
      clearDimensions();

      const shapeDimensions = dimensions[selectedShape];

      Object.keys(shapeDimensions).forEach((key) => {
        if (
          Array.isArray(shapeDimensions[key]) &&
          shapeDimensions[key].length > 0
        ) {
          const selector = `#dimension-${key.toLowerCase().replace(" ", "-")}`;
          const dimensionValues = shapeDimensions[key];

          createDimensionButtons(selector, dimensionValues);

          let sanitizedText = selector.replace("#dimension-", "");
          let selectedToShow = sanitizedText + "-selected";

          const section = `${key.toLowerCase().replace(" ", "-")}-section`;
          showDimensions(section);
        }

        if (shapeDimensions.Size) {
          document.querySelector("#size-selected").style.display = "inline";
        } else {
          document.querySelector("#size-selected").style.display = "none";
        }

        if (shapeDimensions.Length && shapeDimensions.Width) {
          document.querySelector("#length-selected").style.display = "inline";
          document.querySelector("#width-selected").style.display = "inline";
        } else {
          document.querySelector("#length-selected").style.display = "none";
          document.querySelector("#width-selected").style.display = "none";
        }
      });
    }

    // Show chasis of selected shape
    let baseOptions = document.querySelectorAll("#base-box .config-box");
    baseOptions.forEach((base) => {
      let baseIds = base.id;
      let sanitizedText = text.innerText.toLowerCase().replace(/\s+/g, "-") + "-base";

      if (sanitizedText === baseIds) {
        base.style.display = "grid";
      } else {
        base.style.display = "none";
      }
    });

    // Show finishing of selected shape
    const showCornerFinishSection = ["Rectangle", "Half Oval"];
    const showStandardEdgeFinishing = ["Rectangle", "Table du Sud x <br> Studio Verbaan I"];
    
    let cornerFinishing = document.querySelector("#corner-finishing");
    let edgeFinishing = document.querySelectorAll(
      "#edge-finishing .config-items"
    );

    if (showCornerFinishSection.includes(text.innerText)) {
      cornerFinishing.style.display = "block";
      document.querySelector("#corner-finishing-selected").style.display =
        "inline";
    } else {
      cornerFinishing.style.display = "none";
      document.querySelector("#corner-finishing-selected").style.display =
        "none";
    }

    if (showStandardEdgeFinishing.includes(text.innerHTML)) {
      edgeFinishing[0].style.display = "flex";
      edgeFinishing[1].style.display = "none";
    } else {
      edgeFinishing[0].style.display = "none";
      edgeFinishing[1].style.display = "flex";
    }

    if (text.innerHTML === "Rectangle") {
      edgeFinishing[6].style.display = "flex";
    } else {
      edgeFinishing[6].style.display = "none";
    }

    // Items to lock in base types
    const lockItemsinBase = {
      Oval: [
        "Table du Sud x <br> Anne Claus",
        "Table du Sud x <br> Art In Return",
        "Cavalier",
        "Table du Sud x <br> Studio Verbaan",
      ],
      "Half Oval": ["Miles", "Table du Sud x <br> Studio Verbaan"],
      Semicircle: ["Ferdinand", "Miles", "Table du Sud x <br> Studio Verbaan"],
      Abu: ["Table du Sud x <br> Studio Verbaan"],
      Dollop: ["Table du Sud x <br> Studio Verbaan"],
      Leaf: [
        "Table du Sud x <br> Anne Claus",
        "Table du Sud x <br> Art In Return",
        "Ferdinand",
        "Table du Sud x <br> Studio Verbaan",
      ],
    };

    document.querySelectorAll("#base-box .config-items").forEach((baseItem) => {
      let baseText = baseItem.querySelector("p").innerHTML.trim();
      let shapeText = text.innerText.trim();

      if (
        lockItemsinBase[shapeText] &&
        lockItemsinBase[shapeText].includes(baseText)
      ) {
        baseItem.classList.add("disable-items");
      } else {
        baseItem.classList.remove("disable-items");
      }
    });
  });
});

document.querySelectorAll("#material-box .config-items").forEach((material) => {
  material.addEventListener("click", () => {
    active(material, ".hover-box");
    selectedText(material, "#material-selected");

    let text = material.querySelector("p");
    let finishMaterial = document.querySelector("#material-finish");
    let colorMaterial = document.querySelector("#material-colors");
    let sanitizedText = text.innerText.toLowerCase().replace(/\s+/g, "-").trim();

    sendMessage(text.innerText)

    let finishFound = false;
    let finishShown = false;
    let colorShown = false;
    document.querySelectorAll(".table-finish").forEach((tableFinish) => {
      tableFinish.style.display = "none";
    });

    document.querySelectorAll(".table-finish").forEach((tableFinish) => {
      if (tableFinish.id.includes(sanitizedText)) {
        tableFinish.style.display = "grid";
        finishMaterial.style.display = "block";
        document.querySelector("#table-finish-selected").style.display =
          "inline";
        finishFound = true;

        if (
          tableFinish.id === "pheonix-finish" ||
          tableFinish.id === "oak-wood-finish"
        ) {
          finishShown = true;
        }
      }

      if (finishShown) {
        document.querySelector("#table-finish-selected").style.display =
          "inline";
      } else {
        document.querySelector("#table-finish-selected").style.display = "none";
      }

      if (!finishFound) finishMaterial.style.display = "none";
    });

    let colorsFound = false;
    document.querySelectorAll(".table-colors").forEach((tableColors) => {
      if (tableColors.id.includes(sanitizedText)) {
        tableColors.style.display = "grid";
        colorMaterial.style.display = "block";
        colorsFound = true;
        colorShown = true;
      } else {
        tableColors.style.display = "none";
      }

      if (colorShown) {
        document.querySelector("#table-color-selected").style.display =
          "inline";
      } else {
        document.querySelector("#table-color-selected").style.display = "none";
      }
    });
    if (!colorsFound) colorMaterial.style.display = "none";
  });
});

document.querySelector("#shape-types").addEventListener("click", (event) => {
  const type = event.target.closest(".config-items");
  const text = type.querySelector('p')

  if (type) {
    active(type, ".hover-box");
    selectedText(type, "#type-selected");
    sendMessage(text.innerText)
  }
});

document.querySelectorAll("#base-box .config-items").forEach((base) => {
  base.addEventListener("click", (event) => {
    let text = base.querySelector('p')
    active(base, ".hover-box");
    selectedText(base, "#base-selected");
    showLegsPosition(base);
    showColors(base);
    sendMessage(text.innerText)
  });
});

document.querySelectorAll("#edge-finishing .config-items").forEach((edge) => {
  edge.addEventListener("click", () => {
    let text = edge.querySelector('p')
    active(edge, ".hover-box");
    selectedText(edge, "#edge-finishing-selected");
    sendMessage(text.innerText)
  });
});

document.querySelectorAll("#corner-finishing .config-items").forEach((corner) => {
    corner.addEventListener("click", () => {
      let text = corner.querySelector('p')
      active(corner, ".hover-box");
      selectedText(corner, "#corner-finishing-selected");
      sendMessage(text.innerText)
    });
});

document.querySelectorAll("#brush .config-items").forEach((brush) => {
  brush.addEventListener("click", () => {
    let text = brush.querySelector('p')
    active(brush, ".hover-box");
    selectedText(brush, "#brush-selected");
    sendMessage(text.innerText)
  });
});

document.querySelectorAll("#powder-coating-box .config-items").forEach((pc) => {
  pc.addEventListener("click", () => {
    let text = pc.querySelector('p')
    active(pc, ".hover-box");
    selectedText(pc, "#powder-coating-selected");
    sendMessage(text.innerText)
  });
});

document.querySelectorAll("#pauline-wingelaar-colours-box .config-items").forEach((pwc) => {
    pwc.addEventListener("click", () => {
      let text = pwc.querySelector('p')
      active(pwc, ".hover-box");
      selectedText(pwc, "#pauline-wingelaar-selected");
      sendMessage(text.innerText)
    });
});

document.querySelectorAll("#legs-position-box .config-items").forEach((position) => {
    position.addEventListener("click", () => {
      let text = position.querySelector('p')
      active(position, ".hover-box");
      selectedText(position, "#legs-position-selected");
      sendMessage(text.innerText)
    });
});

document.querySelectorAll("#material-finish .config-items").forEach((finish) => {
    finish.addEventListener("click", () => {
      let text = finish.querySelector('p')
      active(finish, ".hover-box");
      selectedText(finish, "#table-finish-selected");
      sendMessage(text.innerText)
    });
});

document.querySelectorAll("#material-colors .config-items").forEach((colors) => {
    colors.addEventListener("click", () => {
      let text = colors.querySelector('p')
      active(colors, ".hover-box");
      selectedText(colors, "#table-color-selected");
      sendMessage(text.innerText)
    });
});

document.querySelector(".info").addEventListener("click", function () {
  if (this.getAttribute("aria-expanded") === "true") {
    this.textContent = "More info";
  } else {
    this.textContent = "Less info";
  }
});

const accordionSection = document.querySelector(".accordion-section");
const infoAccordion = document.getElementById("infoAccordion");
infoAccordion.addEventListener("click", () => {
  if (accordionSection.style.maxHeight === "630px") {
    accordionSection.style.maxHeight = "800px";
  } else {
    accordionSection.style.maxHeight = "630px";
  }
});

const fullScreen = document.getElementById("fullScreen");
const exitFullScreen = document.getElementById("exitFullScreen");
const toggleFullScreenBtns = document.querySelector(".toggleFullScreenBtns");
fullScreen.addEventListener("click", () => {
  document.querySelector(".main").style.gridTemplateColumns = "100% 0";
  fullScreen.style.display = "none";
  exitFullScreen.style.display = "block";
  toggleFullScreenBtns.style.right = "50px";
});

exitFullScreen.addEventListener("click", () => {
  document.querySelector(".main").style.gridTemplateColumns = "65% 35%";
  fullScreen.style.display = "block";
  exitFullScreen.style.display = "none";
  toggleFullScreenBtns.style.right = "34%";
}); 
