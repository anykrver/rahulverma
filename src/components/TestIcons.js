import React from 'react';
import { Code2, Zap, Database, Cloud, Sparkles } from 'lucide-react';

export default function TestIcons() {
  return (
    <div>
      <h1>Test Icons</h1>
      <Code2 className="w-6 h-6" />
      <Zap className="w-6 h-6" />
      <Database className="w-6 h-6" />
      <Cloud className="w-6 h-6" />
      <Sparkles className="w-6 h-6" />
    </div>
  );
}