import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBook(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post('newbook')
  async createBook(
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.create(book);
  }
  @Get('getbook/:id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.findBookbyId(id);
  }
}
