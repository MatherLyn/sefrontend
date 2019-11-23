<template>
  <div class="badge-content">
    <div class="badge">HI</div>
  </div>
  
</template>

<script>
  export default {

  }
</script>

<style>
  .badge-content {
    position: relative;
    width: 100%;
  }

  .badge {
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: .4rem .4rem 0 0;
    margin: .2rem auto;
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    filter: drop-shadow(0 .1rem .1rem #409EFF);
    color: white;
    font-weight: bold;
    line-height: 5.4rem;
    text-shadow: 0 .1rem 0 rgba(0, 0, 0, .4);
    animation: shake infinite 2s ease;
    font-size: 2rem;
  }

  .badge::before,
  .badge::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, rgb(64, 158, 255), rgb(140, 197, 255));
  }

  .badge::before {
    transform-origin: left top;
    transform: skewY(-20deg);
  }
  
  .badge::after {
    transform-origin: right top;
    transform: skewY(20deg);
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    4% {
      transform: rotate(-5deg);
    }
    8% {
      transform: rotate(5deg);
    }
    12% {
      transform: rotate(-5deg);
    }
    16% {
      transform: rotate(5deg);
    }
    20% {
      transform: rotate(-5deg);
    }
    24% {
      transform: rotate(5deg);
    }
    28% {
      transform: rotate(-5deg);
    }
  }
</style>