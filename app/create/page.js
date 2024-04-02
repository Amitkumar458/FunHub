"use client"
import TextField from "@/component/Common/inputbox";
import { Button, Container } from "@mui/material";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup';

export default function Create() {
    const [url, setUrl] = useState("");
    useEffect(() => {
        setUrl(localStorage.getItem('image'));
    }, [url]);
    const isLoginLoading = false;
    const validate = Yup.object({
        title:Yup.string().required("Enter something")
    })

    const handleSubmit = (value) => {
        value.image = url;
        toast.success("image posted successfully");
        window.location.replace('/');
    }

    return (
        <Container sx={{ width: '100%', margin: '10px', display: 'flex', flexDirection:"column" ,  justifyContent: 'center', alignItems: 'center' }}>
            {url && <Image src={url}
                quality={100}
                priority={true}
                height={300}
                width={400}
                alt="Picture of the author" />}

            <Formik
                initialValues={{ title: "" }}
                validationSchema={validate}
                onSubmit={handleSubmit}
            >
                <Form>
                    <TextField label="title" name="title" type="text" placeholder="Whats in Your mind" />
                    <Button type='submit' variant="contained" className='w-100'>{isLoginLoading ? "Loading..." : "Post"}</Button>
                </Form>
            </Formik>
        </Container>
    )
}