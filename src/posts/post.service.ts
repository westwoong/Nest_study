import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostRequestDto } from './dto/createPost.request.dto';
import { Repository } from 'typeorm';
import { Post } from './Post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category/Category.entity';
import { Transactional } from 'typeorm-transactional';
import { PostToCategory } from './category/PostToCategory.entity';
import { CreatePostResponseDto } from './dto/createPost.response.dto';
import { GetAllPostResponseDto } from './dto/getAllPost.response.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(PostToCategory)
    private readonly postToCategoryRepository: Repository<PostToCategory>,
  ) {}

  @Transactional()
  async create(postData: CreatePostRequestDto) {
    const post = new Post(postData);

    const savedPost = await this.postRepository.save(post);

    const category: Category | null = await this.categoryRepository.findOne({
      where: {
        name: postData.category,
      },
    });

    if (!category) {
      throw new BadRequestException('해당 카테고리는 없습니다');
    } else {
      const savedData = new PostToCategory();
      savedData.post = savedPost;
      savedData.category = category;
      await this.postToCategoryRepository.save(savedData);
    }

    return new CreatePostResponseDto(savedPost);
  }

  async getAllPosts() {
    const getAllPosts = await this.postRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
    return getAllPosts.map((post) => new GetAllPostResponseDto(post));
  }

  getPostsByCategory(categoryId: string) {
    return categoryId;
  }
}
