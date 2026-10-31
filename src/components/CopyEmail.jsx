import React, { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { personalInfo } from '../data';

// Shows the email address with a one-click copy button.
function CopyEmail({ className = '' }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={`btn btn-outline font-mono text-sm ${className}`}
      aria-label={`Copy email address ${personalInfo.email}`}
    >
      <span className="truncate">{personalInfo.email}</span>
      {copied ? <Check size={16} className="text-primary shrink-0" /> : <Copy size={16} className="shrink-0" />}
      <span className="sr-only" aria-live="polite">{copied ? 'Copied' : ''}</span>
    </button>
  );
}

export default CopyEmail;
