import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import { initGA } from '@/utils/analytics'

// Initialize Google Analytics 4
initGA();

// Fix: Google Translate injects <font> nodes that break React's virtual DOM reconciliation.
// This patch silently absorbs the NotFoundError: insertBefore when the reference node
// has been removed by the translator, preventing full-page crashes.
if (typeof Node !== 'undefined') {
  const _insertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) {
      return this.appendChild(newNode);
    }
    return _insertBefore.call(this, newNode, referenceNode);
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)