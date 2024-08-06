import React, { useState } from 'react';
import Contact from './Contact';

interface iCont{
    name:string,
    email:string
}

const Contacts = () => {
    const [contact,setContact]=useState<iCont>({}as iCont
    )
    const [list,setList]=useState<iCont[]>([])
    console.log('contact',contact)
    const handleClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        setList([...list,contact])
        setContact({
            name:'',
            email:''
        })
    }

    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    console.log('list',list)
    const handleRemove=(email:string)=>{
        const newList =list.filter((c)=>c.email !== email)
        setList(newList)
    }

    return (
        <div>
            <div>
                <form>
                    <input
                    value={contact.name}
                    onChange={onChange}
                     type="text"
                    name='name'
                    placeholder='Your name ' />
                    <input
                    value={contact.email}
                    onChange={onChange}
                     type="text"
                    name='email'
                    placeholder='your email' />
                    <button onClick={handleClick}>add to list</button>
                </form>
                <div>
                    {
                        list?.map((list)=> <Contact name={list.name} email={list.email} handleRemove={handleRemove} ></Contact>)
                    }
                </div>
            </div>

            {/* <Contact name='Mizanur ' email='mizan akandhao@gmail.com'></Contact> */}
        </div>
    );
};

export default Contacts;