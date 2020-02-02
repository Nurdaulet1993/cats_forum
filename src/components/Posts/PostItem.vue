<template>
    <div class="card mb-3">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img class="card-img" :src="`https://placekitten.com/408/${287 + post.id}`" alt="cat">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <p class="card-text"><small class="text-muted">{{ getUser(post.userId).name }}</small></p>
                    <h5 class="card-title">{{ post.title }}</h5>
                    <p class="card-text">{{ post.body }}</p>
                </div>
            </div>
            <div class="col-12">
                <app-comments :postId="post.id"></app-comments>
            </div>
        </div>
    </div>
</template>

<script>
    import Comments from "../Comments";
    import { mapGetters } from 'vuex';

    export default {
        name: "PostItem",
        props: ['post'],
        components: {
          'app-comments': Comments
        },
        computed: {
            ...mapGetters([
                'getUser'
            ])
        }
    }
</script>

<style scoped>

</style>
