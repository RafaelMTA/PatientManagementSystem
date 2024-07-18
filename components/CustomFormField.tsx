import React from 'react'

import 'react-phone-number-input/style.css'
import PhoneInput, {type Value } from 'react-phone-number-input'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import Image from 'next/image'
import { Control } from 'react-hook-form'
import { FormFieldType } from './form/PatientForm'
import { Input } from './ui/input'

interface CustomProps{
    control: Control<any>
    fieldType: FormFieldType
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?:string, 
    iconAlt?:string
    disabled?: boolean,
    dateFormat?:string,
    showTimeSelect?:boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field:any) => React.ReactNode
}

const RenderInput = ({field, props} : {field: any; props: CustomProps}) => {
    const { fieldType, iconSrc, iconAlt, placeholder } = props;
    switch(fieldType){
        case FormFieldType.INPUT:
           return (
            <div className="flex rounded-md border border-dark-500 bd-dark-400">
                {iconSrc && (
                        <Image 
                            src={iconSrc}
                            height={24}
                            width={24}
                            alt={iconAlt || "icon"}
                            className="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            {...field}
                            className='shad-input border-0'
                        />
                    </FormControl>
            </div>
           );
        case FormFieldType.TEXTAREA:
        case FormFieldType.CHECKBOX:
        case FormFieldType.PHONE_INPUT:
            return(
                <FormControl>
                  <PhoneInput 
                    defaultCountry='NZ'
                    placeholder={placeholder} 
                    international
                    withCountryCallingCode
                    value={field.value as Value | undefined}
                    onChange={field.onChange}
                    className="input-phone"
                  />
                </FormControl>
            );
        case FormFieldType.SELECT:
        case FormFieldType.DATE_PICKER:
        case FormFieldType.SKELETON:
    }
}

const CustomFormField = (props: CustomProps) => {
    const {control, fieldType, name, label} = props;
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex-1">
        {fieldType !== FormFieldType.CHECKBOX && label &&
        (
            <FormLabel>{label}</FormLabel>
        )}
        <RenderInput field={field} props={props} />
        <FormMessage className="shad-error" />
      </FormItem>
    )}
  />
  )
}

export default CustomFormField