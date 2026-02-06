<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
npm i
```

3. tener Nest CLI instalado sino

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**

6. Llenar las variable de entorno definidas en el `.env`

7. Ejcutar la applicacion en dev

```
npm start
```

8. Reconstruis la base de datos con la semilla

```
http://localhost:3002/api/v2/seed
```

## Stack usado

- Mongo DB
- Nest
