"use client"

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import {useForm, Controller,FieldValues} from "react-hook-form";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import axios from 'axios'
import { useRouter } from 'next/navigation';

interface IssueForm{
    title:string;
    description:string;
}


const NewIssuePage = () => {
    const {register,handleSubmit,control}=useForm<IssueForm>();
    const router=useRouter();
  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data:FieldValues)=>{
        await axios.post('/api/issues',data)
        router.push('/issues')
    })}>
        <TextField.Root>
            <TextField.Input placeholder="Title" {...register("title")}/>
        </TextField.Root>
        <Controller
            name="description"
            control={control}
            render={({field})=>  <SimpleMDE placeholder="Description" {...field}/>}
        />
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage