import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

export default function SliderNode({ value, isConnectable, label }) {

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const nodeStyle = {
    node: {
      height: '50px',
      border: '1px solid #eee',
      padding: '10px',
      borderRadius: '5px',
      background: 'white',
      width: '150px',
    },
    label: {
      display: 'flex',
      color: '#777',
      fontSize: '9px',
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
        <div
          style={{
            width: '100%',
            backgroundColor: 'lightgray',
            borderRadius: '4px',
          }}
        >
          <div
            id="text"
            name="text"
            onChange={onChange}
            className="nodrag"
            style={{
              width: '25%',
              backgroundColor: 'gray',
              borderRadius: '4px',
              height: '30px',
              marginTop: '5px',
              marginBottom: '5px',
            }}
          />
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </>
  );
}