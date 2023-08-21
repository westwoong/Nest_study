import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostRequestDto } from './dto/createPost.request.dto';
import { Repository } from 'typeorm';
import { Post } from './Post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category/Category.entity';
import { Transactional } from 'typeorm-transactional';
import { PostToCategory } from './category/PostToCategory.entity';
import { CreatePostResponseDto } from './dto/createPost.response.dto';
import { GetAllPostResponseDto } from './dto/getAllPost.response.dto';
import { GetPostByCategoryResponseDto } from './dto/getPostByCategory.response.dto';
import { GetPostByIdResponseDto } from './dto/getPostById.response.dto';
import { ModifyPostResponseDto } from './dto/modifyPost.response.dto';
import { Comment } from '../comments/Comment.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(PostToCategory)
    private readonly postToCategoryRepository: Repository<PostToCategory>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
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

  @Transactional()
  async modify(postId: number, postData: CreatePostRequestDto) {
    const getPost = await this.postRepository.findOne({
      where: { id: postId },
    });
    if (!getPost) {
      throw new NotFoundException('해당 게시물 없음');
    }

    getPost.title = postData.title;
    getPost.content = postData.content;

    const savedPost = await this.postRepository.save(getPost);

    return new ModifyPostResponseDto(savedPost);
  }

  @Transactional()
  async delete(postId: number) {
    await this.commentRepository
      .createQueryBuilder('comments')
      .delete()
      .from(Comment)
      .where('post_id = :postId', { postId: postId })
      .execute();

    await this.postToCategoryRepository
      .createQueryBuilder('post_category')
      .delete()
      .from(PostToCategory)
      .where('post_id = :postId', { postId: postId })
      .execute();

    await this.postRepository
      .createQueryBuilder('posts')
      .delete()
      .from(Post)
      .where('id = :id', { id: postId })
      .execute();
  }

  async getAllPosts() {
    const getAllPosts = await this.postRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
    return getAllPosts.map((post) => new GetAllPostResponseDto(post));
  }

  async getPostsByCategory(categoryId: number) {
    const postByCategory = await this.categoryRepository.find({
      where: { id: categoryId },
      relations: {
        postToCategories: {
          post: true,
        },
      },
    });

    const postList = postByCategory[0].postToCategories.map(
      (list) => list.post,
    );

    postList.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    const response = {
      category: postByCategory[0].name,
      postList: postList,
    };

    // console.log(response);
    return new GetPostByCategoryResponseDto(response);
  }

  async getPostById(postId: number) {
    const getPosts = await this.postRepository.find({
      where: { id: postId },
      relations: {
        comments: true,
        postToCategories: {
          category: true,
        },
      },
    });

    const commentsData = getPosts[0].comments.map((comment) => ({
      id: comment.id,
      content: comment.content,
      createdAt: comment.createdAt,
    }));

    const responseData = {
      category: getPosts[0].postToCategories[0].category.name,
      postId: getPosts[0].id,
      title: getPosts[0].title,
      content: getPosts[0].content,
      createdAt: getPosts[0].createdAt,
      comments: commentsData,
    };

    return new GetPostByIdResponseDto(responseData);
  }
}
