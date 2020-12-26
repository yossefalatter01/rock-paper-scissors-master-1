<template>
    <div class="first-step">
        
        <div class="d-flex justify-content-center align-items-center">
            <div class="controller">
            <div v-for="icon in icons" :key="icon.id">
                <div :class="icon.iconName" @click="moveToSecondStep(icon)">
                    <pattren 
                    :iconUrl="icon.iconUrl"
                    :iconStyle="icon.iconStyle"
                    />
                </div>
            </div>
            <div class="img-con">
            <div class="text-center">
                <img src="./../assets/bg-pentagon.svg" alt="bg">
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Pattren from './Pattren.vue'

export default {
  components: { Pattren },
    name: "FirstStep",
    props: ["moveToSecondStep"],
    data () {
        return {
            icons: [
                {
                    id: 1,
                    iconName: "scissors",
                    iconUrl: require("./../assets/icon-scissors.svg"),
                    iconStyle: "bg-scissors"
                    },
                {
                  id: 2,
                    iconName: "paper",
                    iconUrl: require("./../assets/icon-paper.svg"),
                    iconStyle: "bg-paper"
                    },
                {
                  id: 3,
                    iconName: "rock",
                    iconUrl: require("./../assets/icon-rock.svg"),
                    iconStyle: "bg-rock"
                    },
                  {
                    id: 4,
                      iconName: "lizard",
                      iconUrl: require("./../assets/icon-lizard.svg"),
                      iconStyle: "bg-lizard"
                      },
                  {
                      id: 5,
                      iconName: "spock",
                      iconUrl: require("./../assets/icon-spock.svg"),
                      iconStyle: "bg-spock"
                      },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.first-step{
    padding-top: 120px;
}
.controller{
    position: relative;
}
.scissors{
    position: absolute;
    top: -74px;
    left: 96px;
    cursor: pointer;
}
.spock{
    position: absolute;
    top: 48px;
    left: -65px;
    cursor: pointer;
}
.lizard{
    position: absolute;
    bottom: -64px;
    left: -13px;
    cursor: pointer;
}
.paper{
    position: absolute;
    top: 48px;
    right: -65px;
    cursor: pointer;
}
.rock{
    position: absolute;
        bottom: -64px;
    right: -13px;
    cursor: pointer;
}
@media screen and (max-width: 490px){
    .first-step{
        background-size: contain;
        min-width: 100%;
        max-width: 100%;
    }
}
</style>