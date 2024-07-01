
import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { items } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <ul {...blockProps}>
      {items.map((item, index) => (
        <li key={index}>{item.content}</li>
      ))}
    </ul>
  );
};

export default Save;
