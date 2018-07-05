sap.ui.define([],
	function(){
	"use strict";

		class TripInformationComponent extends awc.AdaptiveComponent(HTMLElement) {
			constructor() {
				super();
			}
			static get observedAttributes() {
				return ['fromCityCode','toCityCode', 'beginDate', 'endDate'];
			}

			get fromCityCode() {
				return this.getAttribute('fromCityCode');
			}

			set fromCityCode(val) {
				this.setAttribute('fromCityCode', val);
			}

			get toCityCode() {
				return this.getAttribute('toCityCode');
			}

			set toCityCode(val) {
				this.setAttribute('toCityCode', val);
			}

			get beginDate() {
				return this.getAttribute('beginDate');
			}

			set beginDate(val) {
				this.setAttribute('beginDate', val);
			}

			get endDate() {
				return this.getAttribute('endDate');
			}

			set endDate(val) {
				this.setAttribute('endDate', val);
			}

			attributeChangedCallback(name, oldValue, newValue) {
				super.attributeChangedCallback(name, oldValue, newValue);
				this._update();
			}

			performAdaptation(profile) {
				super.performAdaptation(profile);
				/*if (window.ShadyCSS) {
					window.ShadyCSS.styleSubtree(this);
				}*/
				this._update();
			}

			_update() {
				if (this._currentVariant != null) {
					this._currentVariant.fromCityCode = this.fromCityCode;
					this._currentVariant.toCityCode = this.toCityCode;
					this._currentVariant.beginDate = this.beginDate;
					this._currentVariant.endDate = this.endDate;
				}
			}
		}

/*		class TextButton extends awc.AdaptiveVariant {
			constructor() {
				super();
			}

			get template() {
				let template = document.createDocumentFragment();
				let p = document.createElement('div');
				p.innerHTML = '<span class="ui5-awc_trip__text" >Text</span>';
				template.appendChild(p);
				return template;
			}

			static matches(context) {
				return context['display-mode'] == 'text';
			}

			connectedCallback() {
				super.connectedCallback();

				this._text = this.contentRoot.querySelector("span.ui5-awc_variantButton__text");
			}

			set text(val) {
				this._text.innerText = val;
			}
		}*/

		class ShortTripInformationVariant extends awc.AdaptiveVariant {
			constructor() {
				super();
			}

			get template() {
				let template = document.createDocumentFragment();
				let p = document.createElement('div');
				p.innerHTML = '<div class="ui5-awc_trip__direction">' +
					'<span class="ui5-awc_trip__direction__from"></span> - ' +
					'<span class="ui5-awc_trip__direction__to"></span>' +
					'</div>' +
					'<div>' +
					'<span class="ui5-awc_trip__direction__start-date" ></span> - ' +
					'<span class="ui5-awc_trip__direction__end-date" ></span>' +
					'</div>';
				template.appendChild(p);
				return template;
			}

			static matches(context) {
				return context['details'] == 'short';
			}

			connectedCallback() {
				super.connectedCallback();

				this._fromCityCode = this.contentRoot.querySelector("span.ui5-awc_trip__direction__from");
				this._toCityCode = this.contentRoot.querySelector("span.ui5-awc_trip__direction__to");
				this._startDate = this.contentRoot.querySelector("span.ui5-awc_trip__direction__start-date");
				this._endDate = this.contentRoot.querySelector("span.ui5-awc_trip__direction__end-date");
			}

			set fromCityCode(val) {
				this._fromCityCode.innerText = val;
			}

			set toCityCode(val) {
				this._toCityCode.innerText = val;
			}

			set startDate(val) {
				this._startDate.innerText = val;
			}

			set endDate(val) {
				this._endDate.innerText = val;
			}
		}

	/*	class IconButton extends awc.AdaptiveVariant {
			constructor() {
				super();
			}

			get template() {
				let template = document.createDocumentFragment();
				let p = document.createElement('div');
				p.innerHTML = '<span class="ui5-awc_variantButton__icon">Icon</span>';
				template.appendChild(p);
				return template;
			}

			static matches(context) {
				return context['display-mode'] == 'icon';
			}

			connectedCallback() {
				super.connectedCallback();

				this._icon = this.contentRoot.querySelector("span.ui5-awc_variantButton__icon");
			}

			set icon(val) {
				// TODO: change to icon content
				this._icon.innerText = val;
			}
		}*/

		TripInformationComponent.registerVariant(ShortTripInformationVariant);
		/*VariantButtonComponent.registerVariant(MixedButton);
		VariantButtonComponent.registerVariant(IconButton);*/

		TripInformationComponent.defaultVariant = ShortTripInformationVariant;

		customElements.define('trip-details', TripInformationComponent);
	});