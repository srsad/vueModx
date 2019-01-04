# vueModx
This plugin allows you to use lexicons in modx and solves the problem with scrolling in the component.

Install:

`npm i --save-dev git+https://github.com/srsad/vueModx.git`

```js
import vueModx from 'vuemodx'

Vue.use(vueModx, {
    lexicon: MODx.lang,
    appId: 'comonent-panel-home-div' // div id of your component
})
```

Using
```js
this.$lexicon('lexicon_key')
```
or
```html
<p>{{$lexicon('lexicon_key')}}</p>
```
