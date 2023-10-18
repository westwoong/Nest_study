export class ModifyPostResponseDto {
  title: string;
  content: string;
  updatedAt: Date;

  constructor(responseData: ModifyPostResponseDto) {
    this.title = responseData.title;
    this.content = responseData.content;
    this.updatedAt = responseData.updatedAt;
  }
}