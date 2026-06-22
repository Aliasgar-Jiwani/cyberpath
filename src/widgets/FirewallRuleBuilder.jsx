import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const rules = [
  { id: 1, action: 'ALLOW', protocol: 'TCP', src: 'External', dst: 'DMZ', port: '80', desc: 'Allow HTTP to Web Server' },
  { id: 2, action: 'BLOCK', protocol: 'ANY', src: 'External', dst: 'Internal', port: 'ANY', desc: 'Block direct Internet to Internal' },
  { id: 3, action: 'ALLOW', protocol: 'TCP', src: 'DMZ', dst: 'Internal', port: '3306', desc: 'Allow Web Server to query Database' },
  { id: 4, action: 'ALLOW', protocol: 'TCP', src: 'Internal', dst: 'External', port: '443', desc: 'Allow Internal to browse secure web' },
];

export default function FirewallRuleBuilder() {
  const [selectedRule, setSelectedRule] = useState(null);

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">Firewall Rule Analysis</h3>
          <p className="text-sm text-text-secondary">Review common DMZ firewall rules</p>
        </div>
      </div>

      <div className="overflow-x-auto border border-border rounded-xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-text-secondary text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 border-b border-border">Action</th>
              <th className="px-4 py-3 border-b border-border">Protocol</th>
              <th className="px-4 py-3 border-b border-border">Source</th>
              <th className="px-4 py-3 border-b border-border">Destination</th>
              <th className="px-4 py-3 border-b border-border">Port</th>
            </tr>
          </thead>
          <tbody className="bg-bg">
            {rules.map((rule) => (
              <tr 
                key={rule.id} 
                className="hover:bg-surface-hover cursor-pointer border-b border-border/50 last:border-0 transition-colors"
                onClick={() => setSelectedRule(rule)}
              >
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${rule.action === 'ALLOW' ? 'bg-secondary-dim text-secondary' : 'bg-danger-dim text-danger'}`}>
                    {rule.action}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono">{rule.protocol}</td>
                <td className="px-4 py-3">{rule.src}</td>
                <td className="px-4 py-3">{rule.dst}</td>
                <td className="px-4 py-3 font-mono">{rule.port}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRule && (
        <div className="mt-4 p-4 bg-primary-dim border border-primary rounded-xl animate-fade-in">
          <p className="text-sm font-semibold text-primary mb-1">Rule Analysis:</p>
          <p className="text-sm text-text">{selectedRule.desc}</p>
        </div>
      )}
      {!selectedRule && (
        <p className="text-xs text-text-secondary mt-4 text-center">Click a rule to see its explanation</p>
      )}
    </div>
  );
}
