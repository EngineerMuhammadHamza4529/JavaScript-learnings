document.getElementById("imageUpload").addEventListener("change", function(event) {
    let image = document.getElementById("imagePreview");
    image.src = URL.createObjectURL(event.target.files[0]);
});

document.getElementById("classifyButton").addEventListener("click", async function() {
    let image = document.getElementById("imagePreview");

    if (!image.src) {
        alert("Please upload an image first.");
        return;
    }

    // Load the MobileNet model
    const model = await mobilenet.load();

    // Classify the image
    const predictions = await model.classify(image);

    // Show results
    document.getElementById("result").innerText = `Prediction: ${predictions[0].className} (${(predictions[0].probability * 100).toFixed(2)}%)`;
});
