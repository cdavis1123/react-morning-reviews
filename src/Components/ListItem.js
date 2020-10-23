import React from 'react';




function ListItem(props){
const {deleteMovie, movie} = props;
    return(
         <div className='List-Item' 
         onDoubleClick= {() => {
             deleteMovie(movie.id);
         }}
             >
        <img className='movie-poster' src={props.movie.posterImg}/>
        <div className="movie-info">
            <p>{props.movie.title}</p>
            <p>{props.movie.year}</p>
      </div>      
    </div>
    );
}




export default ListItem;