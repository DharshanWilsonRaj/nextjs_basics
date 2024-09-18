import React from 'react'
import { cookies } from 'next/headers';
import { z } from 'zod';


const userSchema = z.object({
    username: z.string({ required_error: 'Username is required' }).min(5, { message: 'Minimum 5 characters required' })
});

export async function FormPage() {
    const cookieStore = cookies();
    const users = JSON.parse(cookieStore.get('username')?.value || "[]");

    async function submitAction(formData) {
        "use server"
        const newUser = formData.get('username');
        const result = userSchema.safeParse({ username: newUser });
        if (!result.success) {
            console.error('Validation errors:', result.error.issues);
            return
        }
        const updatedUsers = [...users, newUser];
        cookies().set({
            name: 'username',
            value: JSON.stringify(updatedUsers),
            httpOnly: true,
            path: '/',
        })
    }
    
    return (
        <div>
            <form action={submitAction} onSubmit={handleSUbmit}>
                <input name="username" type="text" placeholder="username" />
                <button type="submit">Submit</button>
            </form>
            {users?.map((curr, idx) => (
                <div key={idx}>
                    {curr}
                </div>
            ))}
        </div>
    )
}

export default FormPage
