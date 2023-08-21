export class CreatePostResponseDto {
  title: string;
  content: string;
  createdAt: Date;

  constructor(responseDate: CreatePostResponseDto) {
    this.title = responseDate.title;
    this.content = responseDate.content;
    this.createdAt = responseDate.createdAt;
  }
}
