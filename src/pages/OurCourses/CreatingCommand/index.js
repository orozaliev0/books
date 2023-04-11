
import React, {useState} from 'react';
import "../../../style/CreatingCommand.scss"
import you from "../../../img/you.png"
import gold from "../../../img/mdi_gold.png"
import timer from "../../../img/fluent_time-and-weather-20-regular.png"
import pf from "../../../img/pf.png"
import rate from "../../../img/rate.png"
import AcardionTwo from "./AcardionTwo";
import '../../../App'
import {IoIosArrowDown} from "react-icons/io";
const CreatingCommand = () => {
    const [block, setBlock] = useState([1, 2, 3  ])
    return (
        <div id={"ctgCom"}          >
            <div className="container">
                <div className="ctgCom">
                    <h4 className={"cr"}>Наши курсы / Курсы по созданию команды</h4>
                    <div className="ctgCom--ourCour">
                        <div className="ctgCom--ourCour__create">
                            <h2>Создание команды</h2>
                            <h4>Как правильно строить команду и эффективно ею <br/>
                                управлять, чтобы достигать все поставленные цели.</h4>
                            <button>Получить доступ за 500,00 $</button>
                        </div>
                        <div className="ctgCom--ourCour__include">
                            <h3>В курс входит</h3>
                            <h4>43 материала</h4>
                            <h4>100% эксклюзив</h4>
                        </div>

                    </div>
                </div>
                <div className="video">
                    <iframe width="1300" height="736" src="https://www.youtube.com/embed/vBzJMmeGgao"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div className="aboutCourse">
                    <h1>О КУРСЕ</h1>
                    <h4>Как правильно строить команду и эффективно ею управлять, чтобы достигать все поставленные
                        цели.</h4>
                    <h4>И если вы хотите достичь успеха в карьере, бизнесе, своих проектах, значит, время переходить от
                        прокачивания личной
                        эффективности <span>к изучению организации и работы эффективной команды.</span></h4>
                    <h4>Курс <span>“Командообразование”</span> поможет вам освоить и внедрить методы создания и работы
                        таких команд, которые приносят результат, потому <span> что достижение успеха - это командный вид спорта.</span>
                    </h4>
                    <h4>И в работе, и в жизни выдающихся результатов достигает только тот,<span> кто умеет окружать себя выдающимися людьми.</span> Ваши
                        достижения будут настолько же выдающимися, насколько выдающейся будет ваша команда. А команда
                        будет настолько же выдающейся, насколько выдающимся будет её лидер.</h4>
                    <h4>Команда - это самая эффективная форма организации коллективного труда. <span>Не бывает команды без эффективности.</span> Если
                        то, что вы называете командой, неэффективна, то скорее всего, это не команда, а группа людей,
                        которым чего-то не хватает для того, чтобы стать командой. Сама природа создания и
                        функционирования команды, подразумевает ее эффективность.</h4>
                </div>
                <div className="whoWant">
                    <div className="whoWant--thisCourse">
                        <div className="whoWant--thisCourse__ver"></div>
                        <h1>Этот курс будет особо актуален для тех, кто хочет:</h1>
                    </div>
                    <ul className={"block"}>
                        <li>освоить навык создания эффективных команд</li>
                        <li>освоить принципы построения эффективных взаимоотношений в любой команде или группе.</li>
                        <li>сделать работу с командой плодотворной и легкой</li>
                        <li>значительно повысить эффективность своего бизнеса/проекта/отдела и улучшить <br/>
                            взаимоотношения в коллективе
                        </li>
                        <li>освоить специальные способы и приемы чтобы проявить свои лидерские качества</li>
                        <li>получать стабильный качественный результат от работы с командой</li>
                        <li>получать стабильный качественный результат от работы с командой</li>
                        <li>оценить состояние дел в своем потенциальном или уже существующем бизнесе или проекте <br/>
                            более конструктивно и прагматично
                        </li>

                        Тимур, [10.04.2023 12:36]
                        Тимур, [10.04.2023 12:18]
                        <li>значительно сократить количество ошибок в работе с командой.</li>
                    </ul>
                </div>
                <div className="review">
                    <div className="review--thisCourse">
                        <div className="review--thisCourse__ver"></div>
                        <h1>Этот курс будет особо актуален для тех, кто хочет:</h1>
                    </div>
                    <ul className={"block"}>
                        <li>Что такое команда, какие бывают виды команд, для чего и как они создаются, что
                            объединяет <br/>
                            людей и держит в команде.
                        </li>
                        <li><span> Лидерство</span> - это врожденное качество или его можно приобрести?</li>
                        <li>Какие есть методы повышения эффективности команды.</li>
                        <li>Почему именно работа в команде в разы увеличивает результат.</li>
                        <li>Как подбирать правильных людей в команду</li>
                        <li>Как их обучать и продвигать по карьерной лестнице.</li>
                        <li>Почему люди порой не хотят меняться и причины невыполнения подчиненными ваших <br/>
                            поручений.
                        </li>
                        <li>Как правильно и своевременно увольнять подчиненных</li>
                    </ul>
                </div>
                <div className="registration">
                    <div className="registration--thisCourse">
                        <div className="registration--thisCourse__ver"></div>
                        <h1>Регистрируйтесь на курс, стройте эффективные команды и <br/> пусть удача сопутствует вам на
                            этом пути!</h1>
                    </div>
                    <ul>
                        <li>* - материалы включают уроки и задания. И в конце чтобы получить сертификат вам
                            потребуется <br/>
                            список заданий которые вы выполнили и тест с коуч-тренером который вы пройдете в зуме
                            для <br/>
                            получения сертификата. Получить к ним доступ можно только при обучении с коуч-тренером.
                        </li>
                    </ul>


                </div>
                <div className="aboutAccordionApps">
                    <div style={{paddingBottom:'10px'}} className="AccordionApp">
                        <AcardionTwo mode={1} text={"Введение"}/>
                    </div>
                    <div style={{paddingBottom:'10px'}}>
                        <AcardionTwo mode={2} text={"Команда"}/>
                    </div>
                    <div style={{paddingBottom:'10px'}}>
                        <AcardionTwo mode={3} text={'Лидер'}/>
                    </div>
                    <div style={{paddingBottom:'10px'}}>
                        <AcardionTwo mode={4} text={'Построение команды'}/>
                    </div>
                    <div>
                        <AcardionTwo mode={5} text={'Динамика команды'}/>
                    </div>
                </div>

                <div className="material">
                    <div className="material--mat">
                        <img src={you} alt=""/>
                        <h3>43 материала</h3>
                        <h4>Только полезная информация, <br/>
                            никакой воды. Применяйте <br/>
                            эти знания первыми!</h4>
                    </div>
                    <div className="material--ex">
                        <img src={gold} alt=""/>
                        <h3>100% эксклюзив</h3>
                        <h4>Курс записан эксклюзивно <br/>
                            для нашей платформы.</h4>
                    </div>
                    <div className="material--anyTime ">
                        <img src={timer} alt=""/>
                        <h3>В любое время, в любом месте</h3>
                        <h4>Занимайтесь как вам удобно и <br/>
                            где угодно, на своем <br/>
                            мобильном или компьютере.</h4>
                    </div>
                </div>
                <div className="youLearn">
                    <div className="title">
                        <h1>НА КУРСЕ ВЫ НАУЧИТЕСЬ:</h1>
                    </div>
                    <ul>
                        <li>Анализировать и устранять типичные ошибки руководителей в управлении <br/> командой</li>
                        <li>Внедрять специальные приемы работы с людьми и командой</li>
                        <li>Создавать команду и эффективно ею управлять в любом проекте</li>
                        <li>Правильно прогнозировать и масштабировать результат работы команды</li>
                        <li>Правильно подходить к вопросам увольнения и продвижения по карьерной <br/> лестнице</li>
                    </ul>
                </div>
                <div className="speaker">
                    <div className="speaker--name">
                        <h4>Спикер</h4>
                        <h2>Muslim Bolot</h2>
                        <h4>Милиардер, Филиантроп, Гений, Бизнес мен</h4>
                        <div className="speaker--name__was">
                            <h4>Был обычным школьником, но изменился.</h4>
                            <h4>Молодой гений не признанный обществом.</h4>
                            <h4>Страрательный парень</h4>
                        </div>
                    </div>
                    <div className="speaker--photo">
                        <h4>photo</h4>
                    </div>
                </div>
                <div className="test">
                    <div className="test--reviews">
                        <h1>Отзывы</h1>
                    </div>
                    <div className="test--blocks">
                        {
                            block.map(el => (
                                <div className={"test--blocks__revs"}>
                                    <div className={"test--blocks__revs--profile"}>
                                        <div className="test--blocks__revs--profile__photo">
                                            <img src={pf} alt=""/>
                                        </div>
                                        <div className="test--blocks__revs--profile__names">
                                            <h2>Muslim Bolot</h2>
                                            <p>09.09.22</p>
                                            <img src={rate} alt=""/>
                                        </div>
                                    </div>
                                    <div className={"test--blocks__revs--text"}>
                                        <h4>Oрганизованность сайта направление и навигация по материалам. А так же
                                            актуальность материалов</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreatingCommand;