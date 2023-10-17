import React  from "react";
import Search_icon from './images/search.png';
import ch from './images/55faae35d7761d4536109cce66cc78ee.png';
import Phone from './images/6376103c7e7f6833cb95bc49d660a793.png';
import screen from './images/dcea67fd3109f519840646e1f4fd5a59.png';
import ios from './images/dce06983d4a7ee1028db8a6dac59b584.png';

class Home extends React.Component{
    render(){
        return <div>
        <div class="wrap_menu">
            <div class="menu">
                <div class="Brand">
                    <p class="Brand_text">
                        HOFMANN
                    </p>
                </div>
                <div class="wrap_list">
                    <ul class="list_ul1">
                        <li class="list_li">Prices</li>
                        <li class="list_li">Booking</li>
                        <li class="list_li">Blog</li>
                        <li class="list_li">Servies</li>
                    </ul>
                    <ul class="list_ul2">
                        <li class="list_li1"><img class="search_icon" src={Search_icon} alt="search"/></li>
                        <li class="list_li1">
                            <select class="select">
                                <option class="op">US</option>
                                <option class="op">EN</option>
                                <option class="op">VI</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="wrap_ct1">
            <p class="res_ui">RESPONSIVE UI KIT</p>
            <div class="ct1">
                <div class="ct_text1">
                    <div class="text1">
                        <p class="head_ct1">HOFMANN</p>
                        <br/>
                        <p class="text_in1">We're Bing It To The New level</p><br/>
                        <p class="text_in2">Every new computer that's brought home from the store has an operating system installed onto it. But what most new computer users don’t realize, is that without an operating system, that computer would be a simple shell of possibilities.</p>
                    </div>
                    <div class="down_from">
                        <button class="ios_btn"><img class="ios" src={ios} alt="App Store"/></button>
                        <button class="andr_btn"><img class="android" src={ch}alt="Google Play"/></button>
                    </div>
                </div>
                <div class="wrap_phone">
                    <div class="wrap">
                        <div class="phone">
                            <img class="phone_img" src={Phone} alt="phone"/>
                            <img class="screen_img"  src={screen} alt="phone"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap_ct2">
            <div class="ct2">
                <div class="head_ct2">
                </div>
            </div>
        </div>
</div>
    }
}
export default Home;