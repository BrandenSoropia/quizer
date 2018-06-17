import request from './request';
import camelize from 'camelize';

export default function markQuizComplete(params) {
  return request.post('/quizzes/mark-complete', params);
}
