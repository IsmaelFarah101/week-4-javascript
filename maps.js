let maps = {
    verrazano: {
        coordinates: [40.6066, -74.0447],
        name: "Verrazano-Narrows Bridge",
        span: 1298.4,
        div : "verrazano"
    },
    golden : {
        coordinates: [37.8199, -122.4783],
        name: "Golden Gate Bridge",
        span : 1280.2,
        div : "golden"
    },
    mackinac :{
        coordinates: [45.8174, -84.7278],
        name : "Mackinac Bridge",
        span : 1158.2,
        div : "mackinac"
    },
    george : {
        coordinates : [40.8517, -73.9527],
        name: "George Washington Bridge	",
        span : 1067.0,
        div : "george"
    },
    tacoma : {
        coordinates : [47.2690, -122.5517],
        name: "Tacoma Narrows Bridge",
        span : 853.44,
        div : "tacoma"
    }

}

for(var object in maps){
    let counter = 1;
    let coordinates = maps[object].coordinates;
    let div = maps[object].div;
    let name = maps[object].name
    let span = maps[object].span
    console.log(`${counter}# \ncoor ${coordinates} \n div ${div} \n name ${name} \n span ${span} \n --------------------------------- `)
    let map = L.map(div).setView(coordinates, 9)
    let marker = L.marker(coordinates).bindPopup(`Name ${name} Length ${span}`).addTo(map)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaXNtYWVsMTAxIiwiYSI6ImNqczVhdWY0eDBkdGQ0M21qZ3Y3ejh5bWkifQ.ffs6c2Z4ixnQ5YIQUN2gKg'
    }).addTo(map)

}


   
