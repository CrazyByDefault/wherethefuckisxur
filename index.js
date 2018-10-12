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

        if (document.getElementById('bansheeinv')) {
            data.bansheeinventory.forEach((s, i) => {
                document.getElementById('bansheeinv' + (i + 1)).innerText = s;
            });    
        }

        if (document.getElementById('dailies')) {
            let firstResetTime = 1539277200;
            let currentTime = Math.floor((new Date()).getTime() / 1000);
            let secondsSinceFirst = currentTime - firstResetTime;
            let daysSinceFirst = Math.floor(secondsSinceFirst / 86400);
            let resetDay = daysSinceFirst % 4;
            if (resetDay == 0) {
                document.getElementById('dailiesday1').innerText = "Today: Gambit";
                document.getElementById('dailiesday2').innerText = "Crucible";
                document.getElementById('dailiesday3').innerText = "Heroic Adventure";
                document.getElementById('dailiesday4').innerText = "Strikes";
            } else if (resetDay == 1) {
                document.getElementById('dailiesday1').innerText = "Today: Crucible";
                document.getElementById('dailiesday2').innerText = "Heroic Adventure";
                document.getElementById('dailiesday3').innerText = "Strikes";
                document.getElementById('dailiesday4').innerText = "Gambit";
            } else if (resetDay == 2) {
                document.getElementById('dailiesday1').innerText = "Today: Heroic Adventure";
                document.getElementById('dailiesday2').innerText = "Strikes";
                document.getElementById('dailiesday3').innerText = "Gambit";
                document.getElementById('dailiesday4').innerText = "Crucible";
            } else if (resetDay == 3) {
                document.getElementById('dailiesday1').innerText = "Today: Strikes";
                document.getElementById('dailiesday2').innerText = "Gambit";
                document.getElementById('dailiesday3').innerText = "Crucible";
                document.getElementById('dailiesday4').innerText = "Heroic Adventure";
            }
        }
    })
})