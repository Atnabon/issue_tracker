"use client"

import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import React,{useState} from 'react'
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
    const [error,setError]=useState("")
  return (
    <div className='max-w-xl'>
    {error && <Callout.Root color="red" className='mb-5'>
        <Callout.Text>
            {error}
        </Callout.Text>
        </Callout.Root>}    
    <form className=' space-y-3' onSubmit={handleSubmit(async (data:FieldValues)=>{
        try{
            await axios.post('/api/issues',data)
            router.push('/issues')
        }catch(err){
            setError("An unexpected error occurred.");
        }
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
    </div>
  )
}

export default NewIssuePage