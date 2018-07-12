sap.ui.define([],
	function(){
	"use strict";

		class BackTripComponent extends awc.AdaptiveComponent(HTMLElement) {
			constructor() {
				super();
			}
			static get observedAttributes() {
				return [
					'departureTime0',
					'departureTime1',
					'departurePoint0',
					'departurePoint1',
					'destinationPoint0',
					'destinationPoint1'
				];
			}

			get departureTime0() {
				return this.getAttribute('departureTime0');
			}

			set departureTime0(val) {
				this.setAttribute('departureTime0', val);
			}

			get departureTime1() {
				return this.getAttribute('departureTime1');
			}

			set departureTime1(val) {
				this.setAttribute('departureTime1', val);
			}

			get departurePoint0() {
				return this.getAttribute('departurePoint0');
			}

			set departurePoint0(val) {
				this.setAttribute('departurePoint0', val);
			}

			get departurePoint1() {
				return this.getAttribute('departurePoint1');
			}

			set departurePoint1(val) {
				this.setAttribute('departurePoint1', val);
			}

			get destinationPoint0() {
				return this.getAttribute('destinationPoint0');
			}

			set destinationPoint0(val) {
				this.setAttribute('destinationPoint0', val);
			}

			get destinationPoint1() {
				return this.getAttribute('destinationPoint1');
			}

			set destinationPoint1(val) {
				this.setAttribute('destinationPoint1', val);
			}

			attributeChangedCallback(name, oldValue, newValue) {
				super.attributeChangedCallback(name, oldValue, newValue);
				this._update();
			}

			performAdaptation(profile) {
				super.performAdaptation(profile);
				if (window.ShadyCSS) {
					window.ShadyCSS.styleSubtree(this);
				}
				this._update();
			}

			_update() {
				if (this._currentVariant != null) {
					this._currentVariant.departureTime0 = this.departureTime0;
					this._currentVariant.departureTime1 = this.departureTime0;
					this._currentVariant.departurePoint0 = this.departurePoint0;
					this._currentVariant.departurePoint1 = this.departurePoint1;
					this._currentVariant.destinationPoint0 = this.destinationPoint0;
					this._currentVariant.destinationPoint1 = this.destinationPoint1;

				}
			}
		}

		class ShortBackTripInfoVariant extends awc.AdaptiveVariant {
			constructor() {
				super();
			}

			get template() {
				let template = document.createDocumentFragment();
				let s = document.createElement('style');
				s.innerHTML = this.getStyles();
				let p = document.createElement('div');
				p.innerHTML = `
					<div class="ui5-awc_trip__direction">
						<div class="ui5-awc-trip__flight">
							<span class="ui5-awc_trip__departure0-time"></span> 
							<span class="ui5-awc_trip__departure0-city"></span> - 
							<span class="ui5-awc_trip__destination0-city"></span>
						</div>
						<div class="ui5-awc-trip__flight">
							<span class="ui5-awc_trip__departure1-time"></span> 
							<span class="ui5-awc_trip__departure1-city"></span> - 
							<span class="ui5-awc_trip__destination1-city"></span>
						</div>
					</div>`;
				template.appendChild(s);
				template.appendChild(p);
				return template;
			}

			getStyles() {
				return `
				<style>
					:host {
					}
					
					.ui5-awc_trip__direction {
						 margin: 0.75rem 0;
					}
					.ui5-awc_trip__appointment {
						font-weight: bolder;
						font-size: 1.25rem;
					}
					
					.ui5-awc-trip__flight > span {
						display: inline-block;
					}
					span[class$='-time'] {
						font-weight: bold;
					}

					span[class$='-city'] {
						width: 38%;
						max-width: 200px;
					}
				</style>`
			}

			static matches(context) {
				return context['backtrip'] == 'short';
			}

			connectedCallback() {
				super.connectedCallback();

				this._departureTime0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-time");
				this._departureTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-time");
				this._departurePoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-city");
				this._departurePoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-city");

				this._destinationPoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__destination0-city");
				this._destinationPoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-city");
			}

			set departureTime0(val) {
				this._departureTime0.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set departureTime1(val) {
				this._departureTime1.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set departurePoint0(val) {
				this._departurePoint0.innerText = val;
			}

			set departurePoint1(val) {
				this._departurePoint1.innerText = val;
			}

			set destinationPoint0(val) {
				this._destinationPoint0.innerText = val;
			}

			set destinationPoint1(val) {
				this._destinationPoint1.innerText = val;
			}
		}

		BackTripComponent.registerVariant(ShortBackTripInfoVariant);

		BackTripComponent.defaultVariant = ShortBackTripInfoVariant;

		customElements.define('back-trip-info', BackTripComponent);
	});