# vueModx
This plugin allows you to use lexicons in modx and solves the problem with scrolling in the component.
Install:
`npm i git+https://github.com/srsad/vueModx.git`

```js
import vueModx from 'vuemodx'

Vue.use(vueModx, {
    lexicon: Component.lang, // object
    appId: 'comonent-panel-home-div' // div id of your component
})
```
---
```php
$this->addHtml('<script type="text/javascript">
	    var Component= {
			//...
		    lang: ' . json_encode($this->modx->lexicon->fetch()) . '
		    //...
		};</script>');
```
Using
```js
this.$lexicon('lexicon_key')
```
or
```html
<p>{{$lexicon('lexicon_key')}}</p>
```
