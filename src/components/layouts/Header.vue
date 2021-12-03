<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
    <div class="container">
      <router-link to="/" class="text-decoration-none">
        <a class="navbar-brand fw-bold text-white">Shop With Vue</a>
      </router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/" class="text-decoration-none">
            <li class="nav-item">
              <a class="nav-link text-white">
                Home
              </a>
            </li>
          </router-link>
          <router-link to="/products" class="text-decoration-none">
            <li class="nav-item">
              <a class="nav-link text-white">Products</a>
            </li>
          </router-link>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <a data-bs-toggle="modal" data-bs-target="#login" class="btn btn-outline-dark text-white">Go</a>
        </form>
      </div>
    </div>

  </nav>
</template>

<script>



export default {
  name: 'Header',

  
}
</script>

<style></style>
