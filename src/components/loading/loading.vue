<template>
    <div>
        <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
    </div>
</template>
<script>
    import { VueLoading } from 'vue-loading-template'
    export default {
        name: 'loading',
        components: {
            VueLoading
        }
    }
</script>