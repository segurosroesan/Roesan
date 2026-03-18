# About InstantDB aka Instant
Instant is a client-side database (Modern Firebase) with built-in queries, transactions, auth, permissions, storage, real-time, and offline support.

# Instant SDKs
Instant provides client-side JS SDKs and an admin SDK:

- `@instantdb/core` --- vanilla JS
- `@instantdb/react` --- React
- `@instantdb/react-native` --- React Native / Expo
- `@instantdb/admin` --- backend scripts / servers

# Managing Instant Apps
## Prerequisites
Look for `instant.schema.ts` and `instant.perms.ts`. These define the schema and permissions.
Look for an app id and admin token in `.env` or another env file.

## Schema changes
Edit `instant.schema.ts`, then push:
```bash
npx instant-cli push schema --app <APP_ID> --token <ADMIN_TOKEN> --yes
```

# CRITICAL Query Guidelines
CRITICAL: When using React make sure to follow the rules of hooks. Remember, you can't have hooks show up conditionally.
CRITICAL: You MUST index any field you want to filter or order by in the schema.

```tsx
// Ordering example
$: { order: { dueDate: 'asc' } }
```

# Best Practices
## Pass `schema` when initializing Instant
```tsx
import schema from '@/instant.schema'
import { init } from '@instantdb/react';
const db = init({ appId, schema });
```

## Use `id()` to generate ids
```tsx
import { id } from '@instantdb/react';
db.transact(db.tx.contacts[id()].create({ name: 'John' }));
```

# Autenticación y API de Softseguros (Reglas AI)
CRITICAL: Softseguros utiliza un sistema muy restrictivo de permisos.
1. **Autenticación**: Auth por Token. Obtén el token enviando `username/password` a `POST /api-token-auth/`. El header a enviar en peticiones subsiguientes es `Authorization: Token {token}`.
2. **Rol de Gerente no implica Rol API**: Si obtienes un Error 401 o 404 al consultar un cliente o póliza, NO es un error, significa que la API oculta registros que NO fueron creados por ese usuario específico. Debe pedirse permiso de acceso global a soporte.
3. **Estructura Cíclica (Datos Extra CRM)**: Los teléfonos y correos NO viven en el objeto `cliente`. Flujo obligatorio:
   - 1. Buscar `<id>` del cliente.
   - 2. Obtener `<id_celular>` o `<id_email>` con `GET /api/cliente/<id>/dato_extra_crm/`.
   - 3. Actualizar con `PATCH /api/dato_extra_celular/<id_celular>/`.
