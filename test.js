//name="Can" pythonda 
//Değişken tanımlama yöntemleri.
//Var güvenlik açığı olduğu için az kullanılır.(type safe değil.)
//var name="CAN"
//let name="CAN" //değişken tanımlama (içindeki değişkeni değiştiririm.)
//console.log(name) // consolda göstermek için // node  test.js (terminale yazınca kodu çalıştırır.)

//const name="Can" //Sabit tanımlama (içindeki değeri değiştiremem)

//var ve let in farkı: var ;functuon scope (fonksiyonun içinde tanımladığında dışardan çağırılınca gelir.) let; balock scope (if(){}else içinde olması )

// farkına örnek var yerine leyt gelince hatra veriyor .
//function TextDecoderStream(){
//    if (true){
  //      var degisken="Merhaba Dünya"
    //}
    //if (true){
   //     console.log(degisken)
    //}
//}
        //2
//var keywordüne değişkenler tekrar tanımlanabilir.
//var degiskenİ="Merhaba Dünya"
//var degisken="Hello World"
// sonuc=Hata almadı 
//bu örneği let ile dendik ve hata aldık 

// let degisken ="Merhaba Dünya"
//degisken="Hello World"
//console.log(degisken)
//Bu örnekte de let sonuç verdi degiskeni değiştirdsi
        //3
//Hoisting :Bir değişkeni önce ytanımlamak sonra kullanmöak.
//degisken="Merhaba Dünya "
//console.log(degisken)
//var degisken  === buraya var yerine let yaparsak buna müsade etmez.

//let ile const farkları:
//lest mutoble () const imutable () aşağıdaki örnekler için
/*  let name ="Can"
const adi="Ahömet"
name="ahmet"
adi="ahmet"  */
//Sabit bir değişkene atama yapılamaz diyor const .Consta örnek :veri tabanından gelen değer (çünkü değişmesini istemeyiz.)
//--> örnek devam.:.tokenlar...
/* var ağirlik=50
if(ağirlik>49){
    var miktar=1.4
    console.log(`&[dolar](miktar) su içmelisin`)  // stringin içine değişken yazabiliriz(``) bu işatretle altgr noktalı virgül ile elde edilir.
}
console.log(miktar) */

//yukardaki örneği mlet ile yapalım (miktar değişkeni blog içinde tanımlanmış o yüzden letle olmaz ) çözümü leti dışatrı alırız tanımlarız atamasını yaparız çözülür. 

//geleneksel yöntem
//function topla(a,b){
//    return a+b
//}
//arrow functioın
//const topla=(a,b)=>a+b
/* geleneksel yöntem
function test(){
    console.log("Merhaba Dünya"+this.name)
}
const person={
    name:"Can",
    soyle:test,

}
person.soyle()
*/
//bunun içindeki öbjenin name özelliğini al ekrana bastır.
//Arrow function
/* const test=()=>{  //değişken tanımlamayla aynı şey
    console.log("Merhaba Dünya"+this.name)  //burası fonksiyon kısmı //block spone 
}
const person={
    name:"Can",
    soyle:test,
}
person.soyle() */

//geleneksel yöntem
/* function addToCart(urun_adi,adet,fiyat){
    console.log(urun.urun_adi)
    console.log(urun.adet)
    console.log(urun.fiyat)

}
addToCart("elma",5,10)
addToCart("armut",2,20)
addToCart("limon",3,15)
///////////////////////////////////////

let urunler=[{urun_adi:"elma",fiyat:5,adet:20},
            {urun_adi:"armut",fiyat:2,adet:11},
            {urun_adi:"limon",fiyat:3,adet:15}]
function addToCart(urun){
    console.log(urun.urun_adi)
    console.log(urun.adet)
    console.log(urun.fiyat)

}
addToCart(urunler) */

// çok önemli (dizinin içinde obje oldu ve objelere erişebiliriz.)
/* let urunler=[{urun_adi:"elma",fiyat:5,adet:20},
            {urun_adi:"armut",fiyat:2,adet:11},
            {urun_adi:"limon",fiyat:3,adet:15}]
console.log(urunler[0]["urun_adi"])   //ilk verisine ulaşmak için Ürün adını verdi. Hepsini almak için döngüye sokmamız lazım.
 */
//rest operatörü 
/* function topğla(...sayilar){
    let toplam=0
    for(let i=0<sayilar.length;i++){
        toplam=toplam+sayilar[i]
    }
    console.log(toplam)

}
topla(10,20,30,40)

let bolgeler=["İç Anadolu","Marmara","kARADENİZ"]
console.log(bolgeler[1]) */

    //liste dictionarye dönüştü
/* let [birinci,ikinci,ucuncu]=["İç Anadolu","Marmara","kARADENİZ"]
console.log(içanadolu) */
    //distracting işlemi
/* let [birinci,ikinci,ucuncu]=[adi:"İç Anadolu",nufus:"20m"],
                            [adi:"marmara",nufus:"20m"],
                            [adi:"karadeniz",nufus:"20m"]
console.log(birinci.adi) */

       //spread operatörü
/* let sayilar=[30,100,200,300,350]
console.log(...sayilar) */

     //fonksiyon tanımlamalar:
/* function test(){
a+100
} */

/* const test=()=>{
a+100
} */

//(test)=>a+100

//test=>a+100


//conditional ternary operator (if else kullanımı)
//1.
/* if(a<100){
console.log("100 den küçük")
}else if (a==100){
    console.log("100e eşit")
}
else{
    console.log("100 den büyük")
} */
////2.
/* const sonuc=a==100? "100 e eşit":"100 e eşit değil" */

// eksik kALDI !!!!!!!!!!!!!!!!!!!!!!!!!!
/* function example(){
    if(condition1){
        return value1
    }else if(condition2)
        return value2

}else if(condition3) {
    return value3

}else  */







//
/* const sayilar =[1,2,3,4,5,6,7,8,9]
const ciftsayılar=sayilar.filter(function(sayilar){
    return sayilar%2==0
})
console.log(ciftsayılar) */

/* const ciftsayilar=sayilar,filter((sayilar)=>sayilar%2===0)
console.log(ciftsayilar) */

/* const sayilar=[1,2,3,4,5,6,7,8,9]
const sayi=sayilar.find(fonction(sayilar){
    return sayilar%2===0
})
console.log(sayilar) */