function student(kullaniciAdi, kullaniciSoyadi, studentAge) {
    this.kullaniciAdi = kullaniciAdi;
    this.kullaniciSoyadi = kullaniciSoyadi;
    this.studentAge = studentAge;
}

function kullaniciEkle(e) {
    const kullaniciAdi = document.querySelector("#validationCustom01").value;
    const kullaniciSoyAdi = document.querySelector("#validationCustom02").value;
    const studentAge = document.querySelector("#validationCustom04").value;
    const checkApply = document.querySelector("#invalidCheck").checked;
    const lists = new student(kullaniciAdi, kullaniciSoyAdi, studentAge);
    const ui = new UI();
    count++;
    if (kullaniciAdi == "" || kullaniciSoyAdi == "" || studentAge == "" || checkApply === false) {
        ui.stopPropagation();
        ui.preventDefault();
    }
    ui.ogrenciEkle(lists);
    toplamOgrenci();
    ui.formTemizleme();
    e.preventDefault();
}

(function () {
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
         var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function UI() { }

function ogrenciSil(e) {
    const ui = new UI();
    ui.ogrenciListesiSil(e.target);
    count = count - 1;
    toplamOgrenci();
    e.preventDefault();
}

function toplamOgrenci() {
    let topOgrenci = document.querySelector(".deger");
    topOgrenci.innerHTML = count;
}