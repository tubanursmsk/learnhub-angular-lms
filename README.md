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

# Projeyi klonla
```bash
git clone https://github.com/tubanursmsk/learnhub-angular-lms.git
```

# Angular tarafı
```bash
cd learnhub
npm install
ng serve -o
```

# Backend (JSON Server)
```bash
json-server --watch db.json --port 3001
```

# Frontend (Angular) kurulumu:
```bash
npm install
ng serve --port 4402
```

# Tarayıcıdan açın:
```bash
http://localhost:4402
```

## 👥 Örnek Kullanıcı Hesapları

| Rol        | Email                                         | Şifre |
| ---------- | --------------------------------------------- | ----- |
| Student    | [ahmet@example.com](mailto:ahmet@example.com) | 1234  |
| Instructor | [ayse@example.com](mailto:ayse@example.com)   | abcd  |

---

## 🖼 Proje Ekran Görüntüleri

# 1. Giriş / Kayıt Ekranı

# 2. Kurs Listesi

# 3. Kurs Detay & Dersler

# 4. Yorum Sistemi

# 5. Eğitmen Paneli (Kurs Ekleme / Düzenleme)

# 6. Profil & Kayıtlı Kurslar


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

feat: kurs listeleme componenti eklendi

fix: login form validation hatası düzeltildi

feat: eğitmen kurs ekleme özelliği eklendi

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



