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
# Projeyi klonla

```bash
git clone https://github.com/tubanursmsk/learnhub-angular-lms.git

 Angular tarafı

```bash
cd learnhub

```bash
npm install

```bash
ng serve -o

# Backend (JSON Server)

```bash
json-server --watch db.json --port 3000
