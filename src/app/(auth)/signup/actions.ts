"use server"

import { auth } from '@/lib/auth';

export const register = async (formData: FormData) => {

  try {

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const data = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        role: "user"
      }
    })

    console.log(data)

    return {
      success: true,
      message: "Signup Successfully",
      data: data.user
    }
  } catch (error: unknown) {
    console.log("error action.ts", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Signup Failed",
    }
  }


}