import React, {Component} from 'react'
import './News.css';
class News extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: {}
    }
  }
  download = () => {
    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2018-08-03&' +
          'sortBy=popularity&' +
          'apiKey=91ca19618fe945d1a3ef5b9fb55aa15e';

    var req = new Request(url);

    fetch(req)
        .then(function(response) {
          // console.log(response.json());
          return response.json()
        }).then(data => {
          console.log('data', data);
          this.setState({articles: data})
      });
      }

  componentDidMount(){
    this.download();
  }
  render () {
    if (this.state.articles.articles === undefined) return null
    // if (this.state.articles && this.state.articles.articles)
      console.log('state', this.state.articles.articles[0]);
      // const articleData = this.state.articles.articles[0];
      const articleArray = this.state.articles.articles.map((articleData, index) => {

        return(
          <div key={index} className="body">
             <div className="title">{articleData.title}</div>
             <div className="author">{articleData.author}</div>
            <div className="description">{articleData.description}</div>
            <div className="datePublish">{articleData.publishedAt}</div>
            <div className="image"><img src={articleData.urlToImage}/></div>
            <div className="source">{articleData.source.name}</div>
            <div className="articleUrl"><a href="">{articleData.url}</a></div>
         </div>
          )
      });
    return(
      <div> 

          <br/>
          {articleArray}
      </div>
      )
  }
}

export default News