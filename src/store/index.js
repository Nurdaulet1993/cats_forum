import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    users: [],
    comments: [],
    filter: {
      title: '',
      body: ''
    }
  },
  getters: {
    getPosts: state => {
      let sortPost = state.posts.slice();

      for (let key in state.filter) {
        if(state.filter[key] !== '') {
          sortPost = sortPost.filter(post => {
            return post[key].toLowerCase().replace(/\r?\n/g, " ").includes(state.filter[key].toLowerCase().replace(/\r?\n/g, " "));
          })
        }
      }

      return sortPost;
    },
    getUser: state => id =>  {
      return state.users.find(user => {
        return user.id === id;
      })
    },
    getComments: state => id => {
      return state.comments.filter(comment => {
        return comment.postId === id;
      })
    }
  },
  mutations: {
    setPosts: (state, data) => {
      return state.posts = data;
    },
    setUsers: (state, data) => {
      return state.users = data;
    },
    setComments: (state, data) => {
      return state.comments = data;
    },
    setFilterByName: (state, data ) => {
      return state.filter.title= data;
    },
    setFilterByContent: (state, data ) => {
      return state.filter.body = data;
    }
  },
  actions: {
    pullPosts: ({ commit }) => {
      axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then(response => commit('setPosts', response.data));
    },
    pullUsers: ({ commit }) => {
      axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(response => commit('setUsers', response.data));
    },
    pullComments: ({ commit }, payload) => {
      axios
          .get('https://jsonplaceholder.typicode.com/comments')
          .then(response => commit('setComments', response.data));
    },
  }
})
