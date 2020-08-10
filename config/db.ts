import { connect } from 'mongoose';
import config from 'config';

const db = config.get<string>('mongoURI');

const connectDB = async () => {
  try {
    await connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
