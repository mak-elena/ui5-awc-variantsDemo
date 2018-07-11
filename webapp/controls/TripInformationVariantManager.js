sap.ui.define([],
	function(){
	"use strict";

		class TripInformationComponent extends awc.AdaptiveComponent(HTMLElement) {
			constructor() {
				super();
			}
			static get observedAttributes() {
				return [
					'out_departureTime0',
					'out_departureTime1',
					'out_departureCode0',
					'out_departureCode1',
					'out_departurePoint0',
					'out_departurePoint1',
					'out_destinationTime0',
					'out_destinationTime1',
					'out_destinationCode0',
					'out_destinationCode1',
					'out_destinationPoint0',
					'out_destinationPoint1',
					'ret_departureTime0',
					'ret_departureTime1',
					'ret_departureCode0',
					'ret_departureCode1',
					'ret_departurePoint0',
					'ret_departurePoint1',
					'ret_destinationTime0',
					'ret_destinationTime1',
					'ret_destinationCode0',
					'ret_destinationCode1',
					'ret_destinationPoint0',
					'ret_destinationPoint1'
				];
			}

			get out_departurePoint0() {
				return this.getAttribute('out_departurePoint0');
			}

			set out_departurePoint0(val) {
				this.setAttribute('out_departurePoint0', val);
			}

			get out_departureTime0() {
				return this.getAttribute('out_departureTime0');
			}

			set out_departureTime0(val) {
				this.setAttribute('out_departureTime0', val);
			}

			get out_departureCode0() {
				return this.getAttribute('out_departureCode0');
			}

			set out_departureCode0(val) {
				this.setAttribute('out_departureCode0', val);
			}

			get out_destinationPoint0() {
				return this.getAttribute('out_destinationPoint0');
			}

			set out_destinationPoint0(val) {
				this.setAttribute('out_destinationPoint0', val);
			}

			get out_destinationTime0() {
				return this.getAttribute('out_destinationTime0');
			}

			set out_destinationTime0(val) {
				this.setAttribute('out_destinationTime0', val);
			}

			get out_destinationCode0() {
				return this.getAttribute('out_destinationCode0');
			}

			set out_destinationCode0(val) {
				this.setAttribute('out_destinationCode0', val);
			}

			get out_departurePoint1() {
				return this.getAttribute('out_departurePoint1');
			}

			set out_departurePoint1(val) {
				this.setAttribute('out_departurePoint1', val);
			}

			get out_departurePoint1() {
				return this.getAttribute('out_departurePoint1');
			}

			set out_departurePoint1(val) {
				this.setAttribute('out_departurePoint1', val);
			}

			get out_departureTime1() {
				return this.getAttribute('out_departureTime1');
			}

			set out_departureTime1(val) {
				this.setAttribute('out_departureTime1', val);
			}

			get out_departureCode1() {
				return this.getAttribute('out_departureCode1');
			}

			set out_departureCode1(val) {
				this.setAttribute('out_departureCode1', val);
			}

			get out_destinationPoint1() {
				return this.getAttribute('out_destinationPoint1');
			}

			set out_destinationPoint1(val) {
				this.setAttribute('out_destinationPoint1', val);
			}

			get out_destinationTime1() {
				return this.getAttribute('out_destinationTime1');
			}

			set out_destinationTime1(val) {
				this.setAttribute('out_destinationTime1', val);
			}

			get out_destinationCode1() {
				return this.getAttribute('out_destinationCode1');
			}

			set out_destinationCode1(val) {
				this.setAttribute('out_destinationCode1', val);
			}

			get ret_departurePoint0() {
				return this.getAttribute('ret_departurePoint0');
			}

			set ret_departurePoint0(val) {
				this.setAttribute('ret_departurePoint0', val);
			}

			get ret_departureTime0() {
				return this.getAttribute('ret_departureTime0');
			}

			set ret_departureTime0(val) {
				this.setAttribute('ret_departureTime0', val);
			}

			get ret_destinationPoint0() {
				return this.getAttribute('ret_destinationPoint0');
			}

			set ret_destinationPoint0(val) {
				this.setAttribute('ret_destinationPoint0', val);
			}

			get ret_destinationTime0() {
				return this.getAttribute('ret_destinationTime0');
			}

			set ret_destinationTime0(val) {
				this.setAttribute('ret_destinationTime0', val);
			}

			get ret_departurePoint1() {
				return this.getAttribute('ret_departurePoint1');
			}

			set ret_departurePoint1(val) {
				this.setAttribute('ret_departurePoint1', val);
			}

			get ret_departureTime1() {
				return this.getAttribute('ret_departureTime1');
			}

			set ret_departureTime1(val) {
				this.setAttribute('ret_departureTime1', val);
			}

			get ret_destinationPoint1() {
				return this.getAttribute('ret_destinationPoint1');
			}

			set ret_destinationPoint1(val) {
				this.setAttribute('ret_destinationPoint1', val);
			}

			get ret_destinationTime1() {
				return this.getAttribute('ret_destinationTime1');
			}

			set ret_destinationTime1(val) {
				this.setAttribute('ret_destinationTime1', val);
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
					this._currentVariant.out_departurePoint0 = this.out_departurePoint0;
					this._currentVariant.out_departureCode0 = this.out_departureCode0;
					this._currentVariant.out_departureTime0 = this.out_departureTime0;

					this._currentVariant.out_destinationPoint0 = this.out_destinationPoint0;
					this._currentVariant.out_destinationCode0 = this.out_destinationCode0;
					this._currentVariant.out_destinationTime0 = this.out_destinationTime0;

					this._currentVariant.out_departurePoint1 = this.out_departurePoint1;
					this._currentVariant.out_departureTime1 = this.out_departureTime1;
					this._currentVariant.out_departureCode1 = this.out_departureCode1;

					this._currentVariant.out_destinationPoint1 = this.out_destinationPoint1;
					this._currentVariant.out_destinationTime1 = this.out_destinationTime1;
					this._currentVariant.out_destinationCode1 = this.out_destinationCode1;

					this._currentVariant.ret_departurePoint0 = this.ret_departurePoint0;
					this._currentVariant.ret_departureTime0 = this.ret_departureTime0;
					this._currentVariant.ret_destinationPoint0 = this.ret_destinationPoint0;
					this._currentVariant.ret_destinationTime0 = this.ret_destinationTime0;

					this._currentVariant.ret_departurePoint1 = this.ret_departurePoint1;
					this._currentVariant.ret_departureTime1 = this.ret_departureTime1;
					this._currentVariant.ret_destinationPoint1 = this.ret_destinationPoint1;
					this._currentVariant.ret_destinationTime1 = this.ret_destinationTime1;
				}
			}
		}

		class ShortTripInformationVariant extends awc.AdaptiveVariant {
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
						<div class="ui5-awc_trip__route">
							<span class="ui5-awc_trip__departure0-city"></span> - 
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
				</style>`
			}

			static matches(context) {
				return context['details'] == 'short';
			}

			connectedCallback() {
				super.connectedCallback();

				this._departureTime0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-time");
				this._departurePoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-city");

				this._destinationTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-time");
				this._destinationPoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-city");
			}

			set out_departurePoint0(val) {
				this._departurePoint0.innerText = val;
			}

			set out_destinationPoint1(val) {
				this._destinationPoint1.innerText = val;
			}
		}

		class MidTripInformationVariant extends ShortTripInformationVariant {
			constructor() {
				super();
			}

			static matches(context) {
				return context['details'] == 'mid';
			}

			get template() {
				let template = document.createDocumentFragment();
				let p = document.createElement('div');
				p.innerHTML = `
					<div class="ui5-awc_trip__direction">
						<div class="ui5-awc_trip__route">
							<div>
								<span class="ui5-awc_trip__departure0-time"></span> -
								<span class="ui5-awc_trip__destination1-time"></span>
							</div>
							<span class="ui5-awc_trip__departure0-city"></span> - 
							<span class="ui5-awc_trip__departure1-city"></span> - 
							<span class="ui5-awc_trip__destination1-city"></span>
						</div>
						<div class="ui5-awc_trip__ret-route">
							<div>
								<span class="ui5-awc_trip__ret-departure0-time"></span> -
								<span class="ui5-awc_trip__ret-destination1-time"></span>
							</div>
							<span class="ui5-awc_trip__ret-departure0-city"></span> - 
							<span class="ui5-awc_trip__ret-departure1-city"></span> - 
							<span class="ui5-awc_trip__ret-destination1-city"></span>
						</div>
					</div>`;
				template.appendChild(p);
				return template;
			}

			connectedCallback() {
				super.connectedCallback();

				this._destinationPoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__destination0-city");
				this._departurePoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-city");
				this._destinationTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-time");

				this._ret_departurePoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-departure0-city");
				this._ret_departurePoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-departure1-city");
				this._ret_destinationPoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-destination1-city");
				this._ret_departureTime0 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-departure0-time");
				this._ret_destinationTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-destination1-time");
			}



			set out_departureTime0(val) {
				this._departureTime0.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set out_destinationTime1(val) {
				this._destinationTime1.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set out_departurePoint1(val) {
				this._departurePoint1.innerText = val;
			}

			set ret_departureTime0(val) {
				this._ret_departureTime0.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set ret_destinationTime1(val) {
				this._ret_destinationTime1.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set ret_departurePoint0(val) {
				this._ret_departurePoint0.innerText = val;
			}
			set ret_departurePoint1(val) {
				this._ret_departurePoint1.innerText = val;
			}
			set ret_destinationPoint1(val) {
				this._ret_destinationPoint1.innerText = val;
			}
		}

		class FullTripInformationVariant extends MidTripInformationVariant {
			constructor() {
				super();
			}

			connectedCallback() {
				super.connectedCallback();

				this._departurePoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-city");
				this._departureTime0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-time");
				this._departureCode0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-code");

				this._departurePoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-city");
				this._departureTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-time");
				this._departureCode1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-code");

				this._destinationPoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__destination0-city");
				this._destinationTime0 = this.contentRoot.querySelector("span.ui5-awc_trip__destination0-time");
				this._destinationCode0 = this.contentRoot.querySelector("span.ui5-awc_trip__destination0-code");

				this._destinationPoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-city");
				this._destinationTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-time");
				this._destinationCode1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-code");

				this._ret_departureTime0 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-departure0-time");
				this._ret_destinationTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-destination1-time");
				this._ret_departurePoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-departure0-city");
				this._ret_departurePoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-departure1-city");
				this._ret_destinationPoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__ret-destination1-city");
			}

			static matches(context) {
				return context['details'] == 'full';
			}

			get template() {
				let template = document.createDocumentFragment();
				let p = document.createElement('div');
				p.innerHTML = `
					<div class="ui5-awc_trip__direction">
						<div class="ui5-awc_trip__route">
							<div>
								<span class="ui5-awc_trip__departure0-time"></span>
								<span class="ui5-awc_trip__departure0-city"></span>
								(<span class="ui5-awc_trip__departure0-code"></span>)
							</div>
							<div>
								<span class="ui5-awc_trip__destination0-time"></span>
								<span class="ui5-awc_trip__destination0-city"></span>
								(<span class="ui5-awc_trip__destination0-code"></span>)
							</div>
							<div>
								<span class="ui5-awc_trip__departure1-time"></span>
								<span class="ui5-awc_trip__departure1-city"></span>
								(<span class="ui5-awc_trip__departure1-code"></span>)
							</div>
							<div>
								<span class="ui5-awc_trip__destination1-time"></span>
								<span class="ui5-awc_trip__destination1-city"></span>
								(<span class="ui5-awc_trip__destination1-code"></span>)
							</div>
						</div>
						<div>
							<span class="ui5-awc_trip__ret-departure0-time"></span> -
							<span class="ui5-awc_trip__ret-destination1-time"></span>
							<span class="ui5-awc_trip__ret-departure0-city"></span> - 
							<span class="ui5-awc_trip__ret-departure1-city"></span> - 
							<span class="ui5-awc_trip__ret-destination1-city"></span>
						</div>
					</div>`;
				template.appendChild(p);
				return template;
			}

			set out_departureTime0(val) {
				this._departureTime0.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set out_departureTime1(val) {
				this._departureTime1.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set out_destinationTime1(val) {
				this._destinationTime1.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}
			/*set ret_departureTime0(val) {
				this._ret_departureTime0.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}

			set ret_destinationTime1(val) {
				this._ret_destinationTime1.innerText = new Date(val).toLocaleString("en-US", {
					year: "2-digit",
					month: "2-digit",
					day: "2-digit"
				});
			}
*/


			set out_destinationPoint0(val) {
				this._destinationPoint0.innerText = val;
			}

			set out_departurePoint1(val) {
				this._departurePoint1.innerText = val;
			}

		}

		TripInformationComponent.registerVariant(ShortTripInformationVariant);
		TripInformationComponent.registerVariant(MidTripInformationVariant);
		TripInformationComponent.registerVariant(FullTripInformationVariant);

		TripInformationComponent.defaultVariant = ShortTripInformationVariant;

		customElements.define('trip-details', TripInformationComponent);
	});