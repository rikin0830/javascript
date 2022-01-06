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

// *******************************

const input = [];
function submitfun() {
    let i = 1;
    const obj = {
        id: "", Fname: "", Mname: "", lname: "", county: "", state: "", city: "",
        Dob: "", selected: "", checkbox: ""
    }

    obj.id = i++;
    obj.Fname = document.getElementById('fname').value;
    obj.Mname = document.getElementById('Mname').value;
    obj.lname = document.getElementById('Lname').value;
    obj.county = document.getElementById('countryid').value;
    obj.state = document.getElementById('stateid').value;
    obj.city = document.getElementById('cityid').value;
    obj.Dob = document.getElementById('Dob').value;
    obj.selected = document.forms.myForm.gender.value;
    obj.checkbox = document.getElementById('checkbox').value;
    input.push(obj);
    funmap();
    validation();
    function validation() {
        if (obj.Fname == "" || obj.Mname == "" || obj.lname == ""
            || obj.county == "" || obj.state == "" || obj.city == ""
            || obj.Dob == "" || obj.selected == "" || obj.checkbox == "") {
            alert("Please check your Input")
        }
    }
}
function handleClick(checkbox) {
    if (checkbox.checked) {
        return checkbox.value = "YES";
    }
    else {
        return checkbox.value = "No";
    }

}
function funmap() {
    let table = document.getElementsByTagName("tbody")[0];
    table.innerHTML = ""
    input.map((e) => {
        let row = table.insertRow(table.length);
        debugger;
        let cell1 = row.insertCell(0);
        cell1.innerHTML = e.id;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = e.Fname;
        let cell3 = row.insertCell(2);
        cell3.innerHTML = e.Mname;
        let cell4 = row.insertCell(3);
        cell4.innerHTML = e.lname;
        let cell5 = row.insertCell(4);
        cell5.innerHTML = e.county;
        let cell6 = row.insertCell(5);
        cell6.innerHTML = e.state;
        let cell7 = row.insertCell(6);
        cell7.innerHTML = e.city;
        let cell8 = row.insertCell(7);
        cell8.innerHTML = e.Dob;
        let cell9 = row.insertCell(8);
        cell9.innerHTML = e.selected;
        let cell10 = row.insertCell(9);
        cell10.innerHTML = e.checkbox;

    })
}






