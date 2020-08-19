<template>
    <div class="board">
        <p>name: <span>{{ name }}</span> </p>
    </div>
</template>

<script>
export default {
    // name: 'Dashboard',
    data(){
        return{
            name: "Super Admin"
        }
    }
}
</script>

<style>
.board{
    padding: 20px;
}
</style>
