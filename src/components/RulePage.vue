<template>
    <div class="rule-page">
        <div class="d-flex justify-content-center align-items-center h-100">
            <div class="img-con">
            <div class="d-flex justify-content-center justify-content-lg-between align-items-center">
                <h3 class="rule text-center text-lg-left">Rules</h3>
                <img src="./../assets/icon-close.svg" alt="colse" class="colsing" @click="colseRulePage">
            </div>
            <img src="./../assets/image-rules-bonus.svg" alt="image-rules">
        </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    name: "RulePage",
    methods: {
        colseRulePage(){
            $(function(){
                $(".rule-page").fadeOut();
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .rule-page{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.473);
        z-index: 998;
        display: none;
    }
    .img-con{
        background-color: white;
        border-radius: 10px;
        padding: 30px 30px;
        position: relative;
    }
    .rule{
        color: hsla(217, 16%, 45%, 0.856);
    }
    .colsing{
        cursor: pointer;
    }
    @media screen and (max-width: 990px){
        .colsing{
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
        padding-top: 40px;
        padding-bottom: 20px;
    }
    .img-con{
        padding-bottom: 70px;
    }
    .rule{
        padding-bottom: 20px;
    }
    .rule-page{
        overflow: hidden;
    }
    }
</style>