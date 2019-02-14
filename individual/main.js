new Vue({
  el: '#app'
});

Vue.component('componentc',{
  template: `
    <div>
      <div>lorem</div>
      <slot name="images"></slot>
    </div>
  `
})
