import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

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
    book,
  ): Promise<Book> {
    return this.bookService.create(book);
  }
}
