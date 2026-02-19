# Uhuvvet Community - Frontend

Modern, mobil öncelikli topluluk platformu - React, TypeScript, Tailwind CSS ile geliştirilmiştir.

## 📁 Proje Yapısı

```
src/
├── api/                    # API client ve endpoint tanımları
│   ├── client.api.ts      # Axios wrapper - base API client
│   ├── auth.api.ts        # Authentication endpoints
│   ├── posts.api.ts       # Posts endpoints
│   ├── communities.api.ts # Communities endpoints
│   ├── wiki.api.ts        # Wiki endpoints
│   ├── users.api.ts       # Users endpoints
│   ├── notifications.api.ts # Notifications endpoints
│   ├── departments.api.ts # Departments endpoints
│   └── index.ts           # API exports
│
├── app/                   # Ana uygulama kodu
│   ├── components/        # React bileşenleri
│   │   ├── ui/           # Yeniden kullanılabilir UI bileşenleri
│   │   ├── GlobalHeader.tsx
│   │   ├── LeftSidebar.tsx
│   │   ├── RightSidebar.tsx
│   │   └── BottomNav.tsx
│   │
│   ├── pages/            # Sayfa bileşenleri
│   │   ├── TimePage.tsx
│   │   ├── CommunityPage.tsx
│   │   ├── WikiPage.tsx
│   │   └── ...
│   │
│   ├── App.tsx           # Ana uygulama bileşeni
│   ├── Root.tsx          # Layout wrapper
│   └── routes.tsx        # React Router yapılandırması
│
├── types/                # TypeScript type definitions
│   ├── user.types.ts     # User related types
│   ├── post.types.ts     # Post related types
│   ├── community.types.ts # Community related types
│   ├── wiki.types.ts     # Wiki related types
│   ├── department.types.ts # Department related types
│   ├── notification.types.ts # Notification related types
│   ├── api.types.ts      # API response types
│   └── index.ts          # Type exports
│
├── hooks/                # Custom React hooks
│   ├── useAuth.ts        # Authentication hook
│   ├── usePosts.ts       # Posts management hook
│   ├── useCommunities.ts # Communities management hook
│   └── index.ts          # Hook exports
│
├── lib/                  # Utility fonksiyonları ve yardımcılar
│   ├── utils/
│   │   ├── date.utils.ts      # Tarih formatlama
│   │   ├── string.utils.ts    # String işlemleri
│   │   ├── validation.utils.ts # Validation fonksiyonları
│   │   ├── storage.utils.ts   # localStorage yönetimi
│   │   └── index.ts
│   │
│   └── mock-data/        # Geliştirme için mock data
│       ├── posts.ts
│       ├── communities.ts
│       ├── wiki.ts
│       └── ...
│
├── constants/            # Uygulama sabitleri
│   └── index.ts
│
└── styles/              # Global stiller
    ├── theme.css
    └── fonts.css
```

## 🏗️ Mimari Kararlar

### **Clean Code Prensipleri**

1. **Separation of Concerns**: Her katman kendi sorumluluğuna sahip
2. **Single Responsibility**: Her dosya tek bir sorumluluğa odaklanır
3. **DRY (Don't Repeat Yourself)**: Tekrar eden kod parçaları utility fonksiyonlarına taşınmıştır
4. **Type Safety**: Tüm data modelleri TypeScript ile tip güvenli hale getirilmiştir

### **Katman Mimarisi**

```
Presentation Layer (Pages & Components)
          ↓
Business Logic Layer (Hooks & Services)
          ↓
Data Access Layer (API Clients)
          ↓
Backend API (Express.js + Prisma)
```

## 🔌 Backend Entegrasyonu

### **API Client Kullanımı**

```typescript
import { postsApi } from '@/api';

// GET request
const response = await postsApi.getPosts({ page: 1, pageSize: 20 });

// POST request
const newPost = await postsApi.createPost({
  content: "Post içeriği",
  isAnonymous: false
});
```

### **Custom Hooks Kullanımı**

```typescript
import { usePosts } from '@/hooks';

function TimelinePage() {
  const { posts, loading, error, createPost, toggleLike } = usePosts();

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div>
      {posts.map(post => (
        <PostCard 
          key={post.id} 
          post={post} 
          onLike={() => toggleLike(post.id)} 
        />
      ))}
    </div>
  );
}
```

### **Auth Context Kullanımı**

```typescript
import { useAuth } from '@/hooks';

function ProfileButton() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return <LoginButton />;

  return (
    <div>
      <span>{user?.displayName}</span>
      <button onClick={logout}>Çıkış Yap</button>
    </div>
  );
}
```

## 🚀 Kurulum ve Çalıştırma

### **Frontend Kurulumu**

```bash
# Bağımlılıkları yükle
npm install

# Development server başlat
npm run dev

# Production build
npm run build
```

### **Environment Variables**

`.env` dosyası oluşturun:

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_ENV=development
```

## 🗄️ Backend (Express.js + Prisma) Yapılandırması

### **Backend Proje Yapısı**

```
backend/
├── prisma/
│   └── schema.prisma      # Prisma schema (örnek: /prisma-schema-example.prisma)
│
├── src/
│   ├── routes/           # Express routes
│   │   ├── auth.routes.ts
│   │   ├── posts.routes.ts
│   │   ├── communities.routes.ts
│   │   └── ...
│   │
│   ├── controllers/      # Request handlers
│   │   ├── auth.controller.ts
│   │   ├── posts.controller.ts
│   │   └── ...
│   │
│   ├── services/         # Business logic
│   │   ├── auth.service.ts
│   │   ├── posts.service.ts
│   │   └── ...
│   │
│   ├── middleware/       # Express middleware
│   │   ├── auth.middleware.ts
│   │   ├── validation.middleware.ts
│   │   └── error.middleware.ts
│   │
│   ├── utils/           # Utility functions
│   └── server.ts        # Express app setup
│
├── .env
├── package.json
└── tsconfig.json
```

### **Backend Kurulumu**

```bash
# Backend klasörü oluştur
mkdir backend && cd backend

# package.json oluştur
npm init -y

# Gerekli paketleri yükle
npm install express @prisma/client bcrypt jsonwebtoken cors dotenv
npm install -D @types/express @types/node @types/bcrypt @types/jsonwebtoken @types/cors typescript ts-node-dev prisma

# Prisma'yı başlat
npx prisma init

# Prisma schema'yı düzenle (prisma-schema-example.prisma dosyasını kullan)
# Veritabanı migration'ları çalıştır
npx prisma migrate dev

# Prisma Client oluştur
npx prisma generate

# Backend server'ı başlat
npm run dev
```

### **Backend .env Örneği**

```env
DATABASE_URL="postgresql://user:password@localhost:5432/uhuvvet_db"
JWT_SECRET="your-secret-key"
PORT=3001
NODE_ENV=development
```

### **Backend server.ts Örneği**

```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/communities', communitiesRoutes);
app.use('/api/wiki', wikiRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/departments', departmentsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## 📝 API Endpoint Örnekleri

### **Posts**
- `GET /api/posts` - Tüm gönderileri getir
- `GET /api/posts/:id` - Tek gönderi detayı
- `POST /api/posts` - Yeni gönderi oluştur
- `PATCH /api/posts/:id` - Gönderi güncelle
- `DELETE /api/posts/:id` - Gönderi sil
- `POST /api/posts/:id/like` - Gönderiyi beğen/beğenmekten vazgeç

### **Communities**
- `GET /api/communities` - Tüm toplulukları getir
- `GET /api/communities/:id` - Topluluk detayı
- `POST /api/communities` - Yeni topluluk oluştur
- `POST /api/communities/:id/join` - Topluluğa katıl

### **Wiki**
- `GET /api/wiki/articles` - Tüm makaleleri getir
- `GET /api/wiki/articles/:id` - Makale detayı
- `POST /api/wiki/articles` - Yeni makale oluştur

## 🛠️ Teknolojiler

### **Frontend**
- React 18
- TypeScript
- Tailwind CSS v4
- React Router v7
- Axios
- Lucide React (icons)

### **Backend (Önerilen)**
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- TypeScript
- JWT (Authentication)

## 📚 Önemli Dosyalar

- `/src/types/` - Tüm TypeScript type definitions
- `/src/api/` - API client ve endpoint tanımları
- `/src/hooks/` - Custom React hooks
- `/src/lib/utils/` - Utility fonksiyonları
- `/src/constants/` - Uygulama sabitleri
- `/prisma-schema-example.prisma` - Prisma schema örneği

## 🔐 Güvenlik

- JWT based authentication
- Bcrypt password hashing
- CORS yapılandırması
- Input validation
- XSS protection
- SQL injection protection (Prisma ORM)

## 📦 Deployment

### **Frontend**
- Vercel, Netlify veya benzeri platformlarda deploy edilebilir
- Build: `npm run build`
- Output: `dist/` klasörü

### **Backend**
- Heroku, Railway, DigitalOcean veya AWS'de deploy edilebilir
- PostgreSQL database gereklidir
- Environment variables'ları production ortamında ayarlayın

## 🤝 Katkıda Bulunma

1. Feature branch oluşturun
2. Değişikliklerinizi commit edin
3. Branch'inizi push edin
4. Pull request açın

## 📄 Lisans

Bu proje özel bir projedir.
