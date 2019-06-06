import createElement from "./lib";

export default function render(title, desc) {
	return <div>
		<ItemList caption="dummy content">
			<span>foo</span>
			<span>bar</span>
			<span>baz</span>
		</ItemList>

		<ItemList caption="numbers">
			<span>1</span>
			<span>2</span>
			<span>3</span>
		</ItemList>
	</div>;
}

function ItemList({ caption }, ...children) {
	return <article>
		<h3>{caption}</h3>

		<ul class="foo">
			{children.map(item => (
				<li>{item}</li>
			))}
		</ul>
	</article>;
}
