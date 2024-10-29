import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

function SliderNode({ value, isConnectable, label }) {

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const nodeStyle = {
    node: {
      height: '50px',
      border: '1px solid #eee',
      padding: '5px',
      borderRadius: '5px',
      background: 'white',
    },
    label: {
      display: 'block',
      color: '#777',
      fontSize: '12px',
    },
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div style={nodeStyle.node}>
        <label htmlFor="text" style={nodeStyle.label}>Label:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </>
  );
}

export default SliderNode;