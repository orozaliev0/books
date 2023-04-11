import React from 'react';
import "../../../style/Last.scss"
import books1 from '../../../img/books_follow3.png'
import books2 from '../../../img/books_follow4.png'

const Last = () => {




    return (
            <div className='container'>
                <div className="last">
                    <img src={books1} alt="" className='last_img1'/>
                    <img src={books2} alt="" className='last_img2'/>
                    <div className="last__title">
                        <h1>Оставить отзыв</h1>
                        <p>Если вам понравилась наша <br/>платфрома, вы можете <br/>оставить отзыв, а также <br/>увидеть остальные отзывы в <br/>нашем телеграм канале.</p>
                    </div>
                    <div className="last__block">
                        <h3 className='last__block__title'>ФИО:</h3>
                        <input type="text"  className='last__block-inp' name='name' placeholder='Muslim Bolot Joodarovich'/>
                        <h3>Кем вы работаете? :</h3>
                        <input type="text" className='last__block-inp' name='' placeholder='Частный предпрениматель'/>
                        <h3>Отзыв:</h3>
                        <input type="text" className='last__block--inp'  placeholder='Мне очень понравилась эта школа...' />
                        <button>Оставить отзыв</button>
                    </div>
                </div>
            </div>

);
};

export default Last;