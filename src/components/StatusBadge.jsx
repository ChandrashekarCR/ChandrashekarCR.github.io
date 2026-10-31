import React from 'react';

const STATUSES = {
  active: { label: 'Active', className: 'border-base-a/30 bg-base-a/10 text-base-a', pulse: true },
  completed: { label: 'Completed', className: 'border-primary/30 bg-secondary text-primary' },
  learning: { label: 'In progress · learning', className: 'border-base-g/40 bg-base-g/10 text-highlight', pulse: true },
  published: { label: 'Published', className: 'border-base-c/30 bg-base-c/10 text-base-c' },
  report: { label: 'Report', className: 'border-border bg-muted text-muted-foreground' }
};

function StatusBadge({ status }) {
  const config = STATUSES[status];
  if (!config) return null;

  return (
    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${config.className}`}>
      {config.pulse && <span className="status-dot" />}
      {config.label}
    </span>
  );
}

export default StatusBadge;
