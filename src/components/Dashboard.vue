<script>
export default {
    computed: {
    currentRouteName() {
        let title = this.$route.name;
        if(!title?.length){
            return 'Home';
        }else{
            title = title.charAt(0).toUpperCase() + title.slice(1);
            return title;
        }
    }
}

}
</script>
<template >
    <div>
        <div class="pagetitle">
            <h1>{{ currentRouteName }}</h1>
        </div>
    </div>
</template>
<style ></style>