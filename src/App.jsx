import { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import NotesPanel from './components/NotesPanel';
import CustomNode from './components/CustomNode';
import './App.css';
import { Plus } from 'lucide-react';

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'Central Idea' },
    position: { x: 250, y: 150 },
    style: {
      backgroundColor: '#6366f1',
      color: 'white',
      border: '2px solid #4f46e5',
      borderRadius: '12px',
      padding: '16px 24px',
      fontSize: '16px',
      fontWeight: '600',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  },
  {
    id: '2',
    type: 'custom',
    data: { label: 'Branch 1' },
    position: { x: 100, y: 300 },
    style: {
      backgroundColor: '#8b5cf6',
      color: 'white',
      border: '2px solid #7c3aed',
      borderRadius: '12px',
      padding: '12px 20px',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  },
  {
    id: '3',
    type: 'custom',
    data: { label: 'Branch 2' },
    position: { x: 400, y: 300 },
    style: {
      backgroundColor: '#ec4899',
      color: 'white',
      border: '2px solid #db2777',
      borderRadius: '12px',
      padding: '12px 20px',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeNotes, setNodeNotes] = useState({});

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } }, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);

  const onPaneClick = useCallback(() => {
    // Don't close panel when clicking on pane
  }, []);

  const addNewNode = useCallback(() => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: 'custom',
      data: { label: `New Node ${nodes.length + 1}` },
      position: {
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100,
      },
      style: {
        backgroundColor: '#10b981',
        color: 'white',
        border: '2px solid #059669',
        borderRadius: '12px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [nodes, setNodes]);

  const updateNodeLabel = useCallback((nodeId, newLabel) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, label: newLabel } }
          : node
      )
    );
  }, [setNodes]);

  const deleteNode = useCallback((nodeId) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
    if (selectedNode?.id === nodeId) {
      setSelectedNode(null);
    }
  }, [setNodes, setEdges, selectedNode]);

  const updateNodeNotes = useCallback((nodeId, notes) => {
    setNodeNotes((prev) => ({
      ...prev,
      [nodeId]: notes,
    }));
  }, []);

  const closePanel = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <h1>Mind Map</h1>
        <button className="add-node-btn" onClick={addNewNode}>
          <Plus size={20} />
          Add Node
        </button>
      </div>
      <div className="content-container">
        <div className="mindmap-container">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-left"
          >
            <Controls />
            <MiniMap
              nodeColor={(node) => {
                return node.style?.backgroundColor || '#6366f1';
              }}
              nodeStrokeWidth={3}
              zoomable
              pannable
            />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
        {selectedNode && (
          <NotesPanel
            node={selectedNode}
            notes={nodeNotes[selectedNode.id] || ''}
            onUpdateNotes={(notes) => updateNodeNotes(selectedNode.id, notes)}
            onUpdateLabel={(label) => updateNodeLabel(selectedNode.id, label)}
            onDelete={() => deleteNode(selectedNode.id)}
            onClose={closePanel}
          />
        )}
      </div>
    </div>
  );
}

export default App;
