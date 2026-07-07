export const changeTypeConfig = {
	added: { symbol: "+", label: "added", className: "text-diff-added" },
	improved: { symbol: "~", label: "improved", className: "text-amber" },
	fixed: { symbol: "-", label: "fixed", className: "text-diff-removed" },
	deprecated: { symbol: "!", label: "deprecated", className: "text-muted" },
} as const;

export type ChangeType = keyof typeof changeTypeConfig;
