document.getElementById("btnindex").addEventListener("click", function () {
    console.log("dupa");
    sessionStorage.count1 = Number(sessionStorage.count1)*100+5000;
    sessionStorage.count2 = Number(sessionStorage.count2)*100+5000;
    sessionStorage.count3 = Number(sessionStorage.count3)*100+5000;
    sessionStorage.count4 = Number(sessionStorage.count4)*100+5000;
})
