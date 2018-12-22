export default {
	install(Vue, options) {
		const {lexicon, appId} = options;

		if (lexicon != null) { Vue.prototype.$lexicon = function (val) { return lexicon[val]; } }

		if (appId != null) {
			window.addEventListener('resize', appResize);
			Vue.mixin({mounted: function () {appResize (); } });

			function appResize () {
				const windowHeight = window.innerHeight-document.getElementById('modx-header').offsetHeight;
				const app = document.getElementById(appId);
				app.style.cssText = `height:${windowHeight}px;overflow-y: auto; overflow-x: hidden;`;
			}

		}

	}
}