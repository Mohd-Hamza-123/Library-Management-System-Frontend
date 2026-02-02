import { libraryStudentSchema } from "@/lib/validation/libraryStudentSchema";

export const submitHandler = (formData: FormData) => {
    const raw = {
        name: formData.get("name") as string,
        father_name: formData.get("father_name") as string,
        seat: formData.get("seat") as string,
        shift: formData.get("shift") as string,
        joining_date: formData.get("joining_date") as string,
        is_hidden: formData.get("is_hidden") === "on",
    };

    const result = libraryStudentSchema.safeParse(raw)
    if (!result.success) {
        const { formErrors, fieldErrors } = result.error.flatten()
        // console.log(formErrors)
        // console.log(fieldErrors)
        for (const [key, value] of Object.entries(fieldErrors)) {
            return { success : false , message : value[0] }
        }
    }

    return {success : true , data : result.data}
}