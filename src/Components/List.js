import React, {Component} from 'react';
import ListItem from './ListItem';
import Form from './Form';
import movies from '../data/movies.json';

class List extends Component{
    constructor(){
        super();
        this.state={
            movies: movies
        };
        this.addMovie = this.addMovie.bind(this);
    }


    addMovie(title, year, posterImg){
        const {movies} = this.state
        const id = movies[movies.length -1].id+1;
        const newMovie = {
            id,
            title,
            year,
            posterImg,
        };
        const newArr = [...movies, newMovie];
        this.setState({
            movies: newArr,
        });
    }


deleteMovie = (id) => {
    const{movies} = this.state
    const index = movies.findIndex((movie) => movie.id === id);
    const newArr = [...movies];
    newArr.splice(index,1);
    this.setState({
        movies: newArr,
    });
};


    render(){
        let moviesMap = this.state.movies.map( movie => {
            return <ListItem deleteMovie={this.deleteMovie}  key={movie.id} movie={movie}/>
        });
        return (
        <div className='List'>
            <Form addMovie={this.addMovie}/>
            {moviesMap}
        </div>
        
        )}
}


export default List;