    
    
    
    
    // fetch('https://fakestoreapi.com/products')
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // let tabledata = "";
    // data.map((values) => {
    //     tabledata = `<h1> ${values.data}</h1>`;
    // });

    // document.getElementById("table-body").innerHTML = tabledata;

        
    
    
    // fetch('https://fakestoreapi.com/products')
    // .then((response) => response.json())
    // .then((data) => {
    //     let tabledata = "";
    //     data.forEach((item, index) => {
    //         tabledata += `
    //           <tr>
    //             <th scope="row">${index + 1}</th>
    //             <td>${item.title}</td>
    //             <td>${item.price}</td>
             
    //             <td><img src="${item.image}" alt="${item.title}" style="max-width: 100px;"></td>
    //           </tr>`;
    //     });
    //     document.getElementById("table-body").innerHTML = tabledata;
    // })
    // .catch((error) => {
    //     console.error('Error fetching data:', error);
    // });


    // fetch('https://fakestoreapi.com/products')
    // .then(response => response.json())
    // .then(data => {
    //     let tableData = "";
    //     data.forEach((item, index) => {
    //         tableData += `
    //             <tr>
    //                 <th scope="row">${index + 1}</th>
    //                 <td>${item.title}</td>
    //                 <td>${item.description}</td>
    //                 <td>${item.category}</td>
    //                 <td>${item.price}</td>
                   
    //                 <td><img src="${item.image}" alt="${item.title}" style="max-width: 100px;"></td>
    //             </tr>`;
    //     });
    //     document.getElementById("table-body").innerHTML = tableData;
    // })
    // .catch(error => console.error('Error fetching data:', error));


    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {

        let tableData = "";
        data.forEach((item, index) => {
            tableData += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>${item.category}</td>
                    <td>${item.price}</td>
                    <td><img src="${item.image}" alt="${item.title}" style="max-width: 100px;"></td>
                </tr>`;
        });
        document.getElementById("table-body").innerHTML = tableData;
    })
    .catch(error => console.error('Error fetching data:', error));


