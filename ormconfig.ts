import { User } from 'src/entites/user.entity';
import { Topic } from 'src/entites/topic.entity';
import { Comment } from 'src/entites/comment.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5432,
  // normally should not set password in here
  username: 'postgres',
  password: 'postgres',
  entities: [User, Topic, Comment],
  //   in production has to set to false
  synchronize: true,
};

export default config;
