Feature: Facebook
  As a user of Facebook
  I want to login with my account
  So that I can manage my account and post comment

@login
Scenario Outline: Login Facebook and post comments
  Given a user open login page
  When login with users "<Email>" and "<PassWord>"
  Then login "<LoginResult>"
  When select news feed and post one comment
  Then view the comment published
  Examples:
      | Email               | PassWord   | LoginResult  |
#      | 18200289607@163.com | 111111     |  failed      |
      | 18200289607@163.com | 2739393ysy | successful   |