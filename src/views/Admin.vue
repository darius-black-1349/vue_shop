<template>
  <div class="admin d-flex justify-content-between align-items-start w-100">

    <div class="d-flex admin_sidebar">
      <div class="admin_avatar mt-3 w-100 d-flex flex-row">
        <img src="../assets/img/avatar_admin.svg" alt="avatar">
        <div class="d-flex flex-column align-items-start w-100">
          <p class="mb-0 fw-bold">Welcome</p>
          <p class="mb-0">{{ email }}</p>
        </div>
      </div>
      <hr class="mx-auto my-3 bg-white" style="width: 85%;"/>

      <form class="d-flex">
        <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search">
      </form>

      <hr class="mx-auto my-3 bg-white" style="width: 85%;"/>
      <u class="admin_menu d-flex flex-column">
        <li>
          <router-link to="/admin/overview" >
                <i class="fa fa-dashboard mx-2 text-white"></i>
                <a>Dashboard</a>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/products">
                <i class="fab fa-amazon mx-2 text-white"></i>
                <a>Products</a>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/orders">
            <i class="fa fa-shopping-cart mx-2 text-white"></i>
            <a>Orders</a>
          </router-link>
        </li>
        <li>
            <i class="fa fa-power-off mx-2 text-white"></i>
            <a href="" @click="logout">Logout</a>
        </li>
      </u>
    </div>

    <div class="d-flex flex-column align-items-start w-100 admin_content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'

export default {
  name: 'Admin',

   data(){
      return{
          name:null,
          email:null,
      }
  },

  methods: {

    logout() {

      signOut(auth).then(() => {

        this.$router.replace("/")

      }).catch((err) => {

        console.log(err);

      })


    }

  },

  created() {

    let user = auth.currentUser
    this.email = user.email
  }
}
</script>

<style lang="scss" scoped>


  .admin {

    


    &_sidebar {

      background: linear-gradient(180deg,#4e73df 10%,#224abe 100%);
      width: 15%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

    }

    &_avatar {


      img {

        width: 20%;
        margin: 0 1rem;

      }

    }


    &_menu {

      list-style-type: none;
      width: 100%;

      li {

        background: rgba(158, 158, 158, 0.459);
        width: 90%;
        margin: .5rem auto;
        padding: .5rem;
        border-radius: 3px;

        a{

          color: #fff;
          text-decoration: none;

        }

      }

    }



    &_content {

      margin-left: 2rem;
      padding: 1rem 0;

    }



  }


</style>
