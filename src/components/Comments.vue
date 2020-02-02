<template>
    <div class="card-footer text-right">
        <div class="collapse" :id="`collapseExample-${postId}`">
            <div class="card card-body mb-3 text-left" v-for="comment in getComments(postId)">
                <h5 class="card-title"> {{ comment.name }}</h5>
                <p class="card-text">{{ comment.body }}</p>
                <p class="text-muted"> {{ comment.email }}</p>
            </div>
        </div>
        <a  data-toggle="collapse" :href="`#collapseExample-${postId}`" role="button" aria-expanded="false" aria-controls="collapseExample" @click="changeTitle">
            {{ title }}
        </a>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "Comments",
        props: ['postId'],
        data() {
            return {
                opened: false,
                title: 'Открыть комментарии'
            }

        },
        computed: {
            ...mapGetters([
                'getComments'
            ])
        },
        methods: {
            changeTitle() {
                this.opened = !this.opened;
                this.opened ? this.title = 'Закрыть комментарии'
                    : this.title = 'Открыть комментарии';
            }
        }

    }
</script>

<style scoped>

</style>
