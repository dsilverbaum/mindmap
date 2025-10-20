import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div className="custom-node">
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default CustomNode;
