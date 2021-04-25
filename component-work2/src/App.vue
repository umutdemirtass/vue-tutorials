<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedButton = 'appBlue'" class="btn btn-primary">Mavi Temayı Yükle</button>
                <button @click="selectedButton = 'appGreen'" class="btn btn-success">Yeşil Temayı Yükle</button>
                <button @click="selectedButton = 'appRed'" class="btn btn-danger">Kırmızı Temayı Yükle </button>
                <hr>
                <component :is="selectedButton">
                    <h1>{{selectedButton}} componente </h1>
                    <p>HOSGELDINIZ</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                selectedButton: "appBlue"
            }
        },
    }
</script>

<style>
</style>
