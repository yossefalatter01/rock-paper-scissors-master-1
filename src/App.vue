<template>
  <div id="app">
    <div class="game-rule">
      <rule-page />
    </div>
    <div class="game-con">
      <div>
        <game-head
        :scores="scroresCounter"
         />
      </div>
      <div class="con-first-step">
        <first-step :moveToSecondStep="moveToSecondStep" />
      </div>
      <div class="con-second-step">
        <second-step 
        :playAgain="playAgain"
        />
      </div>
      <div class="rule-btn-con">
        <button class="rule-btn" @click="openRulePage">Rules</button>
      </div>
    </div>
  </div>
</template>

<script>
import FirstStep from "./components/FirstStep.vue";
import GameHead from "./components/GameHead.vue";
import RulePage from "./components/RulePage.vue";

import $ from "jquery";
import SecondStep from "./components/SecondStep.vue";

export default {
  components: { GameHead, FirstStep, RulePage, SecondStep },
  name: "App",
  data() {
    return {
      scroresCounter: localStorage.getItem("scores")? localStorage.getItem("scores"): 0 ,
      housePatrn: { id: 0 },
      youPatrn: {},
      patrns: [
        {
          id: 1,
          iconName: "scissors",
          iconUrl: require("./assets/icon-scissors.svg"),
          iconStyle: "bg-scissors",
        },
        {
          id: 2,
          iconName: "paper",
          iconUrl: require("./assets/icon-paper.svg"),
          iconStyle: "bg-paper",
        },
        {
          id: 3,
          iconName: "rock",
          iconUrl: require("./assets/icon-rock.svg"),
          iconStyle: "bg-rock",
        },
        {
          id: 4,
          iconName: "lizard",
          iconUrl: require("./assets/icon-lizard.svg"),
          iconStyle: "bg-lizard",
        },
        {
          id: 5,
          iconName: "spock",
          iconUrl: require("./assets/icon-spock.svg"),
          iconStyle: "bg-spock",
        },
      ],
    };
  },
  methods: {
    openRulePage() {
      $(function() {
        $(".rule-page").fadeIn();
      });
    },
    moveToSecondStep(ptrn) {
      $(".con-first-step").fadeOut(250);
      setTimeout(function() {
        $(".con-second-step").fadeIn();
        $(".construct").html(
          `
      <div class="pattren ptrn-scale" style="cursor:default">
        <div class="${ptrn.iconStyle}" style="height: 100%;padding: 17px;">
        <div class="pattren-inside">
            
                <div class="d-flex justify-content-center align-items-center h-100">
                    <img src="${ptrn.iconUrl}" alt="${ptrn.iconName}">
                </div>
            </div>
        </div>
    </div>
    `
        );
      }, 250);

      this.youPatrn = ptrn;
      this.promiseFun(this.indicateResult);
    },
    houseEventChoosen() {
      let patrnStore = this.patrns;
      let patrnIndicator = Math.round(Math.random() * 4);
      let certainPatrn = patrnStore[patrnIndicator];
      $(".ptrn-creator").html(
        `
      <div class="pattren ptrn-scale" style="cursor:default">
        <div class="${certainPatrn.iconStyle}" style="height: 100%;padding: 17px;">
        <div class="pattren-inside">
            
                <div class="d-flex justify-content-center align-items-center h-100">
                    <img src="${certainPatrn.iconUrl}" alt="${certainPatrn.iconName}">
                </div>
            </div>
        </div>
    </div>
    `
      );
      $(".ptrn-creator").fadeIn(50)
        .fadeOut(50);
      this.housePatrn = certainPatrn;
    },
    indicateResult(you, house) {
      var x = window.matchMedia("(max-width: 990px)");
    if(x.matches){
      $(".second-step .right-side h4").show();
    }
      let case1 = you - house;
      let case2 = house - you;
      if (you == house) {
        setTimeout(() => this.createResult("draw"),700)
      } else if (you > house) {
        if (case1 % 2 == 0) {
          setTimeout(() => this.createResult("you win"),700)
          $(".youwinnercircle").fadeIn(800);
        } else {
          setTimeout(() => this.createResult("you lose"),700)
          $(".housewinnercircle").fadeIn(800);
        }
      } else {
        if (case2 % 2 == 0) {
          setTimeout(() => this.createResult("you lose"),700)
          $(".housewinnercircle").fadeIn(800);
        } else {
          setTimeout(() => this.createResult("you win"),700)
          $(".youwinnercircle").fadeIn(800);
        }
      }
    },
    promiseFun(solve) {
      var chooser = setInterval(this.houseEventChoosen, 190);
      setTimeout(()=>{
        clearInterval(chooser);
        $(".ptrn-creator").fadeIn(50);
        solve(this.youPatrn.id, this.housePatrn.id);
      }, 2600);
    },
    createResult(result){
      $(".result-construct").fadeIn();
        $(".constructor-result-head").html(`
       ${result}`);
       if(result == "you win"){
         this.scroresCounter++;
         localStorage.setItem("scores",this.scroresCounter);
       }
    },
    playAgain(){
      $(".youwinnercircle").fadeOut();
      $(".housewinnercircle").fadeOut();
    var x = window.matchMedia("(max-width: 990px)");
    if(x.matches){
      $(".second-step .right-side h4").hide();
    }
    $(".con-second-step").fadeOut(250);
    setTimeout(function(){
      $(".result-construct").fadeOut();
    $(".con-first-step").fadeIn();
    },300)
  }
  },
  mounted(){
    var z = window.matchMedia("(min-width: 990px)");
    
    z.addListener(()=>{
      if(z.matches){
      $(".second-step .right-side h4").show();
    }
    })
  }
};
</script>

<style lang="scss">
#app {
  background-image: radial-gradient(
    circle at top,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );
  height: 100vh;
  padding-top: 30px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
  overflow: hidden;
}
.game-con {
  position: relative;
  height: 100%;
}
.rule-btn-con {
  position: absolute;
  bottom: 0;
  right: 0;
  .rule-btn {
    border: 1.5px solid hsl(217, 16%, 45%);
    outline: none;
    background-color: transparent;
    padding: 10px;
    width: 129px;
    height: 46px;
    color: white;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
      transition: all 0.3s;
    }
  }
}
.con-second-step {
  display: none;
}
@media screen and (max-width: 720px){
  .con-first-step{
    transform: scale(0.85);
  }
}
@media screen and (max-width: 560px){
  .con-first-step{
    transform: scale(0.75);
  }
}
@media screen and (max-width: 485px){
  .rule-btn-con{
    right: 50%;
    transform: translateX(50%);
    padding-bottom: 35px;
  }
}
</style>
