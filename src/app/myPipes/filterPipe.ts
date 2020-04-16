import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterPipe'})

export class FilterPipe implements PipeTransform {
    transform(movies: any[], searchStr:string){
        if(!movies) return []
        if(!searchStr) return movies

        searchStr = searchStr.toLowerCase();

        return movies.filter(movie =>{
            return movie.toLowerCase().includes(searchStr);
        })
    }

}