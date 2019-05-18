<template>
<div v-html="currentField.htmlContent">
</div>
</template>

<script>
export default {
  name: 'HtmlComponent',
  props: ['currentField']
}
</script>
