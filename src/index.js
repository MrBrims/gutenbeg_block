import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( 'alex/gutenbeg-block', {
	edit: Edit,
	save: Save,
} );
