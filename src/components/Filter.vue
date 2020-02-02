<template>
    <div class="filter">
        <div class="form-group">
            <label for="name">Имя/название</label>
            <input type="text" class="form-control" id="name" placeholder="Введите название" v-model="name">
        </div>
        <div class="form-group">
            <label for="content">Контент</label>
            <input type="text" class="form-control" id="content" placeholder="Введите текст" v-model="content">
        </div>
    </div>
</template>

<script>
    import { mapMutations } from "vuex";

    export default {
        name: "FilterComponent",
        computed: {
            ...mapMutations([
                "setFilterByName",
                "setFilterByContent"
            ]),
            name: {
                get () {
                    return this.$store.state.filter.title
                },
                set (value) {
                    this.$store.commit('setFilterByName', value)
                }
            },
            content: {
                get () {
                    return this.$store.state.filter.body
                },
                set (value) {
                    this.$store.commit('setFilterByContent', value)
                }
            }
        }
    }
</script>

<style scoped>

</style>
