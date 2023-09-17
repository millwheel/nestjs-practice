import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param('id') id:string){
        return `This will return one movie: ${id}`;
    }

    @Post()
    create(){
        return "Create movie"
    }

    @Patch('/:id')
    update(@Param('id') movieId: string){
        return `Update movies: ${movieId}`;
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return `Delete movie: ${movieId}`;
    }

}
