# NodeJS-CrudApp

Geliştirdiğimiz uygulamada postman aracılığı ile ekle çıkar güncelle işlemlerini yapabileceğimiz bir uygulama.
Veriyi postmande add, delete, update işlemlerini yapabiliyoruz.
Bu işlemler haricinde basit bir kullanıcı adı ve giriş arayüzü ile veri tutuluyor ve  bu veriler üzerinde değişiklikleri postman üzerinden yapabiliyoruz. 

Proje Yapısı

my-crud-app/

 /src
     /controllers
             -userController.js   CRUD işlemlerini gerçekleştiren controller.

      /models
            - userModel.js       Basit bir kullanıcı verisi modeli tanımlayacağız.


      /routes
            userRoutes.js       CRUD işlemlerini yönlendiren rotalar.




    - app.js             Express uygulamasını başlatın ve yönlendirmeleri ekleyin.     
 
    - server.js         Sunucuyu başlatın.

   - package.json
   - .gitignore
------------------------------------------------------------------------------------------------------

        Sunucuyu başlatmak için terminalde şu komutu çalıştırın:
          node src/server.js
----------------------------------------------------------------------------------------------------

        Postman ile Test Edin:

     1. GET /api/users - Tüm Kullanıcıları Listeleme
     Postman'de yeni bir GET isteği oluşturun ve şu URL'yi kullanın:

     http://localhost:3000/api/users
     
     Eğer veri yoksa, boş bir dizi dönecektir: []

-------------------------------------------------------------------------------------------------
      2. POST /api/users - Yeni Kullanıcı Ekleme
    Yeni bir kullanıcı eklemek için POST isteği yapın:

    URL: http://localhost:3000/api/users

    Body kısmında JSON formatında şu veriyi gönderebiliriz:
    
    {
  "username": "user1",
  "password": "pass1"
}
   Yanıt olarak, eklenen kullanıcının detayları dönecektir.
-----------------------------------------------------------------------------------------------

      3. GET /api/users/:id - Belirli Bir Kullanıcıyı Getirme
   Belirli bir kullanıcıyı almak için GET isteği yapın:

   URL: http://localhost:3000/api/users/1
   Yanıt olarak, id'si 1 olan kullanıcının bilgilerini alacaksınız.
-------------------------------------------------------------------------------------------------

4. PUT /api/users/:id - Kullanıcı Güncelleme
Mevcut bir kullanıcıyı güncellemek için PUT isteği yapın:

URL: http://localhost:3000/api/users/1

Body kısmında JSON formatında şu veriyi gönderebiliriz:

{
  "username": "updatedUser",
  "password": "newPass"
}
Yanıt olarak, güncellenen kullanıcının bilgileri dönecektir.

--------------------------------------------------------------------------------------------------
5. DELETE /api/users/:id - Kullanıcı Silme
Bir kullanıcıyı silmek için DELETE isteği yapın:

URL: http://localhost:3000/api/users/1
Yanıt olarak boş bir içerik dönecektir (204 No Content), bu da kullanıcının silindiğini gösterir.

------------------------------------------------------------------------------------------------------
   




















     
         
