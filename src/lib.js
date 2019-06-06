export default function createElement(tag, attributes, ...children) {
	console.log("[createElement]", tag, attributes, children);

	if(tag.call) {
		return tag(attributes, ...children);
	}

	let node = document.createElement(tag);

	if(!attributes) {
		attributes = {};
	}
	Object.keys(attributes).forEach(attr => {
		node[attr] = attributes[attr];
	});

	flatten(children).forEach(child => {
		if(child.substr) {
			node.textContent = child;
		} else {
			node.appendChild(child);
		}
	});

	return node;
}

function flatten(items) {
	return items.reduce((memo, item) => {
		return memo.concat(item.pop ? flatten(item) : item);
	}, []);
}
