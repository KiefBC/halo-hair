import { marked } from "marked";

function escapeRegExp(value: string) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function markdownToHtml(markdown: string) {
	return marked.parse(markdown.trim(), { async: false }) as string;
}

export function markdownSection(markdown: string, heading: string) {
	const pattern = new RegExp(
		`(?:^|\\r?\\n)##\\s+${escapeRegExp(heading)}\\s*\\r?\\n([\\s\\S]*?)(?=\\r?\\n##\\s+|$)`
	);
	return pattern.exec(markdown)?.[1]?.trim() ?? "";
}

export function markdownSectionHtml(markdown: string, heading: string) {
	return markdownToHtml(markdownSection(markdown, heading));
}

export function markdownSectionText(markdown: string, heading: string) {
	return markdownSection(markdown, heading).replace(/\s+/g, " ").trim();
}
