fetch('https://mockend.com/api/mockend/demo/posts ')
    .then(response => response.json())
    .then(data => {
        let tableData = "";
        data.forEach((item, index) => {
            tableData += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>${item.category}</td>
                    <td>${item.price}</td>
                    <td><img src="${item.image}" alt="${item.title}" style="max-width: 100px;"></td>
                    <td>${getRatingStars(item.rating)}</td>
                </tr>`;
        });
        document.getElementById("table-body").innerHTML = tableData;
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to generate star ratings based on the rating value
function getRatingStars(rating) {
    const roundedRating = Math.round(rating); // Round the rating to the nearest whole number
    let stars = '';
    for (let i = 0; i < roundedRating; i++) {
        stars += '⭐'; // Add a star character for each rating point
    }
    return stars;
}
