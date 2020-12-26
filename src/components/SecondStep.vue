<template>
  <div class="second-step">
    <div>
      <div class="row my-solve justify-content-around">
        <div class="left-side col-6 col-lg-4 order-1">
          <div
            class="d-flex flex-column-reverse flex-lg-column justify-content-center align-items-center "
          >
            <h4>You Picked</h4>
            
            <div style="position: relative">
                <div class="youwinnercircle"></div>
                <div class="construct">
              <pattren
                class="ptrn-scale"
                :iconStyle="icon.iconStyle"
                :iconUrl="icon.iconUrl"
              />
            </div>
            </div>
          </div>
        </div>
        <div
          class="result-construct col-12 col-lg-4 align-self-end order-12 order-lg-2"
        >
          <h3 class="constructor-result-head text-center">You lose</h3>
          <div class="text-center">
            <button class="mybtn btn" @click="playAgain">Play Again</button>
          </div>
        </div>
        <div class="right-side col-6 col-lg-4 order-3">
          <div
            class="d-flex justify-content-end align-items-center flex-column-reverse flex-lg-column"
          >
            <h4>the House Picked</h4>
            <div style="position: relative">
                <div class="housewinnercircle"></div>
                <div class="ptrn-creator  padding-ctx">
              <div class="house-ptrn"></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pattren from "./Pattren.vue";
export default {
  components: { Pattren },
  name: "SecondStep",
  props: ["playAgain"],
  data() {
    return {
      icon: {
        id: 1,
        iconName: "scissors",
        iconUrl: require("./../assets/icon-scissors.svg"),
        iconStyle: "bg-scissors",
      },
    };
  },
}; 
</script>
<style lang="scss" scoped>
.youwinnercircle , .housewinnercircle{
    display: none;
    position: absolute;
    padding:40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 733px;
    height: 733px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    &::after{
            content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 533px;
    height: 533px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    }
    &::before{
            content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 383px;
    height: 383px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    }
}
// @media screen and (max-width: 990px){
//     .youwinnercircle , .housewinnercircle{
//         transform: scale(1.2);
//     }
// }
// @media screen and (max-width: 455px){
//     .youwinnercircle , .housewinnercircle{
//         transform: scale(1);
//     }
// }

.second-step {
  padding-top: 50px;
  .left-side {
    // margin-right: 260px;
    h4 {
      text-transform: uppercase;
      color: white;
      text-align: center;
      padding-bottom: 75px;
      letter-spacing: 2.5px;
    }
  }
  .right-side {
    h4 {
      color: white;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 2.5px;
      padding-bottom: 85px;
      margin: 0;
    }
    .house-ptrn {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      background-color: rgba(0, 0, 0, 0.329);
    }
  }
//   .padding-ctx {
//     padding-top: 40px;
//   }
}

.my-solve {
  width: 60%;
  margin: auto;
}
@media screen and (max-width: 1300px) {
  .my-solve {
    min-width: 77%;
  }
}
@media screen and (max-width: 1175px) {
  .my-solve {
    min-width: 80%;
  }
}
@media screen and (max-width: 1115px) {
  .my-solve {
    min-width: 100%;
  }
}
@media screen and (max-width: 990px) {
  h4 {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 990px){
    .second-step .padding-ctx{
        padding-top: 0;
    }
    .second-step .left-side h4{
        padding: 0;
        padding-top: 40px;
    }
    .second-step .right-side h4{
        display: none;
        padding: 0;
        padding-top: 40px;
    }
    .result-construct{
        margin-top: 35px;
    }
}
@media screen and (max-width: 800px){
    .youwinnercircle , .housewinnercircle{
            transform: translate(-50%, -50%) scale(0.75);
    }
}
@media screen and (max-width: 455px){
    h4 {
    font-size: 0.8rem !important;
  }
}
@media screen and (max-width: 800px){
    .youwinnercircle , .housewinnercircle{
            transform: translate(-50%, -50%) scale(0.45) !important;
    }
}
</style>
