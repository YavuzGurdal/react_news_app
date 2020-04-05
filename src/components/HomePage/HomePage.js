import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import NewsCard from '../NewsCard/NewsCard';
import axios from 'axios';
// sabit div kısmını linkle baska sayfada acmayı dene

class HomePage extends Component {
    // {Your API key is: "4120e32fdd1049bb95ff351e584be75d"}
    state = { // moc data koymamiz lazim, yoksa app problem oluyor. problemi onlemek icin if kosulu yazilabilir.
        data: [
            {
                urlToImage: null, // "https://www.nj.com/resizer/ewOeGU5IVwJgJ0_NXptqTfUN1M8=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/OEFHMGVTFNCNVBXNJQADDHCSRM.jpg",
                title: null,//"Test 2",
                description: null//"Test 2 content"
            }
        ],
        activeNewIndex: 0, // bunu componentDidUpdate'te kullandik
        newsDetail: null
    }

    componentDidMount() { // internetten data alirken bunu kullaniyoruz.Bu kisim render dan sonra calisiyor ve
        // render'i tekrar calistiriyor.

        const urlBase = 'https://newsapi.org/v2/top-headlines?'
        const urlCountry = this.props.country !== null ? `country=${this.props.country}&` : 'country=us&'
        const category = this.props.category !== null ? `category=${this.props.category}&` : 'category=general&'
        const urlApi = 'apiKey=4120e32fdd1049bb95ff351e584be75d'

        const url = urlBase + urlCountry + category + urlApi;


        /*
        const urlBase = 'https://newsapi.org/v2/everything?'
        const urlSearch = this.props.search !== null ? `q=${this.props.search}&` : 'q=corona&'
        //const urlLanguage = this.props.country !== null ? `language=${this.props.country}&` : 'language=en&'
        const urlLanguage = this.props.country === 'us' ? 'language=en&' :  // abd ulke kodu ve dil kodu farkli oldugu icin bunu yazdim
        this.props.country !== null ? `language=${this.props.country}&`: ''
       
        const urlApi = 'apiKey=4120e32fdd1049bb95ff351e584be75d'

        const url = urlBase + urlSearch + urlLanguage + urlApi;
        */

        // yukaridaki sekilde calisiyor.
        // Sorunlar
        // 1-abd ulke kodu us, dil kodu en (cozuldu)
        // 2-kelimeleri yanlış yazınca aramalarda problem cikabiliyor.  
        // 3-search kısmında tusa yada enter'a basınca yani ordan bişey gelince everything olan url calissin istiyorum ama kosulu yazamadim

        axios.get(url)
            .then(result => {
                console.log(result)
                this.setState({ data: result.data.articles })
            })
            .catch(err => console.log(err));
    }


    componentDidUpdate() {
        console.log('componentDidUpdate calisti')
    }


    render() {

        console.log('render calisti')

        const updateActiveNewIndex = (index) => { // bu bir function. const koymamin sebebi render icinde yazmis olmam
            this.setState({
                activeNewIndex: index
            })
        }

        const news = this.state.data.map((item, i) => {
            return ( // bu return'u map()'den dolayi yazdim
                <NewsCard
                    key={i}
                    {...item}

                    //******** propsla class veya style gonderebiliriz. asagidaki gibi ********/
                    newWidth="25%" // bunun ismini propsdaki ile ayni yazdim.
                    newHeight='570px'
                    newTextHeight='150px'
                    // display= 'block'

                    click={() => updateActiveNewIndex(i)}
                />
            );
        });
        //console.log(this.state.activeNewIndex);

        const i = this.state.activeNewIndex; // bunu asagidaki NewsCard'in icindekileri kisa olarak i yazmak icin yazdik

        const visitUrlHandler = () => { // const koymamin sebebi render icinde yazmis olmam
            console.log(this.state.data[i].url)
            window.location.href = this.state.data[i].url; // haberin detay sayfasına gitmek icin
        }

        return (

            <div style={{ marginTop: "65px" }} >
                <div style={{ width: '70%', float: "left" }} >
                    <CardGroup >
                        {news}

                        {/*<NewsCard />*/}
                    </CardGroup>
                </div>

                <div style={{ width: '30%', float: "left", position: 'fixed', top: '65px', right: 0 }} >
                    <div>
                    
                        <NewsCard
                            click={visitUrlHandler} // haberin linkini almak icin
                            //******** propsla class veya style gonderebiliriz. asagidaki gibi ********/
                            newWidth="100%" // bunu propsla gondermemin sebebi ekranda sagdaki tek cardın width'ini 100% yapmak icin
                            newHeight='570px'
                            newTextHeight='204px'
                            //display='none' // olusacak card'ların display durumlarını propsla gonderiyorum. 
                            // bunu sagdaki buyuk divin icindeki buttonu yok etmek icin kullandim
                            urlToImage={this.state.data[i].urlToImage}
                            title={this.state.data[i].title}
                            description={this.state.data[i].description}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;