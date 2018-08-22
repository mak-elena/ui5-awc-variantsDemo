sap.ui.define([],
	function(){
	"use strict";

		class BackTripComponent extends awc.AdaptiveComponent(HTMLElement) {
			constructor() {
				super();
			}
			static get observedAttributes() {
				return [
					'depTime0',
					'depTime1',
					'depPoint0',
					'depPoint1',
					'arrPoint0',
					'arrPoint1'
				];
			}

			get depTime0() {
				return this.getAttribute('depTime0');
			}

			set depTime0(val) {
				this.setAttribute('depTime0', val);
			}

			get depTime1() {
				return this.getAttribute('depTime1');
			}

			set depTime1(val) {
				this.setAttribute('depTime1', val);
			}

			get depPoint0() {
				return this.getAttribute('depPoint0');
			}

			set depPoint0(val) {
				this.setAttribute('depPoint0', val);
			}

			get depPoint1() {
				return this.getAttribute('depPoint1');
			}

			set depPoint1(val) {
				this.setAttribute('depPoint1', val);
			}

			get arrPoint0() {
				return this.getAttribute('arrPoint0');
			}

			set arrPoint0(val) {
				this.setAttribute('arrPoint0', val);
			}

			get arrPoint1() {
				return this.getAttribute('arrPoint1');
			}

			set arrPoint1(val) {
				this.setAttribute('arrPoint1', val);
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
					this._currentVariant.depTime0 = this.depTime0;
					this._currentVariant.depTime1 = this.depTime1;
					this._currentVariant.depPoint0 = this.depPoint0;
					this._currentVariant.depPoint1 = this.depPoint1;
					this._currentVariant.arrPoint0 = this.arrPoint0;
					this._currentVariant.arrPoint1 = this.arrPoint1;

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
					<div class="awc-trip">
						<div class="awc-trip__flight">
							<span class="awc-trip__dep0-time"></span> 
							<span class="awc-trip__dep0-city"></span> - 
							<span class="awc-trip__arr0-city"></span>
						</div>
						<div class="awc-trip__flight">
							<span class="awc-trip__dep1-time"></span> 
							<span class="awc-trip__dep1-city"></span> - 
							<span class="awc-trip__arr1-city"></span>
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
					
					.awc-trip {
						 margin: 0.75rem 0;
					}
					.awc-trip__appointment {
						font-weight: bolder;
						font-size: 1.25rem;
					}
					.awc-trip__flight{
						padding: 0.2rem 0;
						color: #6e6e6e;
					}
					.awc-trip__flight > span {
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

				this._depTime0 = this.contentRoot.querySelector("span.awc-trip__dep0-time");
				this._depTime1 = this.contentRoot.querySelector("span.awc-trip__dep1-time");
				this._depPoint0 = this.contentRoot.querySelector("span.awc-trip__dep0-city");
				this._depPoint1 = this.contentRoot.querySelector("span.awc-trip__dep1-city");

				this._arrPoint0 = this.contentRoot.querySelector("span.awc-trip__arr0-city");
				this._arrPoint1 = this.contentRoot.querySelector("span.awc-trip__arr1-city");
			}

			set depTime0(val) {
				this._depTime0.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set depTime1(val) {
				this._depTime1.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set depPoint0(val) {
				this._depPoint0.innerText = val;
			}

			set depPoint1(val) {
				this._depPoint1.innerText = val;
			}

			set arrPoint0(val) {
				this._arrPoint0.innerText = val;
			}

			set arrPoint1(val) {
				this._arrPoint1.innerText = val;
			}
		}

		BackTripComponent.registerVariant(ShortBackTripInfoVariant);

		BackTripComponent.defaultVariant = ShortBackTripInfoVariant;

		customElements.define('back-trip-info', BackTripComponent);
	});