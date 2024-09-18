'use client';

export function UserForm({ submitAction }) {
  return (
    <form action={submitAction}>
      <input name="username" type="text" placeholder="username" required />
      <button type="submit">Submit</button>
    </form>
  );
}