import * as Yup from "yup";

export const ExpenseSchema = Yup.object().shape({
    title: Yup.string().required("Required").min(2, "Too Short").max(50, "Too Long"),
    amount: Yup.number().required("Required").min(-99999999, "Too Short").max(10000000, "Too Long")
})