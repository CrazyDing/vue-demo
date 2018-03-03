import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueTemplateSyntax from '@/components/VueTemplateSyntax/VueTemplateSyntax'
import VHtml from '@/components/VueTemplateSyntax/v-html'
import VueForm from '@/components/VueTemplateSyntax/VueForm'
import VueComponent from '@/components/VueTemplateSyntax/VueComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue-template-syntax',
      name: 'VueTemplateSyntax',
      component: VueTemplateSyntax
    },
    {
      path: '/v-html',
      name: 'VHtml',
      component: VHtml
    },
    {
      path: '/vue-form',
      name: 'VueForm',
      component: VueForm
    },
    {
      path: '/vue-component',
      name: 'VueComponent',
      component: VueComponent
    }
  ]
})
