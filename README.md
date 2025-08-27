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

## 🛠️ Teknolojiler
- Angular
- JSON Server
- TypeScript
- Bootstrap / Angular Material

## 📂 Kurulum

```bash
# Projeyi klonla
git clone https://github.com/tubanursmsk/learnhub-angular-lms.git

# Angular tarafı

cd learnhub
npm install
ng serve -o

# Backend (JSON Server)
json-server --watch db.json --port 3000
