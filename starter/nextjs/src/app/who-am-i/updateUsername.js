"use server";

import { redirect } from "next/navigation";
import { AsyncDatabase } from "promised-sqlite3";

export default async function updateUsername(formData) {
  console.log("updateUsername called", formData);

  const id = formData.get("id");
  const username = formData.get("username");

  if (!id || !username) {
    throw new Error("No data!");
  }

  const db = await AsyncDatabase.open("./notes.db");
  await db.run("UPDATE users SET name = ? WHERE id = ?", [username, id]);
  redirect("/");
}
