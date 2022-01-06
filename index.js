const dropdown = {
    India: {
        Maharashtra: ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
        MadhyaPradesh: ['Indore', 'Bhopal', 'Jabalpur'],
        Rajasthan: ['Jaipur', 'Ajmer', 'Jodhpur'],
        Gujrat: ['surat', 'Bhavangar', 'Vapi']
    },
    USA: {
        Alabama: ['Montgomery', 'Birmingham'],
        California: ['Sacramento', 'Fremont'],
        Illinois: ['Springfield', 'Chicago']
    },
    Australia: {
        NewSouthWales: ['Sydney', 'Newcastle', 'Central Coast'],
        victoria: ['Melbourne', 'Geelong', 'Ballarat']
    },
    canada: {
        BritishColumbia: ['vancouver', 'victoria'],
        ontario: ['toronto', 'ottawa', 'london']
    }
};


let list = Object.keys(dropdown)
list.map((e) => {
    node = document.createElement("option")
    textnode = document.createTextNode(e);
    node.appendChild(textnode);
    document.getElementById("countryid").appendChild(node);
})

function countrychange(event) {
    // debugger
    document.getElementById("stateid").innerHTML = ""
    document.getElementById("cityid").innerHTML = ""
    let country = event.target.value;
    let state = Object.keys(dropdown[country]);

    state.map((e) => {
        node1 = document.createElement("option")
        textnode1 = document.createTextNode(e);
        node1.appendChild(textnode1);
        document.getElementById("stateid").appendChild(node1);
    })
}

function statechange(event) {
    // debugger
    document.getElementById("cityid").innerHTML = ""
    let country = document.getElementById("countryid").value;
    let state = document.getElementById("stateid").value;

    var selCon = dropdown[country];
    var selSta = selCon[state];

    selSta.map((e) => {
        node1 = document.createElement("option")
        textnode1 = document.createTextNode(e);
        node1.appendChild(textnode1);
        document.getElementById("cityid").appendChild(node1);
    })
}




function submitfun() {

    document.getElementById("table").style.display="block";
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var fnameF = row.insertCell(0);
    var lnameF = row.insertCell(1);
    var mnameF = row.insertCell(2);
    var countrynameF = row.insertCell(3);
    var statenameF = row.insertCell(4);
    var citynameF = row.insertCell(5);
    var  DobnameF = row.insertCell(6);
    var selected = row.insertCell(7);
    var checkbox = row.insertCell(8)


    fnameF.innerHTML = document.getElementById('fname').value;
    lnameF.innerHTML = document.getElementById('Mname').value;
    mnameF.innerHTML = document.getElementById('Lname').value;
    countrynameF.innerHTML = document.getElementById('countryid').value;
    statenameF.innerHTML = document.getElementById('stateid').value;
    citynameF.innerHTML = document.getElementById('cityid').value;
    DobnameF.innerHTML = document.getElementById('Dob').value;
    selected.innerHTML = document.forms.myForm.gender.value;
    checkbox.innerHTML = document.getElementById('married').value;
}

// var obj = {
//     id = " ",
//     Fname = " ",
//     Mname = " ",
//     county = " ",
//     state = " ",
//     city = " ",
//     Dob = " "

// }
// function takedata(){
    
//     for(var i=o;i<=input.length;i++){
//         take.puch({


//         })
//     }
// }


// function readFormData(){
//     var input = [];

//     fnameF = document.getElementById('fname').value;
//     input.push(fnameF);
//     lnameF = document.getElementById('Mname').value;
//     input.push(lnameF);
//     mnameF = document.getElementById('Lname').value;
//     input.push(mnameF);
//     countrynameF = document.getElementById('countryid').value;
//     input.push(countrynameF);
//     statenameF = document.getElementById('stateid').value;
//     input.push(statenameF);
//     citynameF = document.getElementById('cityid').value;
//     input.push(citynameF);
//     DobnameF = document.getElementById('Dob').value;
//     input.push(DobnameF);


// }



