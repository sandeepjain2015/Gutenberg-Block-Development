import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const Edit = ({ attributes, setAttributes }) => {
  const { items } = attributes;
  const blockProps = useBlockProps();
  const [newItemContent, setNewItemContent] = useState('');

  const addItem = () => {
    if (newItemContent) {
      setAttributes({
        items: [...items, { content: newItemContent }]
      });
      setNewItemContent('');
    }
  };

  const updateItem = (content, index) => {
    const newItems = [...items];
    newItems[index].content = content;
    setAttributes({ items: newItems });
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setAttributes({ items: newItems });
  };

  return (
    <div {...blockProps}>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <TextControl
            value={item.content}
            onChange={(content) => updateItem(content, index)}
          />
          <Button
            isDestructive
            onClick={() => removeItem(index)}
            style={{ marginTop: '5px' }}
          >
            {__('Remove', 'my-plugin')}
          </Button>
        </div>
      ))}
      <TextControl
        value={newItemContent}
        onChange={(content) => setNewItemContent(content)}
        placeholder={__('New item', 'my-plugin')}
      />
      <Button
        isPrimary
        onClick={addItem}
        style={{ marginTop: '10px' }}
      >
        {__('Add Item', 'my-plugin')}
      </Button>
    </div>
  );
};

export default Edit;