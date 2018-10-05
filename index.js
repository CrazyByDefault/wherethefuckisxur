fetch('data.json').then((response) => {
    response.text().then((text) => {
        let data = JSON.parse(text);

        data.xurinventory.forEach((s, i) => {
            document.getElementById('xurinv' + (i + 1)).innerText = s;
        })

        data.spiderinventory.forEach((s, i) => {
            document.getElementById('spiderinv' + (i + 1)).innerText = s;
        })

        console.log(data);
    })
})