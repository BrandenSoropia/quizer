import request from './request';

export default function getCurrentActiveQuiz(params) {
  return request.post('/quizzes/current-quiz', params)
}