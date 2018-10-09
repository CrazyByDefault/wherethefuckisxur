fetch('data.json').then((response) => {
    response.text().then((text) => {
        let data = JSON.parse(text);

        if (document.getElementById('xurinv')) {
            data.xurinventory.forEach((s, i) => {
                document.getElementById('xurinv' + (i + 1)).innerText = s;
            });    
        }

        if (document.getElementById('spiderinv')) {
            data.spiderinventory.forEach((s, i) => {
                document.getElementById('spiderinv' + (i + 1)).innerText = s;
            });
        }
    })
})