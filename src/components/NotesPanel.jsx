import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { X, Edit2, Trash2, Save } from 'lucide-react';
import './NotesPanel.css';

function NotesPanel({ node, notes, onUpdateNotes, onUpdateLabel, onDelete, onClose }) {
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const [labelValue, setLabelValue] = useState(node.data.label);
  const [editorMode, setEditorMode] = useState('edit'); // 'edit' or 'preview'

  const handleSaveLabel = () => {
    onUpdateLabel(labelValue);
    setIsEditingLabel(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveLabel();
    } else if (e.key === 'Escape') {
      setLabelValue(node.data.label);
      setIsEditingLabel(false);
    }
  };

  return (
    <div className="notes-panel">
      <div className="panel-header">
        <div className="node-label-section">
          {isEditingLabel ? (
            <div className="label-edit-container">
              <input
                type="text"
                value={labelValue}
                onChange={(e) => setLabelValue(e.target.value)}
                onKeyDown={handleKeyPress}
                className="label-input"
                autoFocus
              />
              <button onClick={handleSaveLabel} className="icon-btn save-btn" title="Save">
                <Save size={16} />
              </button>
            </div>
          ) : (
            <div className="label-display-container">
              <h2>{node.data.label}</h2>
              <button onClick={() => setIsEditingLabel(true)} className="icon-btn" title="Edit label">
                <Edit2 size={16} />
              </button>
            </div>
          )}
        </div>
        <div className="panel-actions">
          <button onClick={onDelete} className="icon-btn delete-btn" title="Delete node">
            <Trash2 size={18} />
          </button>
          <button onClick={onClose} className="icon-btn close-btn" title="Close panel">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="panel-content">
        <div className="editor-header">
          <h3>Notes</h3>
          <div className="mode-toggle">
            <button
              className={`mode-btn ${editorMode === 'edit' ? 'active' : ''}`}
              onClick={() => setEditorMode('edit')}
            >
              Edit
            </button>
            <button
              className={`mode-btn ${editorMode === 'preview' ? 'active' : ''}`}
              onClick={() => setEditorMode('preview')}
            >
              Preview
            </button>
          </div>
        </div>

        <div className="editor-container" data-color-mode="light">
          <MDEditor
            value={notes}
            onChange={onUpdateNotes}
            preview={editorMode}
            height={500}
            visibleDragbar={false}
            hideToolbar={editorMode === 'preview'}
          />
        </div>

        <div className="panel-footer">
          <p className="tip">
            <strong>Tip:</strong> Use Markdown syntax for formatting (headings, lists, bold, italic, links, etc.)
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotesPanel;
