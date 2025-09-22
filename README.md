# LearnHub - Angular LMS

LearnHub, Angular ve JSON Server kullanılarak geliştirilmiş bir **Eğitim Yönetim Sistemi (LMS)** uygulamasıdır.  
Bu projede kullanıcılar kurslara katılabilir, eğitmenler dersler ekleyebilir, öğrenciler yorum yapabilir.  

## 🚀 Özellikler
- Kullanıcı kayıt ve giriş işlemleri (student & instructor rolleri)
- Role-based Access Control (RBAC)
- Kurs ve ders yönetimi
- Kursa kayıt (Enrollment)
- Yorum sistemi
- Modern UI (Angular Material / Bootstrap)
- Backend olarak json-server kullanılmıştır, frontend tamamen Angular ile geliştirilmiştir.

## 🛠️ Teknolojiler
- Frontend: Angular 17+, Angular Material / Bootstrap / CSS
- Backend: json-server
- Diğer: LocalStorage, HttpClient, Angular Routing, Forms Validation, Route Guards

## 📂 Kurulum

### Projeyi klonla
```bash
git clone https://github.com/tubanursmsk/learnhub-angular-lms.git
```

### Angular tarafı
```bash
cd learnhub
npm install
ng serve -o
```

### Backend (JSON Server)
```bash
json-server --watch db.json --port 3001
```

### Frontend (Angular) kurulumu:
```bash
npm install
ng serve --port 4402
```

### Tarayıcıdan açın:
```ardunio
http://localhost:4402
```

### 👥 Örnek Kullanıcı Hesapları

| Rol        | Email                                         | Şifre |
| ---------- | --------------------------------------------- | ----- |
| Student    | [ahmet@example.com](mailto:ahmet@example.com) | 1234  |
| Instructor | [ayse@example.com](mailto:ayse@example.com)   | abcd  |

---

## 🖼 Proje Ekran Görüntüleri

### 1. Giriş / Kayıt Ekranı
<img width="729" height="456" alt="Macbook-Air-localhost" src="https://github.com/user-attachments/assets/292f4496-55ac-47e2-b08e-7b515dc6aeaf" />

<img width="729" height="456" alt="Macbook-Air-localhost (1)" src="https://github.com/user-attachments/assets/31699e6e-3c88-47a9-b468-bf6f6b2a722e" />

<img width="683" height="312" alt="image" src="https://github.com/user-attachments/assets/eaf4be5f-f199-486a-b494-745663e7ddb1" />


### 2. Kurs Listesi
<img width="729" height="456" alt="Macbook-Air-localhost (2)" src="https://github.com/user-attachments/assets/5f69c1f6-dfec-41cc-b123-bacac201d3d4" />


### 3. Kurs Detay & Dersler
[Macbook-Air-localhost-8zdg9p_6qu7dtv.webm](https://github.com/user-attachments/assets/f987ebb9-c140-4797-87d5-77d177ec9a0f)


### 4. Yorum Sistemi
[Macbook-Air-localhost-sm--t4zrbo-9ic.webm](https://github.com/user-attachments/assets/5f0ae28a-075a-4de5-9c27-c127b8b0e185)


### 5. Eğitmen Paneli (Kurs Ekleme / Düzenleme)
[Macbook-Air-localhost-g4zsxdrh921rhn.webm](https://github.com/user-attachments/assets/73d58b4e-438e-4f69-ae74-2d1928db45a7)


### 6. Profil & Kayıtlı Kurslar
[iPhone-13-PRO-localhost-fg2zgw5s01-j-h.webm](https://github.com/user-attachments/assets/f8f3a2fa-1596-42d1-81c4-803b1be18913)

### 7. Blog
[iPhone-13-PRO-localhost-caehe4wsvbl3rr.webm](https://github.com/user-attachments/assets/817efc26-972f-40a1-bfa2-5d54461bcecc)

---

## ⚡ Özellikler

- Kullanıcı Yönetimi: Kayıt ol, giriş yap, token ile auth state yönetimi.
- RBAC (Role-Based Access Control): Student / Instructor rolleri, route guard ile korunmuş sayfalar.
- Kurs ve Ders Yönetimi: Kurs listeleme, detay, ders ekleme/düzenleme/silme.
- Kursa Katılım: Öğrenciler kursa kayıt olabiliyor, profil sayfasında kursları görebiliyor.
- Yorum Sistemi: Kurs detayında yorum yapma ve listeleme.
- UI/UX: Angular Material / Bootstrap ile modern ve responsive tasarım.
- Angular Konuları: Component, Routing, Service & Dependency Injection, HttpClient CRUD, Forms Validation, Route Guards, LocalStorage.

---


## ✅ Commit Mesaj Örnekleri

- feat: kurs listeleme componenti eklendi
- fix: login form validation hatası düzeltildi
- feat: eğitmen kurs ekleme özelliği eklendi

---

## 📂 Proje Dosya Yapısı (Örnek)

```java
angular-lms-bitirme-projesi/
│
├─ src/app/
│   ├─ components/
│   ├─ models/
│   ├─ pages/
│   ├─ services/
│   ├─ utils/
│   ├─ guards/
│   └─ auth-guard.ts - role-guard.ts - notauth-guard.ts
│
├─ db.json
├─ package.json
└─ README.md
```

<img width="960" height="516" alt="image" src="https://github.com/user-attachments/assets/e33b5cfd-acec-4a62-b028-229fd38a4cb0" />


---

🏷 Etiketler
`Angular` `JS` `HTML`  `CSS` `Boostarp` `JSON-Server` `LMS`  
`Learning Management System` `Katmanlı Mimari` `RBAC` `Education` 


