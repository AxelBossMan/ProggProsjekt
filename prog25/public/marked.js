

document.addEventListener('DOMContentLoaded', async() =>{
    try{
        const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=4B5HBYMRCDCC4A6M");
        const data = await response.json();
        console.log(data);

        const ctx = document.getElementById(`chart`).getContext(`2d`);
        new Chart(ctx, {
            type: "line",
            data: {
                labels: data.labels,
                datasets: [{
                    label: "Meta",
                    data: data.close,
                    bordercolor: "blue",
                    backgroundColor: "lightblue",
                    borderWidth: 2,
                    pointRadius: 3
                }]
            },
            options:{
                responsive: true,
                scales: {
                    x: {title: {display: true, text: "Date"}},
                    y: {title: {display: true, text: "Price"}}
                }
            }   
        });
    } catch(error){
        console.error("Error: ", error);
    }
});




