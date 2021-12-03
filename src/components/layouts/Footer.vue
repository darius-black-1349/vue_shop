<template>
  <div class="w-100 d-flex py-5 footer bg-info">
    <div
      class="d-flex justify-content-between align-items-center m-auto footer_content"
      style="width: 80%;"
    >
      <div class="d-flex">
        <img
          class="footer_img"
          src="../../assets/img/footer_main.svg"
          alt="hero"
        />
      </div>

      <div class="d-flex flex-column footer_text">
        <p class="fs-2 fw-bold">More About Us</p>
        <p class="fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt,
          amet voluptas pariatur, cumque non cupiditate maxime nobis in impedit,
          beatae corrupti doloremque eaque officiis?
        </p>
        <a class="btn btn-outline-dark w-25 text-white">Explore</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>

    .footer {

        clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);


        &_img {

            width: 100%;
            height: 100%;

        }

        &_text {

            max-width: 50%;
            margin-left: 5rem;

        }
        

    }

</style>
