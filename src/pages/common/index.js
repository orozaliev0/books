import React, {useState} from 'react';
import "./common.scss"
import {BsFillPersonFill} from "react-icons/bs";
import {FaCalendarAlt, FaCcMastercard, FaCcVisa, FaMoneyCheck} from "react-icons/fa";
import {GrCertificate, GrHistory} from "react-icons/gr";
import {IoIosArrowDown} from "react-icons/io";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {RxHamburgerMenu} from "react-icons/rx";


const Common = () => {
    const [selectedTab, setSelectedTab] = useState(0);
const [imodal,setimodal] = useState(false)
    const iclick = () => {
    setimodal(!imodal)
    }
    const handleTabChange = (index) => {
        setSelectedTab(index);
    };
    const [openPW, closePW] = useState(false)
    const PWClicker = () => {
        closePW(!openPW)
    }
    const [openPWtwo, closePWtwo] = useState(false)
    const PWClickertwo = () => {
        closePWtwo(!openPWtwo)
    }
    const [openPWthree, closePWthree] = useState(false)
    const PWClickerthree = () => {
        closePWthree(!openPWthree)
    }
    const [isOpen, setIsOpen] = useState(false)
    const handleModalClick = () => {
        setIsOpen(!isOpen)
    }
    const iStyle = {
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease-in-out',
    };


    const [isOpens, setIsOpens] = useState(false)
    const VisaMasters = () => {
        setIsOpens(!isOpens)
        setIsOpentwo(false)
    }
    const [isOpensTwo, setIsOpentwo] = useState(false)
    const twoHandle = () => {
        setIsOpentwo(!isOpensTwo)
        setIsOpens(false)
    }
    const [cardExpiry, setCardExpiry] = useState("");

    const handleCardExpiryChange = (event) => {
        const inputValue = event.target.value;
        const maxLength = 5;
        if (!inputValue.includes("/")) {
            const formattedValue = inputValue
                .replace(/\//g, "")
                .replace(/(\d{2})/g, "$1/");

            if (inputValue.length <= maxLength) {
                setCardExpiry(formattedValue);
            }
        } else {
            setCardExpiry(inputValue);
        }
    };


    const [cvv, setcvv] = useState('')

    const cvvClick = (event) => {
        const inputCVVvalue = event.target.value;
        const maxLength = 3;
        if (inputCVVvalue.length <= maxLength) {
            setcvv(inputCVVvalue)
        }
    }


    return (
        <div>
            <h1>7f8gu9hijop[kpl[]</h1>
            <div id='tabs'>
                <div className="container">
                    <div className="tabs">
                        <div className="tabs--left">
                            <input
                                type="radio"
                                name="tab"
                                id="tab1"
                                checked={selectedTab === 0}
                                onChange={() => handleTabChange(0)}
                            />
                            <label htmlFor="tab1" className={selectedTab === 0 ? 'active' : ''}>
                                <div><BsFillPersonFill/></div>
                                <div> Общие</div>
                            </label>
                            <input
                                type="radio"
                                name="tab"
                                id="tab2"
                                checked={selectedTab === 1}
                                onChange={() => handleTabChange(1)}
                            />
                            <label htmlFor="tab2" className={selectedTab === 1 ? 'active' : ''}>
                                <div><FaMoneyCheck/></div>
                                <div>Оплата</div>
                            </label>
                            <input
                                type="radio"
                                name="tab"
                                id="tab3"
                                checked={selectedTab === 2}
                                onChange={() => handleTabChange(2)}
                            />
                            <label htmlFor="tab3" className={selectedTab === 2 ? 'active' : ''}>
                                <div>
                                </div>
                                <FaCalendarAlt/>
                                <div>Операции</div>
                            </label>
                            <input
                                type="radio"
                                name="tab"
                                id="tab4"
                                checked={selectedTab === 3}
                                onChange={() => handleTabChange(3)}
                            />
                            <label htmlFor="tab4" className={selectedTab === 3 ? 'active' : ''}>
                                <div>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="10" height="25" fill="white"/>
                                        <rect x="14" width="10" height="25" fill="white" fill-opacity="0.6"/>
                                    </svg>

                                </div>
                                <div>Пакет</div>
                            </label>
                            <input
                                type="radio"
                                name="tab"
                                id="tab5"
                                checked={selectedTab === 4}
                                onChange={() => handleTabChange(4)}
                            />
                            <label htmlFor="tab5" className={selectedTab === 4 ? 'active' : ''}>
                                <div><FaMoneyCheck/></div>
                                <div>Безопасность</div>

                            </label>
                            <input
                                type="radio"
                                name="tab"
                                id="tab6"
                                checked={selectedTab === 5}
                                onChange={() => handleTabChange(5)}
                            />
                            <label htmlFor="tab6" className={selectedTab === 5 ? 'active' : ''}>
                                <div>
                                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22 13.5L23.912 17.203L28 17.797L25 20.5L25.771 24.5L22 22.25L18.229 24.5L19 20.5L16 17.797L20.2 17.203L22 13.5ZM4 12.5H10V14.5H4V12.5ZM4 8.5H14V10.5H4V8.5ZM4 4.5H14V6.5H4V4.5Z"
                                            fill="white"/>
                                        <path
                                            d="M14 22.5H2V2.5H26V12.5H28V2.5C28 1.96957 27.7893 1.46086 27.4142 1.08579C27.0391 0.710714 26.5304 0.5 26 0.5H2C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V22.5C0 23.0304 0.210714 23.5391 0.585786 23.9142C0.960859 24.2893 1.46957 24.5 2 24.5H14V22.5Z"
                                            fill="white"/>
                                    </svg>
                                </div>
                                <div>Сертефикаты</div>
                            </label>
                            <input
                                type="radio"
                                name="tab"
                                id="tab7"
                                checked={selectedTab === 6}
                                onChange={() => handleTabChange(6)}
                            />
                            <label htmlFor="tab7" className={selectedTab === 6 ? 'active' : ''}>
                                <div>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.6653 5.83024H11.3388C11.2175 5.83024 11.1182 5.9307 11.1182 6.05349V13.7363C11.1182 13.8088 11.1513 13.8758 11.2092 13.9177L15.7679 17.286C15.8672 17.3586 16.005 17.3391 16.0768 17.2386L16.8655 16.1502C16.9399 16.047 16.9179 15.9074 16.8186 15.8377L12.886 12.9605V6.05349C12.886 5.9307 12.7867 5.83024 12.6653 5.83024ZM18.727 7.92884L23.0513 8.99768C23.1892 9.03117 23.3243 8.92512 23.3243 8.78279L23.3464 4.27582C23.3464 4.08884 23.134 3.98279 22.9906 4.1L18.6443 7.53535C18.6114 7.56107 18.5864 7.59564 18.5721 7.6351C18.5578 7.67455 18.5548 7.71729 18.5635 7.7584C18.5721 7.7995 18.5921 7.83731 18.621 7.86746C18.6499 7.89761 18.6867 7.91889 18.727 7.92884ZM23.3519 16.3316L21.7882 15.7874C21.7337 15.7685 21.674 15.772 21.6219 15.797C21.5699 15.822 21.5296 15.8667 21.5096 15.9214C21.4572 16.0637 21.4021 16.2033 21.3442 16.3428C20.8533 17.5177 20.15 18.5753 19.251 19.4823C18.3619 20.3848 17.3083 21.1041 16.1485 21.6005C14.9469 22.1145 13.6554 22.3784 12.3509 22.3763C11.0327 22.3763 9.75584 22.1167 8.55343 21.6005C7.3936 21.1041 6.33996 20.3848 5.45089 19.4823C4.5546 18.5753 3.85136 17.5177 3.35771 16.3428C2.85252 15.1263 2.5937 13.8196 2.59655 12.5C2.59655 11.166 2.85303 9.87117 3.36322 8.65442C3.85412 7.47954 4.55736 6.42186 5.45641 5.51489C6.34547 4.61243 7.39912 3.89309 8.55895 3.39675C9.75584 2.88047 11.0355 2.62093 12.3537 2.62093C13.6719 2.62093 14.9488 2.88047 16.1512 3.39675C17.311 3.89309 18.3647 4.61243 19.2538 5.51489C19.5351 5.80233 19.7998 6.10093 20.0425 6.41628L21.6917 5.11024C19.5213 2.30279 16.1429 0.497213 12.3482 0.500003C5.74046 0.502794 0.434425 5.93349 0.500613 12.6228C0.5668 19.1949 5.84802 24.5 12.3537 24.5C17.4694 24.5 21.8268 21.2181 23.487 16.6219C23.5284 16.5047 23.4677 16.3735 23.3519 16.3316Z"
                                            fill="white"/>
                                    </svg>
                                </div>
                                <div> История</div>
                            </label>

                        </div>
                        <div className="tabs--right">
                            {selectedTab === 0 && (
                                <div className="right-itemOne">
                                    <h1>Общие </h1>
                                    <p>Управляйте данными учетной записи, которые вы предоставили Self Developing
                                        school, включая ваше имя, контактные данные и прочую информацию</p>
                                    <h2>Личные данные</h2>
                                    <div className="right-itemOne__all">
                                        <div className="right-itemOne__all--fio">
                                            <h2>ФИО</h2>
                                            <input type="text" placeholder='Muslim Bolot Joodarovich'/>

                                            <h3>Номер телефона</h3>
                                            <input type="text" placeholder="+996 770 55 74 47"/>

                                        </div>
                                        <div className="right-itemOne__all--muslim">
                                            <h2>Електронная почта</h2>
                                            <input type="text" placeholder="MuslimBolot797@gmail.com"/>
                                        </div>
                                    </div>
                                    <div className="right-itemOne__face">
                                        <div className="pop">
                                            <button>Сбросить изменения</button>
                                        </div>
                                        <div className="lop">
                                            <button>Сохранить изменение</button>
                                        </div>
                                    </div>


                                </div>
                            )}
                            {selectedTab === 1 && (
                                <div className="right-itemTwo">
                                    <div>
                                        <h1 className="right-itemTwo-h1">Оплата</h1>
                                        <p className="right-itemTwo-p">Здесь вы можете добавить или изменить реквизиты
                                            для оплаты уровня участия.</p>
                                    </div>
                                    <div>
                                        <div className="flex flex-col gap-2">
                                            <h1 className="right-itemTwo-h1TWO">Ваши способы оплаты</h1>
                                            <p className="right-itemTwo-pTWO"> Выберите способ оплаты или измените
                                                его</p>
                                        </div>
                                        <div>
                                            <p className="rr flex items-center pt-3 mb-3"
                                               onClick={handleModalClick}>Добавить способ оплаты <IoIosArrowDown
                                                className="icon" style={iStyle}/></p>
                                        </div>
                                        {
                                            isOpen && (
                                                <div>
                                                    <div className="isOpenVISA">
                                                        <div>
                                                            <input onClick={VisaMasters} className="isOpenVISACheck"
                                                                   type="checkbox"/>
                                                        </div>
                                                        <div>
                                                            <FaCcVisa style={{fontSize: "25px", color: "white"}}/>
                                                        </div>
                                                        <div className="flvisa">
                                                            <div>
                                                                <h1 className="isOpenVISATEXT">Visa</h1>
                                                            </div>
                                                            <div>
                                                                {
                                                                    isOpens && (
                                                                        <div className="isOpenVISA-group">
                                                                            <div className="isOpenVISA-group-one">
                                                                                <p>Номер карты</p>
                                                                                    <input type="number"
                                                                                       placeholder="1983 3892 8398 8281"/>
                                                                            </div>
                                                                            <div className="flex justify-between">
                                                                                <div className="isOpenVISA-group-two">
                                                                                    <p>Срок</p>
                                                                                    <input
                                                                                        type="text"
                                                                                        value={cardExpiry}
                                                                                        maxLength={5}
                                                                                        onChange={handleCardExpiryChange}
                                                                                        placeholder="12/25"
                                                                                    />
                                                                                </div>
                                                                                <div className="isOpenVISA-group-three">
                                                                                    <p>CVV</p>
                                                                                    <input type="text"
                                                                                           onChange={cvvClick}
                                                                                           value={cvv}
                                                                                           placeholder={'cvv'}
                                                                                    />
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className="isOpenMaster mt-3">
                                                        <div>
                                                            <input onClick={twoHandle} className="isOpenVISACheck"
                                                                   type="checkbox"/>
                                                        </div>
                                                        <div>
                                                            <FaCcMastercard style={{fontSize: "25px", color: "white"}}/>
                                                        </div>
                                                        <div className="flvisa">
                                                            <div>
                                                                <h1 className="isOpenVISATEXT">Master Card</h1>
                                                            </div>
                                                            {
                                                                isOpensTwo && (
                                                                    <div>
                                                                        <div className="isOpenVISA-group-one">
                                                                            <p>Номер карты</p>
                                                                            <input type="number"
                                                                                   placeholder="1983 3892 8398 8281"/>
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <div className="isOpenVISA-group-two">
                                                                                <p>Срок</p>
                                                                                <input
                                                                                    type="text"
                                                                                    value={cardExpiry}
                                                                                    maxLength={5}
                                                                                    onChange={handleCardExpiryChange}
                                                                                    placeholder="12/25"
                                                                                />
                                                                            </div>
                                                                            <div className="isOpenVISA-group-three">
                                                                                <p>CVV</p>
                                                                                <input type="text"
                                                                                       onChange={cvvClick}
                                                                                       value={cvv}
                                                                                       placeholder={'cvv'}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        }
                                        <div className="btnVisa">
                                            <button>Сохранить реквизит</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedTab === 2 && (
                                <div className="right-itemThree">
                                    <h1>История покупок</h1>
                                    <p>Реквизиты и детали платежей, произведенных с вашего счета.</p>
                                    <div className="right-itemThree--bit">
                                        <div className="right-itemThree--bit__keep">
                                            <div className="">
                                                <p className="right-itemThree--bit__keep-textP">Дата</p>
                                                <p>05.09.22</p>
                                            </div>
                                            <div className="">
                                                <p className="right-itemThree--bit__keep-textP">Описание</p>
                                                <p>Пакет участия “Интенсив”</p>
                                            </div>
                                        </div>
                                        <div className="right-itemThree--bit__keep-pro">
                                            <div>
                                                <p className="right-itemThree--bit__keep-textP">Цена</p>
                                                <p>500$</p>
                                            </div>
                                            <div>
                                                <p className="right-itemThree--bit__keep-textP">Статус</p>
                                                <p>Приобретено</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )}
                            {selectedTab === 3 && (
                                <div className="right-itemThree">
                                    <h1>Уровень пакета участия</h1>
                                    <p>Пакет который вы выбрали для принятия участия в нашей школе.</p>
                                    <div className="right-itemThree--bit">
                                        <div className="right-itemThree--bit__keep">
                                            <div className="">
                                                <p className="right-itemThree--bit__keep-textP">Дата</p>
                                                <p>05.09.22</p>
                                            </div>
                                            <div className="">
                                                <p className="right-itemThree--bit__keep-textP">Описание</p>
                                                <p>Интенсив</p>
                                            </div>
                                        </div>
                                        <div className="right-itemThree--bit__keep-pro">
                                            <div style={{display: "none"}}>
                                                <p className="right-itemThree--bit__keep-textP">Цена</p>
                                                <p>500$</p>
                                            </div>
                                            <div>
                                                <p className="right-itemThree--bit__keep-textP">Статус</p>
                                                <p>Активно</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedTab === 4 && (
                                <div className="right-item-fo">
                                    <h1 className="right-item-fo-h1">Пароли и безопасность</h1>
                                    <p className="right-item-fo-p">Если вы думаете что кто то узнал ваш пароль то его
                                        можно изменить здесь.</p>
                                    <div>
                                        <div>
                                            <div className="right-item-fo-group">
                                                <div className="right-item-fo-group-right">
                                                    <div><p>Пароль</p></div>
                                                    <p>
                                                        <div>Новый пароль должен отличаться от 5 последних
                                                            использованных паролей
                                                        </div>
                                                    </p>
                                                    <div><p>В пароле должно быть как минимум 7 символов.</p></div>
                                                    <div><p>В пароле должна быть как минимум 1 цифра.</p></div>
                                                </div>
                                                <div className="right-item-fo-group-left">
                                                    <div>
                                                        <p>Текущий пароль</p>
                                                        <div className="right-item-fo-group-left-flex">
                                                            <input className="right-item-fo-group-left-flex-input"
                                                                   type={openPW ? "password" : "text"}
                                                                   placeholder="123456789"/>
                                                            <div
                                                                className="right-item-fo-group-left-flex-input-passtext"
                                                                onClick={PWClicker}>{openPW ? <AiFillEyeInvisible/> :
                                                                <AiFillEye/>}</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p>Новый пароль</p>
                                                        <div className="right-item-fo-group-left-flex">
                                                            <input className="right-item-fo-group-left-flex-input"
                                                                   type={openPWtwo ? "password" : "text"}
                                                                   placeholder="123456789"/>
                                                            <div
                                                                className="right-item-fo-group-left-flex-input-passtext"
                                                                onClick={PWClickertwo}>{openPWtwo ?
                                                                <AiFillEyeInvisible/> : <AiFillEye/>}</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p>Повторите пароль</p>
                                                        <div className="right-item-fo-group-left-flex">
                                                            <input className="right-item-fo-group-left-flex-input"
                                                                   type={openPWthree ? "password" : "text"}
                                                                   placeholder="123456789"/>
                                                            <div
                                                                className="right-item-fo-group-left-flex-input-passtext"
                                                                onClick={PWClickerthree}>{openPWthree ?
                                                                <AiFillEyeInvisible/> : <AiFillEye/>}</div>
                                                        </div>

                                                    </div>
                                                    <div className="btnVisa">
                                                        <button>Сохранить изменение</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            )}
                            {selectedTab === 5 && (
                                <div className="right-item-fife">
                                    <h1 className="right-item-fife-h1">Сертефикаты</h1>
                                    <p className="right-item-fife-p">Здесь хроняться ваши сертификаты</p>
                                    <div className="right-item-fife-group">
                                        <div onClick={iclick}><h1>OPEN!</h1></div>
                                        {
                                            imodal && (
                                                <div className="right-item-fife-group-gl">
                                                    <div>
                                                        <p className="right-item-fife-group-ptwo">Дата получения</p>
                                                        <p className="right-item-fife-group-ptwo">05.09.22</p>
                                                        <p className="right-item-fife-group-ptwo">05.09.22</p>
                                                        <p className="right-item-fife-group-ptwo">05.09.22</p>
                                                    </div>
                                                    <div className="pgroup">
                                                        <p className="right-item-fife-group-ptwo">Сертификат за:</p>
                                                        <p className="right-item-fife-group-ptwo">Прохождния курса по созданию
                                                            команды</p>
                                                        <p className="right-item-fife-group-ptwo">Прохождния курса по созданию
                                                            команды</p>
                                                        <p className="right-item-fife-group-ptwo">Прохождния курса по созданию
                                                            команды</p>
                                                    </div>
                                                    <div>
                                                        <p className="right-item-fife-group-ptwo">Статус</p>
                                                        <p className="right-item-fife-group-ptwo">Пройден</p>
                                                        <p className="right-item-fife-group-ptwo">Пройден</p>
                                                        <p className="right-item-fife-group-ptwo">Пройден</p>
                                                    </div>
                                                    <div>
                                                        <p className="right-item-fife-group-ptwo">Просмотреть</p>
                                                        <div className="flex">
                                                            <div className="flex-col flex gap-4 mt-3">
                                                                <div>
                                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M22.1424 11.4184C22.6361 12.0643 22.6361 12.9361 22.1424 13.5809C20.5872 15.6111 16.8559 19.7913 12.4997 19.7913C8.14342 19.7913 4.41217 15.6111 2.85696 13.5809C2.61673 13.2717 2.48633 12.8913 2.48633 12.4997C2.48633 12.1081 2.61673 11.7277 2.85696 11.4184C4.41217 9.38822 8.14342 5.20801 12.4997 5.20801C16.8559 5.20801 20.5872 9.38822 22.1424 11.4184V11.4184Z"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M12.5 15.625C14.2259 15.625 15.625 14.2259 15.625 12.5C15.625 10.7741 14.2259 9.375 12.5 9.375C10.7741 9.375 9.375 10.7741 9.375 12.5C9.375 14.2259 10.7741 15.625 12.5 15.625Z"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M22.1424 11.4184C22.6361 12.0643 22.6361 12.9361 22.1424 13.5809C20.5872 15.6111 16.8559 19.7913 12.4997 19.7913C8.14342 19.7913 4.41217 15.6111 2.85696 13.5809C2.61673 13.2717 2.48633 12.8913 2.48633 12.4997C2.48633 12.1081 2.61673 11.7277 2.85696 11.4184C4.41217 9.38822 8.14342 5.20801 12.4997 5.20801C16.8559 5.20801 20.5872 9.38822 22.1424 11.4184V11.4184Z"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M12.5 15.625C14.2259 15.625 15.625 14.2259 15.625 12.5C15.625 10.7741 14.2259 9.375 12.5 9.375C10.7741 9.375 9.375 10.7741 9.375 12.5C9.375 14.2259 10.7741 15.625 12.5 15.625Z"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M22.1424 11.4184C22.6361 12.0643 22.6361 12.9361 22.1424 13.5809C20.5872 15.6111 16.8559 19.7913 12.4997 19.7913C8.14342 19.7913 4.41217 15.6111 2.85696 13.5809C2.61673 13.2717 2.48633 12.8913 2.48633 12.4997C2.48633 12.1081 2.61673 11.7277 2.85696 11.4184C4.41217 9.38822 8.14342 5.20801 12.4997 5.20801C16.8559 5.20801 20.5872 9.38822 22.1424 11.4184V11.4184Z"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M12.5 15.625C14.2259 15.625 15.625 14.2259 15.625 12.5C15.625 10.7741 14.2259 9.375 12.5 9.375C10.7741 9.375 9.375 10.7741 9.375 12.5C9.375 14.2259 10.7741 15.625 12.5 15.625Z"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="flex-col flex gap-4 ml-5 mt-3">
                                                                <div>
                                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.4995 22.9169V13.5419M12.4995 22.9169L9.89536 20.8335M12.4995 22.9169L15.1037 20.8335M5.24327 9.49707C4.25808 9.74498 3.39731 10.3441 2.8227 11.1819C2.24809 12.0197 1.99919 13.0385 2.12276 14.0468C2.24633 15.0552 2.73386 15.9838 3.49376 16.658C4.25366 17.3323 5.23362 17.7058 6.24952 17.7085H7.29119"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M16.489 7.43577C16.133 6.02595 15.2542 4.80425 14.0308 4.01833C12.8074 3.23241 11.331 2.94108 9.90076 3.20338C8.47054 3.46569 7.19356 4.26201 6.32869 5.43092C5.46381 6.59983 5.07577 8.05387 5.2432 9.49827C5.2432 9.49827 5.40258 10.417 5.72862 10.9379"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M17.7077 17.7087C18.4431 17.7082 19.1702 17.5519 19.8409 17.2502C20.5116 16.9485 21.1108 16.5081 21.5991 15.9581C22.0873 15.4081 22.4536 14.761 22.6737 14.0592C22.8938 13.3575 22.9628 12.6171 22.8762 11.8867C22.7896 11.1564 22.5492 10.4527 22.171 9.82193C21.7928 9.19117 21.2853 8.64767 20.6819 8.22718C20.0785 7.8067 19.3929 7.51878 18.6702 7.38237C17.9475 7.24595 17.2041 7.26414 16.4889 7.43574L15.1035 7.81282"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.4995 22.9169V13.5419M12.4995 22.9169L9.89536 20.8335M12.4995 22.9169L15.1037 20.8335M5.24327 9.49707C4.25808 9.74498 3.39731 10.3441 2.8227 11.1819C2.24809 12.0197 1.99919 13.0385 2.12276 14.0468C2.24633 15.0552 2.73386 15.9838 3.49376 16.658C4.25366 17.3323 5.23362 17.7058 6.24952 17.7085H7.29119"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M16.489 7.43577C16.133 6.02595 15.2542 4.80425 14.0308 4.01833C12.8074 3.23241 11.331 2.94108 9.90076 3.20338C8.47054 3.46569 7.19356 4.26201 6.32869 5.43092C5.46381 6.59983 5.07577 8.05387 5.2432 9.49827C5.2432 9.49827 5.40258 10.417 5.72862 10.9379"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M17.7077 17.7087C18.4431 17.7082 19.1702 17.5519 19.8409 17.2502C20.5116 16.9485 21.1108 16.5081 21.5991 15.9581C22.0873 15.4081 22.4536 14.761 22.6737 14.0592C22.8938 13.3575 22.9628 12.6171 22.8762 11.8867C22.7896 11.1564 22.5492 10.4527 22.171 9.82193C21.7928 9.19117 21.2853 8.64767 20.6819 8.22718C20.0785 7.8067 19.3929 7.51878 18.6702 7.38237C17.9475 7.24595 17.2041 7.26414 16.4889 7.43574L15.1035 7.81282"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.4995 22.9169V13.5419M12.4995 22.9169L9.89536 20.8335M12.4995 22.9169L15.1037 20.8335M5.24327 9.49707C4.25808 9.74498 3.39731 10.3441 2.8227 11.1819C2.24809 12.0197 1.99919 13.0385 2.12276 14.0468C2.24633 15.0552 2.73386 15.9838 3.49376 16.658C4.25366 17.3323 5.23362 17.7058 6.24952 17.7085H7.29119"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M16.489 7.43577C16.133 6.02595 15.2542 4.80425 14.0308 4.01833C12.8074 3.23241 11.331 2.94108 9.90076 3.20338C8.47054 3.46569 7.19356 4.26201 6.32869 5.43092C5.46381 6.59983 5.07577 8.05387 5.2432 9.49827C5.2432 9.49827 5.40258 10.417 5.72862 10.9379"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M17.7077 17.7087C18.4431 17.7082 19.1702 17.5519 19.8409 17.2502C20.5116 16.9485 21.1108 16.5081 21.5991 15.9581C22.0873 15.4081 22.4536 14.761 22.6737 14.0592C22.8938 13.3575 22.9628 12.6171 22.8762 11.8867C22.7896 11.1564 22.5492 10.4527 22.171 9.82193C21.7928 9.19117 21.2853 8.64767 20.6819 8.22718C20.0785 7.8067 19.3929 7.51878 18.6702 7.38237C17.9475 7.24595 17.2041 7.26414 16.4889 7.43574L15.1035 7.81282"
                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            )}
                            {selectedTab === 6 && (
                                <div className="right-item-fife">
                                    <h1 className="right-item-fife-h1">История просмотра </h1>
                                    <p className="right-item-fife-p">История просмотра курсов,статей и мастер
                                        классов</p>
                                    <div className="right-item-fife-group">
                                        <div>
                                            <p className="right-item-fife-group-ptwo">Сегодня</p>
                                            <p className="right-item-fife-group-ptwo">05.09.22 <i
                                                style={{opacity: "0"}}>''''''''''''''''''''</i> Прохождния курса по
                                                созданию команды</p>
                                            <p className="right-item-fife-group-ptwo">05.09.22 <i
                                                style={{opacity: "0"}}>''''''''''''''''''''</i> Прохождния курса по
                                                созданию команды</p>
                                            <p className="right-item-fife-group-ptwo">05.09.22 <i
                                                style={{opacity: "0"}}>''''''''''''''''''''</i> Прохождния курса по
                                                созданию команды</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Common;
