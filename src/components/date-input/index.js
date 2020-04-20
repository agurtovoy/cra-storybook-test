import React, { useRef, useEffect } from 'react';

import { css } from 'styled-components/macro';

const styles = {
    root: css`
        position: relative;
        background-color: #fff;
    `,

    label: css`
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #333333;
        font-size: 16px;
        line-height: 17px;
        height: 100%;
        margin-left: 15px;
    `,
    
    input: css`
        font-size: 16px;
        font-family: Gotham;
        font-weight: 500;
        outline: none;
        border: 2px solid #E0E0E0;
        border-radius: 5px;
        padding: 10px 10px;
        padding-left: 150px;

        &::-webkit-inner-spin-button,
        &::-webkit-calendar-picker-indicator,
        &::-webkit-clear-button {
            display: none;
            -webkit-appearance: none;
        }

        &::-webkit-datetime-edit-month-field,
        &::-webkit-datetime-edit-day-field,
        &::-webkit-datetime-edit-year-field,
        &::-webkit-datetime-edit-text
        {
            color: #000;
            /* color: #BDBDBD; */
        }

        &::-webkit-datetime-edit-month-field:focus,
        &::-webkit-datetime-edit-day-field:focus,
        &::-webkit-datetime-edit-year-field:focus
        {
            color: #000;
            background: #F9ECEB;
            /* color: #C03E31;
            background: transparent; */
        }

        &::-webkit-datetime-edit-text
        {
            display: inline-block;
            padding: 0 2px;
        }
    `

    
};


export default () => {
    const ref = useRef();
    useEffect(() => {
        console.log('date input:', ref);
    }, []);

    return (
        <div css={styles.root}>
            <div css={styles.label}> 
                <span>Date of Birth</span>
            </div>
            <input css={styles.input} type="date" ref={ref} />
        </div>
    );
}
