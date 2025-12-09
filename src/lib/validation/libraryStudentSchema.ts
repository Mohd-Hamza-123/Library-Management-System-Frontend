import { z } from 'zod'

export const name = z
    .string()
    .trim()
    .max(100, "Name is too long. Please enter a shorter name.")

export const father_name = z
    .string()
    .trim()
    .max(100, "Father name is too long. Please enter a shorter name.")

export const seat = z
    .string()
    .trim()
    .max(20, "Seat is too long. Please enter a shorter name.")

export const shift = z
    .enum(["morning", "evening", "both"])

export const joining_date = z
    .string()
    .trim()
    .transform((str) => new Date(str))

export const is_hidden = z
    .boolean()

export const libraryStudentSchema = z.object({
    name,
    father_name,
    seat,
    shift,
    joining_date,
    is_hidden
})

export type LibraryStudentSchema = z.infer<typeof libraryStudentSchema>