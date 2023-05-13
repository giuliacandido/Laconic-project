import { FormCamp, InputField, DefaultInput, DefaultLabel, FormTitle, 
FormP, FormButton, MessageArea, ErrorMessage } from "../styles/Form.style"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import {object, string, number} from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = object({
    fullName: string().required("required camp"),
    email: string().email().required("please enter a valid email"),
    phone: string().matches(phoneRegExp, 'Phone number is not valid').required(),
    message: string().required("required camp"),
})


export default function Form() {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    console.log(data)
    alert('Thank you for your message, we will contact you as soon as possible to make your project come true!')
    reset();
  }

    return (
        <FormCamp onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Interested in discussing a project with us?</FormTitle>
            <FormP>Just fill out the form below or give us a call to get started</FormP>
            <InputField>
                <DefaultLabel> Full Name</DefaultLabel>
                <DefaultInput placeholder="enter your name" {...register("fullName")} />
                <ErrorMessage>{errors?.fullName?.message}</ErrorMessage>
            </InputField>
            <InputField>
                <DefaultLabel>Email</DefaultLabel>
                <DefaultInput placeholder="enter your email" {...register("email")} />
                <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            </InputField>
            <InputField>
                <DefaultLabel>Phone</DefaultLabel>
                <DefaultInput placeholder="enter your phone" {...register("phone")} />
                <ErrorMessage>{errors?.phone?.message}</ErrorMessage>
            </InputField>
            <InputField>
                <DefaultLabel>Message</DefaultLabel>
                <MessageArea rows={6} placeholder="tell us more about your project" {...register("message")} />
                <ErrorMessage>{errors?.message?.message}</ErrorMessage>
            </InputField>
            <FormButton type="submit">Send</FormButton>
        </FormCamp>
    )
}