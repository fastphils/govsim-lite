import { useCallback, memo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

export default memo(({ data, isConnectable }) => {

  // const { label, setOutput } = data;

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  // let initialValue = 25;
  let [value, setValue] = useState(data.value);
  let [maxValue, setMaxValue] = useState(100);

  // const handleChange = (e) => {
  //   setOutput(e.target.value);
  // }

  // const handleMouseDown = useCallback((e) => {
  //   setMouseIsDown(mouseIsDown => {
  //     mouseIsDown = !mouseIsDown;
  //     console.log('Mouse is down');
  //     console.log(mouseIsDown);
  //   })
  // }, []);

  // const handleMouseUp = useCallback((e) => {
  //   setMouseIsDown(mouseIsDown => {
  //     mouseIsDown = !mouseIsDown;
  //     console.log('Mouse is up');
  //     console.log(mouseIsDown);
  //   })
  // }, []);

  const normalizeValue = useCallback((value) => value / 100 * 100);

  // const mapToPercentage = useCallback((value, inMin, inMax) => {
  //   return ((value - inMin) * 100) / (inMax - inMin);
  // }, []);

  const handleDrag = useCallback((e) => {
    let {top, bottom, left, right} = e.target.getBoundingClientRect();
    let x = e.clientX - left;
    // let y = e.clientY - top;
    if (x <= 100) {
      console.log(`${e.clientX} : ${x}`);
      setValue(x);
      data.setOutput(x);
    }
  }, []);

  const nodeStyle = {
    node: {
      height: '50px',
      border: '1px solid #eee',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '3px',
      background: 'white',
      width: '128px',
    },
    label: {
      display: 'flex',
      color: '#777',
      fontSize: '9px',
    },
    bar: {
      width: `${normalizeValue(value)}%`,
      backgroundColor: 'gray',
      height: '30px',
      marginTop: '5px',
      marginBottom: '5px',
    }
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div style={nodeStyle.node}>
        <label htmlFor="text" style={nodeStyle.label}>{data.label}</label>
        <div
          id="slider-container"
          onMouseMove={(e) => handleDrag(e)}
          // onChange={(e) => data.setOutput(e)}
          style={{
            width: '100%',
            backgroundColor: 'lightgray',
          }}
        >
          <div
            id="slider-bar"
            name="slider-bar"
            // onChange={onChange}
            className="nodrag"
            style={nodeStyle.bar}
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
});
