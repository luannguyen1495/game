var diem = 100;
var danhSach = [];
document.getElementById('diem').innerHTML = diem;
function run() {
    let it1 = document.getElementById('i1');
    let it2 = document.getElementById('i2');
    let it3 = document.getElementById('i3');

    const ran1 = setInterval(radomImg, 100, it1)
    const ran2 = setInterval(radomImg, 100, it2)
    const ran3 = setInterval(radomImg, 100, it3)

    setTimeout(function () { clearInterval(ran1) }, 3000);
    setTimeout(function () { clearInterval(ran2) }, 3000);
    setTimeout(function () { clearInterval(ran3) }, 3000);

    setTimeout(getQK, 3000);

}

function radomImg(element) {
    var items = ['bau.PNG', 'cua.PNG', 'huou.PNG', 'ca.PNG', 'ga.PNG', 'tom.PNG'];
    var item = items[Math.floor(Math.random() * items.length)];
    element.setAttribute('src', 'images/' + item);
    element.style.border = '3px solid red'
}

function dat(e) {
   
    let curentQty = e.getAttribute('data-cuoc');
   
    if(diem <10){
        alert('het tien');
    } else{
        e.setAttribute('data-cuoc', parseInt(curentQty) + 10);

        let name = e.getAttribute('src');
        let cuoc = parseInt(e.getAttribute('data-cuoc'));
        document.getElementById(`cuoc_${e.id}`).innerHTML = cuoc;
        diem -= 10;
        document.getElementById('diem').innerHTML = diem;
        let item = { name, cuoc }
        var check = danhSach.find(item => {
    
            return item.name === name;
        });
        if (!check) {
            danhSach.push(item);
        } else {
            check.cuoc = cuoc;
        }
    }
   

}
    function getQK() {
        let kq = [];
        let it1 = document.getElementById('i1').getAttribute('src');

        let it2 = document.getElementById('i2').getAttribute('src');

        let it3 = document.getElementById('i3').getAttribute('src');

        kq.push(it1, it2, it3);
        tdiem(kq);

    }

    function tdiem(it1) {
     
        it1.forEach(element => {
            danhSach.forEach(item => {
                if (element == item.name) {
                    diem = diem + item.cuoc;
                }
            })
        });
        reset();
        document.getElementById('diem').innerHTML = diem;
    }

    function reset() {
        danhSach = [];
        let data_cuoc = document.getElementsByClassName('c');
        for (let index = 0; index < data_cuoc.length; index++) {
            data_cuoc[index].setAttribute('data-cuoc', 0);

        }
        let price = document.getElementsByClassName('price');
        for (let index = 0; index < price.length; index++) {
            price[index].innerHTML = 0;

        }

    }