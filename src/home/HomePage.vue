<template>
  <div class="home">


  <section id="showcase">
    <div class="app_container">
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
    </div>
  </section>
  <div class="app_container">
    <section id="main">
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consectetur delectus deserunt
        dolores dolorum eum fuga illum in iste itaque nobis officia pariatur perspiciatis quibusdam quos repudiandae
        vel, veniam!
      </p>
    </section>
    <aside id="sidebar"><router-link to="/get-started" exact>Get Started</router-link>
    </aside>
  </div>
  <footer id="main-footer">
    <p>Copyright &copy; 2019 My Pet Project</p>
  </footer>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',

  }
</script>

<style scoped>
  #showcase {
    background: url("../assets/images/showcase.jpg") center center;
    min-height: 300px;
    margin-bottom: 30px;
    width: 100%;
    text-align: center;

  }
  #showcase h1 {
    color: white;
    font-size: 50px;
    line-height: 1.6em;
    padding-top: 30px;
  }
  #main{
    float:left;
    padding: 0 30px;
    box-sizing: border-box;
  }
  #sidebar{
    float:right;
    width: 30%;
    color: #333;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
  }
  #sidebar a{
    color: #333;
    text-decoration: none;
    font-size: 20px;
    padding-right: 15px;
  }
  #main-footer{
    background: #333;
    color:  white;
    text-align: center;
    padding: 20px;
    margin-top: 75%;
  }
</style>
