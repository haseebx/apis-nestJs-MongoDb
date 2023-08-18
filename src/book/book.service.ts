import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}
  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find();
    return books;
  }
  async create(book: Book): Promise<Book> {
    const res = await this.bookModel.create(book);
    return res;
  }
  async findBookbyId(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async updatebyId(id: string, book: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }

  async deletebyId(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndDelete(id);
  }
}
