function getScoreByVisitor(visitors) {
  let score = {};
  for (let i = 0; i < visitors.length; i++){
    if(visitors[i] in score == false){
      score[visitors[i]] = 1;
    }
    else{
      score[visitors[i]] += 1;
    }
  }
  return score;
}

function getUserFriendList(user, friends) {
  let friendList = [];
  for (let i = 0; i < friends.length; i++){    
    if (friends[i][0] == user || friends[i][1] == user){
      friendList.push(friends[i][0] == user ? friends[i][1] : friends[i][0]);
    }
  }
  return friendList;
}

function getScoreByFriends(friend, userFriends, score) {
  let i;
  if (userFriends.includes(friend[0]) || userFriends.includes(friend[1]))
    i = userFriends.includes(friend[0]) ? 1 : 0;
  else 
    return score;

  if (friend[i] in score == false)
    score[friend[i]] = 10;
  else if (friend[i] in score)
    score[friend[i]] += 10;
  
  return score;
}

function problem7(user, friends, visitors) {
  var answer;
  let friendScore = {};
  let userFriends = []

  friendScore = getScoreByVisitor(visitors);
  userFriends = getUserFriendList(user, friends);
  for (let i = 0; i < friends.length; i++){
    friendScore = getScoreByFriends(friends[i], userFriends, friendScore)
  }

  return answer;
}

module.exports = problem7;
