<template>
  <div>
      <div class="head-game">
        <div class="d-flex justify-content-between align-items-center">
          <div class="logo-con"><img src="./../assets/logo-bonus.svg" alt="logo" /></div>
          <div class="score-box text-center">
            <div>Score</div>
            <span>{{ scores }}</span>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GameHead",
  props: ["scores"]
};
</script>
<style lang="scss" scoped>
.head-game {
  background-color: transparent;
  border-radius: 10px;
  padding: 20px;
  border: 4px solid hsl(217, 16%, 45%);
  width: 50%;
  margin: auto;
}
.score-box{
    background-color: white;
    border-radius: 10px;
    padding: 10px 40px;
    div{
       text-transform: uppercase; 
       color: hsl(229, 64%, 46%);
       font-weight: 700;
    }
    span{
        color: hsl(229, 25%, 31%);
        font-weight: 700;
        font-size: 2.3em;
    }
}
@media screen and (max-width: 1300px){
    .head-game{
        min-width: 65%;
    }
}
@media screen and (max-width: 990px){
    .head-game{
        min-width: 100%;
    }
}
@media screen and (max-width: 490px){
    .head-game{
        padding: 15px;
    }
    .logo-con{
        img{
            width: 50%;
        }
    }
    .score-box{
        padding: 10px 18px;
        div{
            font-weight: 600;
            font-size: 0.8em;
        }
        span{
            font-weight: 600;
            font-size: 1.2em;
        }
    }
}
</style>
