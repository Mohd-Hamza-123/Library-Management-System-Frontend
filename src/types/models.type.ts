import { Types } from "mongoose"

export type Student = {
    readonly _id: string;
    name: string;
    father_name: string;
    seat: string;
    shift: string;
    joining_date: Date;
    is_hidden: boolean;
}

type AggregateStudent = {
    _id: Types.ObjectId,
    name: string;
    father_name: string;
    seat: string;
    shift: string;
    joining_date: Date;
    is_hidden: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type StudentBlock = {
    block: string;
    students: AggregateStudent[];
}