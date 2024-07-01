import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
  return (
    <RichText
      { ...useBlockProps() }
      placeholder="Type something here..."
      tagName="div"
      value={ attributes.content }
      onChange={ ( val ) => setAttributes( { content: val } ) }
    />
  );
}