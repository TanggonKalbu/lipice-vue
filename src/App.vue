<template>
  <div id="app">
    <notifications classes="my-style" group="foo" position="top center" width= "30%" animation-type="velocity"/>
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
  .my-style {
    font-size: 24px;
      background: #68CD86;
    border-left-color: #42A85F;
    padding: 10px;
    margin: 0 5px 5px;
 
  
 

  .notification-title {
    
      background: #68CD86;
    border-left-color: #42A85F;
    padding: 10px;
    margin: 0 5px 5px;
 
  font-size: 24px;
  }
 
  .notification-content {
      background: #68CD86;
    border-left-color: #42A85F;
    padding: 10px;
    margin: 0 5px 5px;
 
  font-size: 24px;
    // Style for content 
  }
 
  &.my-type {
    /*
    Style for specific type of notification, will be applied when you
    call notification with "type" parameter:
    this.$notify({ type: 'my-type', message: 'Foo' })
    */
  }
}
</style>
