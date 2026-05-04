export type LegalSection = {
  num: number;
  title: string;
  body: string;
};

export type ParsedLegalDocument = {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Parses exported plain-text legal docs where the title is line 1,
 * "Effective Date: …" is line 2, optional intro paragraphs follow, and
 * sections begin with lines like "1. Section title".
 */
export function parseLegalDocument(text: string): ParsedLegalDocument {
  const lines = text.trim().replace(/\u2028/g, "\n").split(/\r?\n/);
  const title = (lines[0] ?? "").trim();
  const effectiveLine = (lines[1] ?? "").trim();
  const effectiveDate = effectiveLine.replace(/^Effective Date:\s*/i, "").trim();

  const sectionStarts: { index: number; num: number; title: string }[] = [];
  for (let j = 2; j < lines.length; j++) {
    const m = lines[j].match(/^(\d+)\.\s+(.+)$/);
    if (m) {
      sectionStarts.push({
        index: j,
        num: Number(m[1]),
        title: m[2].trim(),
      });
    }
  }

  const firstSection = sectionStarts[0]?.index ?? lines.length;
  const intro = lines.slice(2, firstSection).join("\n").trim();

  const sections: LegalSection[] = [];
  for (let s = 0; s < sectionStarts.length; s++) {
    const start = sectionStarts[s].index + 1;
    const end = sectionStarts[s + 1]?.index ?? lines.length;
    const body = lines.slice(start, end).join("\n").trim();
    sections.push({
      num: sectionStarts[s].num,
      title: sectionStarts[s].title,
      body,
    });
  }

  return { title, effectiveDate, intro, sections };
}
