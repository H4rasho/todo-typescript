# Todo belray backend

### Pre-requisitos 📋

Recodar reconstruir los mudulos de node y agregar .env

```
npm install
```

### Iniciar el servidor

```
npm run ts:node
```

### Rutas de la api

#### Crear todo

```

URL=localhost:4000/api/todo
method: POST
data= {
"text": "string..."
}

```

#### Obetener todos

```
URL:localhost:4000/api/todo
method: GET
```

#### Editar Todo

```
URL=localhost:4000/api/todo/update
method=PUT
data= {
"text": "string..."
}
```

#### Eliminar todo

```
URL=localhost:4000/api/todo/delete
method=PUT
```

## Construido con 🛠️

- [typescript] https://www.typescriptlang.org/
- [node] https://nodejs.org/es/
- [express] https://expressjs.com/es/
- [mongosse] https://mongoosejs.com/
