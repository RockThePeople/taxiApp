import React, { useEffect, useState } from "react";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import Basic_Components_top from '../Basic_Component_top';
import Basic_Components_bottom from '../Basic_Component_bottom';

export default function LoginPage() {

    const [phoneNum, setPhoneNum] = useState('');
    const [authNum, setAuthNum] = useState('');
    const [sendButtonState, setSendButtonState] = useState(true);
    const [authButtonState, setAuthButtonState] = useState(true);
    const [sendBtnText, setSendBtnText] = useState("인증번호 발송하기");

    const movePage = useNavigate();
    function goDepartureLocation() {
        movePage(`/departureLocation`);
    };

    useEffect(() => {
        if (phoneNum.length === 11) {
            setSendButtonState(false)
        }
        else {
            setSendButtonState(true)
        }
    }, [phoneNum]);

    useEffect(() => {
        if (authNum.length === 6) {
            setAuthButtonState(false)
        }
        else {
            setAuthButtonState(true)
        }
    }, [authNum]);

    const handleClick = (e) => {
        e.preventDefault();
        setSendBtnText("인증번호 다시 발송하기");
    }

    return (
        <div className="App" style={{ height: '900px', width: '500px' }}>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                    </div>
                    <div className="div_head">
                        <div className="login_head">
                            <input className="input"
                                value={phoneNum}
                                placeholder="전화번호 11자리를 입력하세요"
                                onChange={(e) => {
                                    setPhoneNum(e.target.value)
                                }}
                            />
                            {sendButtonState ? null : <button className="sendBtn"
                                disabled={sendButtonState}
                                onClick={handleClick}> {sendBtnText}
                            </button>}
                            {
                                <input className="input"
                                    value={authNum}
                                    placeholder="인증번호 6자리를 입력하세요"
                                    onChange={(e) => {
                                        setAuthNum(e.target.value)
                                    }}
                                ></input>}
                            {(!authButtonState && !sendButtonState) ? <button className="sendBtn"
                                disabled={authButtonState} onClick={goDepartureLocation}> {'인증하기'}
                            </button> : null}
                        </div>
                    </div>
                    <div className="basic_Components_bottom">
                        <Basic_Components_bottom />
                    </div>
                </div>
            </div>
        </div>
    );
}