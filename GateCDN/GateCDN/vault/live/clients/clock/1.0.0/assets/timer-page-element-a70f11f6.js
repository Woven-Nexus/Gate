import{e as o,i as p,s as n,x as k,a as d}from"./index-8df12445.js";var x=Object.defineProperty,v=Object.getOwnPropertyDescriptor,f=(s,r,l,t)=>{for(var e=t>1?void 0:t?v(r,l):r,i=s.length-1,c;i>=0;i--)(c=s[i])&&(e=(t?c(r,l,e):c(e))||e);return t&&e&&x(r,l,e),e};let m=class extends n{render(){return k`
			<div>new-component</div>
		`}};m.styles=[o,p`
		:host {
			display: grid;
			height: 200px;
			aspect-ratio: 1;
			background-color: rgba(50,50,50,0.5);
			border-radius: 6px;
			padding: 8px;
			box-shadow: var(--box-shadow-s);
			transition:
				scale 0.2s ease,
				translate 0.1s ease,
				box-shadow 0.2s ease;
		}
		:host(:hover) {
			box-shadow: var(--box-shadow-m);
			translate: 0px -2px;
			scale: 101%;
		}
	`];m=f([d("clk-timer")],m);var b=Object.defineProperty,h=Object.getOwnPropertyDescriptor,w=(s,r,l,t)=>{for(var e=t>1?void 0:t?h(r,l):r,i=s.length-1,c;i>=0;i--)(c=s[i])&&(e=(t?c(r,l,e):c(e))||e);return t&&e&&b(r,l,e),e};let a=class extends n{render(){return k`
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		`}};a.styles=[o,p`
		:host {
			display: flex;
			gap: 12px;
			padding-block: 16px;
			padding-inline: 22px;
			flex-flow: row wrap;
    		justify-content: center;
		}
		`];a=w([d("clk-timer-page")],a);export{a as TimerPageElement};
