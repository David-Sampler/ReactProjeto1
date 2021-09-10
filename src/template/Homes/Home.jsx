import './Home.css';
import { Component } from 'react';
import { loadPost } from '../../utils/loadpust'
import { Posts } from '../../componentes/Post/index'
import Button from '../../componentes/button/Button'
import InputText from '../../componentes/input/Index'

class Home extends Component {

  state = {
    post: [],
    allPost: [],
    page: 0,
    postpages: 5,
    searchValue: ""
  }

  async componentDidMount() {
    await this.loadPosts()
  }


  loadPosts = async () => {

    const { page, postpages } = this.state

    const postAndphoto = await loadPost()
    this.setState({
      post: postAndphoto.slice(page, postpages),
      allPost: postAndphoto
    });

  }

  loadMorePost = () => {

    const {
      page,
      postpages,
      allPost,
      post
    } = this.state

    const nextPage = page + postpages
    const nestPosts = allPost.slice(nextPage, nextPage + postpages)
    post.push(...nestPosts)

    this.setState({
      post, page: nextPage
    })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      searchValue: value
    })
  }

  render() {

    const { post, page, postpages, allPost, searchValue } = this.state

    const noMorePosts = page + postpages >= allPost.length

    const filterPost = !!searchValue ? post.filter((post) => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    })
      : post

    return (
      <section className='container'>

        {!!searchValue && (
          <h1>Loacalizando:{searchValue}</h1>
        )}
                
        <br />
        
        <InputText handleChange={this.handleChange} />

        {filterPost.length > 0 && (
          <Posts posts={filterPost} value={searchValue} />
        )}
        {filterPost.length=== 0 && (
            <p>Não existe Post</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              detalhe={this.loadMorePost} text='Paginas' />
          )}

        </div>

      </section>

    );
  }
}

export default Home;
