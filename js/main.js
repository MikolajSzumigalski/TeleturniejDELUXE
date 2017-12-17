window.onload = odswierz();
function odswierz() {
    if (sessionStorage.count1)
        document.getElementById("t1pkt").innerHTML = sessionStorage.count1;
    else {
        sessionStorage.count1 = 0;
        document.getElementById("t1pkt").innerHTML = sessionStorage.count1;
    }
    if (sessionStorage.count2)
        document.getElementById("t2pkt").innerHTML = sessionStorage.count2;
    else {
        sessionStorage.count2 = 0;
        document.getElementById("t2pkt").innerHTML = sessionStorage.count2;
    }
    if (sessionStorage.count3)
        document.getElementById("t3pkt").innerHTML = sessionStorage.count3;
    else {
        sessionStorage.count3 = 0;
        document.getElementById("t3pkt").innerHTML = sessionStorage.count3;
    }
    if (sessionStorage.count4)
        document.getElementById("t4pkt").innerHTML = sessionStorage.count4;
    else {
        sessionStorage.count4 = 0;
        document.getElementById("t4pkt").innerHTML = sessionStorage.count4;
    }
}

document.getElementById("btnadd").addEventListener("click", function() {
    odswierz();
    if (document.getElementById("team").value == "1")
        sessionStorage.count1 =
            Number(sessionStorage.count1) +
            Number(document.getElementById("points").value);
    if (document.getElementById("team").value == "2")
        sessionStorage.count2 =
            Number(sessionStorage.count2) +
            Number(document.getElementById("points").value);
    if (document.getElementById("team").value == "3")
        sessionStorage.count3 =
            Number(sessionStorage.count3) +
            Number(document.getElementById("points").value);
    if (document.getElementById("team").value == "4")
        sessionStorage.count4 =
            Number(sessionStorage.count4) +
            Number(document.getElementById("points").value);
    odswierz();
});

document.getElementById("btnpowrot2").addEventListener("click", function() {
    sessionStorage.count1 = (Number(sessionStorage.count1) - 1000) / 100;
    sessionStorage.count2 = (Number(sessionStorage.count2) - 1000) / 100;
    sessionStorage.count3 = (Number(sessionStorage.count3) - 1000) / 100;
    sessionStorage.count4 = (Number(sessionStorage.count4) - 1000) / 100;
});
