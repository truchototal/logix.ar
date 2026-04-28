# ⚡ Logix.ar — Sistema Full-Stack

> Sistema de adquisición automática de clientes para negocios reales.

## 🏗️ Arquitectura

```
logix-system/
├── frontend/          → React + Vite + TypeScript (Página web)
├── backend/           → Node.js + Express + TypeScript (API)
├── database/          → PostgreSQL / Supabase (Esquemas + Migraciones)
└── .agents/skills/    → Skills de IA para Logix
```

### Flujo de datos

```
USUARIO → FRONTEND (React) → BACKEND (Express API) → DATABASE (Supabase)
                                    ↓
                              AUTOMATIONS (n8n / Make)
                                    ↓
                              WhatsApp / Instagram
```

---

## 🚀 Quick Start

### Requisitos
- Node.js >= 18
- npm >= 9

### Instalación
```bash
npm install          # Instala dependencias de frontend y backend
```

### Desarrollo
```bash
# Frontend (puerto 8080)
npm run dev:frontend

# Backend (puerto 3001)
npm run dev:backend

# Ambos juntos
npm run dev:all
```

### Build
```bash
npm run build        # Build de producción del frontend
```

---

## 📁 Estructura Detallada

### Frontend (`frontend/`)
| Carpeta | Descripción |
|---------|-------------|
| `src/components/layout/` | Navbar, Footer, PageTransition |
| `src/components/shared/` | Componentes reutilizables |
| `src/components/ui/` | shadcn/ui components |
| `src/pages/` | Páginas de la web |
| `src/services/` | Llamadas al API backend |
| `src/contexts/` | Theme, Language providers |
| `src/hooks/` | Custom React hooks |
| `src/i18n/` | Traducciones ES/EN |
| `src/lib/` | Utilidades y animaciones |

### Backend (`backend/`)
| Carpeta | Descripción |
|---------|-------------|
| `src/config/` | Variables de entorno, conexión DB |
| `src/controllers/` | Request handlers |
| `src/models/` | Modelos de datos (Zod schemas) |
| `src/routes/` | Definición de rutas API |
| `src/middleware/` | CORS, error handling |
| `src/services/` | Lógica de negocio |
| `src/utils/` | Funciones helper |

### Database (`database/`)
| Archivo | Descripción |
|---------|-------------|
| `schema.sql` | Schema principal de Supabase |
| `migrations/` | Migraciones ordenadas |
| `seeds/` | Datos iniciales para desarrollo |

---

## 🔌 API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Nuevo lead (formulario web) |
| `GET` | `/api/contact` | Listar leads (dashboard) |
| `PATCH` | `/api/contact/:id/status` | Actualizar estado del lead |

---

## 🎯 Filosofía Logix

Todo lo que se construye debe responder a una pregunta:

> **¿Esto genera más clientes o no?**

### Prioridades
1. Generación de leads
2. Conversión a turnos/ventas
3. Automatización
4. Experiencia del usuario
5. Tecnología

---

## 📄 Licencia

Privado — Logix.ar © 2026
