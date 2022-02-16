import styled from 'styled-components';
import Color from 'color';

export const StyledSubHeaderParagraph = styled.p`
  font-size: 10px;
  color: rgba(113, 128, 150);
`;

export const Header = styled.header`
    background: ${props => props.background ? `url(${props.background}) center center` : 'lightgrey'};
    background-size: cover;
    width: 100%;
    height: 300px;
    position: relative;
> div {
        backdrop-filter: blur(30px);
        display: flex;
        width: 100%;
        height: 300px;
        justify-content: center;
        align-items: center;
        a {
            display: block;
            width: 250px;
            height: 130px;
            text-decoration: none;
            img {
                display: block;
                margin: 0 auto 10px auto;
                width: 100px;
                height: 100px;
                border-radius: 50px;
                transition: all 250ms ease-in-out 0s;
            }
            h1 {
                display: block;
                height: 20px;
                line-height: 20px;
                color: white;
                font-weight: bold;
                font-size: 18px;
                text-align: center;
            }
            p {
                display: block;
                font-size: 12px;
                text-align: center;
                color: lightgray;
            }
            &:hover {
                img {
                    transform: scale(1.05);
                }
            }
        }
    }
    button {
        position: absolute;
        cursor: pointer;
        bottom: -20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: #10c694;
        height: 40px;
        color: white;
        border: none;
        font-size: 12px;
        padding: 0 60px;
        border-radius: 20px;
        text-transform: uppercase;
        transition: all 250ms ease-in-out 0s;
        &:hover {
            background: ${Color('#10c694').darken(0.2).toString()};
        }
    }
`;

export const Item = styled.article`
background: white;
box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.15);
height: 300px;
padding: 40px 20px 20px 20px;
position: relative;
transition: all 250ms ease-in-out 0s;
dl {
    padding: 0;
    margin: 0;
    position: absolute;
    top: 20px;
    dt {
        background: #ddd;
        opacity: 0;
        cursor: pointer;
        height: 31px;
        width: 50px;
        text-align: center;
        line-height: 24px;
        padding: 0 6px;
        border-radius: 3px;
        transition: all 250ms ease-in-out 0s;
    }
    dd {
        display: none;
        cursor: pointer;
        color: #b16060;
        background: #ffdede;
        margin: 0;
        width: 100px;
        padding: 0 12px;
        font-weight: bold;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        border-radius: 0px 3px 3px 3px;
        transition: all 250ms ease-in-out 0s;
        &:hover {
            background: #b10000;
            color: white;
        }
    }
    &:hover {
        dt {
            border-radius: 3px 3px 0px 0px;
        }
        dd {
            display: block;
        }
    }
}
&:hover {
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.3);
    transform: scale(1.01);
    dl {
        dt {
            opacity: 1;
        }
    }
}
img {
    display: block;
    border-radius: 90%;
    width: 100%;
    height: 180px;
    margin: 0 auto;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
}
span {
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: right;
    border: 1px solid #ddd;
    font-size: 14px;
    line-height: 21px;
    height: 21px;
    padding: 4px 8px;
    border-radius: 3px;
    color: #666;
}
h3 {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    max-height: 42px;
    position: absolute;
    bottom: 60px;
    left: 25px;
    right: 25px;
    overflow: hidden;
}
button {
    position: absolute;
    background-color: #4CAF50; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top:100px;
}
a {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: block;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    background: #10c694;
    height: 40px;
    color: white;
    border: none;
    font-size: 12px;
    width: calc(100% - 40px);
    border-radius: 20px;
    text-transform: uppercase;
    transition: all 250ms ease-in-out 0s;
    &:hover {
        background: ${Color('#10c694').darken(0.2).toString()};
    }
}
`;


export const Main = styled.main`
padding: 60px 0;
    display: flex;
    justify-content: center;
    > section {
        display: grid;
        flex-wrap: wrap;
        margin: 0 -15px;
        width: 960px;
        > ${Item} {
            margin: 0 15px 30px 15px;
            flex: 1 1 1;
            width: calc(33.33% - 30px - 40px);
        }

        p {
            display: block;
            text-align: center;
            margin: 0 auto;
            font-size: 14px;
            color: #999;
            span {
                display: block;
                margin-top: 10px;
                margin-bottom: 10px;
                cursor: pointer;
                text-decoration: underline;
                color: #10c694;
            }
        }
    }
`;

export const Modal = styled.div`
    display: block;
    position: fixed;
    background: ${Color('#ffffff').alpha(0.7).toString()};
    top: ${props => props.show ? '0' : '100%'};
    opacity: ${props => props.show ? '1' : '0'};
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
                > div {
                    display: flex;
                    height: 100px;
                    width: 100px;
                    justify-content: center;
                    align-items: center;
                    img {
                         max-height: 100px;
                         max-width: 100px;
                    }
                }
                h3 {
                    width: 340px;
                }
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

export const StyledCardTags = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const StyledCardTag = styled.div`
  padding-left: 7.5px;
  padding-right: 7.5px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  margin-bottom: 5px;
  margin-right: 5px;
  font-size: 12px;
  display: inline-block;
  border-radius: 9999px;
  background-color: rgba(237, 242, 247);
  color: rgba(74, 85, 104);
`;

export const StyledCard = styled.div`
  max-width: 240px;
  height: 700px;
  background: grey;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  color: rgba(74, 85, 104);
  background-color: white;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

export const StyledCardWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

export const StyledCardHeader = styled.h4`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
`;
export const StyledDescriptionList = styled.dl``;

export const StyledDescriptionWrapper = styled.div`
  display: grid;
  padding-top: 8px;
  padding-bottom: 8px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

export const StyledDescriptionListTerm = styled.dt`
  color: rgba(107, 114, 128);
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledDescriptionListDescription = styled.dd`
  grid-column: span 2 / span 2;
`;
