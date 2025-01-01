// Document Ready Function
document.addEventListener("DOMContentLoaded", function () {
    // File Upload Preview
    const imageUpload = document.getElementById("imageUpload");
    const imagePreview = document.getElementById("imagePreview");
    const imageSection = document.querySelector(".image-section");
    const loader = document.querySelector(".loader");
    const result = document.getElementById("result");
    const btnPredict = document.getElementById("btn-predict");

    // Show Image Preview
    imageUpload.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imageSection.style.display = "block";
                result.textContent = ""; // Clear previous result
            };
            reader.readAsDataURL(file);
        }
    });

    // Predict Button Action
    btnPredict.addEventListener("click", function () {
        loader.style.display = "block"; // Show loader
        result.textContent = ""; // Clear result

        // Create a form data object to send the file
        const formData = new FormData();
        const file = imageUpload.files[0];
        formData.append("file", file);

        // Send the file to Flask backend for prediction
        fetch('/predict', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            loader.style.display = "none"; // Hide loader
            result.innerHTML = `<strong>Prediction:</strong> ${data.prediction}`; // Display result
        })
        .catch(error => {
            loader.style.display = "none"; // Hide loader in case of error
            result.textContent = "Error in prediction. Please try again.";
        });
    });
});
