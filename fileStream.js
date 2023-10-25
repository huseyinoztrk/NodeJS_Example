var fs = require("fs");

//Dosya okuma
fs.readFile("dosya.txt", "utf8", function (hata, data) {
  if (hata) {
    throw hata;
  }
  console.log(data.toString());
});

//Dosya oluşturma ve yazma
fs.writeFile("dosya2.txt", "Salih Öztürk", function (hata) {
  if (hata) {
    throw hata;
  }
  console.log("Yazıldı");
});

//Dosya içine ekleme
fs.appendFile("dosya2.txt", "Hüseyin Öztürk", function (hata) {
  if (hata) {
    throw hata;
  }
  console.log("Eklendi");
});

//Dosya silme
fs.unlink("dosya2.txt", function (hata) {
  if (hata) {
    throw hata;
  }
  console.log("Silindi");
});
