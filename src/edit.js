import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return <h1 { ...useBlockProps() }>Edit 6</h1>;
}
