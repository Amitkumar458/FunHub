"use client"
import { TextArea } from "@/component/Common/inputbox";
import Layout from "@/hocs/Layout";
import { usePost } from "@/hooks/post";
import { Button, Container } from "@mui/material";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup';

export default function Create() {
    const [url, setUrl] = useState("");
    useEffect(() => {
        setUrl(JSON.parse(localStorage.getItem('image')));
    } , []);
    const isLoginLoading = false;
    const validate = Yup.object({
        title:Yup.string().required("Enter something")
    })

    const {handlePost , isPostLoading} = usePost();

    const handleSubmit = async (value) => {
        value.imageurl = url.url;
        const data = await handlePost(value);
        if(data.success){
            toast.success("image posted successfully");
            localStorage.removeItem('image');
            history.back();
        }
    }
    
    const handleCancel = () => {
        localStorage.removeItem('image');
        history.back();
    }

    return (
        <Layout create={"Create"}>
        <Container sx={{ width: '100%', margin: '10px', display: 'flex', flexDirection:"column" ,  justifyContent: 'center', alignItems: 'center' }}>
            {url && <Image src={url.url}
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
                <Form className="my-3">
                    <TextArea label="Whats In Your Mind" name="title" type="text" placeholder="Whats in Your mind" />
                    <Button type='submit' variant="contained" className='w-100 mb-2'>{isPostLoading ? "Loading..." : "Post"}</Button>
                    <Button type='submit' onClick={handleCancel} variant="contained" color={'error'} className='w-100'>cancel</Button>
                </Form>
            </Formik>
        </Container>
        </Layout>
    )
}