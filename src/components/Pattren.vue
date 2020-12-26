<template>
    <div class="pattren">
        <div :class="iconStyle" style="height: 100%;padding: 17px;">
        <div class="pattren-inside">
            
                <div class="d-flex justify-content-center align-items-center h-100">
                    <img :src="iconUrl" alt="scissors">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Pattren",
    props: ["iconUrl","iconStyle"]
}
</script>
<style lang="scss" scoped>
</style>