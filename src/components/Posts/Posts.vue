<template>
    <div id="posts">
        <app-post v-for="post in getPosts" :post="post"></app-post>
    </div>
</template>

<script>
    import PostItem from "./PostItem";

    import  { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        name: "Posts",
        components: {
            'app-post': PostItem
        },
        computed: {
            ...mapActions([
                'pullPosts',
                'pullUsers',
                'pullComments'
            ]),
            ...mapGetters([
                'getPosts'
            ])
        },
        created() {
            this.$store.dispatch('pullPosts');
            this.$store.dispatch('pullUsers');
            this.$store.dispatch('pullComments');
        }
    }
</script>

<style scoped>

</style>
