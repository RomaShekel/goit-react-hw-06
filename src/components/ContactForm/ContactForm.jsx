import { nanoid } from 'nanoid'
import { useId } from 'react';
import { Form, Formik, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css"


const initialValues = {
    id: nanoid(),
    name: "",
    number: "",
}
const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required!"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required!"),
});


export default function ContactForm ({onAdd}) {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        onAdd(values);
        actions.resetForm();
    }
    return(
        <Formik
         initialValues={initialValues}
         onSubmit={handleSubmit}
         validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <div className={css.inputDiv}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name='name' id={nameFieldId}/>
                    <ErrorMessage name="name" as="span" className={css.error} />
                </div>

                <div className={css.inputDiv}>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="number" name='number' id={numberFieldId}/>
                    <ErrorMessage className={css.error} name="number" as="span" />
                </div>

                <button type='submit' className={css.button}>Add contact</button>
            </Form>
        </Formik>

)}