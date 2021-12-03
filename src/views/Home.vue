<template>
  <Header></Header>
  <Hero></Hero>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <p class="fw-bold fs-1">Products</p>
    
    <div class="w-100 py-5">
        <div class="row py-5 d-flex justify-content-center align-items-center w-75 m-auto">
            <div class="d-flex justify-content-center flex-wrap gap-5">
                <div class="card" style="width:18rem;">
                  <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="" class="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
                <div class="card" style="width:18rem;">
                  <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="" class="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
                <div class="card" style="width:18rem;">
                  <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="" class="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
                <div class="card" style="width:18rem;">
                  <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="" class="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
                <div class="card" style="width:18rem;">
                  <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="" class="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
            </div>
        </div>
    </div>

    <Login></Login>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

import Hero from "@/components/home/Hero.vue";
import Login from "@/components/auth/Login.vue";



export default {
  name: "Home",

  components: {
    Hero,
    Header,
    Footer,
    Login
  },
}
</script>
