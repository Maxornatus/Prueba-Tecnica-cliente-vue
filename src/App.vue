<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <a class="navbar-brand" href="#">Clientes</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to="/" class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></router-link>
      <router-link to="/create" class="nav-item nav-link" href="#">Crear</router-link>
      <a class="nav-item nav-link" href="#">Contar</a>
    </div>
  </div>
</nav>
  <div class="container-fluid mt-3">
    <router-view/>
  </div>
  
</template>
