import React from 'react'
import styled from 'styled-components'
import folha_1 from '../images/folha-1.svg'
import folha_2 from '../images/folha-2.svg'
export const Input = styled.input`
    height: 57px;
    background: var(--bg-input-color);
    border: none;
    border-bottom: 4px solid var(--border-input-color);
    border-radius: 2px 6px 6px 2px;
    padding-left: 10px;
    font-family: 'Poppins';
    font-size: 1rem;
    &:focus-visible{
        label{
            font-size:14px;
        }
        outline: none;
    }
`
export const Label = styled.label`
    color: var(--text-label-color);
    font-family: 'Poppins';
    transition: 0.2s ease-in;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    bottom: -15px;
    left: 5px;
    
`
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:hover{
        label{
            transition:  0.2s ease-in;
            font-weight: 400;
            font-size: 15px;
            bottom: -10px;
        }
    }
`
export const ContainerLink = styled.div`
    margin-top: 10px;

    a{
        text-decoration: none;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--text-link-color);
        border-radius: 3px;
        transition: border-bottom 0.15s ease-in-out;
    }
    a:hover{
        transition: border-bottom 0.15s ease-in-out;
        border-bottom: 2px solid;
    }
`
export const Form = styled.form`
    position: relative;
    background-color: var(--bg-form-color);
    border-radius: 10px;
    border: 3px solid var(--border-form-color);
    border-width: 2px 3px 4px 5px;
    height: 672px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    ::before{
        content: url(${folha_2});
        mix-blend-mode: darken;
        position: absolute;
        left: -51px;
        top: -78px;
    }
    ::after{
        content: url(${folha_1});
        mix-blend-mode: darken;
        position: absolute;
        right: -58px;
        bottom: -45px;
    }
`
export const Title = styled.h1`
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 68px;
    color: var(--text-title-color);
`
export const Button = styled.button`
    box-sizing: border-box;
    margin-bottom: 15%;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 40px;
    color: var(--btn-text-color);
    cursor: pointer;
    border: none;
    border-radius: 15px;
    background-color: var(--btn-color);
    padding: 2.5% 13%;
    transition: .2s ease;
    transition: box-shadow 0.1s ease-in-out;
    &:hover{
        transition: .2s ease;
        transform: scale(1.05);
    }
    &:active{
        transition: box-shadow 0.1s ease-in-out;
        box-shadow: -2px -2px 5px var(--btn-text-color), 2px 2px 5px var(--btn-text-color);
    }
`