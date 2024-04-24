// Get the IP address input field
const ipAddressInput = document.getElementById("ip-address");

// Function to get the entered IP address
function getIPAddress() {
  return ipAddressInput.value;
}

// Function to construct the base URL
function constructBaseURL() {
  const ipAddress = getIPAddress();
  const baseURL = `http://${ipAddress}/control/api/v1/`;
  return baseURL;
}

// Function to fetch the current camera settings
function fetchCurrentSettings() {
  const baseURL = constructBaseURL();

  $.ajax({
    url: baseURL + "video/shutter",
    type: "GET",
    success: function (response) {
      document.getElementById("shutter").value = response.shutterSpeed;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "video/gain",
    type: "GET",
    success: function (response) {
      document.getElementById("gain").value = response.gain;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "video/whiteBalance",
    type: "GET",
    success: function (response) {
      document.getElementById("whitebalance").value = response.whiteBalance;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "video/whiteBalanceTint",
    type: "GET",
    success: function (response) {
      document.getElementById("tint").value = response.whiteBalanceTint;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "colorCorrection/lift",
    type: "GET",
    success: function (response) {
      document.getElementById("lift").value = response.luma;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "colorCorrection/gain",
    type: "GET",
    success: function (response) {
      document.getElementById("gainCorrector").value = response.luma;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "colorCorrection/contrast",
    type: "GET",
    success: function (response) {
      document.getElementById("contrast").value = response.adjust;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "colorCorrection/color",
    type: "GET",
    success: function (response) {
      document.getElementById("saturation").value = response.saturation;
      document.getElementById("hue").value = response.hue;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "colorCorrection/gamma",
    type: "GET",
    success: function (response) {
      document.getElementById("gamma").value = response.luma;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "colorCorrection/offset",
    type: "GET",
    success: function (response) {
      document.getElementById("offset").value = response.luma;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "colorCorrection/pivot",
    type: "GET",
    success: function (response) {
      document.getElementById("pivot").value = response.pivot;
      updateDisplayValues();
    },
  });

  $.ajax({
    url: baseURL + "colorCorrection/lumaContribution",
    type: "GET",
    success: function (response) {
      document.getElementById("lumamix").value = response.lumaContribution;
      updateDisplayValues();
    },
  });
}

// Function to update camera settings
function updateCameraSettings() {
  const baseURL = constructBaseURL();

  const shutterSpeed = parseInt(document.getElementById("shutter").value);
  const gain = parseInt(document.getElementById("gain").value);
  const whiteBalance = parseInt(document.getElementById("whitebalance").value);
  const tint = parseInt(document.getElementById("tint").value);
  const liftParams = {
    red: parseFloat(document.getElementById("lift").value),
    green: parseFloat(document.getElementById("lift").value),
    blue: parseFloat(document.getElementById("lift").value),
    luma: parseFloat(document.getElementById("lift").value),
  };
  const gainParams = {
    red: parseFloat(document.getElementById("gainCorrector").value),
    green: parseFloat(document.getElementById("gainCorrector").value),
    blue: parseFloat(document.getElementById("gainCorrector").value),
    luma: parseFloat(document.getElementById("gainCorrector").value),
  };
  const contrastParams = {
    pivot: parseFloat(document.getElementById("contrast").value),
    adjust: parseFloat(document.getElementById("contrast").value),
  };
  const saturation = parseFloat(document.getElementById("saturation").value);
  const hue = parseFloat(document.getElementById("hue").value);
  const gammaParams = {
    red: parseFloat(document.getElementById("gamma").value),
    green: parseFloat(document.getElementById("gamma").value),
    blue: parseFloat(document.getElementById("gamma").value),
    luma: parseFloat(document.getElementById("gamma").value),
  };
  const offsetParams = {
    red: parseFloat(document.getElementById("offset").value),
    green: parseFloat(document.getElementById("offset").value),
    blue: parseFloat(document.getElementById("offset").value),
    luma: parseFloat(document.getElementById("offset").value),
  };
  const pivot = parseFloat(document.getElementById("pivot").value);
  const lumaMix = parseFloat(document.getElementById("lumamix").value);

  // Send requests to the respective endpoints
  $.ajax({
    url: baseURL + "video/shutter",
    type: "PUT",
    data: JSON.stringify({ shutterSpeed: shutterSpeed }),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "video/gain",
    type: "PUT",
    data: JSON.stringify({ gain: gain }),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "video/whiteBalance",
    type: "PUT",
    data: JSON.stringify({ whiteBalance: whiteBalance }),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "video/whiteBalanceTint",
    type: "PUT",
    data: JSON.stringify({ whiteBalanceTint: tint }),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "colorCorrection/lift",
    type: "PUT",
    data: JSON.stringify(liftParams),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "colorCorrection/gain",
    type: "PUT",
    data: JSON.stringify(gainParams),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "colorCorrection/contrast",
    type: "PUT",
    data: JSON.stringify(contrastParams),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "colorCorrection/color",
    type: "PUT",
    data: JSON.stringify({ hue: hue, saturation: saturation }),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "colorCorrection/gamma",
    type: "PUT",
    data: JSON.stringify(gammaParams),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "colorCorrection/offset",
    type: "PUT",
    data: JSON.stringify(offsetParams),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "colorCorrection/pivot",
    type: "PUT",
    data: JSON.stringify({ pivot: pivot }),
    contentType: "application/json",
    dataType: "json",
  });

  $.ajax({
    url: baseURL + "colorCorrection/lumaContribution",
    type: "PUT",
    data: JSON.stringify({ lumaContribution: lumaMix }),
    contentType: "application/json",
    dataType: "json",
  });
}

// Function to update the displayed values
function updateDisplayValues() {
  document.getElementById("shutter-value").textContent = `1/${
    document.getElementById("shutter").value
  }`;
  document.getElementById("gain-value").textContent = `${
    document.getElementById("gain").value
  } dB`;
  document.getElementById("whitebalance-value").textContent =
    document.getElementById("whitebalance").value;
  document.getElementById("tint-value").textContent =
    document.getElementById("tint").value;
  document.getElementById("lift-value").textContent =
    document.getElementById("lift").value;
  document.getElementById("gainCorrector-value").textContent =
    document.getElementById("gainCorrector").value;
  document.getElementById("contrast-value").textContent =
    document.getElementById("contrast").value;
  document.getElementById("saturation-value").textContent =
    document.getElementById("saturation").value;
  document.getElementById("hue-value").textContent =
    document.getElementById("hue").value;
  document.getElementById("gamma-value").textContent =
    document.getElementById("gamma").value;
  document.getElementById("offset-value").textContent =
    document.getElementById("offset").value;
  document.getElementById("pivot-value").textContent =
    document.getElementById("pivot").value;
  document.getElementById("lumamix-value").textContent =
    document.getElementById("lumamix").value;
}

// Variable to store the timeout
let updateTimeout;

// Function to handle input changes
function handleInputChange() {
  updateDisplayValues();

  // Clear the previous timeout
  clearTimeout(updateTimeout);

  // Set a new timeout to update camera settings after a delay
  updateTimeout = setTimeout(updateCameraSettings, 500); // Adjust the delay as needed
}

// Add event listeners to input fields
const inputFields = document.querySelectorAll(
  'input[type="range"], input[type="text"]'
);
inputFields.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

// Print the values as they are changed to the console
inputFields.forEach((input) => {
  input.addEventListener("input", () => {
    console.log(input.value);
  });
});
