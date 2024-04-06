import HTMLTabsManagerElement from './html-tab-element.js';

export default class HTMLAppCommonBaseElement extends HTMLTabsManagerElement {
	
	static $tabCreator = Symbol('HTMLAppCommonBaseElement.tabCreator');
	
	static [HTMLTabsManagerElement.$tab] = [
		
			{
				
				args: [ 1 ],
				option(target, targetIndex, targetsLength, tabButton, option) {
					
					const { container } = option;
					
					if (container.tagName === 'TAB-CONTAINER') {
						
						const { tabCreator } = this;
						let k;
						
						for (k in tabCreator) if (container.matches(k)) return tabCreator[k]?.call?.(this, ...arguments);
						
					}
					
				},
				target: '#tabs',
				types: [ 'tab-append', 'tab-prepend' ],
				viewer: '#tab-views'
				
			}
		
	];
	
	constructor() {
		
		super();
		
	}
	
	get tabsContainer() {
		
		return this.shadowRoot?.getElementById?.('tabs');
		
	}
	
	get tabCreator() {
		
		return this.constructor[HTMLAppCommonBaseElement.$tabCreator] ?? {};
		
	}
	
	get tabViewsContainer() {
		
		return this.shadowRoot?.getElementById?.('tab-views');
		
	}
	
}