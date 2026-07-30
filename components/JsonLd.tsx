/* ------------------------------------------------------------------
   JsonLd — emits a <script type="application/ld+json"> block.

   The Metadata API cannot express the @graph structures this site
   uses, so structured data stays as literal script tags on each page.

   Two forms:
     <JsonLd data={organizationGraph} />      // object (preferred)
     <JsonLd raw={rawJsonLdString} />         // exact source bytes

   SECURITY NOTE: the payload is ALWAYS an author-written literal
   committed to this repository. It is never user input, never fetched
   at runtime, never derived from a request — so there is no untrusted
   content to sanitize. This is the sanctioned exception to the
   project's no-innerHTML rule (see the migration brief). As defence in
   depth, every "<" is escaped to its < JSON escape so no string
   value can terminate the script element early, which is the only
   injection vector a JSON-LD block has.
   ------------------------------------------------------------------ */

type JsonLdProps =
  | { data: unknown; raw?: never }
  | { raw: string; data?: never };

function escapeForScript(json: string): string {
  return json.replace(/</g, '\\u003c');
}

export function JsonLd(props: JsonLdProps) {
  const json =
    props.raw !== undefined ? props.raw : JSON.stringify(props.data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escapeForScript(json) }}
    />
  );
}

export default JsonLd;
