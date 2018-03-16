import {
  GraphQLNonNull
} from 'graphql';

import { postType, postInputType } from '../../types/post';
import PostModel from '../../../models/post';

export default {
  type: postType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(postInputType)
    }
  },
  resolve(root, params) {
    const pModel = new PostModel(parms.data);
    const newPost = pModel.save();
    if(!newPost) {
      throw new Error('死 Error adding post');
    }
    return newPost;
  }
}