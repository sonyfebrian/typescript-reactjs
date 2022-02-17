import styled from 'styled-components';
import Color from 'color';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
pointer-events: auto;
cursor: pointer;
background: #e7e7e7;
border: none;
padding: 1.5rem 3rem;
margin: 0;
font-family: inherit;
font-size: inherit;
position: relative;
display: inline-block;
`;
export const Modal = styled.div`
    display: block;
    position: fixed;
    background: ${Color('#ffffff').alpha(0.7).toString()};
    top: ${(props) => (props.show ? '0' : '100%')};
    opacity: ${(props) => (props.show ? '1' : '0')};
    transition: opacity 250ms ease-in-out 0s;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    > div {
        background: #ffffff;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.15);
        display: block;
        width: 640px;
        height: auto;
        margin: 100px auto;
        position: relative;
        border-radius: 6px;
        h1 {
            display: block;
            border-bottom: 1px solid #dddddd;
            font-size: 21px;
            font-weight: normal;
            height: 60px;
            line-height: 60px;
            margin: 0;
            padding: 0 20px;
        }
        > button {
            position: absolute;
            right: 15px;
            top: 10px;
            cursor: pointer;
            background: #10c694;
            height: 40px;
            color: white;
            border: none;
            font-size: 21px;
            padding: 0 20px;
            border-radius: 20px;
            text-transform: uppercase;
            transition: all 250ms ease-in-out 0s;
            &:hover {
                background:     ${Color('#10c694').darken(0.2).toString()};
            }
        }
        input {
            display: block;
            background: #efefef;
            border: none;
            border-radius: 4px;
            height: 50px;
            width: calc(100% - 32px);
            padding: 0 16px;
            margin: 20px auto;
        }
        section {
            border-top: 1px solid #dddddd;
            > div {
                padding: 20px;
                svg {
                    display: block;
                    margin: 0 auto;
                }
            }
            article {
                max-height: 132px;
                padding: 10px 20px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #dddddd;
                &:last-child {
                    border-bottom: none;
                }
                img {
                    height: 100px;
                }
 
                h3 {
                    font-size: 14px;
                    font-weight: normal;
                    padding: 10px 20px;
                }
 
                span {
                    font-size: 12px;
                    text-align: right;
                    border: 1px solid #ddd;
                    line-height: 21px;
                    height: 21px;
                    padding: 4px 8px;
                    border-radius: 3px;
                    color: #666;
                    margin-right: 10px;
                }
 
                button {
                    cursor: pointer;
                    background: #10c694;
                    height: 40px;
                    color: white;
                    border: none;
                    font-size: 21px;
                    padding: 0 20px;
                    border-radius: 20px;
                    text-transform: uppercase;
                    transition: all 250ms ease-in-out 0s;
                    &:hover {
                        background: ${Color('#10c694').darken(0.2).toString()};
                    }
                }
            }
        }
    }
`;

// Define what main theme will look like
// eslint-disable-next-line no-unused-vars
const theme = {
  main: 'mediumseagreen',
};
