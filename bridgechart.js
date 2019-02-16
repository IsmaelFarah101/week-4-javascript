let canvas = document.getElementById("bridges");
let context = canvas.getContext("2d");
chart = new Chart(context,{
    type: "bar",
    data: {
        labels:["Verrazano-Narrows Bridge","Golden Gate Bridge","Mackinac Bridge","George Washington Bridge","Tacoma Narrows Bridge"],
        datasets: [{
          label: 'Largest Bridges',
          data: [1298.4,1280.2,1158.0,1067.0,853.44],
          backgroundColor:['blue','orange','purple','green','black']
        }]
    }, options:{
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero: true
          }
        }]
      }
    }
})