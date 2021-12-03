<template>
    
  
    <div class="w-100 d-flex py-5 hero bg-info">
        <div class="d-flex justify-content-between align-items-center m-auto" style="width: 80%;">
            <div class="d-flex flex-column">
                <p class="fs-2 fw-bold">Welcome To Shop</p>
                <p class="fs-5 hero_txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum alias accusamus ut sit minus.</p>
            </div>
            <div class="d-flex">
                <img class="hero_img" src="../../assets/img/hero_main.svg" alt="hero">
            </div>
        </div>
    </div>
    

</template>

<script>
export default {
    name: "Hero"

}
</script>

<style lang="scss" scoped>

 

    .hero {

        height: 100vh;
        clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);

        &_txt {

            max-width: 80%;
            text-align: justify;

        }

        &_img {

            width: 100%;
        }
    }

</style>