# Mind Map Web Application

A beautiful, interactive mind mapping application built with React and React Flow. Create visual mind maps with connected nodes and take detailed notes for each node using markdown and rich text formatting.

## Features

- **Interactive Mind Map**: Create and organize ideas visually with an intuitive drag-and-drop interface
- **Beautiful Nodes**: Colorful, customizable nodes with smooth animations and hover effects
- **Connection Lines**: Animated connection lines between nodes to show relationships
- **Rich Notes Panel**: Click any node to open a side panel with a full-featured markdown editor
- **Markdown Support**: Write notes in markdown format with live preview
- **Rich Text Editing**: Format your notes with headings, lists, bold, italic, links, and more
- **Node Management**:
  - Add new nodes with the "Add Node" button
  - Edit node labels inline
  - Delete nodes when no longer needed
  - Drag nodes to rearrange your mind map
  - Connect nodes by dragging from one handle to another
- **Visual Polish**:
  - Gradient backgrounds and modern UI design
  - Mini-map for navigation
  - Zoom and pan controls
  - Responsive layout
  - Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mindmap
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Usage

### Creating Nodes

1. Click the "Add Node" button in the header to create a new node
2. The new node will appear at a random position on the canvas
3. Drag the node to position it where you want

### Connecting Nodes

1. Hover over a node to see the connection handles (top and bottom)
2. Click and drag from a handle on one node to a handle on another node
3. An animated connection line will be created

### Editing Node Labels

1. Click on any node to open the notes panel
2. Click the edit icon (pencil) next to the node label
3. Type the new label and press Enter or click the save icon
4. Press Escape to cancel editing

### Taking Notes

1. Click on any node to open the notes panel on the right side
2. Use the markdown editor to write your notes
3. Switch between "Edit" and "Preview" modes using the toggle buttons
4. Your notes are automatically saved as you type

### Markdown Formatting

The notes editor supports full markdown syntax:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Lists**: `- item` or `1. item`
- **Links**: `[text](url)`
- **Code**: `` `code` `` or ``` for blocks
- And much more!

### Deleting Nodes

1. Click on the node to open the notes panel
2. Click the trash icon in the panel header
3. The node and all its connections will be removed

### Navigation

- **Pan**: Click and drag on the empty canvas
- **Zoom**: Use the zoom controls in the bottom-left corner or your mouse wheel
- **Fit View**: Click the fit-to-screen button in the controls
- **Mini-map**: Use the mini-map in the bottom-right to navigate large mind maps

## Technology Stack

- **React**: UI framework
- **Vite**: Build tool and development server
- **React Flow**: Interactive node-based UI library
- **@uiw/react-md-editor**: Markdown editor component
- **Lucide React**: Beautiful icon library

## Project Structure

```
mindmap/
├── src/
│   ├── components/
│   │   ├── CustomNode.jsx      # Custom node component
│   │   ├── NotesPanel.jsx      # Side panel for notes
│   │   └── NotesPanel.css      # Styles for notes panel
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
└── vite.config.js             # Vite configuration
```

## Future Enhancements

Potential features for future development:

- Save and load mind maps (localStorage or backend)
- Export mind maps as images or PDF
- Collaborative editing
- Templates for different mind map types
- Custom node colors and styles
- Undo/redo functionality
- Search functionality
- Keyboard shortcuts
- Mobile app version

## License

MIT License - feel free to use this project for your own purposes!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
