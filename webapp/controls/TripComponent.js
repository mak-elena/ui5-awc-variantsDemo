sap.ui.define([],
	function(){
	"use strict";

		class TripInformationComponent extends awc.AdaptiveComponent(HTMLElement) {
			constructor() {
				super();
			}
			static get observedAttributes() {
				return [
					'departureTime0',
					'departureTime1',
					'destinationTime0',
					'destinationTime1',
					'departurePoint0',
					'departurePoint1',
					'destinationPoint0',
					'destinationPoint1',
					'departureGate0',
					'departureGate1',
					'destinationGate0',
					'destinationGate1'
				];
			}

			// time
			get departureTime0() {
				return this.getAttribute('departureTime0');
			}

			set departureTime0(val) {
				this.setAttribute('departureTime0', val);
			}

			get destinationTime0() {
				return this.getAttribute('destinationTime0');
			}

			set destinationTime0(val) {
				this.setAttribute('destinationTime0', val);
			}

			get departureTime1() {
				return this.getAttribute('departureTime1');
			}

			set departureTime1(val) {
				this.setAttribute('departureTime1', val);
			}

			get destinationTime1() {
				return this.getAttribute('destinationTime1');
			}

			set destinationTime1(val) {
				this.setAttribute('destinationTime1', val);
			}

			// points
			get departurePoint0() {
				return this.getAttribute('departurePoint0');
			}

			set departurePoint0(val) {
				this.setAttribute('departurePoint0', val);
			}

			get destinationPoint0() {
				return this.getAttribute('destinationPoint0');
			}

			set destinationPoint0(val) {
				this.setAttribute('destinationPoint0', val);
			}

			get departurePoint1() {
				return this.getAttribute('departurePoint1');
			}

			set departurePoint1(val) {
				this.setAttribute('departurePoint1', val);
			}

			get departurePoint1() {
				return this.getAttribute('departurePoint1');
			}

			set departurePoint1(val) {
				this.setAttribute('departurePoint1', val);
			}

			get destinationPoint1() {
				return this.getAttribute('destinationPoint1');
			}

			set destinationPoint1(val) {
				this.setAttribute('destinationPoint1', val);
			}

			get departureGate0() {
				return this.getAttribute('departureGate0');
			}

			set departureGate0(val) {
				this.setAttribute('departureGate0', val);
			}

			get destinationGate0() {
				return this.getAttribute('destinationGate0');
			}

			set destinationGate0(val) {
				this.setAttribute('destinationGate0', val);
			}

			get departureGate1() {
				return this.getAttribute('departureGate1');
			}

			set departureGate1(val) {
				this.setAttribute('departureGate1', val);
			}

			get destinationGate1() {
				return this.getAttribute('destinationGate1');
			}

			set destinationGate1(val) {
				this.setAttribute('destinationGate1', val);
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
					this._currentVariant.departurePoint0 = this.departurePoint0;
					this._currentVariant.departureGate0 = this.departureGate0;
					this._currentVariant.departureTime0 = this.departureTime0;

					this._currentVariant.destinationPoint0 = this.destinationPoint0;
					this._currentVariant.destinationGate0 = this.destinationGate0;
					this._currentVariant.destinationTime0 = this.destinationTime0;

					this._currentVariant.departurePoint1 = this.departurePoint1;
					this._currentVariant.departureTime1 = this.departureTime1;
					this._currentVariant.departureGate1 = this.departureGate1;

					this._currentVariant.destinationPoint1 = this.destinationPoint1;
					this._currentVariant.destinationTime1 = this.destinationTime1;
					this._currentVariant.destinationGate1 = this.destinationGate1;
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
						<div class="ui5-awc-trip__flight">
							<span class="ui5-awc_trip__departure0-time"></span> 
							<span class="ui5-awc_trip__departure0-port"></span> -
							<span class="ui5-awc_trip__destination0-port"></span>
						</div>
						<div class="ui5-awc-trip__flight">
							<span class="ui5-awc_trip__departure1-time"></span> 
							<span class="ui5-awc_trip__departure1-port"></span> -
							<span class="ui5-awc_trip__destination1-port"></span>
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
						 padding: 0.75rem 0;
						 border-bottom: 1px solid;
					}

					.ui5-awc-trip__flight{
						padding: 0.2rem 0;
						color: #3f5161;
					}

					.ui5-awc-trip__flight > span {
						display: inline-block;
					}

					span[class$='-time'] {
						font-weight: bold;
					}

					span[class$='-port'] {
						width: 38%;
						max-width: 200px;
					}
				</style>`;
			}

			static matches(context) {
				return context['daysLeft'] > 7;
			}

			connectedCallback() {
				super.connectedCallback();

				this._departureTime0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-time");
				this._departureTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-time");
				this._departurePoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-port");
				this._departurePoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-port");

				this._destinationPoint0 = this.contentRoot.querySelector("span.ui5-awc_trip__destination0-port");
				this._destinationPoint1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-port");
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

		class MidTripInformationVariant extends ShortTripInformationVariant {
			constructor() {
				super();
			}

			static matches(context) {
				return context['daysLeft'] > 1 && context['daysLeft'] <= 7;
			}


			get template() {
				let template = document.createDocumentFragment();
				let s = document.createElement('style');
				s.innerHTML = this.getStyles();
				let p = document.createElement('div');
				p.innerHTML = `
					<div>
						<div class="ui5-awc_trip__direction">
							<div class="ui5-awc-trip__flight">
								<span class="ui5-awc_trip__departure0-time"></span> 
								<span class="ui5-awc_trip__departure0-port"></span>
							</div>
							<div class="ui5-awc-trip__flight">
								<span class="ui5-awc_trip__destination0-time"></span> 
								<span class="ui5-awc_trip__destination0-port"></span>
							</div>
						</div>
						<div class="ui5-awc_trip__direction" >
							<div class="ui5-awc-trip__flight">
								<span class="ui5-awc_trip__departure1-time"></span> 
								<span class="ui5-awc_trip__departure1-port"></span>
							</div>
							<div class="ui5-awc-trip__flight">
								<span class="ui5-awc_trip__destination1-time"></span> 
								<span class="ui5-awc_trip__destination1-port"></span>
							</div>
						</div>
					</div>`;
				template.appendChild(s);
				template.appendChild(p);
				return template;
			}

			getStyles () {
				return `
				<style>
					:host {
					}
					
					.ui5-awc_trip__direction {
						 padding: 0.75rem 0;
						 border-bottom: 1px solid;
					}

					.ui5-awc-trip__flight{
						padding: 0.2rem 0;
						color: #344350;
					}

					.ui5-awc-trip__flight > span {
						display: inline-block;
					}

					span[class$='-time'] {
						font-weight: bold;
						color: #ab0202;
					}

					span[class$='-port'] {
						width: 38%;
						max-width: 200px;
					}
				</style>`;
			}

			connectedCallback() {
				super.connectedCallback();

				this._departureTime0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-time");
				this._departureTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-time");
				this._destinationTime0 = this.contentRoot.querySelector("span.ui5-awc_trip__destination0-time");
				this._destinationTime1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-time");
				}



			set departureTime0(val) {
				this._departureTime0.innerText = val;
			}

			set departureTime1(val) {
				this._departureTime1.innerText = val;
			}

			set destinationTime0(val) {
				this._destinationTime0.innerText = val;
			}

			set destinationTime1(val) {
				this._destinationTime1.innerText = val;
			}
		}

		class FullTripInformationVariant extends MidTripInformationVariant {
			constructor() {
				super();
			}

			connectedCallback() {
				super.connectedCallback();

				this._departureGate0 = this.contentRoot.querySelector("span.ui5-awc_trip__departure0-gate");
				this._destinationGate0 = this.contentRoot.querySelector("span.ui5-awc_trip__destination0-gate");
				this._departureGate1 = this.contentRoot.querySelector("span.ui5-awc_trip__departure1-gate");
				this._destinationGate1 = this.contentRoot.querySelector("span.ui5-awc_trip__destination1-gate");
				}

			static matches(context) {
				return context['daysLeft'] <= 1;
			}

			get template() {
				let template = document.createDocumentFragment();
				let p = document.createElement('div');
				let s = document.createElement('style');
				s.innerHTML = this.getStyles();
				p.innerHTML = `
					<div >
						<div class="ui5-awc_trip__countdown">
						03:45
						</div>
						<div class="ui5-awc_trip__direction" >
							<div class="ui5-awc-trip__flight">
								<span class="ui5-awc_trip__departure0-time"></span> 
								<span class="ui5-awc_trip__departure0-port"></span>
								<span class="ui5-awc_trip__departure0-gate"></span>
							</div>
							<div class="ui5-awc-trip__flight">
								<span class="ui5-awc_trip__destination0-time"></span> 
								<span class="ui5-awc_trip__destination0-port"></span>
								<span class="ui5-awc_trip__destination0-gate"></span>
							</div>
						</div>
						<div class="ui5-awc_trip__direction" >
							<div class="ui5-awc-trip__flight">
								<span class="ui5-awc_trip__departure1-time"></span> 
								<span class="ui5-awc_trip__departure1-port"></span>
								<span class="ui5-awc_trip__departure1-gate"></span>
							</div>
							<div class="ui5-awc-trip__flight">
								<span class="ui5-awc_trip__destination1-time"></span> 
								<span class="ui5-awc_trip__destination1-port"></span>
								<span class="ui5-awc_trip__destination1-gate"></span>
							</div>
						</div>
					</div>`;
				template.appendChild(s);
				template.appendChild(p);
				return template;
			}

			getStyles () {
				return `
				<style>
					:host {
					}
					
					.ui5-awc_trip__direction {
						 padding: 0.75rem 0;
						 border-bottom: 1px solid;
					}

					.ui5-awc-trip__flight{
						padding: 0.2rem 0;
						color: #344350;
					}

					.ui5-awc-trip__flight > span {
						display: inline-block;
					}

					span[class$='-time'],
					span[class$='-gate'] {
						font-weight: bold;
						color: #ab0202;
						width: 22%;
    					text-align: right;
					}

					span[class$='-port'] {
						width: 38%;
						max-width: 200px;
						padding-left: 0.5rem;
					}
					.ui5-awc_trip__countdown {
						margin: 1rem auto;
						text-align: center;
						color: #ab0202;
						font-size: 2rem;
						font-weight: bold;
						width: 40%;
						border: 1px solid #ab0202;
						border-radius: 0.2rem;
						padding: 0.25rem;
					}
				</style>`;
			}

			set departureTime0(val) {
				this._departureTime0.innerText = new Date(val).toLocaleString("en-US", {
					hour: "numeric",
					minute: "numeric"
				});
			}

			set departureTime1(val) {
				this._departureTime1.innerText = new Date(val).toLocaleString("en-US", {
					hour: "2-digit",
					minute: "2-digit"
				});
			}
			set destinationTime0(val) {
				this._destinationTime0.innerText = new Date(val).toLocaleString("en-US", {
					hour: "2-digit",
					minute: "2-digit"
				});
			}

			set destinationTime1(val) {
				this._destinationTime1.innerText = new Date(val).toLocaleString("en-US", {
					hour: "2-digit",
					minute: "2-digit"
				});
			}

			set departureGate0(val) {
				this._departureGate0.innerText = val;
			}

			set departureGate1(val) {
				this._departureGate1.innerText = val;
			}

			set destinationGate0(val) {
				this._destinationGate0.innerText = val;
			}

			set destinationGate1(val) {
				this._destinationGate1.innerText = val;
			}

			set destinationPoint0(val) {
				this._destinationPoint0.innerText = val;
			}

			set departurePoint1(val) {
				this._departurePoint1.innerText = val;
			}
		}

		TripInformationComponent.registerVariant(ShortTripInformationVariant);
		TripInformationComponent.registerVariant(MidTripInformationVariant);
		TripInformationComponent.registerVariant(FullTripInformationVariant);

		TripInformationComponent.defaultVariant = ShortTripInformationVariant;

		customElements.define('trip-info', TripInformationComponent);
	});