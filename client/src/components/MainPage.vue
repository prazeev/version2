<template>
<div id="hello">


  <!-- pre_headre -->

  <section id="pre_header">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <a href="#"><img src="../assets/img/logo.png" alt="logo" class="img-fluid"></a>
        </div>
        <div class="col-md-8 text-right">
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Help</a></li>
            <li class="list-inline-item"><a href="#">Notifications</a></li>
            <li class="list-inline-item"><a href="#">R</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- header -->

  <header>
    <nav class="navbar navbar-expand-md">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls=" navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
                    </button>
        <a class="navbar-brand d-block d-md-none" href="#"><img src="../assets/img/logo.png" alt="..." class="img-fluid"></a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item d-none d-md-block">
              <a class="nav-link" href="#"><img src="../assets/img/bars.png" alt="bars"></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Space Names</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link sign_up" href="#">Settings</a>
            </li>
          </ul>
          <ul class="navbar-nav d-block d-md-none">
            <li class="nav-item"><a href="#" class="nav-link">Help</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Notifications</a></li>
            <li class="nav-item"><a href="#" class="nav-link big_r">R</a></li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <div class="input-group mt-2">
                <input type="text" class="form-control">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">Search</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- wrapper -->

  <section id="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-9 box_grid">
          <div class="row">
            <div class="col-lg-4 col-md-6" v-for="space in spaceDetails">
              <div class="restaurant_box">
                <h3>{{space.Name}} <a href="#">...</a></h3>
                <h2>{{space.numOfServices}} <span>Now Serving</span></h2>
                <div class="row">
                  <div class="col-4">
                    <h4>{{space.nowServing}} <span>Open Services</span></h4>
                  </div>
                  <div class="col-4">
                    <button type="button" class="btn btn-danger pull-right" data-toggle="modal" data-target=".bd-example-modal-sm" @click.stop="deleteData(space._id)">Delete</button>
                  </div>
                  <div class="col-4">
                    <h4>{{space.availableTickets}}/{{space.totalTickets}}<span>Available Tickets</span></h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="new_space">
                <h4>Add new Space</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <Space></Space>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<script>
import Space from './Space.vue'
import axios from 'axios'
export default {
  name: 'hello',
  data() {
    return {
      spaceDetails: [],
      test_space: {},
      test_id: ''
    }
  },
  components: {
    Space
  },
  methods: {
    deleteData(id) {
      axios.delete('http://localhost:3000/space/delete/' + id)
        .then(response => this.spaceDetails.splice(0, 1));
      window.location.reload();
    }
  }, created() {
    axios.get('http://localhost:3000/space')
      .then((response) => {
        this.spaceDetails = response.data;

      })
      .catch((error) => {
        throw err
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @font-face{
  font-family: 'georgia';
  src:url('../assests/fonts/georgia.ttf');
}

 @font-face{
  font-family: 'georgiab';
  src:url('../assets/fonts/georgiab.ttf') format('ttf');
} */

body {
  margin: 0;
  padding: 0;
  color: #405970;
  overflow-x: hidden;
  background: #f5f5f5;
}

.space5 {
  margin-top: 5px !important;
}

.space10 {
  margin-top: 10px !important;
}

.space20 {
  margin-top: 20px !important;
}

.space25 {
  margin-top: 25px !important;
}

.space30 {
  margin-top: 30px !important;
}

.space40 {
  margin-top: 40px !important;
}

.space50 {
  margin-top: 50px !important;
}

.space60 {
  margin-top: 60px !important;
}

.space80 {
  margin-top: 80px !important;
}

.space100 {
  margin-top: 100px !important;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

/*==========Font-weights====================*/

.f300 {
  font-weight: 300;
}

.f500 {
  font-weight: 500;
}

.f700 {
  font-weight: 700;
}

.fsize14 {
  font-size: 14px !important;
}

#pre_header {
  background: #546066;
  padding: 10px 0;
  border-bottom: 2px solid #f0ab00;
}

#pre_header ul {
  margin: 0;
}

#pre_header ul li a {
  color: #fff;
  font-size: 14px;
}

#pre_header ul li:last-child a,
.big_r {
  background: #FFFFFF;
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  line-height: 42px;
  text-align: center;
  color: #546066;
  font-size: 18px;
}

#pre_header ul .list-inline-item:not(:last-child) {
  margin-right: 1rem;
}

.navbar-expand-md .navbar-nav .nav-link {
  font-size: 16px;
  color: #838383;
  line-height: 23px;
  padding: 0.5rem 0.8rem;
}

.navbar-expand-md .navbar-nav .active .nav-link {
  color: #4e4d4d;
  font-family: 'georgiab';
  font-size: 14px;
}

header .btn-outline-secondary {
  color: #fff;
  background-color: #f0ab00;
  background-image: none;
  border-color: #f0ab00;
  font-size: 14px;
}

header .form-control {
  border: 1px solid #e6e6e6;
}

.navbar {
  padding: 0;
}

header {
  background: #ffffff;
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
}

.navbar-nav.mr-auto {
  margin-top: 7px;
}

#wrapper {
  padding: 50px 0;
}

.restaurant_box {
  background: #ffffff;
  padding: 15px 15px 0;
  border-radius: 20px 0 6px 6px;
  margin-bottom: 30px;
}

#wrapper .col-lg-4:nth-child(even) .restaurant_box {
  border-bottom: 10px solid #d97b69;
}

#wrapper .col-lg-4:nth-child(odd) .restaurant_box {
  border-bottom: 10px solid #83a084;
}

.restaurant_box h3 {
  font-size: 16px;
  color: #645e5e;
  font-family: 'georgiab';
}

.restaurant_box h3 a {
  color: #645e5e;
  float: right;
  font-size: 20px;
  line-height: 12px;
}

.restaurant_box h2 {
  color: #f0ab00;
  font-family: 'georgiab';
  font-size: 36px;
  text-align: center;
}

.restaurant_box h2 span {
  color: #747370;
  font-family: 'georgia';
  font-size: 16px;
  text-align: center;
  display: block;
  margin-top: 2px;
}

.restaurant_box h4 {
  color: #575756;
  font-family: 'georgiab';
  font-size: 22px;
  text-align: center;
}

.restaurant_box h4 span {
  color: #868585;
  font-family: 'georgia';
  font-size: 12px;
  text-align: center;
  display: block;
  margin-top: 2px;
}

.restaurant_box .col-4:last-child {
  padding-left: 0;
}


.new_space {
  background: #e8e6e6;
  border-radius: 20px 0 0 0;
  min-height: 178px;
  text-align: center;
}

.new_space h4 {
  color: #645e5e;
  text-align: center;
  font-size: 20px;
  line-height: 178px;
}


@media(max-width: 1199px) {
  .restaurant_box .col-4:last-child {
    padding-left: 0;
    margin-left: -10px;
  }
}

@media(max-width: 991px) {
  .restaurant_box .col-4:last-child {
    margin-left: 0;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    font-size: 14px;
    padding: 0.5rem 0.4rem;
  }
  .navbar-expand-md .navbar-nav .active .nav-link {
    font-size: 18px;
  }
}

@media(max-width: 767px) {
  #pre_header {
    display: none;
  }
  header {
    padding-bottom: 10px;
    background: #546066;
    padding: 10px 0;
    border-bottom: 2px solid #f0ab00;
  }
  .navbar-toggler-icon {
    height: auto;
  }
  .navbar-toggler:not(:disabled):not(.disabled) {
    cursor: pointer;
    color: #fff;
    font-size: 30px;
    padding: 0;
    position: absolute;
    right: 8px;
    top: 6px;
  }
  .navbar-toggler:not(:disabled):not(.disabled):focus {
    outline: none;
  }
  .navbar-brand {
    padding-left: 15px;
  }
  .navbar-nav {
    margin-top: 7px;
    padding: 0 15px;
  }
  .navbar-expand-md .navbar-nav .active .nav-link,
  .navbar-expand-md .navbar-nav .nav-link {
    color: #fff;
  }
  .navbar-expand-md .navbar-nav .nav-link.big_r {
    color: #546066;
  }
}
</style>
