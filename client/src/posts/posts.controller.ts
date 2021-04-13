import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { IPost } from './interface/post.interface';
import { Client, Transport } from '@nestjs/microservices';

@Controller('posts')
export class PostsController {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'posts',
        brokers: ['kafka:9092'],
      },
      consumer: {
        groupId: 'posts-consumer',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('add.new.post');
    this.client.subscribeToResponseOf('get.posts.list');

    await this.client.connect();
  }

  @Post('/')
  appPost(@Body() post: IPost) {
    console.log(post);
    return this.client.send('add.new.post', post);
  }

  @Get('/')
  getList() {
    return this.client.send('get.posts.list', '');
  }
}
