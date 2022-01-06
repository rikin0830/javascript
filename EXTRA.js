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

// ***************************************************************************

const input = [];
var updateid = 0;


function submitfun() {
    if (validation()) {
        alert("Please check the Input filled");
    } else {
        submitfun1();

    }
}

// setid = Math.max(input.length);




let setid = 1;
setid = Math.max(input.length + 1)

function submitfun1() {

    const obj = {
            // id: setid++
            // Fname: "",
            // Mname: "",
            // lname: "",
            // county: "",
            // state: "",
            // city: "",
            // Dob: "",
            // selected: "",
            // checkbox: ""
        }
        // let max = Math.max(input.length);
        // console.log(max);
        // if (setid == input.length) {
        //     setid + 1;
        // } else {


    // }
    obj.id = setid++
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
    reset();
}

function validation() {

    var Fname = document.getElementById('fname').value;
    var Mname = document.getElementById('Mname').value;
    var lname = document.getElementById('Lname').value;
    var county = document.getElementById('countryid').value;
    var state = document.getElementById('stateid').value;
    var city = document.getElementById('cityid').value;
    var Dob = document.getElementById('Dob').value;
    var selected = document.forms.myForm.gender.value;
    var checkbox = document.getElementById('checkbox').value;

    if (Fname == "") {
        return true;
    }
    return false;
}


function reset() {
    document.getElementById('fname').value = "";
    document.getElementById('Mname').value = "";
    document.getElementById('Lname').value = "";
    document.getElementById('countryid').value = "";
    document.getElementById('stateid').value = "";
    document.getElementById('cityid').value = "";
    document.getElementById('Dob').value = "";
    document.getElementById('checkbox').value = "";
    document.getElementById('gender').value = "";



}

function handleClick() {
    let check = document.getElementById('checkbox');
    if (check.checked) {
        checkbox.value = "YES";
    } else {
        checkbox.value = "No";
    }

}

function funmap() {
    let table = document.getElementsByTagName("tbody")[0];
    table.innerHTML = ""
    input.map((e) => {
        let row = table.insertRow(table.length);
        // debugger;
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
        let cell11 = row.insertCell(10);
        cell11.innerHTML = `<button onclick="myEdit(${e.id})" >EDIT</button>
        <button onclick="mydlt(${e.id})" >Delete</button>`

    })
}


function mydlt(id) {
    var i = input.findIndex((element) => element.id === id);
    input.splice(i, 1);
    console.log(input);
    funmap();

}

function myEdit(id) {
    updateid = id;
    document.getElementById("submit").style.display = "none";
    document.getElementById("afteredit").style.display = "block";
    var i = input.findIndex((element) => element.id === id);
    var obj = input[i];

    document.getElementById("fname").value = obj.Fname;
    document.getElementById('Mname').value = obj.Mname;
    document.getElementById('Lname').value = obj.lname;
    document.getElementById('Dob').value = obj.Dob;
    document.forms.myForm.gender.value = obj.selected
    document.getElementById('countryid').value = obj.county;

    document.getElementById("stateid").innerHTML = "";
    let state = Object.keys(dropdown[obj.county]);
    state.map((e) => {
        node1 = document.createElement("option")
        textnode1 = document.createTextNode(e);
        node1.appendChild(textnode1);
        document.getElementById("stateid").appendChild(node1);
    })
    document.getElementById('stateid').value = obj.state;


    document.getElementById("cityid").innerHTML = ""
    var selCon = dropdown[obj.county];
    var selSta = selCon[obj.state];
    selSta.map((e) => {
        node1 = document.createElement("option")
        textnode1 = document.createTextNode(e);
        node1.appendChild(textnode1);
        document.getElementById("cityid").appendChild(node1);
    })
    document.getElementById('cityid').value = obj.city;


}

function update(updateid) {
    document.getElementById("submit").style.display = "block";
    document.getElementById("afteredit").style.display = "none";
    var i = input.findIndex((element) => element.id === updateid);
    let obj = input[i];
    obj.Fname = document.getElementById("fname").value;
    obj.Mname = document.getElementById('Mname').value;
    obj.lname = document.getElementById('Lname').value;
    obj.country = document.getElementById('countryid').value;
    obj.state = document.getElementById('stateid').value;
    obj.city = document.getElementById('cityid').value;
    obj.Dob = document.getElementById('Dob').value;
    obj.selected = document.forms.myForm.gender.value;
    obj.checkbox = document.getElementById('checkbox').value;
    funmap();
    reset();

}