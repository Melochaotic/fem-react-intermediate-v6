import { AsyncDatabase } from "promised-sqlite3";
import path from "node:path";

// assumed logged in as id 1
export default async function MyNotes() {
  console.log("rendering myNotes server component");
  async function fetchNotes() {
    console.log("running server function fetchNotes");
    const dbPath = path.resolve(__dirname, "../notes.db");
    const db = await AsyncDatabase.open(dbPath);
    const from = await db.all(
      `SELECT n.id AS id, n.note AS note, f.name AS from_user, t.name AS to_user
      FROM notes AS n
      JOIN users f ON f.id = n.from_user
      JOIN users t ON t.id = n.to_user
      WHERE from_user = ?`,
      ["1"]
    );
    return { from };
  }

  const notes = await fetchNotes();

  return (
    <fieldset>
      <legend>Server Component</legend>
      <div>
        <table>
          <thead>
            <th>From</th>
            <th>To</th>
            <th>Note</th>
          </thead>
          <tbody>
            {notes.from.map(({ id, note, from_user, to_user }) => (
              <tr key={id}>
                <td>{from_user}</td>
                <td>{to_user}</td>
                <td>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </fieldset>
  );
}
