import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return <h1 { ...useBlockProps.save() }>Save 2</h1>;
}
