fetch("data.json")

//fetching the information from the json file
.then(function(response){
    return response.json();
})

//building the table
.then(function(companies) {
    //need to specify the attribute (if it's an id or class)
    let table = document.querySelector('#company-body');
    let row = "";
    //looping through array
    for (let company of companies) {
        row += `<tr>
                        <td scope="row">${company.company_name}</td>
                        <td scope="row"><img src=${company.img_src} width="200" height="200"></td>
                        <td scope="row">${company.about}</td>
                    </tr>`;
    }
    table.innerHTML = row; 
})