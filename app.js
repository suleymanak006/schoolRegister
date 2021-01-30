//St. Moritz'de Orta Okulu Kayit Sistemi.
//Bir okul icin kayit sistemi prohgrami isteniyor.
//1. HTML sayfamizda isim soyisim ve yas kisimlariyla label ler olusturduk
//2. Etiketlerin altinda kaydet butonuyla bilgisi girilen ogrenciler listeye eklendi
//3.kayit bolumunun hemen yaninda girilen bilgilerle sinif listesi olusturuldu.
//4. Listeye eklenen her bir isim listenin sonundaki toplama islendi.
//5. Listeden cikarilacak ogrenciler icin silme bolumu olusturuldu.
//sayfanin renk ve sekil ayarlamalari css ile yapildi.
//Kaydet ve sil olarak 2 addEventListener eklendi.
//
document.querySelector("#kullaniciForm").addEventListener("submit",kullaniciEkle);
document.querySelector("#ogrenciListesi").addEventListener("click",ogrenciSil);
let count=0;
UI.prototype.ogrenciEkle=function(lists){
    const list=document.querySelector("#ogrenciListesi");
    const ulLists=document.createElement("tr");
    ulLists.innerHTML=`
    <td>${lists.kullaniciAdi}</td>
    <td>${lists.kullaniciSoyadi}</td>
    <td>${lists.studentAge}</td>
    <td class="fas fa-trash"></td>`;
    list.appendChild(ulLists);
}
UI.prototype.formTemizleme=function(){
document.querySelector("#validationCustom01").value="";
document.querySelector("#validationCustom02").value="";
document.querySelector("#validationCustom04").value="";
}
UI.prototype.ogrenciListesiSil=function (hedef) {
   if( hedef.className =="fas fa-trash"){
       hedef.parentElement.remove();
   }
}